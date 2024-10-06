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
            top: 5, // Mover para baixo
            behavior: 'smooth' // Rolagem suave
        });

        // Reinicia o scroll se chegar ao final
        if (rankingDiv.scrollTop + clientHeight >= scrollHeight) {
            rankingDiv.scrollTop = 0; // Reinicia para o topo
        }
    }
}

// Chama a função de scroll automático a cada 50ms
setInterval(autoScroll, 50);





    document.addEventListener('DOMContentLoaded', function() {
        const btnTreino = document.getElementById('btnTreino');
        const btnCardio = document.getElementById('btnCardio');
        const tipoInput = document.getElementById('tipo');
        
        // Função para lidar com a seleção dos botões
        function handleSelection(button, value) {
          // Remover a classe "selected" de ambos os botões
          btnTreino.classList.remove('selected');
          btnCardio.classList.remove('selected');
          
          // Adicionar a classe "selected" ao botão clicado
          button.classList.add('selected');
          
          // Definir o valor do campo oculto
          tipoInput.value = value;
        }
      
        // Adicionar ouvintes de eventos para os botões
        btnTreino.addEventListener('click', function() {
          handleSelection(btnTreino, 'Treino');
        });
      
        btnCardio.addEventListener('click', function() {
          handleSelection(btnCardio, 'Cardio');
        });
      
      });

      



          // Seleciona todos os botões
    const buttons = document.querySelectorAll('.btn-km');
    let selectedButton = null;

    // Adiciona evento de clique em cada botão
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do botão

            // Desmarca o botão previamente selecionado
            if (selectedButton) {
                selectedButton.classList.remove('selected');
            }

            // Marca o botão atual como selecionado
            this.classList.add('selected');
            selectedButton = this;

            // Atualiza o valor do campo oculto
            document.getElementById('selectedValue').value = this.dataset.value;
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
      const buttons = document.querySelectorAll('.btn-km');  // Seleciona todos os botões
      const distanciaInput = document.getElementById('distancia');  // O input oculto
  
      // Função para lidar com a seleção dos botões
      function handleSelection(button, value) {
          // Remover a classe "selected" de todos os botões
          buttons.forEach(btn => btn.classList.remove('selected'));
          
          // Adicionar a classe "selected" ao botão clicado
          button.classList.add('selected');
          
          // Definir o valor do campo oculto com o data-value do botão clicado
          distanciaInput.value = value;
      }
  
      // Adicionar ouvintes de eventos para todos os botões
      buttons.forEach(button => {
          button.addEventListener('click', function() {
              const value = this.getAttribute('data-value');
              handleSelection(button, value);
          });
      });
  });



  