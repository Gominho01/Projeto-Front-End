document.addEventListener('DOMContentLoaded', function() {
    const changePasswordForm = document.getElementById('changePasswordForm');
    const clearBtn = document.getElementById('clearBtn');
    
    changePasswordForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (!validateEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }
        
        if (password.trim() === '') {
            alert('Por favor, insira uma nova senha.');
            return;
        }
        
        if (confirmPassword.trim() === '') {
            alert('Por favor, confirme a nova senha.');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('As senhas não coincidem. Por favor, insira novamente.');
            return;
        }
        
        if (!validatePasswordComposition(password)) {
            alert('A senha deve ter pelo menos 6 caracteres e conter pelo menos um caractere numérico, uma letra maiúscula e um dos seguintes caracteres especiais: @ # $ % & * ! ? / \\ | - _ + . =');
            return;
        }
        
        alert('Validação realizada com sucesso. Redirecionando para a página anterior.');
        window.history.back();
    });
    
    clearBtn.addEventListener('click', function() {
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
        document.getElementById('email').focus();
    });
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function validatePasswordComposition(password) {
        if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return false;
        }
        
        const re = /^(?=.*\d)(?=.*[A-Z])(?=.*[@#$%&*!?/\\|\-_+.=]).{6,}$/;
        if (!re.test(password)) {
            alert('A senha deve conter pelo menos um caractere numérico, uma letra maiúscula e um dos seguintes caracteres especiais: @ # $ % & * ! ? / \\ | - _ + . =');
            return false;
        }
        
        return true;
    }
});
