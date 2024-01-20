export default function exportPwd() {

    function random (min, max) {
        var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

        return numeroAleatorio
    }
    
    var lista = [];
    let senha = ''

    // Adicionar letras minúsculas
    for (var i = 97; i <= 122; i++) {
        lista.push(String.fromCharCode(i));
    }

    // Adicionar letras maiúsculas
    for (var i = 65; i <= 90; i++) {
        lista.push(String.fromCharCode(i));
    }

    // Adicionar números
    for (var i = 48; i <= 57; i++) {
        lista.push(String.fromCharCode(i));
    }

    // Adicionar caracteres especiais
    var caracteresEspeciais = "!@#$%&*_<>?~";
    for (var i = 0; i < caracteresEspeciais.length; i++) {
        lista.push(caracteresEspeciais[i]);
    }


    for(let i = 0; i < random(10,18); i++) {
        senha += lista[random(0,lista.length-1)]
    }

    console.log(lista)
    return senha;
}