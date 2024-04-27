function contar()
{
    var inicio = document.getElementById('in')
    var fim = document.getElementById('fi')
    var passo = document.getElementById('pa')
    var resultado = document.getElementById('res')

    if (fim.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
    {
        window.alert('Faltam dados')
    }

    else
    {
        res.innerHTML = 'Contando: '

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for(var c = i; c <= f; c += p )
        {
            res.innerHTML += `${c}`
        }

    }
}