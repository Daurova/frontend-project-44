/* eslint-disable no-undef */
import greetUser from '../cli.js'
import readlineSync from 'readline-sync'
import getRandomNumber from './utils/getRandomNumber.js'
import gameCycle from './utils/gameCycle.js'

const MAX_NUMBER = 100
const MAX_ROUNDS = 3

const explainRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
}

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber(MAX_NUMBER)
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'
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

const playEvenGame = () => {
  const user = greetUser()
  explainRules()
  gameCycle(MAX_ROUNDS, generateQuestionAndAnswer, handleGameRound, user)
}

export default playEvenGame
