/* 
  Brasil in Cena - Mapa Interativo Cartográfico do Brasil
  Renderiza os 27 estados do Brasil com cores regionais da paleta editorial:
  - Norte: #3D7A3F (Verde Amazônia)
  - Nordeste: #C8872A (Ocre Sertão)
  - Centro-Oeste: #A34424 (Terracota Cerrado)
  - Sudeste: #132E5C (Azul Marítimo)
  - Sul: #5B4A8A (Violeta Araucária)
*/

(function () {
    'use strict';

    const REGION_COLORS = {
        norte:          '#2A6B45',
        nordeste:       '#C47D2B',
        'centro_oeste': '#B8532F',
        'centro-oeste': '#B8532F',
        sudeste:        '#1E3A63',
        sul:            '#6B538C'
    };

    const STATE_REGION_MAP = {
        "Acre": "norte", "Amapá": "norte", "Amazonas": "norte", "Pará": "norte", "Rondônia": "norte", "Roraima": "norte", "Tocantins": "norte",
        "Alagoas": "nordeste", "Bahia": "nordeste", "Ceará": "nordeste", "Maranhão": "nordeste", "Paraíba": "nordeste", "Pernambuco": "nordeste", "Piauí": "nordeste", "Rio Grande do Norte": "nordeste", "Sergipe": "nordeste",
        "Goiás": "centro_oeste", "Mato Grosso": "centro_oeste", "Mato Grosso do Sul": "centro_oeste", "Distrito Federal": "centro_oeste",
        "Espírito Santo": "sudeste", "Minas Gerais": "sudeste", "Rio de Janeiro": "sudeste", "São Paulo": "sudeste",
        "Paraná": "sul", "Rio Grande do Sul": "sul", "Santa Catarina": "sul"
    };

    const STATE_SIGLAS = {
        "Acre": "AC", "Amapá": "AP", "Amazonas": "AM", "Pará": "PA", "Rondônia": "RO", "Roraima": "RR", "Tocantins": "TO",
        "Alagoas": "AL", "Bahia": "BA", "Ceará": "CE", "Maranhão": "MA", "Paraíba": "PB", "Pernambuco": "PE", "Piauí": "PI", "Rio Grande do Norte": "RN", "Sergipe": "SE",
        "Goiás": "GO", "Mato Grosso": "MT", "Mato Grosso do Sul": "MS", "Distrito Federal": "DF",
        "Espírito Santo": "ES", "Minas Gerais": "MG", "Rio de Janeiro": "RJ", "São Paulo": "SP",
        "Paraná": "PR", "Rio Grande do Sul": "RS", "Santa Catarina": "SC"
    };

    let geoDataCached = null;

    async function initBrazilInteractiveMap() {
        const container = document.getElementById('brazil-map-container') || document.getElementById('globe-container-3d');
        const tooltip = document.getElementById('territory-tooltip') || document.getElementById('globe-tooltip');
        const stateIndicator = document.getElementById('territory-active-state-indicator');

        if (!container || typeof d3 === 'undefined') return;

        container.innerHTML = `
            <div class="map-loading-indicator" style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--color-darkgreen);font-family:var(--font-heading);font-size:0.8rem;">
                Carregando território...
            </div>
        `;

        try {
            if (!geoDataCached) {
                try {
                    const resLocal = await fetch('data/brazil-states.geojson');
                    if (resLocal.ok) {
                        geoDataCached = await resLocal.json();
                    }
                } catch (e) {
                    console.warn('Carregando GeoJSON via fallback online...');
                }

                if (!geoDataCached) {
                    const res = await fetch('https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson');
                    if (!res.ok) throw new Error('Falha ao baixar GeoJSON');
                    geoDataCached = await res.json();
                }
            }

            container.innerHTML = ''; // Limpa loading

            const width = container.clientWidth || 440;
            const height = container.clientHeight || 440;

            // Projeção Mercator perfeitamente enquadrada para o Brasil com margem de respiro
            const projection = d3.geoMercator().fitExtent([[16, 16], [width - 16, height - 16]], geoDataCached);
            const pathGenerator = d3.geoPath().projection(projection);

            const svg = d3.select(container)
                .append('svg')
                .attr('width', '100%')
                .attr('height', '100%')
                .attr('viewBox', `0 0 ${width} ${height}`)
                .attr('class', 'brazil-vector-map-svg')
                .style('background', 'transparent');

            const mapGroup = svg.append('g').attr('class', 'states-group');

            // Renderizar cada Estado com cor de sua região e contornos finos
            const statePaths = mapGroup.selectAll('.map-state-path')
                .data(geoDataCached.features)
                .enter()
                .append('path')
                .attr('d', pathGenerator)
                .attr('class', 'map-state-path')
                .attr('data-state', d => d.properties.name)
                .attr('data-region', d => STATE_REGION_MAP[d.properties.name] || 'norte')
                .style('fill', d => {
                    const reg = STATE_REGION_MAP[d.properties.name] || 'norte';
                    return REGION_COLORS[reg] || '#2A6B45';
                })
                .style('stroke', '#FFFFFF')
                .style('stroke-width', '1.2px')
                .style('cursor', 'pointer')
                .style('transition', 'fill 0.2s ease, opacity 0.2s ease, transform 0.2s ease')
                .on('mouseenter', function (event, d) {
                    const stateName = d.properties.name;
                    const sigla = STATE_SIGLAS[stateName] || '';
                    const regKey = STATE_REGION_MAP[stateName] || 'norte';
                    const regLabel = regKey.replace('_', '-').toUpperCase();
                    const stateColor = REGION_COLORS[regKey] || '#2A6B45';

                    d3.select(this)
                        .style('opacity', '0.85')
                        .style('stroke', '#FFFFFF')
                        .style('stroke-width', '2.2px');

                    if (stateIndicator) {
                        stateIndicator.textContent = `${stateName} (${sigla}) · ${regLabel}`;
                    }

                    if (window.setCursorContext) {
                        window.setCursorContext(`${sigla} · ${stateName}`, stateColor);
                    }

                    if (tooltip) {
                        tooltip.style.opacity = '1';
                        tooltip.style.display = 'block';
                        tooltip.innerHTML = `<strong>${sigla}</strong> ${stateName} · ${regLabel}`;
                    }
                })
                .on('mousemove', function (event) {
                    if (tooltip) {
                        const rect = container.getBoundingClientRect();
                        tooltip.style.left = (event.clientX - rect.left + 12) + 'px';
                        tooltip.style.top = (event.clientY - rect.top - 12) + 'px';
                    }
                })
                .on('mouseleave', function () {
                    d3.select(this)
                        .style('opacity', '1')
                        .style('stroke', '#FFFFFF')
                        .style('stroke-width', '1.2px');

                    if (window.resetCursorContext) {
                        window.resetCursorContext();
                    }

                    if (tooltip) {
                        tooltip.style.opacity = '0';
                        tooltip.style.display = 'none';
                    }
                })
                .on('click', function (event, d) {
                    const stateName = d.properties.name;
                    const regKey = STATE_REGION_MAP[stateName] || 'norte';
                    highlightRegion(regKey, stateName);
                });

            // Rótulos de Siglas dos Estados (Space Grotesk, tipografia editorial moderna)
            mapGroup.selectAll('.map-state-sigla-text')
                .data(geoDataCached.features)
                .enter()
                .append('text')
                .attr('class', 'map-state-sigla-text')
                .attr('transform', d => {
                    const c = pathGenerator.centroid(d);
                    return `translate(${c[0]}, ${c[1]})`;
                })
                .attr('dy', '0.35em')
                .attr('text-anchor', 'middle')
                .text(d => STATE_SIGLAS[d.properties.name] || '')
                .style('font-family', 'var(--font-heading)')
                .style('font-size', '9px')
                .style('font-weight', '700')
                .style('fill', '#FFFFFF')
                .style('pointer-events', 'none')
                .style('text-shadow', '0 1px 3px rgba(0,0,0,0.4)');

            // Função para destacar uma região
            window.highlightBrazilRegion = function (regionKey, stateFocusName = null) {
                const normKey = regionKey.replace('-', '_');

                statePaths.each(function (d) {
                    const stReg = (STATE_REGION_MAP[d.properties.name] || 'norte').replace('-', '_');
                    if (normKey === 'todas' || stReg === normKey) {
                        d3.select(this)
                            .style('opacity', '1')
                            .style('filter', 'none');
                    } else {
                        d3.select(this)
                            .style('opacity', '0.28')
                            .style('filter', 'grayscale(50%)');
                    }
                });

                if (window.updateRegionPreview) {
                    const mappedId = normKey === 'todas' ? 'norte' : normKey;
                    window.updateRegionPreview(mappedId);
                }

                if (stateIndicator) {
                    if (stateFocusName) {
                        stateIndicator.textContent = stateFocusName.toUpperCase();
                    } else if (normKey === 'todas') {
                        stateIndicator.textContent = 'BRASIL · 27 ESTADOS';
                    } else {
                        stateIndicator.textContent = normKey.replace('_', ' ').toUpperCase();
                    }
                }
            };

            function highlightRegion(regKey, stateName) {
                window.highlightBrazilRegion(regKey, stateName);

                // Sincronizar botões de chip
                document.querySelectorAll('.territory-chip-btn, .hud-chip').forEach(btn => {
                    const btnReg = btn.dataset.region ? btn.dataset.region.replace('-', '_') : '';
                    if (btnReg === regKey.replace('-', '_')) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
            }

            // Selecionar todos os chips
            document.querySelectorAll('.territory-chip-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const reg = btn.dataset.region;
                    highlightRegion(reg, null);
                });
            });

            // Inicializar com visão nacional aberta
            window.highlightBrazilRegion('todas');

        } catch (err) {
            console.error("Erro ao inicializar mapa editorial do Brasil:", err);
            container.innerHTML = `
                <div style="padding:2rem;text-align:center;color:var(--color-darkgreen);font-family:var(--font-heading);font-size:0.85rem;">
                    Exploração do território ativa.
                </div>
            `;
        }
    }

    // Inicialização segura
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBrazilInteractiveMap);
    } else {
        initBrazilInteractiveMap();
    }

    window.initBrazilInteractiveMap = initBrazilInteractiveMap;
})();
