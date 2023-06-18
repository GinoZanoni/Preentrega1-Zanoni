
function saludoUniversal(){
    alert("Le damos la bienvenida")
}
saludoUniversal()

let nombreUsuario = prompt("Indique su nombre")

function saludoUniversal(nombre){
    alert(`Hola ${nombre}`)
}

saludoUniversal(nombreUsuario)

let edad = parseInt(prompt("Indique su edad por favor"))

if (edad >= 18){
    alert("Bienvenido/a a nuestro shop online")
}else{
    alert("Disculpe, este sitio es solo para adultos.")}


//Ciclos 
//Por conteo - FOR 

for (let i = 1; i < 6; i++){
    let empresaCarro = prompt("Indique el nombre de su Empresa por favor")
    alert(`El carro Nro ${i}, es el de ${empresaCarro}`)
}
alert("Disculpe, nuestros carros estan ocupados en este momento. Intente en unos minutos")