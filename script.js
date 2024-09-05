const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é um benefício importante da preservação das florestas.?"
        alternativas: [
            {
                texto: "a) Aumenta a biodiversidade.",
                afirmacao: "A preservação das florestas ajuda a aumentar a biodiversidade ao
Fornecer habitat para uma ampla gama de espécies animais e vegetais."
            },
            {
                texto: "b) Reduz a tempertura local.",

                afirmacao:"As florestas também desempenham um papel na redução da temperatura local, criando um microclima mais fresco através da evapotranspiração e fornecendo sombra."

            }
           
        ]
    },
    {
        enunciado: "Qual prática pode ser vantajosa para a conservação da água.?",
        alternativas: [
            {
                texto: "a) Implementação de sistemas de captação de água da chuva."
                afirmacao: "A implementação de sistemas de captação de água da chuva permite armazenar e reutilizar água, contribuindo para a conservação dos recursos hídricos."
            },
            {
                texto:"b) Uso de produtos químicos para purificação.",
            
                afirmacao: "Embora o uso de produtos químicos para purificação possa melhorar a qualidade da água, não é uma estratégia direta para conservar água, mas sim para trata-la e garantir sua potabilidade."

"
            }
           
        ]
    },
    {
        enunciado: "Qual é um impacto da poluição plástica nos oceanos?."
        alternativas: [
            {
                texto: "a) Aumento da proliferação de algas.",
                afirmacao:"A  poluição plástica pode, indiretamente, contribuir para o aumento da proliferação de algas ao fornecer uma superfície onde essas algas podem crescer, alterando os ecossistemas marinhos."
            },
            {
                texto: "b) Danos à vida marinha.",
                afirmacao:"A poluição plástica causa danos diretos à vida marinha, com animais marinhos consumindo ou ficando presos em detritos plásticos, o que pode levar a ferimentos ou morte."
            }
        (resumo) : A conservação ambiental é essencial para a saúde do nosso planeta e a preservação de seus recursos naturais. As florestas são vitais não apenas para aumentar a biodiversidade, mas também para reduzir a temperatura local, criando ambientes mais equilibrados. Para a conservação da água, sistemas de captação de água da chuva são uma prática eficaz que permite a reutilização e a conservação dos recursos hídricos. No contexto da poluição plástica, embora a poluição possa contribuir para o crescimento de algas em alguns casos, seu impacto mais crítico é o dano direto à vida marinha, prejudicando ecossistemas e a saúde dos animais. Compreender esses aspectos é
Fundamental para adotar práticas sustentáveis e promover um futuro mais verde.


    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";alternativa a: O uso de sistemas de irrigação por gotejamento é vantajoso para a conservação da água, pois entrega água diretamente às raízes das plantas, reduzindo o desperdício e melhorando a eficiência do uso da água.



function mostraPergunta () {
   if (atual >= perguntas. length) i
      mostraResultado () ;
      return;
   }
   perguntaAtual = perguntas [atual];
   caixaPerguntas. textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   textoResultado.textContent = "";
   mostraAlternativas () ;
}

function mostraAlternativas (){
   for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document. createElement ("button") ;
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener ("click", ()=>
respostaSelecionada (alternativa) );
    caixaAlternativas.appendChild (botaoAlternativa);
   }
}
function respostaSelecionada (opcaoSelecionada) 1
   const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++
    mostraPergunta () ;
}

function mostraResultado () }
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
   mostraPergunta();
