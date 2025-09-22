import greetUser from '../cli.js'
import readlineSync from 'readline-sync'

const explainRules = () => {
  // eslint-disable-next-line no-undef
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
}

const isPrime = (number) => {
  if (number <= 1) return 'no'
  if (number <= 3) return 'yes'
  if (number % 2 === 0 || number % 3 === 0) return 'no'

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return 'no'
  }

  return 'yes'
}

const askQuestion = () => {
  const num = Math.round(Math.random() * 99) + 1
  const answer = readlineSync.question(`Question: ${num}\n Your answer: `)
  const res = isPrime(num)
  return [res, answer]
}

const checkAnswer = () => {
  const user = greetUser()
  explainRules()
  let counter = 0
  while (counter < 3) {
    let [res, answer] = askQuestion()
    if (res.toString() === answer.toString()) {
    // eslint-disable-next-line no-undef
      console.log ('Correct!')
      counter = counter + 1
    }
    else if (res.toString() !== answer.toString()) {
    // eslint-disable-next-line no-undef
      console.log (`${answer} is wrong answer ;(. Correct answer was ${res}.\nLet's try again, ${user}!`)
      return
    }
  }
  // eslint-disable-next-line no-undef
  console.log(`Congratulations, ${user}!`)
}

const playPrimeGame = () => {
  checkAnswer()
}

export default playPrimeGame
