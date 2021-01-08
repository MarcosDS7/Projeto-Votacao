const form = document.getElementById("form")
const name = document.getElementById("name")
const age = document.getElementById("age")
const gender = document.getElementById("gender")
const view1 = document.getElementById("view1")
const view2 = document.getElementById("view2")
const result = document.getElementById("result")

name.focus()

const podeVotar = [];
const deveVotar = [];

form.onsubmit = (event) =>{
  event.preventDefault()

  // Verificando se o campo foi preenchido
  if (!name.value){
  result.innerHTML = 'Campo obrigatório'
  result.className = 'error'
  name.focus()
  return
  }

  const ages = parseInt(age.value)

  // Verificando se o campo é número
  if(isNaN(ages)){
  result.innerHTML = "Apenas número são permitidos"
  result.className = "error"
  age.focus()
  return
  }
 // Verificando se o campo foi preenchido
  if(!gender.value){
  result.innerHTML = "Selecione o seu sexo"
  result.className = "error"
  gender.focus()
  return
  }

const names = name.value

if (ages >= 16 && ages <= 17 || ages > 70 ){
  result.innerText = ''
  result.className = ''
  podeVotar.push(names)
} 
else if (ages >= 18 && ages <= 70) {
  result.innerText = ''
  result.className = ''
  deveVotar.push(names)
} 
if (ages < 16){
  result.innerHTML = "Você não tem idade para votar ainda"
  result.className = "error"
  age.value = ''
  name.value = ''
  gender.value = ''
  name.focus()
  return
}

age.value = ''
name.value = ''
gender.value = ''
name.focus()
}


view1.onclick = () => {

  result.innerText = ''
  result.className = ''
  name.focus()
  result.innerText = podeVotar.join(', ')
  
}

view2.onclick = () => {

  result.innerText = ''
  result.className = ''
  name.focus()
  result.innerText = deveVotar.join(', ')
  
}

// PROFESSOR AÍ TÔ MUITO FELIZ POR ESTAR APRENDENDO JS, FIZ TUDO NA MÃO SEM CONSULTAR NADA, TENTEI USAR AS FUNCTIONS, DA MANEIRA MAIS ATUALIZADA, E ACHEI MASSA AS FUNCIONALIDADE, MEU DESIGN QUE FIZ COM CSS, FICOU BRABO TAMBÉM, EU SÓ NÃO CONSEGUIR, COLOCAR PRA TENTAR CHEGAR SE O ARRAY TINHA ALGUMA COISA, E SE NÃO TIVER MOSTRAR O TEXTO LÁ, EU TENTEI DE TUDO, MAS PERCEBI QUE ARRAY É DIFERENTE, EM FIM ESPERO QUE FUNCIONE CERTINHO QUE NEM FUNCIONOU NO MEU, É ISSO ;) 