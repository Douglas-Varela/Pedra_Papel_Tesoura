
        var escolhaJogador1 = '';
        var escolhaJogador2 = '';

        function selecionarJogada(jogada, jogador) {
            if (jogador === 1) {
                escolhaJogador1 = jogada;
                document.getElementById('jogador1').classList.add('escondido');
                document.getElementById('jogador2').classList.remove('escondido');
            } else {
                escolhaJogador2 = jogada;
                determinarVencedor();
            }
        }

        function determinarVencedor() {
            if (escolhaJogador1 === escolhaJogador2) {
                mostrarResultado('Empate!');
            } else if ((escolhaJogador1 === 'pedra' && escolhaJogador2 === 'tesoura') ||
                       (escolhaJogador1 === 'papel' && escolhaJogador2 === 'pedra') ||
                       (escolhaJogador1 === 'papel' && escolhaJogador2 === 'spock') ||
                       (escolhaJogador1 === 'tesoura' && escolhaJogador2 === 'papel') ||
                       (escolhaJogador1 === 'tesoura' && escolhaJogador2 === 'largato') ||
                       (escolhaJogador1 === 'spock' && escolhaJogador2 === 'tesoura') ||
                       (escolhaJogador1 === 'spock' && escolhaJogador2 === 'pedra') ||
                       (escolhaJogador1 === 'largato' && escolhaJogador2 === 'spock') ||
                       (escolhaJogador1 === 'largato' && escolhaJogador2 === 'papel')) {
                mostrarResultado('Jogador 1 venceu!');
            } else {
                mostrarResultado('Jogador 2 venceu!');
            }
        }

        function mostrarResultado(mensagem) {
            document.getElementById('resultado').textContent = mensagem;
            document.getElementById('jogador2').classList.add('escondido');
        }
