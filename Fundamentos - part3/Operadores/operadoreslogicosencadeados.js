const idade = 10;
const estacomdemaior = true;
const estaliberado = true;

if (idade >= 18 || estacomdemaior == true) {
    console.log("Ok a entrada está liberada")
    console.log("Deu sorte hoje")
} else {
    console.log("Não é possivel a sua entrada no local, sua idade não respeita.")
}

console.log("Pode entrar: \n \n")
if(idade >= 18 && estaliberado){
    console.log("Liberado pode entrar")
}else{

    console.log("Você não pode entrar")
}



