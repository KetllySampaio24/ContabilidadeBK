
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;
    const nome = form.name.value;
    const email = form.email.value;
    const mensagem = form.message.value;

    fetch("https://formsubmit.co/ajax/emailtesteaquigmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: nome,
            email: email,
            message: mensagem,
            _subject: `Mensagem de ${nome} via site Contabilidade BK`,
            _template: "table",
            _captcha: "false"
        })
    })
    .then(response => {
        if (response.ok) {
            alert("✅ Sua mensagem foi enviada com sucesso!");
            form.reset();
        } else {
            alert("❌ Ocorreu um erro ao enviar sua mensagem.");
        }
    })
    .catch(error => {
        alert("⚠️ Erro de conexão. Tente novamente.");
    });
});

window.addEventListener("scroll", function () {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
