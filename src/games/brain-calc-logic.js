/* eslint-disable no-undef */
import greetUser from '../cli.js'
import readlineSync from 'readline-sync'
import getRandomNumber from './utils/getRandomNumber.js'
import gameCycle from './utils/gameCycle.js'

const MAX_NUMBER = 100
const MAX_ROUNDS = 3

const explainRules = () => {
  console.log('What is the result of the expression?')
}

const generateQuestionAndAnswer = () => {
  const num1 = getRandomNumber(MAX_NUMBER)
  const num2 = getRandomNumber(MAX_NUMBER)
  const operators = ['+', '-', '*']
  const operator = operators[Math.floor(Math.random() * operators.length)] // Более универсально

  let correctAnswer
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2
      break
    case '-':
      correctAnswer = num1 - num2
      break
    case '*':
      correctAnswer = num1 * num2
      break
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }

  const userAnswer = readlineSync.question(`Question: ${num1} ${operator} ${num2}\nYour answer: `)

  return [correctAnswer.toString(), userAnswer.trim()]
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

const playCalcGame = () => {
  const user = greetUser()
  explainRules()
  gameCycle(MAX_ROUNDS, generateQuestionAndAnswer, handleGameRound, user) // Запускаем игру
}

export default playCalcGame
