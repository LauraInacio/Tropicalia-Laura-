Document. addEventListener('DDMContentLoaded' , function (){
    const aumentaFonteBotao = documente.getElementeById ('aumentar-fonte')

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventeListener('clik' , function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.font.Size = '${tamanhoAtualFonte}rem';
    })
})
