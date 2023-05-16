function modoClaro() {
    var fundo = document.getElementById("pagina");
    fundo.style.backgroundColor = "#D3D3D3";
    var texto = document.getElementsByClassName("menu__links");
    for (var i = 0; i < texto.length; i++) {
        texto[i].style.color = "#000000";
    }
}

function modoEscuro() {
    var fundo = document.getElementById("pagina");
    fundo.style.backgroundColor = "#1C1C1C";
    var texto = document.getElementsByClassName("menu__links");
    for (var i = 0; i < texto.length; i++) {
        texto[i].style.color = "#F8F8FF";
    }
}

function modoNight() {
    var fundo = document.getElementById("pagina");
    fundo.style.backgroundColor =  "#4B0082";
    var texto = document.getElementsByClassName("menu__links");
    for (var i = 0; i < texto.length; i++) {
        texto[i].style.color =  "#F8F8FF";
    }
}

function validar(){
        var nome = document.getElementById("nome");
        var telefone = document.getElementById("telefone");
        var email = document.getElementById("email");

        if (nome.value == "" || telefone.value == "" || email.value == ""){
            alert("Preencha todos os campos para proseguir");
        }
        else {
            alert("Sua mensagem foi enviada!");
        }
}

var questoes = [
    {
        questao: "1 - A camada de sólidos formada no tanque de vinificação é chamada:",
        respostas: {
            a: 'Nata',
            b: 'Chapéu',
            c: 'Mosto',
            d: 'Remontado'
        },
        correta: 'b'
    },
    {
        questao: "2 - Para a produção de vinhos brancos:",
        respostas: {
            a: 'São necessárias uvas de casca branca',
            b: 'São recomendadas temperaturas mais elevadas de fermentação',
            c: 'São necessários tanques com temperatura controlada',
            d: 'Não importa a cor de uva e sim a maceração'
        },
        correta: 'd'
    },
    {
        questao: "3 - Os aromas terciários nos vinhos:",
        respostas: {
            a: 'São aqueles vindos da fruta',
            b: 'São aqueles advindos da fermentação',
            c: 'São aqueles advindos da passagem por barricas',
            d: 'São aqueles advindos do amadurecimento em garrafa'
        },
        correta: 'd'
    },
    {
        questao: "4 - O termo 'brut' para os espumantes refere-se a:",
        respostas: {
            a: 'Tempo sur lie',
            b: 'Tempo de envelhecimento em barricas',
            c: 'Teor de açucar residual',
            d: 'Pressão interna de gás carbônico'
        },
        correta: 'c'
    },
    {
        questao: "5 -Num espumante 'Nature' o seguinte processo não foi realizado:",
        respostas: {
            a: 'Amadurecimento sur lie',
            b: 'Degorge(ou degorgemánt)',
            c: 'Adição do licor de tiragem',
            d: 'Adição do licor de expedição para definição da doçura final'
        },
        correta: 'd'
    },
    {
        questao: "6 - Na degustação de vinhos, a acidez provoca:",
        respostas: {
            a: 'Salivação',
            b: 'Secura na língua e gengivas',
            c: 'Sensação de cremosidade e volume',
            d: 'Adistringência'
        },
        correta: 'a'
    },
    {
        questao: "7 - Um elemento que NÃO influencia no envelhecimento do vinho é:",
        respostas: {
            a: 'Luz.',
            b: 'Calor.',
            c: 'Disposição.',
            d: 'Nenhuma das alternativas.'
        },
        correta: 'd'
    },
    {
        questao: "8 - Termo blanc de blancs é utilizado frequentemente para referenciar um:",
        respostas: {
            a: 'Espumante.',
            b: 'Vinho branco.',
            c: 'Vinho branco doce americano.',
            d: 'Vinho branco fortificado.'
        },
        correta: 'a'
    },
    {
        questao: "9 - Todas são uvas de origem francesa, exceto:",
        respostas: {
            a: 'Cabernet Franc.',
            b: 'Malbec.',
            c: 'Riesling.',
            d: 'Carmenère.'
        },
        correta: 'c'
    },
    {
        questao: "10 - Qual das alternativas abaixo traduz uma expressão usada por degustadores:",
        respostas: {
            a: 'Longo - De grande persistência.',
            b: 'Magro - Sem corpo.',
            c: 'Chato - Vinho sem expressão.',
            d: 'Oxidado - Vinho ao estilo de vinagre.'
        },
        correta: 'a'
    },
];

var quizContainer = document.getElementById('quiz')
var resultadoContainer = document.getElementById('resultado')
var botaoCofirmar = document.getElementById('confirmar')

gerarquiz(questoes, quizContainer, resultadoContainer, botaoCofirmar);

function gerarquiz(questoes, quizContainer, resultadoContainer, botaoCofirmar) {

    function mostraQuestoes(questoes, quizContainer) {
        var saida = [];
        var respostas;

        for(var i=0; i < questoes.length; i++) {
            respostas = [];

            for(letra in questoes[i].respostas) {
                respostas.push(
                    '<label>'
                        + '<input type="radio" name="questao'+i+'" value="'+letra+'">'
                        + letra + ' - '
                        + questoes[i].respostas[letra]
                    + '</label>'
                );
            }

            saida.push(
                    '<div class="questao">' + questoes[i].questao + '</div>'
                    + '<div class="respostas">' + respostas.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = saida.join('');
    }

    function mostraResultados(questoes, quizContainer, resultadoContainer) {

        var respostaContainer = quizContainer.querySelectorAll('.respostas');
    
        var respostaUsuario = '';
        var numeroCorreto = 0;
    
        for (var i = 0; i < questoes.length; i++) {
            respostaUsuario = (respostaContainer[i].querySelector('input[name=questao' + i + ']:checked') || {}).value;
    
            if (respostaUsuario === questoes[i].correta) {
                numeroCorreto++;
                respostaContainer[i].querySelector('input[value="' + respostaUsuario + '"]').parentNode.style.color = 'lightgreen';
            } else if (respostaUsuario !== '') {
                respostaContainer[i].querySelector('input[value="' + respostaUsuario + '"]').parentNode.style.color = 'red';
            }
        }
    
        resultadoContainer.innerHTML = numeroCorreto + ' de ' + questoes.length;
    }
    

    mostraQuestoes(questoes, quizContainer);

    botaoCofirmar.onclick = function() {
        mostraResultados(questoes, quizContainer, resultadoContainer);
    }
}