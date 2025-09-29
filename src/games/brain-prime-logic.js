/* eslint-disable no-undef */
import greetUser from '../cli.js'
import readlineSync from 'readline-sync'
import getRandomNumber from './utils/getRandomNumber.js'
import gameCycle from './utils/gameCycle.js'

const MAX_NUMBER = 100
const MAX_ROUNDS = 3

const explainRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
}

const isPrime = (number) => {
  if (number <= 1) return false
  if (number <= 3) return true
  if (number % 2 === 0 || number % 3 === 0) return false

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false
  }

  return true
}

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber(MAX_NUMBER) + 1
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `)

  return [correctAnswer, userAnswer.trim().toLowerCase()]
}

const handleGameRound = (correctAnswer, userAnswer, user) => {
  if (correctAnswer === userAnswer) {
    console.log('Correct!')
    return true
  }
  else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    console.log(`Let's try again, ${user}!`)
    return false
  }
}

const playPrimeGame = () => {
  const user = greetUser()
  explainRules()
  gameCycle(MAX_ROUNDS, generateQuestionAndAnswer, handleGameRound, user)
}

export default playPrimeGame
