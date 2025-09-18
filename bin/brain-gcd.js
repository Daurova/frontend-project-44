#!/usr/bin/env node
import greetUser from '../src/cli.js'
import readlineSync from 'readline-sync'

const explainRules = () => {
  // eslint-disable-next-line no-undef
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

const askQuestion = () => {
  let num1 = Math.round(Math.random() * 100) + 1
  let num2 = Math.round(Math.random() * 100) + 1

  const answer = readlineSync.question(`Question ${num1} ${num2}\n Your answer: `)
  const res = findGcd(num1, num2)
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
