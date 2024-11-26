// Alterna a visibilidade da senha
// Função para alternar a visibilidade da senha
function togglePasswordVisibility(event) {
    const toggleButton = event.currentTarget; // O botão clicado
    const passwordInput = toggleButton.previousElementSibling; // O input de senha correspondente

    const isPassword = passwordInput.type === 'password';

    // Alternar tipo do campo de senha
    passwordInput.type = isPassword ? 'text' : 'password';

    // Alternar ícone ou texto no botão
    toggleButton.textContent = isPassword ? '🔓' : '🔒';
}

// Adicionar evento de clique aos botões com a classe toggle-password-visibility
const toggleButtons = document.querySelectorAll('.toggle-password-visibility');
toggleButtons.forEach(button => {
    button.addEventListener('click', togglePasswordVisibility);
});
