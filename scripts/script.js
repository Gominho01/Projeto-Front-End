document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const isLoggedin = urlParams.get('isLoggedIn');
    
    if (isLoggedin === 'true') {
        const menu = document.getElementById('menu');
        
        menu.innerHTML = '';
        
        const solicitacaoLi = document.createElement('li');
        const solicitacaoLink = document.createElement('a');
        solicitacaoLink.href = 'solicitacao.html';
        solicitacaoLink.textContent = 'Solicitar Serviços';
        solicitacaoLi.appendChild(solicitacaoLink);
        menu.appendChild(solicitacaoLi);
        
        const logoutLi = document.createElement('li');
        const logoutLink = document.createElement('a');
        logoutLink.href = 'PaginaPrincipal.html';
        logoutLink.textContent = 'Logout';
        logoutLi.appendChild(logoutLink);
        menu.appendChild(logoutLi);
        
        const links = menu.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
            links[i].classList.add('menu-link');
        }
    }
});
