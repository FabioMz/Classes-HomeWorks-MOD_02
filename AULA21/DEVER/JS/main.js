const palavrasSorteadas = [ "JOGO",
                            "RATO",
                            "GATO",
                            "PATO",
                            "SAPO",
                            "LULA",
                            "CAMA",
                            "VASO",
                            "PRETO",
                            "FORCA",
                            "PIADA",
                            "PORTA",
                            "FILME",
                            "CHAVE",
                            "MOLHO",
                            "HOMEM",
                            "MULHER",
                            "CHAVEZ",
                            "XADREZ",
                            "CODIGO",
                            "MUSICA",
                            "BRANCO",
                            "PIRATA",
                            "ANIMAL",
                            "CIDADE",
                            "CINEMA",
                            "BRASIL",
                            "MENINA",
                            "MENINO",
                            "MOLEQUE",
                            "MEDIEVAL",
                            "PROGRAMA",
                            "PIRRALHO",
                            "MIZERAVI",
                        ];
        // Setando Cronômetro
        var spanCrono = document.getElementById("cronometro");

        var tempo = 59;

        var cronometro =  setInterval(()=>{
            spanCrono.innerHTML = tempo;
        
            if(tempo <= 10){
                spanCrono.style.color = "red";
            }

            if(tempo < 10){
                spanCrono.style.marginLeft = "-35px";
            }
            
            if(tempo == 0){
                clearInterval(cronometro);
                spanCrono.style.display = "none";
                perde();
            }
        
            tempo--;
        }, 1000);
                        
        //Sorteia uma palavra do array palavrasSorteadas   
        const palavraSecreta = palavrasSorteadas[Math.floor(Math.random() * palavrasSorteadas.length)];
        const divInputs = document.getElementById("divInputs");
        const letra = document.getElementById("inputLetra");
        var erros = 0;
        var certas = 0;
        var inputs = "";
        // Adiciona Inputs de acordo com número de letras na palavra sorteada
        for(let i = 0; i < palavraSecreta.length ; i++){
            inputs += '<input type="text" class="letra col m-2 form-control" id="letra'+ i +'" maxlength="1" size="1" disabled>';
        }
        divInputs.innerHTML = inputs;
        
        // Definindo variáveis por classe
        const letras = document.getElementsByClassName("letra");
        const imagens = document.getElementsByClassName("membro");        

        // Function do Botão Tentar Sorte
        function tentativa(){
           index = [];
           let contador = 0;
           
           for(let i = 0; i < letras.length ; i++){
                if( letras[i].value.toUpperCase() == letra.value.toUpperCase()){
                    contador++;
                }
           }
           if(contador > 0){
               return; //para a função
           }

            // Loop para Acertos    
            for(let i = 0; i <  palavraSecreta.length ; i++){
                if( palavraSecreta[i] == letra.value.toUpperCase()){
                    // Sistema para aparição de meme
                    tempoMeme = 1;
                    var memeEmCena =  setInterval(()=>{
                        vemMiseravi();
                    
                        if(tempoMeme == 0){
                            clearInterval(memeEmCena);
                            vaiMiseravi();
                        }
                    
                        tempoMeme--;
                    }, 500)
                    // Meme Fim --------------------
                    index.push(i);
                    certas++;
                    console.log("Acertou " + certas + " vezes.");
                }
            }

            // Loop para Erros 
            if(index.length < 1){
                // Sistema para aparição de meme
                tempoMeme = 1;
                var memeEmCena =  setInterval(()=>{
                    vemFausto();
                
                    if(tempoMeme == 0){
                        clearInterval(memeEmCena);
                        vaiFausto();
                    }
                
                    tempoMeme--;
                }, 500)
                
                // Meme Fim --------------------
                document.getElementById("letrasErradas").innerHTML += letra.value + " - ";
                imagens[erros].style.display = "block";
                erros++;
                console.log("Errou " + erros + " vezes");
            } else{
                for(let i = 0 ; i < index.length ; i++){
                letras[index[i]].value = letra.value;
                }
            }

            // Functions Finais
            setTimeout(function(){
                 if(certas == palavraSecreta.length /* TESTE >> */ && tempo > 0){
                        ganha()
                    }else if(erros == 6 /* TESTE >> */ || tempo == 0){
                        perde()
                    }
            },500);
           
        }

        // Funções de eventos condicionais
        function vemFausto() {
            document.getElementById("erooCont").style.display = "block";
        }

        function vaiFausto() {
            document.getElementById("erooCont").style.display = "none";
        }

        function vemMiseravi() {
            document.getElementById("miseraviCont").style.display = "block";
        }

        function vaiMiseravi() {
            document.getElementById("miseraviCont").style.display = "none";
        }

        function perde() {
            clearInterval(cronometro);
            letra.disabled = "disabled";
            spanCrono.style.color = "rgba(255, 255, 255, 0)";
            document.getElementById("faleceu").style.display = "block";
            document.getElementById("btn-tentaSorte").style.display = "none";
            document.getElementById("btn-tentaSorte").disabled="disabled";
            document.getElementById("btn-tentaOutra").style.display = "block";
            document.getElementById("inputLetra").style.display = "none";
            document.getElementById("cabeca").style.display = "block";
            document.getElementById("corpo").style.display = "block";
            document.getElementById("bracoD").style.display = "block";
            document.getElementById("bracoE").style.display = "block";
            document.getElementById("pernaD").style.display = "block";
            document.getElementById("pernaE").style.display = "block";
        }

        function ganha() {
            clearInterval(cronometro);
            letra.disabled = "disabled";
            spanCrono.style.color = "rgba(255, 255, 255, 0)";
            document.getElementById("faustoGanhaCont").style.display = "block";
            document.getElementById("btn-tentaSorte").style.display = "none";
            document.getElementById("btn-tentaSorte").disabled="disabled";
            document.getElementById("btn-tentaOutra").style.display = "block";
            document.getElementById("inputLetra").style.display = "none";
            document.getElementById("cabeca").style.display = "none";
            document.getElementById("corpo").style.display = "none";
            document.getElementById("bracoD").style.display = "none";
            document.getElementById("bracoE").style.display = "none";
            document.getElementById("pernaD").style.display = "none";
            document.getElementById("pernaE").style.display = "none";
        }

        function tentaOutra() {
            window.location.replace("./index.html");
        }