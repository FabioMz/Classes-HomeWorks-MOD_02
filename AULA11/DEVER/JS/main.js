var jogador = { nome:"", /*over:"",*/ time:"", posicao:"", idade:"", altura:"", peso:"" }

    function criaCard() {

        jogador.nome = document.getElementById("inputNome").value;
        // jogador.over = Number(document.getElementById("inputOverall").value);
        jogador.time = document.getElementById("inputTime").value.toUpperCase();
        jogador.posicao = document.getElementById("selectPos").value;
        jogador.idade = document.getElementById("inputIdade").value;
        jogador.altura = document.getElementById("inputAltura").value;
        jogador.peso = document.getElementById("inputPeso").value;

        // Switch p/ checagem de NOME
        switch (jogador.nome) {
            case "":
                alert("Favor, insira um nome!");
                document.getElementById("form-jogador").reset();
                return false;
            default:
                document.getElementById("spanNome").innerHTML = jogador.nome;
        }

        // Switch p/ checagem de OVERALL
        // switch (jogador.over) {
        //     case "":
        //         alert("Favor, insira um overall!");
        //         document.getElementById("form-jogador").reset();
        //         break
        //     case jogador.over <= 15:
        //         jogador.over = 15;
        //         break
        //     case jogador.over >= 99:
        //             jogador.over = 99;
        //             break
        //     default:
        //         document.getElementById("spanOverall").innerHTML = jogador.over;
        // }

        // Switch p/ checagem de TIME
        switch (jogador.time) {
            case "":
                alert("Favor, insira um time!");
                document.getElementById("form-jogador").reset();
                return false;
            default:
                document.getElementById("spanTime").innerHTML = jogador.time;
        }

        // Switch p/ checagem de POSIÇÃO
        switch (jogador.posicao) {
            case "disabled":
                alert("Favor, selecione um posição!");
                document.getElementById("form-jogador").reset();
                return false;
            default:
                document.getElementById("spanPosicao").innerHTML = jogador.posicao;
        }

        // Switch p/ checagem de IDADE
        switch (jogador.idade) {
            case "":
                alert("Favor, insira uma idade!");
                document.getElementById("form-jogador").reset();
                return false;
            default:
                document.getElementById("spanIdade").innerHTML = "IDADE: " + jogador.idade + " anos";
        }

        // Switch p/ checagem de ALTURA
        switch (jogador.altura) {
            case "":
                alert("Favor, insira uma altura!");
                document.getElementById("form-jogador").reset();
                return false;
            default:
                document.getElementById("spanAltura").innerHTML = "ALTURA: " + jogador.altura + "m";
        }

        // Switch p/ checagem de PESO
        switch (jogador.peso) {
            case "":
                alert("Favor, insira um peso!");
                document.getElementById("form-jogador").reset();
                return false;
            default:
                document.getElementById("spanPeso").innerHTML = "PESO: " + jogador.peso + "kg";
        }

        // let cardJog = "";

        // cardJog += '<div class="cardJog">'     +
        // '<div class="cardText over-pos">'      +
        //     '<span class="cardText over">'     +
        //         "99"                           +
        //     '<span>'                           +
        // '<div>'                                +
        // '<div class="cardText pos-pos">'       +
        //     '<span class="cardText pos">'      +
        //         jogador.posicao                +
        //     '<span>'                           +
        // '<div>'                                +
        // '<div class="cardText pos-tim">'       +
        //     '<span class="cardText tim">'      +
        //         jogador.time                   +
        //     '<span>'                           +
        // '<div>'                                +
        // '<div class="cardText pos-nom">'       +
        //     '<div class="centerText">'         +
        //         '<span class="cardText nom">'  +
        //             jogador.nome               +
        //         '<span>'                       +
        //     '<div>'                            +
        // '<div>'                                +
        // '<div class="cardText pos-ida">'       +
        //     '<span class="cardText ida">'      +
        //         "IDADE: "                      + 
        //             jogador.idade              +
        //         " anos"                        +
        //     '<span>'                           +
        // '<div>'                                +
        // '<div class="cardText pos-alt">'       +
        //     '<span class="cardText alt">'      +
        //         "ALTURA: "                     + 
        //             jogador.altura             +
        //         "m"                            +
        //     '<span>'                           +
        // '<div>'                                +
        // '<div class="cardText pos-pes">'       +
        //     '<span class="cardText pes">'      +
        //         "PESO: "                       + 
        //             jogador.peso               +
        //         "kg"                           +
        //     '<span>'                           +
        // '<div>'                                +
        // '<div>'

        // ----------------------------------------------------------------

            //  "Nome: "    + jogador.nome + "<br/>" +
            //  "Time: "    + jogador.time + "<br/>" +
            //  "Posição: " + jogador.posicao + "<br/>" +
            //  "Idade: "   + jogador.idade + "<br/>" +
            //  "Altura: "  + jogador.altura + "<br/>" +
            // "Peso: "    + jogador.peso +
            // '</div>'

        // ----------------------------------------------------------------

        // document.getElementById("cardJog").innerHTML = cardJog;
        document.getElementById("containerCards").style.display = "block";
        // document.getElementById("containerCards").scrollIntoView;
        document.getElementById("form-jogador").reset();

    };