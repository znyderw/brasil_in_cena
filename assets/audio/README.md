# Brasil in Cena — Pasta de Áudios da Mesa de Escuta

Você pode colocar arquivos de áudio gravados (.mp3, .wav, .ogg) nesta pasta para tocar na **Mesa de Escuta** das Manifestações Vivas.

### Como usar seu próprio áudio:
1. Coloque seu arquivo de som nesta pasta (ex: `assets/audio/carimbo.mp3`).
2. No arquivo `index.html` (ou nas páginas regionais), adicione o atributo `data-audio="assets/audio/carimbo.mp3"` no bloco da manifestação:

```html
<div class="exhibition-item-block" 
     data-img="assets/img/norte/Carimbo.jpg" 
     data-audio="assets/audio/carimbo.mp3">
```

Quando você define `data-audio`, a Mesa de Escuta reproduz automaticamente o seu arquivo de áudio real. Se você não definir `data-audio`, o sistema toca o ritmo sintetizado via código pelo Web Audio API em `js/main.js`.
