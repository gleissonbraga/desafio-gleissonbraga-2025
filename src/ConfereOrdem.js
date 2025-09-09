export default function confereOrdem(animalBrinquedos, pessoaBrinquedos) {
    let listabrinquedosResultado = []
    for(let i = 0; i < animalBrinquedos.length; i++)
    {
       for (let j = 0; j < pessoaBrinquedos.length; j++)
        {
          if(animalBrinquedos[i] == pessoaBrinquedos[j])
          {
            listabrinquedosResultado.push(pessoaBrinquedos[j])
          }
        }
    }
    return listabrinquedosResultado
  }