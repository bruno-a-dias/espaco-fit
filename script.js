document.addEventListener("DOMContentLoaded", function () {
    // Validação do Formulário
    const form = document.getElementById('cta-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Validação Simples
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (!validateEmail(emailInput.value)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        alert('Formulário enviado com sucesso!');
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Navegação Suave
    const links = document.querySelectorAll('.cta');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
