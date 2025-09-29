/* eslint-disable no-undef */
import greetUser from '../cli.js'
import readlineSync from 'readline-sync'
import getRandomNumber from './utils/getRandomNumber.js'
import gameCycle from './utils/gameCycle.js'

const MAX_NUMBER = 100
const MAX_ROUNDS = 3

const explainRules = () => {
  console.log('Find the greatest common divisor of given numbers.')
}

const findGcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const generateQuestionAndAnswer = () => {
  const num1 = getRandomNumber(MAX_NUMBER) + 1
  const num2 = getRandomNumber(MAX_NUMBER) + 1
  const correctAnswer = findGcd(num1, num2).toString()
  const userAnswer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `)

  return [correctAnswer, userAnswer.trim()]
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

const playGcdGame = () => {
  const user = greetUser()
  explainRules()
  gameCycle(MAX_ROUNDS, generateQuestionAndAnswer, handleGameRound, user)
}

export default playGcdGame
