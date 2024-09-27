  // Função para formatar a data no formato DD/MM/AA HH:MM:SS
  function updateLiveDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
    const year = String(now.getFullYear()).slice(2); // Apenas os dois últimos dígitos do ano
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedDate = `${day}/${month}/${year}`;
    document.getElementById("live-date").value = formattedDate;
}

        // Função que inicia a atualização automática a cada 1 segundo
        function startLiveDateUpdate() {
          updateLiveDate(); // Atualiza a data imediatamente
          setInterval(updateLiveDate, 1000); // Atualiza a cada 1000 ms (1 segundo)
      }

      // Inicia a função ao carregar a página
      window.onload = startLiveDateUpdate;

 // Define a data de início (próxima segunda-feira)
 const dataInicio = new Date('2024-09-23'); // Altere a data conforme necessário
 const totalDias = 90;

 function atualizarContador() {
     const dataAtual = new Date();
     const diffTime = Math.abs(dataAtual - dataInicio);
     const diasPassados = Math.floor(diffTime / (1000 * 60 * 60 * 24));
     const diasRestantes = Math.max(0, totalDias - diasPassados);

     document.getElementById('contador').innerText = `${diasPassados}/${totalDias}`;
 }

 atualizarContador();
 setInterval(atualizarContador, 1000 * 60 * 60); // Atualiza a cada hora





// adicionar number 

/*
const ranking = document.querySelector('.ranking');

ranking.addEventListener('click', () => {
  ranking.classList.toggle('expanded');
}); */


const rankingDiv = document.querySelector('.ranking');


// Função para fazer o scroll automático
function autoScroll() {
    const scrollHeight = rankingDiv.scrollHeight; // Altura total do conteúdo
    const clientHeight = rankingDiv.clientHeight; // Altura visível da div

    // Verifica se o conteúdo é maior que a altura visível
    if (scrollHeight > clientHeight) {
        rankingDiv.scrollBy({
            top: 1, // Mover para baixo
            behavior: 'smooth' // Rolagem suave
        });

        // Reinicia o scroll se chegar ao final
        if (rankingDiv.scrollTop + clientHeight >= scrollHeight) {
            rankingDiv.scrollTop = 0; // Reinicia para o topo
        }
    }
}

// Chama a função de scroll automático a cada 50ms
setInterval(autoScroll, -10);