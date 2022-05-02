function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img') //Cria a TAG img no documento.
        img.setAttribute('id', 'foto') //Define o ATRIBUTO ID da TAG img.
        if(fsex[0].checked) {
            gênero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotomenino.jpg') // Define o ATIBUTO SOURCE da TAG img.
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotomeninojovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotohomem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'fotoidoso.jpg')
            }
        } else {
            gênero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotomenina.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotomeninajovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotomulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'fotoidosa.jpg')
            }
        }
        res.style.textAlign = 'center' // Alinha o elemento RES ao centro.
        res.innerHTML = `Detectamos pessoa do gênero ${gênero} com ${idade} anos.<br>`
        res.appendChild(img) // Adiciona o elemento IMG ABAIXO do elemento res.
        img.style.borderRadius = '50%' // Deixa a imagem do elemento IMG REDONDA!
    }
}