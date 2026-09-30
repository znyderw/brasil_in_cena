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
            Carregando Prancha D3...
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

        // Desenhar Estados Reais
        const paths = g.selectAll('path')
            .data(regionFeatures)
            .enter()
            .append('path')
            .attr('d', pathGenerator)
            .attr('class', (d, i) => i === 0 ? 'd3-state-path active' : 'd3-state-path')
            .attr('data-state-sigla', d => d.properties.sigla)
            .attr('data-state-name', d => SIGLA_TO_CANONICAL_NAME[d.properties.sigla] || d.properties.name)
            .on('mouseenter', function (event, d) {
                d3.select(this).raise();
                if (labels) labels.raise();
            })
            .on('click', function (event, d) {
                const sigla = (d.properties.sigla || '').toUpperCase();
                paths.classed('active', false);
                d3.select(this).classed('active', true);
                labels.classed('active-label', l => (l.properties.sigla || '').toUpperCase() === sigla);
                if (labels) labels.raise();
                const canonicalName = SIGLA_TO_CANONICAL_NAME[sigla] || d.properties.name;
                if (onStateSelect) {
                    onStateSelect(canonicalName, sigla);
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

        // Selecionar primeiro estado por padrão
        if (regionFeatures.length > 0 && onStateSelect) {
            const firstSigla = (regionFeatures[0].properties.sigla || '').toUpperCase();
            labels.classed('active-label', l => (l.properties.sigla || '').toUpperCase() === firstSigla);
            const firstSt = SIGLA_TO_CANONICAL_NAME[firstSigla] || regionFeatures[0].properties.name;
            onStateSelect(firstSt, firstSigla);
        }

    } catch (err) {
        console.error("Erro ao carregar mapa D3 real:", err);
        container.innerHTML = `<div style="color:#FFF;padding:2rem;font-family:var(--font-mono);font-size:0.75rem;">Erro ao renderizar vetor D3.</div>`;
    }
}

/**
 * Inicialização Inteligente & Sincronizada da Seção de Cultura (Sticky Exhibition)
 * - Sincronismo 100% preciso entre imagem e texto no scroll via cálculo do centro do viewport (focal line).
 * - Elimina pulo/salto de imagens causado por triggers concorrentes de IntersectionObserver.
 * - Suporta troca imediata clicando no título do ensaio OU nas abas/pills de títulos superiores.
 * - Transição suave de fotografias com pré-carregamento e crossfade.
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
            if (i === idx) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });

        // 2. Atualizar abas/pills de títulos caso existam
        navButtons.forEach((btn, i) => {
            if (i === idx) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
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
        block.addEventListener('click', () => {
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

