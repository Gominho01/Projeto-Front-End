document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const clearBtn = document.getElementById('clearBtn');
    const cpfInput = document.getElementById('cnpj');

    cpf.addEventListener('input', function(event) {
        const cpf = event.target.value.replace(/\D/g, ''); 
        if (cpf.length > 0) {
            event.target.value = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
            event.target.value = '';
        }
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const cpf = cpfInput.value;
        const telefone = document.getElementById('Telefone').value;
        const dataNascimento = document.getElementById('DataNascimento').value;
        
        if (name.trim() === '') {
            alert('Por favor, insira seu nome.');
            return;
        }
 
        if (!validateEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        if (password.trim() === '') {
            alert('Por favor, insira uma senha.');
            return;
        }

        if (!validatePassword(password)) {
            alert('A senha deve ter pelo menos 6 caracteres, incluindo pelo menos um número, uma letra maiúscula e um dos seguintes caracteres especiais: @ # $ % & * ! ? / \\ | - _ + . =');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('As senhas não coincidem. Por favor, insira novamente.');
            return;
        }

        if (cpf.trim() === '' || !validateCPF(cpf)) {
            alert('Por favor, insira um CPF válido.');
            return;
        }

        if (telefone.trim() === '' || !validateTelefone(telefone)) {
            alert('Por favor, insira um número de telefone válido.');
            return;
        }

        if (dataNascimento.trim() === '' || !validateDataNascimento(dataNascimento)) {
            alert('Por favor, insira uma data de nascimento válida.');
            return;
        }
        
        window.location.href = 'PaginaPrincipal.html';
        alert('Cadastro realizado com sucesso.');
        // Limpar os campos do formulário
        clearForm();
    });

    clearBtn.addEventListener('click', function() {
        clearForm();
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

    function validateTelefone(telefone) {
        const re = /^\d{10,11}$/;
        return re.test(telefone);
    }
    
    function clearForm() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
        document.getElementById('cnpj').value = '';
        document.getElementById('DataNascimento').value = '';
        document.getElementById('Telefone').value = '';
        document.getElementById('name').focus();
    }
});
