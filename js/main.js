function descobrirCDZ(){

    const texto = document.querySelector("h1");
    const data = document.querySelector('#data').value;
    const imagem = document.querySelector("img");

    if (data > '03/21' && data < '04/20') {
        texto.innerHTML = "Áries: Mu";
        imagem.setAttribute("src","img/aries.png");
        imagem.setAttribute("width","700px");
    }
    else if (data > '04/21' && data < '05/20') {
        texto.innerHTML = "Touro: Aldebaran";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","700px");
    }

    else if (data > '05/21' && data < '06/20') {
        texto.innerHTML = "Gêmeos: Saga";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","700px");
    }

    else if (data > '06/21' && data < '07/21') {
        texto.innerHTML = "Câncer: Máscara da Morte";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","700px");
    }

    else if (data > '07/22' && data < '08/22') {
        texto.innerHTML = "Leão: Aiolia";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","800px");
    }

    else if (data > '08/23' && data < '09/22') {
        texto.innerHTML = "Virgem: Shaka";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","700px");
    }

    else if (data > '09/23' && data < '10/22') {
        texto.innerHTML = "Libra: Dohko";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","500px");
    }

    else if (data > '10/23' && data < '11/21') {
        texto.innerHTML = "Escorpião: Milo";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","700px");
    }

    else if (data > '11/22' && data < '12/21') {
        texto.innerHTML = "Sagitário: Aiolos";
        imagem.setAttribute("src","img/sagitario.png");
        imagem.setAttribute("width","700px");
    }

    else if (data > '12/22' && data < '01/20') {
        texto.innerHTML = "Capricórnio: Shura";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","700px");
    }

    else if (data > '01/21' && data < '02/19') {
        texto.innerHTML = "Aquário: Camus";
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","700px");
    }

    else if (data >'02/20' && data < '03/20') {
        texto.innerHTML = "Peixes: Afrodite";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","700px");
    }

    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","550px");
    }

}