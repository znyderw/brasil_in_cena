/* 
  Brasil in Cena - Motor Interativo e Arquitetura Editorial (Indie Zine & Território)
  Estética: Rockyvision + Smooothy + Publicação Independente
*/

document.addEventListener('DOMContentLoaded', () => {
    initPlayfulCursor();
    initRegionExplorer();
    initStickyExhibition();
    initListeningStations();
    initGastronomySection();
    initEventsCalendar();
    initMobileNav();
});

/* ============================================================
   1. CURSOR INTERATIVO TERRITORIAL (PLAYFUL CURSOR)
   Pingo de tinta/cera fluida com etiquetas contextuais regionais
   ============================================================ */
function initPlayfulCursor() {
    // Não inicializar em dispositivos touch
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let cursor = document.getElementById('territorial-cursor');
    if (!cursor) {
        cursor = document.createElement('div');
        cursor.id = 'territorial-cursor';
        cursor.className = 'playful-cursor';
        cursor.setAttribute('aria-hidden', 'true');
        cursor.innerHTML = `
            <div class="cursor-dot"></div>
            <div class="cursor-tag"><span id="cursor-tag-text">BRASIL</span></div>
        `;
        document.body.appendChild(cursor);
    }

    const dot = cursor.querySelector('.cursor-dot');
    const tagText = document.getElementById('cursor-tag-text');

    let mouseX = -100, mouseY = -100;
    let posX = -100, posY = -100;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!isVisible) {
            isVisible = true;
            cursor.classList.add('is-active');
        }
    });

    document.addEventListener('mouseleave', () => {
        cursor.classList.remove('is-active');
        isVisible = false;
    });

    // Animação fluida via requestAnimationFrame
    function renderCursor() {
        posX += (mouseX - posX) * 0.22;
        posY += (mouseY - posY) * 0.22;
        cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
        requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Mapeamento de cores regionais para o cursor
    const REGION_PALETTE = {
        norte: '#2A6B45',
        nordeste: '#C47D2B',
        'centro-oeste': '#B8532F',
        centro_oeste: '#B8532F',
        sudeste: '#1E3A63',
        sul: '#6B538C'
    };

    window.setCursorContext = function(label, color = null) {
        if (!cursor) return;
        if (label) {
            tagText.textContent = label;
            cursor.classList.add('has-tag', 'is-hovering-interactive');
        } else {
            cursor.classList.remove('has-tag', 'is-hovering-interactive');
        }
        if (color) {
            dot.style.backgroundColor = color;
        } else {
            dot.style.backgroundColor = 'var(--color-accent)';
        }
    };

    window.resetCursorContext = function() {
        if (!cursor) return;
        cursor.classList.remove('has-tag', 'is-hovering-interactive');
        dot.style.backgroundColor = 'var(--color-accent)';
    };

    // Delegação para elementos interativos
    document.addEventListener('mouseover', (e) => {
        const target = e.target.closest('[data-cursor-label], .smooothy-card, .dish-flip-card, .asym-entry, .audio-play-toggle, .territory-chip-btn');
        if (!target) return;

        if (target.dataset.cursorLabel) {
            const color = target.dataset.cursorColor || null;
            window.setCursorContext(target.dataset.cursorLabel, color);
        } else if (target.classList.contains('smooothy-card')) {
            const reg = target.dataset.region || 'norte';
            window.setCursorContext('ARTEFATO 3D', REGION_PALETTE[reg]);
        } else if (target.classList.contains('dish-flip-card')) {
            window.setCursorContext('FOLHEAR ↻', 'var(--color-accent)');
        } else if (target.classList.contains('asym-entry')) {
            window.setCursorContext('VER CADERNO →', 'var(--color-darkgreen)');
        } else if (target.classList.contains('audio-play-toggle')) {
            window.setCursorContext('OUVIR TOQUE ♫', 'var(--color-accent)');
        }
    });

    document.addEventListener('mouseout', (e) => {
        const target = e.target.closest('[data-cursor-label], .smooothy-card, .dish-flip-card, .asym-entry, .audio-play-toggle, .territory-chip-btn');
        if (target) {
            window.resetCursorContext();
        }
    });
}

/* ============================================================
   2. MOBILE NAV TOGGLE
   ============================================================ */
function initMobileNav() {
    const toggleBtn = document.getElementById('nav-mobile-toggle');
    const nav = document.getElementById('site-nav');
    if (!toggleBtn || !nav) return;
    toggleBtn.addEventListener('click', function() {
        nav.classList.toggle('is-open');
    });
    nav.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function() { nav.classList.remove('is-open'); });
    });
}

/* ============================================================
   3. EXPLORADOR EDITORIAL DO TERRITÓRIO (HOME)
   ============================================================ */
function initRegionExplorer() {
    const previewKicker = document.getElementById('preview-kicker');
    const previewName = document.getElementById('preview-name');
    const previewMeta = document.getElementById('preview-meta');
    const previewBody = document.getElementById('preview-body');
    const previewManifestacoes = document.getElementById('preview-manifestacoes');
    const previewSabores = document.getElementById('preview-sabores');
    const previewLink = document.getElementById('preview-link');

    const REGION_NUMBERS = {
        'norte': '01 / 05',
        'nordeste': '02 / 05',
        'centro_oeste': '03 / 05',
        'centro-oeste': '03 / 05',
        'sudeste': '04 / 05',
        'sul': '05 / 05'
    };

    if (!previewName) return;

    window.updateRegionPreview = function(regionId) {
        const normId = regionId === 'todas' ? 'norte' : regionId.replace('-', '_');
        const data = BRASIL_DATA.regioes[normId];
        if (!data) return;

        if (previewKicker) {
            const num = REGION_NUMBERS[normId] || '01 / 05';
            previewKicker.textContent = `CADERNO REGIONAL ${num}`;
        }

        previewName.textContent = data.nome;
        previewName.style.color = data.cor;

        if (previewMeta) {
            previewMeta.innerHTML = `
                <span>${data.dadosObjetivos.estadosQtd}</span>
                <span>·</span>
                <span>${data.dadosObjetivos.biomaPrincipal}</span>
                <span>·</span>
                <span>${data.dadosObjetivos.area}</span>
            `;
        }

        previewBody.textContent = data.resumo;
        
        if (previewManifestacoes) {
            previewManifestacoes.innerHTML = data.manifestacoesDestaque.map(item => `
                <span class="territory-tag-item">${item}</span>
            `).join('');
        }

        if (previewSabores) {
            previewSabores.innerHTML = data.saboresDestaque.map(item => `
                <span class="territory-tag-item">${item}</span>
            `).join('');
        }
        
        if (previewLink) {
            previewLink.href = `regioes/${data.id}.html`;
            previewLink.style.borderColor = data.cor;
        }

        document.querySelectorAll('.territory-chip-btn, .hud-chip').forEach(btn => {
            const btnReg = btn.dataset.region ? btn.dataset.region.replace('-', '_') : '';
            if (btnReg === normId || (regionId === 'todas' && btnReg === 'todas')) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    document.querySelectorAll('.territory-chip-btn, .hud-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            const reg = btn.dataset.region;
            if (window.highlightBrazilRegion) {
                window.highlightBrazilRegion(reg);
            } else {
                window.updateRegionPreview(reg);
            }
        });
    });

    window.updateRegionPreview('norte');
}

/* ============================================================
   4. NARRATIVA STICKY DE CULTURA (EXPOSIÇÃO DIGITAL)
   ============================================================ */
function initStickyExhibition() {
    const exhibitionBlocks = Array.from(document.querySelectorAll('.exhibition-item-block'));
    const mediaImage = document.getElementById('exhibition-active-img');
    const hudTitle = document.getElementById('cultura-home-hud-title');
    const navButtons = Array.from(document.querySelectorAll('.exhibition-title-nav .exhibition-nav-btn'));

    if (!exhibitionBlocks.length || !mediaImage) return;

    let activeIndex = -1;
    let isManualScrolling = false;
    let manualScrollTimer = null;
    let currentLoadedSrc = '';

    function activateIndex(idx, smoothScroll = false) {
        if (idx < 0 || idx >= exhibitionBlocks.length) return;
        if (idx === activeIndex && !smoothScroll) return;

        activeIndex = idx;
        const targetBlock = exhibitionBlocks[idx];

        exhibitionBlocks.forEach((b, i) => {
            if (i === idx) b.classList.add('active');
            else b.classList.remove('active');
        });

        navButtons.forEach((btn, i) => {
            if (i === idx) btn.classList.add('active');
            else btn.classList.remove('active');
        });

        const titleEl = targetBlock.querySelector('.exhibition-item-title');
        const titleText = titleEl ? titleEl.innerText.replace(/clique.*/i, '').trim() : '';
        if (hudTitle && titleText) {
            hudTitle.textContent = titleText;
        }

        const newImgSrc = targetBlock.dataset.img;
        if (newImgSrc && newImgSrc !== currentLoadedSrc) {
            currentLoadedSrc = newImgSrc;
            mediaImage.style.opacity = '0.35';
            mediaImage.style.transform = 'scale(0.985)';

            const preloader = new Image();
            preloader.onload = () => {
                mediaImage.src = newImgSrc;
                if (titleText) mediaImage.alt = titleText;
                mediaImage.style.opacity = '1';
                mediaImage.style.transform = 'scale(1)';
            };
            preloader.onerror = () => {
                mediaImage.src = newImgSrc;
                mediaImage.style.opacity = '1';
                mediaImage.style.transform = 'scale(1)';
            };
            preloader.src = newImgSrc;
        }

        if (smoothScroll) {
            isManualScrolling = true;
            clearTimeout(manualScrollTimer);

            targetBlock.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            manualScrollTimer = setTimeout(() => {
                isManualScrolling = false;
            }, 850);
        }
    }

    exhibitionBlocks.forEach((block, idx) => {
        block.style.cursor = 'pointer';
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

    navButtons.forEach((btn, idx) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            activateIndex(idx, true);
        });
    });

    // Sincronia de scroll baseada no centro do viewport
    let scrollScheduled = false;
    const section = document.getElementById('culturas');
    function syncOnScroll() {
        if (isManualScrolling || !section) return;

        const secRect = section.getBoundingClientRect();
        if (secRect.bottom < 100 || secRect.top > window.innerHeight - 100) return;

        const focalY = window.innerHeight * 0.45;
        let closestIdx = -1;
        let minDistance = Infinity;

        exhibitionBlocks.forEach((b, idx) => {
            const r = b.getBoundingClientRect();
            const bCenter = r.top + r.height / 2;
            const dist = Math.abs(bCenter - focalY);

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

    activateIndex(0, false);
}

/* ============================================================
   5. MESA DE ESCUTA / SINTETIZADOR WEB AUDIO API TÁTIL
   Reproduz cadências e toques rítmicos autênticos das 5 manifestações
   ============================================================ */
function initListeningStations() {
    const blocks = document.querySelectorAll('.exhibition-item-block');
    if (!blocks.length) return;

    const RHYTHM_CONFIGS = {
        'Carimbó': {
            id: 'carimbo',
            titulo: 'Batuque de Curimbó & Maracás',
            regiao: 'Norte · Marajó',
            audio: 'assets/audio/curimbo_maracas.mp3',
            tempo: 110,
            pattern: 'carimbo'
        },
        'Frevo': {
            id: 'frevo',
            titulo: 'Tarol & Caixa em Dobrado de Frevo',
            regiao: 'Nordeste · Recife',
            audio: 'assets/audio/caixa_frevo.mp3',
            tempo: 144,
            pattern: 'frevo'
        },
        'Congada e Folia de Reis': {
            id: 'congada',
            titulo: 'Caixa de Congo & Gungas das Irmandades',
            regiao: 'Sudeste · Minas',
            audio: 'assets/audio/caixa_de_congo.mp3',
            tempo: 92,
            pattern: 'congada'
        },
        'Fandango Caiçara': {
            id: 'fandango',
            titulo: 'Rufado de Tamancos no Soalho & Rabeca',
            regiao: 'Sul/Sudeste · Litoral',
            audio: 'assets/audio/fandango_tamanco.mp3',
            tempo: 125,
            pattern: 'fandango'
        },
        'Cavalhadas de Pirenópolis': {
            id: 'cavalhadas',
            titulo: 'Fanfarra Imperial & Galope Equestre',
            regiao: 'Centro-Oeste · Goiás',
            audio: 'assets/audio/fanfarra.mp3',
            tempo: 102,
            pattern: 'cavalhadas'
        }
    };

    let audioCtx = null;
    let activePlayer = null;

    function getAudioContext() {
        if (!audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AudioContextClass();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    // Gerador de Som Percurssivo via Síntese pura
    function playDrum(ctx, time, type) {
        if (type === 'kick') { // Bumbo / Curimbó grave
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.frequency.setValueAtTime(130, time);
            osc.frequency.exponentialRampToValueAtTime(35, time + 0.22);
            gain.gain.setValueAtTime(1.0, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(time);
            osc.stop(time + 0.23);
        } else if (type === 'snare') { // Caixa / Tarol estalado
            const bufferSize = ctx.sampleRate * 0.12;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;
            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(1400, time);
            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.7, time);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.11);
            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start(time);
            noise.stop(time + 0.12);
        } else if (type === 'tamanco') { // Tamanco de madeira batido no soalho
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(580, time);
            osc.frequency.exponentialRampToValueAtTime(180, time + 0.06);
            gain.gain.setValueAtTime(0.8, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.06);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(time);
            osc.stop(time + 0.07);
        } else if (type === 'shaker') { // Maracá / Gunga
            const bufferSize = ctx.sampleRate * 0.05;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;
            const filter = ctx.createBiquadFilter();
            filter.type = 'highpass';
            filter.frequency.setValueAtTime(4500, time);
            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.3, time);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.04);
            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start(time);
            noise.stop(time + 0.05);
        }
    }

    class RhythmPlayer {
        constructor(patternType, tempo) {
            this.patternType = patternType;
            this.tempo = tempo;
            this.isPlaying = false;
            this.timerId = null;
            this.step = 0;
            this.ctx = null;
        }

        start() {
            this.ctx = getAudioContext();
            this.isPlaying = true;
            this.step = 0;
            const stepInterval = (60 / this.tempo) / 4 * 1000; // 16th notes
            this.timerId = setInterval(() => {
                this.tick();
            }, stepInterval);
        }

        stop() {
            this.isPlaying = false;
            if (this.timerId) clearInterval(this.timerId);
            this.timerId = null;
        }

        tick() {
            const t = this.ctx.currentTime;
            const s = this.step % 16;

            if (this.patternType === 'carimbo') {
                if (s === 0 || s === 6 || s === 10) playDrum(this.ctx, t, 'kick');
                if (s === 4 || s === 12) playDrum(this.ctx, t, 'snare');
                if (s % 2 === 0) playDrum(this.ctx, t, 'shaker');
            } else if (this.patternType === 'frevo') {
                if (s === 0 || s === 8) playDrum(this.ctx, t, 'kick');
                if (s % 2 === 0 || s === 7 || s === 15) playDrum(this.ctx, t, 'snare');
                if (s % 4 === 2) playDrum(this.ctx, t, 'shaker');
            } else if (this.patternType === 'congada') {
                if (s === 0 || s === 3 || s === 6 || s === 10) playDrum(this.ctx, t, 'kick');
                if (s === 8 || s === 14) playDrum(this.ctx, t, 'snare');
                if (s % 4 === 0) playDrum(this.ctx, t, 'shaker');
            } else if (this.patternType === 'fandango') {
                if (s === 0 || s === 2 || s === 4 || s === 8 || s === 10) playDrum(this.ctx, t, 'tamanco');
                if (s === 6 || s === 14) playDrum(this.ctx, t, 'snare');
                if (s % 2 === 1) playDrum(this.ctx, t, 'shaker');
            } else if (this.patternType === 'cavalhadas') {
                if (s === 0 || s === 4 || s === 8 || s === 12) playDrum(this.ctx, t, 'kick');
                if (s === 2 || s === 6 || s === 10 || s === 14) playDrum(this.ctx, t, 'snare');
                if (s % 4 === 0) playDrum(this.ctx, t, 'tamanco');
            }

            this.step++;
        }
    }

    blocks.forEach(block => {
        const titleEl = block.querySelector('.exhibition-item-title');
        if (!titleEl) return;
        const text = titleEl.textContent.toLowerCase();
        let config = null;
        if (text.includes('carimb')) config = RHYTHM_CONFIGS['Carimbó'];
        else if (text.includes('frevo')) config = RHYTHM_CONFIGS['Frevo'];
        else if (text.includes('conga')) config = RHYTHM_CONFIGS['Congada e Folia de Reis'];
        else if (text.includes('fandango')) config = RHYTHM_CONFIGS['Fandango Caiçara'];
        else if (text.includes('cavalhada')) config = RHYTHM_CONFIGS['Cavalhadas de Pirenópolis'];
        else config = RHYTHM_CONFIGS[titleEl.textContent.trim()] || {
            id: 'ritmo',
            titulo: 'Cadência Regional',
            regiao: 'Brasil',
            tempo: 110,
            pattern: 'carimbo'
        };

        const station = document.createElement('div');
        station.className = 'listening-station';
        station.innerHTML = `
            <div class="listening-vinyl-col">
                <div class="vinyl-record">
                    <div class="vinyl-center-label"></div>
                </div>
                <div class="listening-info">
                    <span class="listening-label">MESA DE ESCUTA · ${config.regiao}</span>
                    <span class="listening-track-name">${config.titulo}</span>
                    <div class="equalizer-bars">
                        <span class="eq-bar"></span>
                        <span class="eq-bar"></span>
                        <span class="eq-bar"></span>
                        <span class="eq-bar"></span>
                    </div>
                </div>
            </div>
            <button class="audio-play-toggle" type="button" aria-label="Tocar Amostra Sonora">
                <span class="play-icon">▶</span>
                <span class="play-text">Ouvir Toque</span>
            </button>
        `;

        block.appendChild(station);

        const btn = station.querySelector('.audio-play-toggle');
        const playIcon = station.querySelector('.play-icon');
        const playText = station.querySelector('.play-text');

        // Suporte duplo: Arquivo Real (MP3/WAV via data-audio ou config.audio) OU Sintetizador Web Audio
        const audioSrc = block.dataset.audio || config.audio;
        let audioElement = null;
        let audioLoadFailed = false;

        if (audioSrc) {
            audioElement = new Audio();
            audioElement.loop = true;
            audioElement.preload = 'metadata';
            audioElement.addEventListener('error', () => {
                audioLoadFailed = true;
            });
            audioElement.src = audioSrc;
        }
        const synthPlayer = new RhythmPlayer(config.pattern, config.tempo);

        const isCurrentlyPlaying = () => {
            if (audioElement && !audioElement.paused && audioElement.currentTime > 0) return true;
            return synthPlayer.isPlaying;
        };

        const stopPlayback = () => {
            if (audioElement) {
                audioElement.pause();
                audioElement.currentTime = 0;
            }
            synthPlayer.stop();
            station.classList.remove('is-playing');
            playIcon.textContent = '▶';
            playText.textContent = 'Ouvir Toque';
        };

        const startPlayback = () => {
            if (audioElement && !audioLoadFailed) {
                const playPromise = audioElement.play();
                if (playPromise !== undefined) {
                    playPromise.catch(err => {
                        console.warn(`Arquivo de áudio '${audioSrc}' não pôde ser reproduzido, acionando sintetizador Web Audio:`, err);
                        synthPlayer.start();
                    });
                }
            } else {
                synthPlayer.start();
            }
            station.classList.add('is-playing');
            playIcon.textContent = '❚❚';
            playText.textContent = 'Pausar';
        };

        btn.addEventListener('click', (e) => {
            e.stopPropagation();

            if (isCurrentlyPlaying()) {
                stopPlayback();
                activePlayer = null;
            } else {
                if (activePlayer && activePlayer !== stopPlayback) {
                    activePlayer();
                }
                startPlayback();
                activePlayer = stopPlayback;
            }
        });
    });
}

/* ============================================================
   6. MOSTRUÁRIO DE "OBJETOS VIVOS" (ESTILO SMOOOTHY)
   Cartelas com cores regionais puras e tilt 3D dinâmico no cursor
   ============================================================ */
function initSmooothyShowcase() {
    const grid = document.getElementById('smooothy-objects-grid');
    if (!grid || !window.BRASIL_DATA || !window.BRASIL_DATA.objetosVivos) return;

    grid.innerHTML = window.BRASIL_DATA.objetosVivos.map((item, idx) => `
        <article class="smooothy-card" data-region="${item.regiao}">
            <div class="smooothy-canvas-backdrop" style="--card-pure-color: ${item.corRegiao};">
                <img class="smooothy-object-figure" src="${item.imagem}" alt="${item.nome}" loading="lazy">
            </div>
            <div class="smooothy-card-body">
                <span class="smooothy-meta-mono">${item.origem} · ${item.coord}</span>
                <h3 class="smooothy-card-title">${item.nome}</h3>
                <p class="smooothy-card-desc">${item.descricao}</p>
                <div class="smooothy-card-footer">
                    <span>${item.material}</span>
                    <strong style="color: ${item.corRegiao};">0${idx + 1}</strong>
                </div>
            </div>
        </article>
    `).join('');

    // Efeito de Tilt 3D com física realista ao passar o cursor
    grid.querySelectorAll('.smooothy-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -12;
            const rotateY = ((x - centerX) / centerX) * 12;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        });
    });
}

/* ============================================================
   7. GASTRONOMIA — ALMANAQUE DE FOLHEAR (3D CARD FLIP)
   Em vez de modal de sistema, o card vira como ficha de receita de feira
   ============================================================ */
function initGastronomySection() {
    const gastronomyGrid = document.getElementById('gastronomy-grid');
    const filterChips = document.querySelectorAll('.gastro-filter-chip');

    if (!gastronomyGrid || !window.BRASIL_DATA) return;

    const REGION_COLOR_MAP = {
        'Norte': '#2A6B45',
        'Nordeste': '#C47D2B',
        'Centro-Oeste': '#B8532F',
        'Sudeste': '#1E3A63',
        'Sul': '#6B538C'
    };

    function renderDishes(filterRegion) {
        const dishes = filterRegion === 'todas'
            ? BRASIL_DATA.gastronomia
            : BRASIL_DATA.gastronomia.filter(d => d.regiao.toLowerCase() === filterRegion.toLowerCase());

        gastronomyGrid.innerHTML = dishes.map((dish, idx) => {
            const regColor = REGION_COLOR_MAP[dish.regiao] || '#06352F';
            return `
                <div class="dish-flip-card" data-dish-id="${dish.id}">
                    <div class="dish-flip-inner">
                        <!-- FRENTE: FOTOGRAFIA EDITORIAL E RESUMO -->
                        <div class="dish-flip-face dish-flip-front">
                            <div class="dish-card-media-wrap">
                                <img src="${dish.imagem}" alt="${dish.nome}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop'">
                                <span class="dish-geo-badge">${dish.estado} · ${dish.regiao}</span>
                            </div>
                            <div class="dish-front-info">
                                <span class="dish-matriz-kicker">Tradição de ${dish.regiao}</span>
                                <h3 class="dish-dossier-title">${dish.nome}</h3>
                                <p class="dish-dossier-snippet">${dish.descricao}</p>
                                <button class="dish-flip-trigger-btn" type="button" aria-label="Ver Ficha Técnica">
                                    <span>Folhear Ficha de Campo</span>
                                    <span class="flip-icon">↻</span>
                                </button>
                            </div>
                        </div>

                        <!-- VERSO: FICHA TÉCNICA MILIMETRADA DE RECEITA -->
                        <div class="dish-flip-face dish-flip-back grid-cartographic">
                            <div class="dish-recipe-sheet">
                                <div class="dish-sheet-header">
                                    <span class="sheet-stamp">ARQUIVO CULINÁRIO · DOC. 0${idx + 1}</span>
                                    <span class="sheet-badge-region" style="background: ${regColor}">${dish.regiao}</span>
                                </div>
                                <h4 class="dish-back-title">${dish.nome}</h4>
                                <div class="dish-back-section">
                                    <strong>Território & Origem:</strong>
                                    <p>${dish.origem}</p>
                                </div>
                                <div class="dish-back-section">
                                    <strong>Ingredientes Chave:</strong>
                                    <p>${dish.ingredientes}</p>
                                </div>
                                <div class="dish-back-section">
                                    <strong>Registro Etnográfico:</strong>
                                    <p>${dish.curiosidade}</p>
                                </div>
                                <button class="dish-flip-back-btn" type="button">
                                    <span>← Voltar à Fotografia</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Event Listeners para virar os cards
        gastronomyGrid.querySelectorAll('.dish-flip-card').forEach(card => {
            const triggerBtn = card.querySelector('.dish-flip-trigger-btn');
            const backBtn = card.querySelector('.dish-flip-back-btn');

            if (triggerBtn) {
                triggerBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    card.classList.add('is-flipped');
                });
            }

            if (backBtn) {
                backBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    card.classList.remove('is-flipped');
                });
            }

            // Também virar ao clicar no card caso o usuário queira
            card.addEventListener('click', () => {
                card.classList.toggle('is-flipped');
            });
        });
    }

    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderDishes(chip.dataset.filter);
        });
    });

    renderDishes('todas');
}

/* ============================================================
   8. FESTAS E MANIFESTAÇÕES (CALENDÁRIO DE EVENTOS)
   ============================================================ */
function initEventsCalendar() {
    const monthPickerBar = document.getElementById('months-picker');
    const eventsDisplay = document.getElementById('events-display');

    if (!monthPickerBar || !eventsDisplay || !window.BRASIL_DATA) return;

    const meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

    monthPickerBar.innerHTML = meses.map((mes, i) => `
        <button class="month-picker-btn ${i === 5 ? 'active' : ''}" data-month="${mes}">${mes}</button>
    `).join('');

    function renderMonthEvents(monthCode) {
        const eventsList = BRASIL_DATA.calendarioEventos[monthCode] || [];
        
        if (eventsList.length === 0) {
            eventsDisplay.innerHTML = `
                <div class="calendar-empty-note">
                    Nenhuma grande celebração cadastrada para o mês de ${monthCode}.
                </div>
            `;
            return;
        }

        eventsDisplay.innerHTML = eventsList.map(ev => `
            <article class="calendar-event-card">
                <div class="calendar-event-header">
                    <span class="calendar-event-badge">${ev.estado} · ${ev.regiao}</span>
                    <span class="calendar-event-month">${monthCode}</span>
                </div>
                <h4 class="calendar-event-title">${ev.nome}</h4>
                <p class="calendar-event-desc">${ev.desc}</p>
            </article>
        `).join('');
    }

    monthPickerBar.querySelectorAll('.month-picker-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            monthPickerBar.querySelectorAll('.month-picker-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMonthEvents(btn.dataset.month);
        });
    });

    // Iniciar com Junho (Festas Juninas e Parintins)
    renderMonthEvents('JUN');
}
