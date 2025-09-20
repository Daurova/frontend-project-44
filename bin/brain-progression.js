#!/usr/bin/env node
import greetUser from '../src/cli.js'
import readlineSync from 'readline-sync'

const explainRules = () => {
  // eslint-disable-next-line no-undef
  console.log('What number is missing in the progression?')
}

const generateProgression = () => {
  const progressionStart = Math.round(Math.random() * 5)
  const step = Math.round(Math.random() * 4) + 1
  const progressionLength = Math.round(Math.random() * 5) + 5
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

const askQuestion = () => {
  const progression = generateProgression()
  const index = Math.round(Math.random() * 5) + progression.split(' ').length - 1 - 6
  // eslint-disable-next-line no-undef
  console.log(index)
  const modifiedProgression = progression.replace(progression.split(' ')[index], '..')
  const replacedNum = progression.split(' ')[index]

  const answer = readlineSync.question(`Question ${modifiedProgression}\n Your answer: `)
  return [replacedNum, answer]
}

const checkAnswer = () => {
  const user = greetUser()
  explainRules()
  let counter = 0
  while (counter < 3) {
    let [res, answer] = askQuestion()
    if (res.toString() === answer.toString()) {
    // eslint-disable-next-line no-undef
      console.log ('Correct')
      counter = counter + 1
    }
    else if (res.toString() !== answer.toString()) {
    // eslint-disable-next-line no-undef
      console.log (`${answer} is wrong answer ;(. Correct answer was ${res}.\nLet's try again, ${user}!`)
    }
  }
  // eslint-disable-next-line no-undef
  console.log(`Congratulations, ${user}!`)
}

const playGame = () => {
  checkAnswer()
}

playGame()
