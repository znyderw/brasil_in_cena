/* 
  Brasil in Cena - Mapa Regional D3.js + GeoJSON Real do IBGE
*/

const REGIAO_SIGLAS = {
    norte: ["AC", "AP", "AM", "PA", "RO", "RR", "TO"],
    nordeste: ["AL", "BA", "CE", "MA", "PB", "PE", "PI", "RN", "SE"],
    centro_oeste: ["DF", "GO", "MS", "MT"],
    'centro-oeste': ["DF", "GO", "MS", "MT"],
    sudeste: ["ES", "MG", "RJ", "SP"],
    sul: ["PR", "RS", "SC"]
};

const SIGLA_TO_CANONICAL_NAME = {
    AC: "Acre",
    AL: "Alagoas",
    AP: "Amapá",
    AM: "Amazonas",
    BA: "Bahia",
    CE: "Ceará",
    DF: "Distrito Federal",
    ES: "Espírito Santo",
    GO: "Goiás",
    MA: "Maranhão",
    MT: "Mato Grosso",
    MS: "Mato Grosso do Sul",
    MG: "Minas Gerais",
    PA: "Pará",
    PB: "Paraíba",
    PR: "Paraná",
    PE: "Pernambuco",
    PI: "Piauí",
    RJ: "Rio de Janeiro",
    RN: "Rio Grande do Norte",
    RS: "Rio Grande do Sul",
    RO: "Rondônia",
    RR: "Roraima",
    SC: "Santa Catarina",
    SP: "São Paulo",
    SE: "Sergipe",
    TO: "Tocantins"
};

let geoDataCache = null;

async function getBrazilGeoJSON() {
    if (geoDataCache) return geoDataCache;

    // 1. Tentar caminho local relativo ../data/
    try {
        const res = await fetch('../data/brazil-states.geojson');
        if (res.ok) {
            geoDataCache = await res.json();
            return geoDataCache;
        }
    } catch (e) {}

    // 2. Tentar caminho local data/
    try {
        const res = await fetch('data/brazil-states.geojson');
        if (res.ok) {
            geoDataCache = await res.json();
            return geoDataCache;
        }
    } catch (e) {}

    // 3. Fallback CDN Github
    try {
        const res = await fetch('https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson');
        if (res.ok) {
            geoDataCache = await res.json();
            return geoDataCache;
        }
    } catch (e) {}

    return null;
}

async function renderRealD3RegionMap(regionId, containerId, onStateSelect) {
    const container = document.getElementById(containerId);
    if (!container || typeof d3 === 'undefined') return;

    container.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:center;height:100%;color:#FFFFFF;font-family:var(--font-mono);font-size:0.75rem;letter-spacing:0.1em;text-transform:uppercase;">
            Carregando mapa...
        </div>
    `;

    try {
        const geoData = await getBrazilGeoJSON();
        if (!geoData || !geoData.features) {
            container.innerHTML = `<div style="color:#FFF;padding:2rem;font-family:var(--font-mono);font-size:0.75rem;">Erro ao carregar dados cartográficos.</div>`;
            return;
        }

        container.innerHTML = '';

        const normalizedRegion = regionId.toLowerCase().replace('-', '_');
        const targetSiglas = REGIAO_SIGLAS[normalizedRegion] || REGIAO_SIGLAS[regionId] || [];

        // Filtrar feições exatas da região por sigla (sem problemas com acentuação)
        const regionFeatures = geoData.features.filter(f => {
            const s = (f.properties && f.properties.sigla) ? f.properties.sigla.toUpperCase() : '';
            return targetSiglas.includes(s);
        });

        if (regionFeatures.length === 0) {
            container.innerHTML = `<div style="color:#FFF;padding:2rem;font-family:var(--font-mono);font-size:0.75rem;">Nenhum estado encontrado para ${regionId}.</div>`;
            return;
        }

        const featureCollection = { type: 'FeatureCollection', features: regionFeatures };

        const width = 640;
        const height = 480;

        // Projeção Cartográfica Mercator ajustada com margens seguras
        const projection = d3.geoMercator().fitExtent([[35, 35], [width - 35, height - 35]], featureCollection);
        const pathGenerator = d3.geoPath().projection(projection);

        const svg = d3.select(`#${containerId}`)
            .append('svg')
            .attr('viewBox', `0 0 ${width} ${height}`)
            .attr('preserveAspectRatio', 'xMidYMid meet')
            .style('width', '100%')
            .style('height', '100%')
            .attr('class', 'd3-real-map-svg');

        const g = svg.append('g');

        // Função centralizada para selecionar um estado (sincroniza SVG, Rótulos, Barra Rápida e Ficha)
        let quickButtons = [];

        function selectStateBySigla(rawSigla) {
            const sigla = (rawSigla || '').toUpperCase();
            const feature = regionFeatures.find(f => ((f.properties && f.properties.sigla) || '').toUpperCase() === sigla);
            if (!feature) return;

            paths.classed('active', d => ((d.properties && d.properties.sigla) || '').toUpperCase() === sigla)
                 .attr('aria-pressed', d => ((d.properties && d.properties.sigla) || '').toUpperCase() === sigla ? 'true' : 'false');

            paths.filter(d => ((d.properties && d.properties.sigla) || '').toUpperCase() === sigla).raise();
            if (labels) {
                labels.classed('active-label', l => ((l.properties && l.properties.sigla) || '').toUpperCase() === sigla);
                labels.raise();
            }

            quickButtons.forEach(btn => {
                const isMatch = btn.getAttribute('data-sigla') === sigla;
                btn.classList.toggle('is-active', isMatch);
                btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
            });

            const canonicalName = SIGLA_TO_CANONICAL_NAME[sigla] || feature.properties.name;
            if (onStateSelect) {
                onStateSelect(canonicalName, sigla);
            }
        }

        // Desenhar Estados Reais com suporte a toque, mouse e teclado
        const paths = g.selectAll('path')
            .data(regionFeatures)
            .enter()
            .append('path')
            .attr('d', pathGenerator)
            .attr('class', (d, i) => i === 0 ? 'd3-state-path active' : 'd3-state-path')
            .attr('data-state-sigla', d => d.properties.sigla)
            .attr('data-state-name', d => SIGLA_TO_CANONICAL_NAME[d.properties.sigla] || d.properties.name)
            .attr('tabindex', '0')
            .attr('role', 'button')
            .attr('aria-label', d => {
                const sigla = (d.properties.sigla || '').toUpperCase();
                const name = SIGLA_TO_CANONICAL_NAME[sigla] || d.properties.name;
                return `Selecionar estado: ${name} (${sigla})`;
            })
            .attr('aria-pressed', (d, i) => i === 0 ? 'true' : 'false')
            .on('mouseenter', function () {
                d3.select(this).raise();
                if (labels) labels.raise();
            })
            .on('click', function (event, d) {
                selectStateBySigla(d.properties.sigla);
            })
            .on('keydown', function (event, d) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    selectStateBySigla(d.properties.sigla);
                }
            });

        // Adicionar Rótulos das Siglas nos Centróides Reais
        const labels = g.selectAll('text')
            .data(regionFeatures)
            .enter()
            .append('text')
            .attr('class', (d, i) => i === 0 ? 'd3-state-label active-label' : 'd3-state-label')
            .attr('transform', d => {
                const centroid = pathGenerator.centroid(d);
                return `translate(${centroid[0]}, ${centroid[1]})`;
            })
            .attr('dy', '0.35em')
            .attr('text-anchor', 'middle')
            .text(d => d.properties.sigla || '')
            .style('pointer-events', 'none');

        // Criar barra de seleção rápida de estados abaixo do mapa (ideal para celular e estados pequenos como DF/SE/AL/RJ)
        const mapBox = container.closest('.regional-map-canvas-box') || container.parentElement;
        if (mapBox) {
            const existingBar = mapBox.querySelector('.state-quick-selector');
            if (existingBar) existingBar.remove();

            const quickBar = document.createElement('div');
            quickBar.className = 'state-quick-selector';
            quickBar.setAttribute('role', 'group');
            quickBar.setAttribute('aria-label', 'Seleção rápida de estados da região');

            const labelEl = document.createElement('span');
            labelEl.className = 'state-quick-selector-label';
            labelEl.textContent = 'Escolha um estado:';
            quickBar.appendChild(labelEl);

            const listEl = document.createElement('div');
            listEl.className = 'state-quick-selector-list';

            regionFeatures.forEach((f, idx) => {
                const sigla = (f.properties.sigla || '').toUpperCase();
                const name = SIGLA_TO_CANONICAL_NAME[sigla] || f.properties.name;
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = idx === 0 ? 'state-quick-btn is-active' : 'state-quick-btn';
                btn.setAttribute('data-sigla', sigla);
                btn.setAttribute('aria-pressed', idx === 0 ? 'true' : 'false');
                btn.innerHTML = `<span class="state-quick-sigla">${sigla}</span><span>${name}</span>`;
                btn.addEventListener('click', () => {
                    selectStateBySigla(sigla);
                });
                listEl.appendChild(btn);
                quickButtons.push(btn);
            });

            quickBar.appendChild(listEl);
            mapBox.appendChild(quickBar);
        }

        // Selecionar primeiro estado por padrão
        if (regionFeatures.length > 0) {
            const firstSigla = (regionFeatures[0].properties.sigla || '').toUpperCase();
            selectStateBySigla(firstSigla);
        }

    } catch (err) {
        console.error("Erro ao carregar mapa D3 real:", err);
        container.innerHTML = `<div style="color:#FFF;padding:2rem;font-family:var(--font-mono);font-size:0.75rem;">Erro ao carregar o mapa.</div>`;
    }
}

/**
 * Inicialização Inteligente & Sincronizada da Seção de Cultura (Sticky Exhibition)
 * - Sincronismo 100% preciso entre imagem e texto no scroll via cálculo do centro do viewport (focal line).
 * - Elimina pulo/salto de imagens causado por triggers concorrentes de IntersectionObserver.
 * - Suporta troca imediata clicando no título do ensaio OU nas abas/pills de títulos superiores.
 * - Transição suave de fotografias com pré-carregamento e crossfade.
 * - Em telas móveis/tablets (<= 1024px), injeta miniatura contextual em cada card para não perder a referência visual.
 */
function initStickyCultureExhibition({
    sectionId = 'cultura',
    imgId = null,
    hudTitleId = null
} = {}) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const img = imgId ? document.getElementById(imgId) : section.querySelector('.exhibition-image');
    const hudTitle = hudTitleId ? document.getElementById(hudTitleId) : section.querySelector('.exhibition-hud-title');
    const blocks = Array.from(section.querySelectorAll('.exhibition-item-block'));
    if (!blocks.length) return;

    const navButtons = Array.from(section.querySelectorAll('.exhibition-nav-btn'));

    // Injetar imagem contextual mobile e estruturar leitura em 2 camadas (Nível 1: síntese de 1 frase; Nível 2/3: gaveta histórica/ritual)
    blocks.forEach((block) => {
        const imgSrc = block.dataset.img;
        if (imgSrc && !block.querySelector('.exhibition-mobile-thumb')) {
            const titleEl = block.querySelector('.exhibition-item-title');
            const titleText = titleEl ? titleEl.innerText.replace(/clique.*/i, '').trim() : 'Manifestação Cultural';
            const thumbWrapper = document.createElement('div');
            thumbWrapper.className = 'exhibition-mobile-thumb';
            thumbWrapper.innerHTML = `<img src="${imgSrc}" alt="${titleText}" loading="lazy">`;
            if (titleEl && titleEl.parentNode === block) {
                titleEl.insertAdjacentElement('afterend', thumbWrapper);
            } else {
                block.prepend(thumbWrapper);
            }
        }

        const textEl = block.querySelector('.exhibition-item-text');
        if (textEl && !block.querySelector('.editorial-more-drawer')) {
            const split = splitFirstSentence(textEl.textContent);
            if (split) {
                textEl.textContent = split.lead;
                const drawer = document.createElement('details');
                drawer.className = 'editorial-more-drawer';
                drawer.innerHTML = `
                    <summary>Conhecer a história e tradição</summary>
                    <div class="editorial-more-body">${split.rest}</div>
                `;
                textEl.insertAdjacentElement('afterend', drawer);
            }
        }
    });

    let activeIndex = -1;
    let isManualScrolling = false;
    let manualScrollTimer = null;
    let currentLoadedSrc = '';

    function activateIndex(idx, smoothScroll = false) {
        if (idx < 0 || idx >= blocks.length) return;
        if (idx === activeIndex && !smoothScroll) return;

        activeIndex = idx;
        const targetBlock = blocks[idx];

        // 1. Atualizar classes ativas dos blocos de texto
        blocks.forEach((b, i) => {
            const isTarget = i === idx;
            b.classList.toggle('active', isTarget);
            b.classList.toggle('is-active', isTarget);
        });

        // 2. Atualizar abas/pills de títulos caso existam
        navButtons.forEach((btn, i) => {
            const isTarget = i === idx;
            btn.classList.toggle('active', isTarget);
            btn.classList.toggle('is-active', isTarget);
        });

        // 3. Atualizar HUD de título da fotografia
        const titleEl = targetBlock.querySelector('.exhibition-item-title');
        const titleText = titleEl ? titleEl.innerText.replace(/clique.*/i, '').trim() : '';
        if (hudTitle && titleText) {
            hudTitle.textContent = titleText;
        }

        // 4. Troca suave e sem atraso/pulos de imagem
        const newSrc = targetBlock.dataset.img;
        if (img && newSrc && newSrc !== currentLoadedSrc) {
            currentLoadedSrc = newSrc;
            img.style.opacity = '0.35';
            img.style.transform = 'scale(0.985)';

            const preloader = new Image();
            preloader.onload = () => {
                img.src = newSrc;
                if (titleText) img.alt = titleText;
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
            };
            preloader.onerror = () => {
                img.src = newSrc;
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
            };
            preloader.src = newSrc;
        }

        // 5. Scroll suave se acionado por clique
        if (smoothScroll) {
            isManualScrolling = true;
            clearTimeout(manualScrollTimer);

            targetBlock.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            // Evita que o scroll em movimento acione outros blocos acidentalmente
            manualScrollTimer = setTimeout(() => {
                isManualScrolling = false;
            }, 850);
        }
    }

    // Configurar interatividade de clique nos blocos e nos títulos
    blocks.forEach((block, idx) => {
        block.style.cursor = 'pointer';

        // Clique no bloco inteiro ou título troca o texto e a imagem
        block.addEventListener('click', (e) => {
            if (e.target.closest('button, a, summary, details')) return;
            activateIndex(idx, true);
        });

        const titleEl = block.querySelector('.exhibition-item-title');
        if (titleEl) {
            titleEl.setAttribute('role', 'button');
            titleEl.setAttribute('tabindex', '0');
            titleEl.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    activateIndex(idx, true);
                }
            });
        }
    });

    // Configurar cliques nas abas/botões de título
    navButtons.forEach((btn, idx) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            activateIndex(idx, true);
        });
    });

    // Algoritmo de Focal Line / Centro do Viewport para scroll estável e sem pulos
    let scrollScheduled = false;
    function syncOnScroll() {
        if (isManualScrolling) return;

        const secRect = section.getBoundingClientRect();
        // Não processar se a seção inteira estiver fora de visão
        if (secRect.bottom < 100 || secRect.top > window.innerHeight - 100) return;

        // O ponto focal de leitura na tela (45% da altura)
        const focalY = window.innerHeight * 0.45;
        let closestIdx = -1;
        let minDistance = Infinity;

        blocks.forEach((b, idx) => {
            const r = b.getBoundingClientRect();
            const bCenter = r.top + r.height / 2;
            const dist = Math.abs(bCenter - focalY);

            // Bloco deve estar ao menos visível na tela
            if (r.bottom > 60 && r.top < window.innerHeight - 60) {
                if (dist < minDistance) {
                    minDistance = dist;
                    closestIdx = idx;
                }
            }
        });

        if (closestIdx !== -1 && closestIdx !== activeIndex) {
            activateIndex(closestIdx, false);
        }
    }

    window.addEventListener('scroll', () => {
        if (!scrollScheduled) {
            window.requestAnimationFrame(() => {
                syncOnScroll();
                scrollScheduled = false;
            });
            scrollScheduled = true;
        }
    }, { passive: true });

    // Inicializar no primeiro bloco
    activateIndex(0, false);
}

/**
 * Utilitário para separar a primeira frase de síntese (Nível 1) do aprofundamento (Nível 2/3)
 */
function splitFirstSentence(rawText) {
    const text = (rawText || '').trim().replace(/\s+/g, ' ');
    const match = text.match(/^(.{35,}?\.)\s+(.+)$/);
    if (!match) return null;
    return {
        lead: match[1].trim(),
        rest: match[2].trim()
    };
}

/**
 * Organiza o Painel de Detalhes do Estado (#mapa-estados) em Camadas Interativas (Níveis 1 e 2)
 * Evita exibir os 3 blocos longos simultaneamente; mostra Bioma por padrão e permite alternar ou ver tudo.
 */
function initStatePanelLayers() {
    const stateCard = document.querySelector('.state-detail-panel, .state-editorial-card');
    if (!stateCard) return;

    const detailsList = stateCard.querySelector('.dossier-blocks-grid, .state-card-details-list');
    if (!detailsList || stateCard.querySelector('.state-layer-tabs')) return;

    const blocks = Array.from(detailsList.querySelectorAll('.dossier-info-block, .state-detail-block'));
    if (blocks.length < 2) return;

    const layerDefs = [
        { key: '0', label: '01 · Bioma & Geografia', nextLabel: 'Explorar Cultura & Festas →' },
        { key: '1', label: '02 · Cultura & Festas', nextLabel: 'Explorar Sabores & Cozinha →' },
        { key: '2', label: '03 · Culinária', nextLabel: 'Ver ficha completa do estado →' }
    ];

    const tabsBar = document.createElement('div');
    tabsBar.className = 'state-layer-tabs';
    tabsBar.setAttribute('role', 'tablist');
    tabsBar.setAttribute('aria-label', 'Dimensões do estado selecionado');

    const tabButtons = [];

    layerDefs.forEach((def, idx) => {
        if (!blocks[idx]) return;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = idx === 0 ? 'state-layer-tab is-active' : 'state-layer-tab';
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
        btn.dataset.layer = String(idx);
        btn.textContent = def.label;
        tabsBar.appendChild(btn);
        tabButtons.push(btn);
    });

    const allBtn = document.createElement('button');
    allBtn.type = 'button';
    allBtn.className = 'state-layer-tab state-layer-tab-all';
    allBtn.setAttribute('role', 'tab');
    allBtn.setAttribute('aria-selected', 'false');
    allBtn.dataset.layer = 'all';
    allBtn.textContent = 'Ver tudo';
    tabsBar.appendChild(allBtn);
    tabButtons.push(allBtn);

    detailsList.parentNode.insertBefore(tabsBar, detailsList);

    const hintRow = document.createElement('div');
    hintRow.className = 'state-layer-next-hint';
    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'state-layer-next-btn';
    hintRow.appendChild(nextBtn);
    detailsList.insertAdjacentElement('afterend', hintRow);

    let currentLayer = '0';

    function setLayer(layerKey) {
        currentLayer = layerKey;
        tabButtons.forEach(btn => {
            const active = btn.dataset.layer === layerKey;
            btn.classList.toggle('is-active', active);
            btn.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        blocks.forEach((b, idx) => {
            const visible = layerKey === 'all' || String(idx) === layerKey;
            b.classList.toggle('is-layer-hidden', !visible);
        });

        if (layerKey === 'all') {
            nextBtn.textContent = '← Voltar para visão resumida (Bioma)';
        } else {
            const idx = parseInt(layerKey, 10);
            nextBtn.textContent = (layerDefs[idx] && layerDefs[idx].nextLabel) || 'Ver ficha completa';
        }
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setLayer(btn.dataset.layer);
        });
    });

    nextBtn.addEventListener('click', () => {
        if (currentLayer === '0') setLayer('1');
        else if (currentLayer === '1') setLayer('2');
        else if (currentLayer === '2') setLayer('all');
        else setLayer('0');
    });

    setLayer('0');
}

const REGIONAL_DISH_EXTRA_NOTES = {
    'Tacacá na Cuia': {
        lead: 'Caldo indígena fervente de tucupi amarelo com goma de mandioca, jambu e camarão seco.',
        note: 'Servido tradicionalmente ao entardecer em cuias de porongo laqueadas com cumaru, preserva a biotecnologia ancestral de fermentação da mandioca-brava.'
    },
    'Maniçoba do Pará': {
        lead: 'A "feijoada amazônica" de folhas de maniva moídas e cozidas por sete dias com carnes defumadas.',
        note: 'Prato central do almoço ritual do Círio de Nazaré, o longo cozimento elimina naturalmente o ácido cianídrico da mandioca-brava antes de receber paio, charque e toucinho.'
    },
    'Açaí com Peixe Frito': {
        lead: 'Polpa espessa de açaí batido na hora, servida como refeição salgada com peixe frito e farinha.',
        note: 'Na bacia amazônica, o açaí é alimento básico diário colhido em manejo ribeirinho nas várzeas e consumido puro, sem açúcar, com farinha d’água ou de tapioca.'
    },
    'Creme de Cupuaçu': {
        lead: 'Sobremesa gelada e aveludada feita com a polpa ácida e perfumada do cupuaçu nativo.',
        note: 'Parente botânico próximo do cacau amazônico, o cupuaçuzeiro fornece polpa aromática rica em vitaminas e amêndoas usadas na produção de cupulate.'
    },
    'Acarajé Tradicional': {
        note: 'Reconhecido como Patrimônio Cultural Imaterial pelo IPHAN, o ofício das Baianas de Acarajé tem raízes nas oferendas sagradas aos orixás Iansã e Xangô.'
    },
    'Baião de Dois com Coalho': {
        lead: 'Encontro clássico do sertão entre arroz da terra, feijão-de-corda, carne de sol e queijo coalho.',
        note: 'Símbolo da inteligência alimentar sertaneja, une leguminosa e cereal no mesmo caldo com manteiga de garrafa e coentro fresco para máxima sustança.'
    },
    'Bolo de Rolo Pernambucano': {
        note: 'Patrimônio Imaterial de Pernambuco, deriva da adaptação colonial do colchão-de-noiva português com a goiabada artesanal dos engenhos da Zona da Mata.'
    },
    'Cajuzinho e Doçaria do Sertão': {
        lead: 'Doçaria tradicional moldada com castanha de caju moída, amendoim e rapadura do semiárido.',
        note: 'Socada lentamente em pilão, valoriza a safra do cajueiro nativo do Nordeste e as técnicas familiares de conservação de doces de tacho.'
    },
    'Arroz com Pequi Aromático': {
        note: 'Colhido entre novembro e janeiro pelas comunidades agroextrativistas do Cerrado, o pequi perfuma as cozinhas de Goiás, Mato Grosso e Tocantins.'
    },
    'Sopa Paraguaia Tradicional': {
        note: 'Apesar do nome de "sopa", é um bolo salgado denso assado em forno a lenha ou brasa, fundamental nas comitivas pantaneiras e mesas sul-mato-grossenses.'
    },
    'Doce de Leite Talhado': {
        lead: 'Doce de tacho de cobre preparado com leite talhado no limão galego, açúcar e canela.',
        note: 'Típico das fazendas históricas de Goiás e Mato Grosso, preserva a tradição doceira das antigas rotas coloniais do ouro e das festas de santos.'
    },
    'Mojica e Peixes Pantaneiros': {
        lead: 'Ensopado pantaneiro de pintado ou pacu fresco engrossado no caldo de mandioca e urucum.',
        note: 'Do tupi "mojika" (fazer caldo espesso com mandioca), representa a cozinha ribeirinha moldada pelo pulso das águas da bacia do Rio Paraguai.'
    },
    'Pão de Queijo Canastra': {
        note: 'Nascido nas fazendas mineiras do século XVIII, substituiu o trigo europeu pelo polvilho de mandioca somado aos queijos curados de leite cru.'
    },
    'Feijoada Carioca Tradicional': {
        note: 'Rito gastronômico coletivo das rodas de samba e dos sábados brasileiros, articula técnicas luso-afro-brasileiras de cozimento lento.'
    },
    'Brigadeiro Tradicional': {
        note: 'Popularizado nas campanhas políticas de 1945 em São Paulo e no Rio de Janeiro, tornou-se o símbolo indispensável das celebrações familiares no país.'
    },
    'Feijão Tropeiro e Caipira': {
        lead: 'Mistura substanciosa de feijão, farinha de milho, torresmo e ovos nascida no lombo das tropas.',
        note: 'Criado pelos condutores de mulas que cruzavam os caminhos reais entre São Paulo, Minas Gerais e Goiás nos séculos XVIII e XIX.'
    },
    'Arroz de Carreteiro': {
        note: 'Preparado originalmente em panela de ferro única sobre o fogo de chão nos pousos da campanha gaúcha, aproveitando a conservação da carne salgada ao vento.'
    },
    'Cuca Tradicional com Farofa': {
        lead: 'Pão colonial de massa fermentada coberto com frutas da estação e farofa amanteigada crocante.',
        note: 'Herança da imigração alemã (Streuselkuchen) reinventada nas colônias do Sul com banana, uva Isabel, maçã e canela.'
    },
    'Sagu de Vinho com Creme': {
        lead: 'Pérolas de mandioca cozidas em vinho tinto colonial especiado e servidas com creme inglês.',
        note: 'Fusão histórica entre a fécula de mandioca indígena sul-americana e a vitivinicultura trazida pelos imigrantes italianos à Serra Gaúcha a partir de 1875.'
    },
    'Pastel de Berbigão': {
        lead: 'Pastel litorâneo recheado com berbigão nativo refogado em alho-poró, tomate e coentro.',
        note: 'Ícone da cultura açoriana-manezinha na Ilha de Santa Catarina, feito com o molusco coletado artesanalmente nos baixios das baías Norte e Sul.'
    }
};

/**
 * Estrutura conteúdo progressivo (Níveis 1, 2 e 3) em Gastronomia, Território e Dossiê Ambiental
 */
function initRegionalProgressiveContent() {
    // 1. Gastronomia Regional: Nível 1 = 1 frase essencial; Nível 2 = Ingredientes, preparo & história (100% do texto preservado)
    document.querySelectorAll('.dish-editorial-card').forEach(card => {
        const snippet = card.querySelector('.dish-card-snippet');
        if (!snippet || card.querySelector('.dish-note-drawer')) return;

        const titleEl = card.querySelector('.dish-card-title');
        const dishTitle = titleEl ? titleEl.textContent.trim() : '';
        const dishConfig = REGIONAL_DISH_EXTRA_NOTES[dishTitle] || {};
        const originalText = snippet.textContent.trim().replace(/\s+/g, ' ');
        const split = splitFirstSentence(originalText);

        const drawer = document.createElement('details');
        drawer.className = 'dish-note-drawer';

        if (split) {
            snippet.textContent = split.lead;
            const detailText = dishConfig.note ? `${split.rest} ${dishConfig.note}` : split.rest;
            drawer.innerHTML = `
                <summary>Ingredientes, preparo & história</summary>
                <div class="dish-note-body">${detailText}</div>
            `;
            snippet.insertAdjacentElement('afterend', drawer);
        } else if (dishConfig.lead) {
            snippet.textContent = dishConfig.lead;
            const detailText = dishConfig.note ? `${originalText} ${dishConfig.note}` : originalText;
            drawer.innerHTML = `
                <summary>Ingredientes, preparo & história</summary>
                <div class="dish-note-body">${detailText}</div>
            `;
            snippet.insertAdjacentElement('afterend', drawer);
        }
    });

    // 2. Território & Geografia: Nível 1 = Pullquote + 1 frase de síntese; Nível 2/3 = Caderno de Campo expansível
    document.querySelectorAll('.territory-field-notes').forEach(notesContainer => {
        if (notesContainer.querySelector('.territory-notes-drawer')) return;
        const paragraphs = Array.from(notesContainer.querySelectorAll('p'));
        if (!paragraphs.length) return;

        const firstP = paragraphs[0];
        const split = splitFirstSentence(firstP.textContent);
        const extraParagraphsHtml = paragraphs.slice(1).map(p => `<p>${p.innerHTML}</p>`).join('');

        if (split || extraParagraphsHtml) {
            const drawer = document.createElement('details');
            drawer.className = 'territory-notes-drawer';

            let bodyHtml = '';
            if (split) {
                firstP.textContent = split.lead;
                bodyHtml += `<p>${split.rest}</p>`;
            }
            bodyHtml += extraParagraphsHtml;

            paragraphs.slice(1).forEach(p => p.remove());

            drawer.innerHTML = `
                <summary>Saiba mais sobre o território</summary>
                <div class="territory-notes-body">${bodyHtml}</div>
            `;
            notesContainer.appendChild(drawer);
        }
    });

    // 3. Sustentabilidade (Introdução e Linhas de Reportagem):
    // Nível 1 = 1 parágrafo de abertura + 1 frase por linha; segundo parágrafo introdutório em nota expansível
    document.querySelectorAll('.env-dossier-intro-col').forEach(introCol => {
        if (introCol.querySelector('.env-intro-more')) return;
        const leads = Array.from(introCol.querySelectorAll('.env-dossier-lead'));
        if (leads.length >= 2) {
            const secondLead = leads[1];
            const drawer = document.createElement('details');
            drawer.className = 'env-intro-more';
            drawer.innerHTML = `
                <summary>Saiba mais sobre este tema</summary>
                <div class="env-intro-more-body">${secondLead.innerHTML}</div>
            `;
            secondLead.replaceWith(drawer);
        }
    });

    document.querySelectorAll('.env-editorial-row .env-row-excerpt').forEach(excerptEl => {
        if (excerptEl.dataset.condensed === 'true') return;
        const split = splitFirstSentence(excerptEl.textContent);
        if (split) {
            excerptEl.dataset.fullExcerpt = excerptEl.textContent.trim();
            excerptEl.dataset.condensed = 'true';
            excerptEl.textContent = split.lead;
        }
    });
}

/**
 * Inicializa o menu de navegação mobile nas páginas regionais
 */
function initRegionalMobileNav() {
    const toggle = document.getElementById('nav-mobile-toggle');
    const nav = document.querySelector('.site-nav');
    if (!toggle || !nav || toggle.dataset.navBound === 'true') return;

    toggle.dataset.navBound = 'true';

    function closeMenu() {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = nav.classList.toggle('is-open');
        toggle.classList.toggle('is-active', isOpen);
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    document.addEventListener('click', (e) => {
        if (nav.classList.contains('is-open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) {
            closeMenu();
            toggle.focus();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initRegionalMobileNav();
    initStatePanelLayers();
    initRegionalProgressiveContent();
});



