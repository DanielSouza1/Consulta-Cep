var titulo = document.getElementById('titu')
var logo = document.getElementById('logo')
var imagem = document.createElement('img')
imagem.setAttribute('src', 'foto')
imagem.setAttribute('src', '/gps.png')
imagem.style.height = '70px'
logo.appendChild(imagem)
titulo.style.color = '#FFFF00'
function Consultar(){
    let cep1 = document.getElementById('Cep');  
    cep1.focus() 
    let cep2 = String(cep1.value);
    if(cep2.length < 8){
        window.alert('ERRO! Cep não encontrado')
    }else{
        let api = `https://viacep.com.br/ws/${cep2}/json/`
        let request = new XMLHttpRequest();
        request.open('GET', api) 
        request.onload = function(){             
            let endereço = JSON.parse(request.responseText)
            if(endereço.erro == true){
                window.alert('Cep Invalido!!!')
                
            }else{
                let logradouro = document.getElementById('logradouro').value = endereço.logradouro
                let bairro = document.getElementById('bairro').value = endereço.bairro
                let local = document.getElementById('localidade').value = endereço.localidade
            }          
            
            
        }
        request.send();    

    }

}    