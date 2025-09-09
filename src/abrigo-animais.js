import Cachorro from "./Cachorro.js";
import Gato from "./Gato.js";
import Jabuti from "./Jabuti.js";

const Rex = new Cachorro("Rex", ["RATO", "BOLA"])
const Mimi = new Gato("Mimi", ["BOLA", "LASER"])
const Fofo = new Gato("Fofo", ["BOLA", "RATO", "LASER"])
const Zero = new Gato("Zero", ["RATO", "BOLA"])
const Bola = new Cachorro("Bola", ["CAIXA", "NOVELO"])
const Bebe = new Cachorro("Bebe", ["LASER", "GATO", "BOLA"])
const Loco = new Jabuti("Loco", ["SKATE", "RATO"])

const listAnimais = [Rex, Mimi, Fofo, Zero, Bola, Bebe, Loco]
const listBrinquedos = ["RATO", "BOLA", "LASER", "OLA", "CAIXA", "NOVELO", "GATO", "SKATE"]

class AbrigoAnimais {
  
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const pessoaBrinquedo1 = brinquedosPessoa1.split(",").map(x=>x.trim())
    const pessoaBrinquedo2 = brinquedosPessoa2.split(",").map(x=>x.trim())
    const animais = ordemAnimais.split(",").map(x=>x.trim())

    const nomesValidos = listAnimais.map(a => a.nome)
    const invalidos = animais.filter(nome => !nomesValidos.includes(nome))
    const animaisDuplicados = animais.filter((item, index) => animais.indexOf(item) !== index)

    const allBrinquedos = [...pessoaBrinquedo1, ...pessoaBrinquedo2]
    const verificaTodosBrinquedos = allBrinquedos.filter(nome => !listBrinquedos.includes(nome))

    const brinDuplicadoPessoa1 = pessoaBrinquedo1.filter((item, index) => pessoaBrinquedo1.indexOf(item) !== index)
    const brinDuplicadoPessoa2 = pessoaBrinquedo2.filter((item, index) => pessoaBrinquedo2.indexOf(item) !== index)

    let listResultado = []
    let listaLoco = []

    try {
      if(invalidos.length > 0 || animaisDuplicados.length > 0){
        throw new Error("Animal inválido")
      }

      if(verificaTodosBrinquedos.length > 0 || brinDuplicadoPessoa1.length > 0 || brinDuplicadoPessoa2.length > 0){
        throw new Error("Brinquedo inválido")
      }

      for(let i = 0; i < animais.length; i++)
      {

        const animal = animais[i]

        switch (animal) {
        case "Rex":
          if(brinquedosPessoa1 == Rex.brinquedos.join(",")) {
            listResultado.push("Rex - pessoa 1")
          } else if(brinquedosPessoa2 == Rex.brinquedos.join(",")) {
            listResultado.push("Rex - pessoa 2")
          }  
          else {
            listResultado.push("Rex - abrigo")
          }
          break

        case "Mimi":
          if(brinquedosPessoa1 == Mimi.brinquedos.join(",")) {
            listResultado.push("Mimi - pessoa 1")
          } else if(brinquedosPessoa2 == Mimi.brinquedos.join(",")) {
            listResultado.push("Mimi - pessoa 2")
          }  
          else {
            listResultado.push("Mimi - abrigo")
          }
          break

        case "Fofo":
          if(brinquedosPessoa1 == Fofo.brinquedos.join(",")) {
            listResultado.push("Fofo - pessoa 1")
          } else if(brinquedosPessoa2 == Fofo.brinquedos.join(",")) {
            listResultado.push("Fofo - pessoa 2")
          }  
          else {
            listResultado.push("Fofo - abrigo")
          }
          break

        case "Zero":
          if(brinquedosPessoa1 == Zero.brinquedos.join(",")) {
            listResultado.push("Zero - pessoa 1")
          } else if(brinquedosPessoa2 == Zero.brinquedos.join(",")) {
            listResultado.push("Zero - pessoa 2")
          }  
          else {
            listResultado.push("Zero - abrigo")
          }
          break

        case "Bola":
          if(brinquedosPessoa1 == Bola.brinquedos.join(",")) {
            listResultado.push("Bola - pessoa 1")
          } else if(brinquedosPessoa2 == Bola.brinquedos.join(",")) {
            listResultado.push("Bola - pessoa 2")
          }  
          else {
            listResultado.push("Bola - abrigo")
          }
          break

        case "Bebe":
          if(brinquedosPessoa1 == Bebe.brinquedos.join(",")) {
            listResultado.push("Bebe - pessoa 1")
          } else if(brinquedosPessoa2 == Bebe.brinquedos.join(",")) {
            listResultado.push("Bebe - pessoa 2")
          }  
          else 
          {
            listResultado.push("Bebe - abrigo")
          }
          break

         case "Loco":
          if(brinquedosPessoa1 == Loco.brinquedos.join(",")) {
            listResultado.push("Loco - pessoa 1")
          } else if(brinquedosPessoa2 == Loco.brinquedos.join(",")) {
            listResultado.push("Loco - pessoa 2")
          }  
          else if (listResultado.length > 0) 
          {
            if(brinquedosPessoa2 != Loco.brinquedos.join(",")){
              listResultado.push("Loco - pessoa 2")
            } else if(brinquedosPessoa1 != Loco.brinquedos.join(",")){
               listResultado.push("Loco - pessoa 1")
            }
          } 
          else 
          {
            listResultado.push("Loco - abrigo")
          }
          break
      }

      }
      return { lista: listResultado.sort() }

    } catch (e) {
       return { erro: e.message }
    }
  }

  confereOrdem(animalBrinquedos, pessoaBrinquedos) {
    let index = 0;
    for (let b of pessoaBrinquedos) {
      if (b === animalBrinquedos[index]) {
        index++;
      }
      if (index === animalBrinquedos.length) return true; // todos encontrados na ordem
    }
    return false;
  }
}

new AbrigoAnimais().encontraPessoas(
      'BOLA,LASER',
      'BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola');

export { AbrigoAnimais as AbrigoAnimais };
