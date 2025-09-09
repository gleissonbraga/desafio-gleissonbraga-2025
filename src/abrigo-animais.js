import Cachorro from "./Cachorro.js"
import confereOrdem from "./ConfereOrdem.js"
import Gato from "./Gato.js"
import Jabuti from "./Jabuti.js"

const Rex = new Cachorro("Rex", ["RATO","BOLA"])
const Mimi = new Gato("Mimi", ["BOLA","LASER"])
const Fofo = new Gato("Fofo", ["BOLA","RATO","LASER"])
const Zero = new Gato("Zero", ["RATO","BOLA"])
const Bola = new Cachorro("Bola", ["CAIXA","NOVELO"])
const Bebe = new Cachorro("Bebe", ["LASER","RATO","BOLA"])
const Loco = new Jabuti("Loco", ["SKATE","RATO"])

const listAnimais = [Bola, Bebe, Fofo, Loco, Mimi, Rex, Zero]
const listBrinquedos = [
  "RATO",
  "BOLA",
  "LASER",
  "OLA",
  "CAIXA",
  "NOVELO",
  "GATO",
  "SKATE",
];

class AbrigoAnimais {
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const pessoaBrinquedo1 = brinquedosPessoa1.split(",").map((x) => x.trim())
    const pessoaBrinquedo2 = brinquedosPessoa2.split(",").map((x) => x.trim())
    const animais = ordemAnimais.split(",").map((x) => x.trim())

    const nomesValidos = listAnimais.map((a) => a.nome)
    const invalidos = animais.filter((nome) => !nomesValidos.includes(nome))
    const animaisDuplicados = animais.filter(
      (item, index) => animais.indexOf(item) !== index
    )

    const allBrinquedos = [...pessoaBrinquedo1, ...pessoaBrinquedo2]
    const verificaTodosBrinquedos = allBrinquedos.filter(
      (nome) => !listBrinquedos.includes(nome)
    )

    const brinDuplicadoPessoa1 = pessoaBrinquedo1.filter(
      (item, index) => pessoaBrinquedo1.indexOf(item) !== index
    )
    const brinDuplicadoPessoa2 = pessoaBrinquedo2.filter(
      (item, index) => pessoaBrinquedo2.indexOf(item) !== index
    )

    let listResultado = []
    
    try {
      if (invalidos.length > 0 || animaisDuplicados.length > 0) {
        throw new Error("Animal inválido")
      }

      if (
        verificaTodosBrinquedos.length > 0 ||
        brinDuplicadoPessoa1.length > 0 ||
        brinDuplicadoPessoa2.length > 0
      ) {
        throw new Error("Brinquedo inválido")
      }

      animais.sort()
      for (let i = 0; i < listAnimais.length; i++) {
        for (let j = 0; j < animais.length; j++) {
          if (listAnimais[i].nome == animais[j]) {
            let jaTemFofoPessoa1 = listResultado.find(x => x == "Fofo - pessoa 1")
            let jaTemFofoPessoa2 = listResultado.find(x => x == "Fofo - pessoa 2")
            let jaTemMimiPessoa1 = listResultado.find(x => x == "Mimi - pessoa 1")
            let jaTemMimiPessoa2 = listResultado.find(x => x == "Fofo - pessoa 2")
            let jaTemZeroPessoa1 = listResultado.find(x => x == "Fofo - pessoa 1")
            let jaTemZeroPessoa2 = listResultado.find(x => x == "Fofo - pessoa 2")

            if(jaTemFofoPessoa1 || jaTemFofoPessoa2 || jaTemMimiPessoa1 || jaTemMimiPessoa2 || jaTemZeroPessoa1 || jaTemZeroPessoa2)
            {
              listResultado.push(`${listAnimais[i].nome} - abrigo`)
            } else 
            {
              let confereOrdemPessoa1 = confereOrdem(listAnimais[i].brinquedos, pessoaBrinquedo1)
              let confereOrdemPessoa2 = confereOrdem(listAnimais[i].brinquedos, pessoaBrinquedo2)

               if(confereOrdemPessoa1.join(",")  == listAnimais[i].brinquedos.join(","))
              {
                listResultado.push(`${listAnimais[i].nome} - pessoa 1`)
              }
              else if (confereOrdemPessoa2.join(",") == listAnimais[i].brinquedos.join(","))
              {
                console.log(listAnimais[i].brinquedos)
                listResultado.push(`${listAnimais[i].nome} - pessoa 2`)
              } 
              else if(listAnimais[i].nome == "Loco" && listResultado.join(",").includes("pessoa"))
              {
                let jaTemPessoa1 = listResultado.join(",").includes(`pessoa 1`)
                let jaTemPessoa2 = listResultado.join(",").includes(`pessoa 2`)
                if(jaTemPessoa1)
                {
                  listResultado.push(`${animais[j]} - pessoa 1`)
                }
                if(jaTemPessoa2)
                {
                  listResultado.push(`${animais[j]} - pessoa 2`)
                }
              }
              else 
              {
                listResultado.push(`${listAnimais[i].nome} - abrigo`)
              }
            }
          }
        }
      }
      return { lista: listResultado.sort() }
    } catch (e) {
      return { erro: e.message };
    }
  }
}

export { AbrigoAnimais as AbrigoAnimais };


