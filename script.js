document.addEventListener('DOMContentLoaded',function (){

    const aumentarFonteBotao=document.getElementByld('aumentar-fonte');
    const diminuiFonteBotao=document.getElementByld('diminuir-fonte');

    let tamanhoAtualFonte=1

    aumentarFonteBotao.addEventListener('click',function (){
        tamanhoAtualFonte+=0.1;
        document.body.style.fontSize='${tamanhoAtualFonte}rem'

    })

    diminuiFonteBotao.addEventListener('click',function (){
        tamanhoAtualFonte-=0.1;
        document.body.style.fontSize='${tamanhoAtualFonte}rem'

    })
    .
})