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
                afirmacao: ""
            },
            {
                texto: "b) Redução do nível de poluição sonora.",

                afirmacao: alternativa a: "A preservação das florestas contribui para o aumento da biodiversidade ao fornecer habitats diversos para uma grande variedade de espécies animais e vegetais."

            }
           
        ]
    },
    {
        enunciado: "Qual prática pode ser vantajosa para a conservação da água.?",
        alternativas: [
            {
                texto: "a) Uso de sistemas de irrigação por gotejamento.",
                afirmacao: "afirmacao3"
            },
            {
                texto:b) Aumento do uso de água em áreas agrícolas.",
            
                afirmacao: "alternativa a: O uso de sistemas de irrigação por gotejamento é vantajoso para a conservação da água, pois entrega água diretamente às raízes das plantas, reduzindo o desperdício e melhorando a eficiência do uso da água.

"
            }
           
        ]
    },
    {
        enunciado: "Como podemos incentivar o uso de energia solar e outras formas de energia limpa, especialmente em comunidades carentes?",
        alternativas: [
            {
                texto: "Defendendo políticas públicas que subsidiem a energia solar para famílias de baixa renda.",
                afirmacao:"afirmacao5"
            },
            {
                texto: "Promovendo a instalação de painéis solares em escolas e centros comunitários de comunidades marginalizadas.",
                afirmacao:"afirmacao6"
            }
        ]alternativa a: O uso de sistemas de irrigação por gotejamento é vantajoso para a conservação da água, pois entrega água diretamente às raízes das plantas, reduzindo o desperdício e melhorando a eficiência do uso da água.


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