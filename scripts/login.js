document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const clearBtn = document.getElementById('clearBtn');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!validateEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }
        
        if (password.trim() === '' || !validatePassword(password)) {
            alert('Por favor, insira uma senha válida.');
            return;
        }
        
        alert('Validação realizada com sucesso');
        window.location.href = 'PaginaPrincipal.html?isLoggedIn=true';
    });  
    
    clearBtn.addEventListener('click', function() {
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('email').focus();
    });
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function validatePassword(password) {
        const re = /^(?=.*\d)(?=.*[A-Z])(?=.*[@#$%&*!?/\\|\-_+.=])[^\s]{6,}$/;
        const invalidChars = /[¨{}[\] ́`~^:;<>,"']/;
        return re.test(password) && !invalidChars.test(password);
    }
}); 
