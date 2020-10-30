const electron = require('electron');
const { ipcRenderer } = electron;

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const {} = document.querySelector('input').files[0];
    ipcRenderer.send('obterDimensoesDaImagem', path);
});

ipcRenderer.on('dimensoesDaImagem', (event, dimensions) => {
    document.querySelector(
        '#result'
    ).innerHTML = `Largura=${dimensions.width} Altura=${dimensions.height}`;
});
