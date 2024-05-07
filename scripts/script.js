document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const isLoggedin = urlParams.get('isLoggedIn');
    
    if (isLoggedin === 'true') {
        const menu = document.getElementById('menu');
        
        // Remover os links existentes
        menu.innerHTML = '';
        
        // Adicionar o link "Solicitar Serviços"
        const solicitacaoLi = document.createElement('li');
        const solicitacaoLink = document.createElement('a');
        solicitacaoLink.href = 'solicitacao.html';
        solicitacaoLink.textContent = 'Solicitar Serviços';
        solicitacaoLi.appendChild(solicitacaoLink);
        menu.appendChild(solicitacaoLi);
        
        // Adicionar o link "Logout"
        const logoutLi = document.createElement('li');
        const logoutLink = document.createElement('a');
        logoutLink.href = 'PaginaPrincipal.html'; // Aqui você deve definir a página para fazer logout
        logoutLink.textContent = 'Logout';
        logoutLi.appendChild(logoutLink);
        menu.appendChild(logoutLi);
        
        // Adicione estilos aos novos links
        const links = menu.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
            links[i].classList.add('menu-link');
        }
    }
});
