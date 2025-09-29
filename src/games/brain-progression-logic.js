/* eslint-disable no-undef */
import greetUser from '../cli.js'
import readlineSync from 'readline-sync'
import getRandomNumber from './utils/getRandomNumber.js'
import gameCycle from './utils/gameCycle.js'

const MAX_ROUNDS = 3

const explainRules = () => {
  console.log('What number is missing in the progression?')
}

const generateProgression = () => {
  const progressionStart = getRandomNumber(5)
  const step = getRandomNumber(4) + 1
  const progressionLength = getRandomNumber(5) + 5
  let progression = `${progressionStart}`
  let progressionNumber = progressionStart
  let counter = 1

  while (counter < progressionLength) {
    progressionNumber += step
    progression += ` ${progressionNumber}`
    counter += 1
  }
  return progression
}

const generateQuestionAndAnswer = () => {
  const progression = generateProgression()
  const progressionArray = progression.split(' ')
  const index = getRandomNumber(progressionArray.length - 1)
  const correctAnswer = progressionArray[index]
  const modifiedProgression = progression.replace(progressionArray[index], '..')

  const userAnswer = readlineSync.question(`Question: ${modifiedProgression}\nYour answer: `)

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

const playProgressionGame = () => {
  const user = greetUser()
  explainRules()
  gameCycle(MAX_ROUNDS, generateQuestionAndAnswer, handleGameRound, user)
}

export default playProgressionGame
