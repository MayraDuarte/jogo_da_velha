//variaveis
let btn1 = 0;
let btn2 = 0;
let btn3 = 0;
let btn4 = 0;
let btn5 = 0;
let btn6 = 0;
let btn7 = 0;
let btn8 = 0;
let btn9 = 0;
let controle = 0;
let jogadas = 0;
let finalJogo = false;

//Click botao 1 
function clickBtn1() {

    let btn = document.getElementById('btn1');

    if (btn.value == " " && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.value = "x";
            btn1 = "x";
        } else {
            controle = 0;
            btn.value = "o";
            btn1 = "o";
        }
    }
    verificaGanhador();
}

//Click botao 2
function clickBtn2() {

    let btn = document.getElementById('btn2');

    if (btn.value == " " && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.value = "x";
            btn2 = "x";
        } else {
            controle = 0;
            btn.value = "o";
            btn2 = "o";
        }
    }
    verificaGanhador();
}

//Click botao 3
function clickBtn3() {
    let btn = document.getElementById('btn3');

    if (btn.value == " " && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.value = "x";
            btn3 = "x";
        } else {
            controle = 0;
            btn.value = "o";
            btn3 = "o";
        }
    }
    verificaGanhador();
}

//Click botao 4
function clickBtn4() {
    
    let btn = document.getElementById('btn4');

    if (btn.value == " " && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.value = "x";
            btn4 = "x";
        } else {
            controle = 0;
            btn.value = "o";
            btn4 = "o";
        }
    }
    verificaGanhador();
}

//Click botao 5
function clickBtn5() {
    
    let btn = document.getElementById('btn5');

    if (btn.value == " " && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.value = "x";
            btn5 = "x";
        } else {
            controle = 0;
            btn.value = "o";
            btn5 = "o";
        }
    }
    verificaGanhador();
}

//Click botao 6
function clickBtn6() {
    
    let btn = document.getElementById('btn6');

    if (btn.value == " " && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.value = "x";
            btn6 = "x";
        } else {
            controle = 0;
            btn.value = "o";
            btn6 = "o";
        }
    }
    verificaGanhador();
}

//Click botao 7
function clickBtn7() {
    
    let btn = document.getElementById('btn7');

    if (btn.value == " " && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.value = "x";
            btn7 = "x";
        } else {
            controle = 0;
            btn.value = "o";
            btn7 = "o";
        }
    }
    verificaGanhador();
}

//Click botao 8
function clickBtn8() {
    
    let btn = document.getElementById('btn8');

    if (btn.value == " " && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.value = "x";
            btn8 = "x";
        } else {
            controle = 0;
            btn.value = "o";
            btn8 = "o";
        }
    }
    verificaGanhador();
}

//Click botao 9
function clickBtn9() {
    
    let btn = document.getElementById('btn9');

    if (btn.value == " " && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.value = "x";
            btn9 = "x";
        } else {
            controle = 0;
            btn.value = "o";
            btn9 = "o";
        }
    }
    verificaGanhador();
}

//verificar ganhador 
function verificaGanhador() {
    let lblJogador = document.getElementById("lblJogador");
    let lblJogadas = document.getElementById("lblJogadas");

    //verifica se o jogador X ganhou
    if (btn1 == 'x' && btn2 == 'x' && btn3 == 'x') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador X ganhou!';
        lblJogadas.innerText = ' ';
        return;
    }
    if (btn4 == 'x' && btn5 == 'x' && btn6 == 'x') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador X ganhou!';
        lblJogadas.innerText = ' ';
        return;
    }
    if (btn7 == 'x' && btn8 == 'x' && btn9 == 'x') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador X ganhou!';
        lblJogadas.innerText = ' ';
        return;
    }
    if (btn1 == 'x' && btn4 == 'x' && btn7 == 'x') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador X ganhou!';
        lblJogadas.innerText = ' ';
        return;
    }
    if (btn2 == 'x' && btn5 == 'x' && btn8 == 'x') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador X ganhou!';
        lblJogadas.innerText = ' ';
        return;
    }
    if (btn3 == 'x' && btn6 == 'x' && btn9 == 'x') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador X ganhou!';
        lblJogadas.innerText = ' ';
        return;
    }
    if (btn1 == 'x' && btn5 == 'x' && btn9 == 'x') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador X ganhou!';
        lblJogadas.innerText = ' ';
        return;
    }
    if (btn3 == 'x' && btn5 == 'x' && btn7 == 'x') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador X ganhou!';
        lblJogadas.innerText = ' ';
        return;
    }
    if (btn1 == 'o' && btn2 == 'o' && btn3 == 'o') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador O ganhou!';
        lblJogadas.innerText = ' ';
        return;
    }
    if (btn4 == 'o' && btn5 == 'o' && btn6 == 'o') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador O ganhou!';
        lblJogadas.innerText = ' ';
        return;
    }
    if (btn7 == 'o' && btn8 == 'o' && btn9 == 'o') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador O ganhou!';
        lblJogadas.innerText = ' ';
        return;
    }
    if (btn1 == 'o' && btn4 == 'o' && btn7 == '') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador O ganhou!';
        lblJogadas.innerText = ' ';
        return;
    }
    if (btn2 == 'o' && btn5 == 'o' && btn8 == 'o') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador O ganhou!';
        lblJogadas.innerText = ' ';
        return;
    }
    if (btn3 == 'o' && btn6 == 'o' && btn9 == 'o') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador O ganhou!';
        lblJogadas.innerText = ' ';
        return;
    }
    if (btn1 == 'o' && btn5 == 'o' && btn9 == 'o') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador O ganhou!';
        lblJogadas.innerText = ' ';
        return;
    }
    if (btn3 == 'o' && btn5 == 'o' && btn7 == 'o') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador O ganhou!';
        lblJogadas.innerText = ' ';
        return;
    }
    if (jogadas == 9) {
        finalJogo = true;
        lblJogador.innerText = 'O jogo empatou!';
        lblJogadas.innerText = '';
        return;
    }
    if (controle == 0) {
        lblJogador.innerText = 'Jogador X';
    } else {
        lblJogador.innerText = 'Jogador O';
    }
    lblJogadas.innerText = '(' + (jogadas + 1) + 'ª Jogadas)';
}
//Click do botao reiniciar
function clickReiniciar() {
    btn1 = 0;
    btn2 = 0;
    btn3 = 0;
    btn4 = 0;
    btn5 = 0;
    btn6 = 0;
    btn7 = 0;
    btn8 = 0;
    btn9 = 0;
    controle = 0;
    jogadas = 0;
    finalJogo = false;

    let b1 = document.getElementById('btn1');
    let b2 = document.getElementById('btn2');
    let b3 = document.getElementById('btn3');
    let b4 = document.getElementById('btn4');
    let b5 = document.getElementById('btn5');
    let b6 = document.getElementById('btn6');
    let b7 = document.getElementById('btn7');
    let b8 = document.getElementById('btn8');
    let b9 = document.getElementById('btn9');

    b1.value = ' ';
    b2.value = ' ';
    b3.value = ' ';
    b4.value = ' ';
    b5.value = ' ';
    b6.value = ' ';
    b7.value = ' ';
    b8.value = ' ';
    b9.value = ' ';

    //Reiniciar Label
    let lblJogador = document.getElementById('lblJogador');
    let lblJogadas = document.getElementById('lblJogadas');
    lblJogador.innerText = 'Jogador X';
    lblJogadas.innerText = '(1ª Jogada)';
}