function mostrarmenu() {
    let menu_mobile = document.querySelector('.links');
    
    if (menu_mobile.classList.contains('open')) {
        menu_mobile.classList.remove('open');
    } else {
        menu_mobile.classList.add('open');
    }
}

// Fechar menu ao clicar fora dele
document.addEventListener('click', function(event) {
    const menu = document.querySelector('.links');
    const botaoMenu = document.querySelector('#botao-nav');
    const sanduiche = document.querySelector('.sanduiche');
    
    // Se clicou fora do menu e do botão, fecha o menu
    if (!menu.contains(event.target) && 
        !botaoMenu.contains(event.target) && 
        !sanduiche.contains(event.target)) {
        menu.classList.remove('open');
    }
});

// Fechar menu ao redimensionar a tela (para desktop)
window.addEventListener('resize', function() {
    if (window.innerWidth > 668) {
        document.querySelector('.links').classList.remove('open');
    }
});

