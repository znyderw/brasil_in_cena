# Brasil in Cena — Acervo Sonoro da Mesa de Escuta

Esta pasta abriga as gravações e toques percussivos reais das cinco manifestações culturais do Brasil in Cena.

### Arquivos Ativos:
1. `batuque_curimbo.mp3` — **Carimbó** (Pará / Região Norte) · Batuque de curimbó e maracás.
2. `caixa_frevo.mp3` — **Frevo** (Pernambuco / Região Nordeste) · Tarol e caixa em dobrado de frevo.
3. `caixa_de_congo.mp3` — **Congada e Folia de Reis** (Minas Gerais / Região Sudeste) · Caixa de congo e gungas.
4. `fandango_tamanco.mp3` — **Fandango Caiçara** (Paraná e São Paulo / Regiões Sul e Sudeste) · Rufado de tamancos e rabeca.
5. `fanfarra.mp3` — **Cavalhadas de Pirenópolis** (Goiás / Região Centro-Oeste) · Fanfarra imperial equestre.

### Parâmetros do Player (`js/main.js`):
- **Limitação de Amostra:** 30 segundos por manifestação com barra de progresso visual em tempo real e mostrador editorial (`00:00 / 00:30`).
- **Fade-out:** Suave nos últimos 2 segundos da amostra (dos 28s aos 30s) para encerramento elegante sem cliques.
- **Normalização de Volume:** Ganhos individuais calibrados (0.62 a 0.80) para equilibrar a dinâmica das faixas.
- **Fallback Automático:** Caso algum arquivo não possa ser carregado, o sintetizador nativo via Web Audio API assume a execução percussiva instantaneamente.
