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



 // Array de frases
 const frases = [
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
  "Desista de desistir!",
  "A dor de hoje é a força de amanhã.",
  "Não há limites quando você está determinado a ultrapassá-los.",
  "Treine até seus ídolos virarem rivais.",
  "Seu corpo aguenta mais do que sua mente imagina.",
  "O único treino ruim é aquele que não aconteceu.",
  "Sem esforço, não há progresso.",
  "Desafie seus limites todos os dias.",
  "Acredite no processo e os resultados virão.",
  "O cansaço passa, o resultado fica.",
  "Você não precisa ser melhor do que ninguém, apenas melhor do que ontem.",
  "Não conte as repetições, faça as repetições contarem.",
  "Treine como se fosse uma batalha e seu corpo será seu troféu.",
  "É você contra você mesmo, todo dia, toda hora.",
  "Não é sobre vencer os outros, é sobre vencer seus limites.",
  "Cada gota de suor é um passo mais perto do seu objetivo.",
  "Um corpo em movimento motiva uma mente determinada.",
  "Transforme seus 'eu não consigo' em 'eu vou conseguir'.",
  "O corpo alcança o que a mente acredita.",
  "Quanto mais você sua na academia, menos sangra na vida.",
  "O único obstáculo entre você e seu objetivo é você mesmo.",
  "Disciplina é o caminho mais curto para os resultados.",
  "A força não vem da capacidade física, ela vem de uma vontade indomável.",
  "Seu maior concorrente é a pessoa que você vê no espelho.",
  "Não importa o quão devagar você vá, desde que você não pare.",
  "Dor é temporária, orgulho é para sempre.",
  "Você nunca saberá o quão forte é, até ser sua única opção.",
  "A consistência é o segredo que ninguém quer ouvir.",
  "O fracasso é uma lição disfarçada de oportunidade.",
  "Não espere por uma oportunidade perfeita. Crie uma!",
  "Corpo saudável, mente poderosa.",
  "A vitória começa na mente.",
  "Construa o seu corpo, molde a sua mente.",
  "O progresso é a soma de pequenos esforços repetidos diariamente.",
  "O treino de hoje será o resultado que você verá amanhã.",
  "Deixe suas desculpas de lado e veja sua força aparecer.",
  "Vá além das expectativas, principalmente as suas.",
  "A batalha é longa, mas a recompensa é para sempre.",
  "Você não vai sempre estar motivado, então aprenda a ser disciplinado."
];

// Função para exibir uma frase aleatória
function mostrarFraseAleatoria() {
  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  document.getElementById('frase').textContent = frases[indiceAleatorio];
}

// Chama a função ao carregar a página
window.onload = mostrarFraseAleatoria;

// adicionar number 


