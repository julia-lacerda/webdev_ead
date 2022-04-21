function validar() {
    var nome = document.getElementById("nome");
    var senha = document.getElementById("senha");
    var data = document.getElementById("datemax");
    var quantidade = document.getElementById("quantidade");
    var telefone = document.getElementById("phone");

    if (!nome.checkValidity()) {

        nome.setCustomValidity('Por favor, digite um nome válido');
        document.getElementById('erro_msg_nome').innerHTML = nome.validationMessage;
        document.getElementById('nome').style.background="#FFC0CB";
    }
    
    if (!senha.checkValidity()) {

        senha.setCustomValidity('Por favor, digite uma senha valida');
        document.getElementById('erro_msg_senha').innerHTML = senha.validationMessage;
        document.getElementById('senha').style.background = "#FFC0CB";
    }

    if (!data.checkValidity()) {

        data.setCustomValidity('Por favor, digite uma data válida');
        document.getElementById('erro_msg_data').innerHTML = data.validationMessage;
        document.getElementById('datemax').style.background="#FFC0CB";
    }

    if (!quantidade.checkValidity()) {

        quantidade.setCustomValidity('Por favor, digite uma quantidade válida');
        document.getElementById('erro_msg_quantidade').innerHTML = quantidade.validationMessage;
        document.getElementById('quantidade').style.background="#FFC0CB";
    }

    if (!telefone.checkValidity()) {

        telefone.setCustomValidity('Por favor, digite um telefone válido');
        document.getElementById('erro_msg_phone').innerHTML = telefone.validationMessage;
        document.getElementById('phone').style.background="#FFC0CB";
    }
}
