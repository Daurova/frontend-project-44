#!/usr/bin/env node
import greetUser from '../src/cli.js'
import readlineSync from 'readline-sync'

const explainRules = () => {
  // eslint-disable-next-line no-undef
  console.log('What is the result of the expression?')
}

const askQuestion = () => {
  let num1 = Math.round(Math.random() * 100)
  let num2 = Math.round(Math.random() * 100)
  const operators = ['+', '-', '*']
  let operator = operators[Math.floor(Math.random() * 3)]
  const answer = readlineSync.question(`Question: ${num1} ${operator} ${num2}\nYour answer: `)
  let res
  switch (operator) {
    case ('+'):
      res = num1 + num2
      break
    case ('-'):
      res = num1 - num2
      break
    case ('*'):
      res = num1 * num2
      break
  }

  return [res, answer]
}

const checkAnswer = () => {
  let counter = 0
  while (counter < 3) {
    let [res, answer] = askQuestion()
    if (res.toString() === answer.toString()) {
    // eslint-disable-next-line no-undef
      console.log ('Correct!')
      counter = counter + 1
    }

    else if (res !== answer) {
    // eslint-disable-next-line no-undef
      console.log ('Not correct!')
    }
  }
}

const playGame = () => {
  const user = greetUser()
  explainRules()
  checkAnswer()
  // eslint-disable-next-line no-undef
  console.log(`Congratulations, ${user}!`)
}

playGame()
