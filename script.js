document.getElementById('enviarMensagem').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    if (nome && mensagem) {
      const divMensagem = document.createElement('div');
      divMensagem.classList.add('mensagem');
      divMensagem.innerHTML = `<strong>${nome}</strong>: ${mensagem}`;
      document.getElementById('mensagens').appendChild(divMensagem);
      document.getElementById('mensagem').value = ''; // Limpar campo de mensagem
    }
  });
  
  function iniciarLive() {
    const videoElement = document.getElementById('videoLive');
    videoElement.style.display = 'block'; // Exibe o player de vídeo
  
    // Acessa a webcam do usuário
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        videoElement.srcObject = stream;
        videoElement.play();
      })
      .catch(function(error) {
        console.error("Erro ao acessar a webcam:", error);
      });
  }
  