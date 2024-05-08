document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const clearBtn = document.getElementById('clearBtn');
    const cpfInput = document.getElementById('cpf');

    cpfInput.addEventListener('input', function(event) {
        // Remove todos os caracteres não numéricos
        const cpf = event.target.value.replace(/\D/g, ''); 
        
        // Formata o CPF com a máscara
        const formattedCPF = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        
        // Atualiza o valor do campo com o CPF formatado
        event.target.value = formattedCPF;
    });

    signupForm.addEventListener('submit', function(event) {
        console.log('Formulário enviado');
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const cpf = cpfInput.value;
        const telefone = document.getElementById('Telefone').value;
        const dataNascimento = document.getElementById('DataNascimento').value;
        
        console.log('Dados do formulário:');
        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Senha:', password);
        console.log('Confirmação de Senha:', confirmPassword);
        console.log('CPF:', cpf);
        console.log('Telefone:', telefone);
        console.log('Data de Nascimento:', dataNascimento);
        
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
            alert('Você deve ter pelo menos 18 anos para se cadastrar.');
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
    
    function validateCPF(cpf) {
        // Remove caracteres não numéricos
        cpf = cpf.replace(/\D/g, '');

        // Verifica se o CPF tem 11 dígitos numéricos
        if (cpf.length !== 11) {
            return false;
        }

        // Verifica se todos os dígitos são iguais (ex: 000.000.000-00)
        if (/^(\d)\1{10}$/.test(cpf)) {
            return false;
        }

        // Calcula os dígitos verificadores
        let sum = 0;
        let remainder;

        for (let i = 1; i <= 9; i++) {
            sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }

        remainder = (sum * 10) % 11;

        if (remainder === 10 || remainder === 11) {
            remainder = 0;
        }

        if (remainder !== parseInt(cpf.substring(9, 10))) {
            return false;
        }

        sum = 0;
        for (let i = 1; i <= 10; i++) {
            sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }

        remainder = (sum * 10) % 11;

        if (remainder === 10 || remainder === 11) {
            remainder = 0;
        }

        if (remainder !== parseInt(cpf.substring(10, 11))) {
            return false;
        }

        return true;
    }

    function validateDataNascimento(dataNascimento) {
    // Verifica se a data de nascimento foi fornecida
    if (!dataNascimento) {
        return false;
    }

    // Calcula a data atual
    const hoje = new Date();

    // Converte a data de nascimento fornecida para um objeto Date
    const dataNascimentoDate = new Date(dataNascimento);

    // Calcula a diferença de anos entre a data atual e a data de nascimento
    const idade = hoje.getFullYear() - dataNascimentoDate.getFullYear();

    // Verifica se a diferença de anos é menor que 18
    if (idade < 18) {
        return false;
    }

    // Se passar por todas as verificações, a data de nascimento é válida
    return true;
}

    function clearForm() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
        document.getElementById('cpf').value = '';
        document.getElementById('DataNascimento').value = '';
        document.getElementById('Telefone').value = '';
        document.getElementById('name').focus();
    }
});
