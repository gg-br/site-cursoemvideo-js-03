function carregar()

{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
   
    //var hora = 12

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12)
    {
        msg.innerHTML = `Agora são ${hora} horas. Tenha um bom dia`
        img.src = 'imagens/1.jpg'
        document.body.style.background = '#e2cd9f'
    }

    else
    {
        if (hora >= 12 && hora < 18)
        {
            msg.innerHTML = `Agora são ${hora} horas. Tenha uma boa tarde`
            img.src = 'imagens/2.jpg'
            document.body.style.background = '#b9846f'
        }

        else
        {
            msg.innerHTML = `Agora são ${hora} horas. Boa noite`
            img.src = 'imagens/3.jpg'
            document.body.style.background = '#515154'
        }
    }
}