function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameMode(difficulty){
  const numberRandom = getRandomNumber(1, difficulty)
  let attemptsNumber = 5

  console.log('Seu trapaceiro! Olhando a resposta? R: ' + numberRandom)
  alert("AVISO: O número muda sempre que escolher uma dificuldade!")

  if(!confirm('Certeza de sua escolha?')) {
    return alert("Escolha outra dificuldade!")
  }

  while (attemptsNumber > 0) {    
    let attempt = parseInt(prompt("Digite seu número: "))
    
    if (attempt == numberRandom) {
      alert("Você acertou! Parabéns")
      break
    }

    if(attempt > numberRandom) {
      alert("O número secreto é menor!")
    }

    if(attempt < numberRandom) {
      alert("O número secreto é maior!")
    }

    attemptsNumber--
    alert(`Tentativa Restantes: ${attemptsNumber}.`)

    if(attemptsNumber == 0) {
      alert(`Sinto muito, o número era: ${numberRandom}. Jogue Novamente!`)
    }
  }
}
