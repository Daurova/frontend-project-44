#!/usr/bin/env node
/* eslint-disable no-undef */
import greetUser from '../src/cli.js'
import readlineSync from 'readline-sync'

const explainRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
}

const askQuestion = () => {
  let num = Math.round(Math.random() * 100)
  const answer = readlineSync.question(`Question: ${num}\nYour answer: `)
  return [num, answer]
}

const checkAnswer = () => {
  const user = greetUser()
  let counter = 0
  while (counter < 3) {
    let [num, answer] = askQuestion()
    if (num % 2 === 0 && answer.toLowerCase() === 'yes') {
      console.log ('Correct!')
      counter = counter + 1
    }
    if (num % 2 === 1 && answer.toLowerCase() === 'no') {
      console.log ('Correct!')

      counter = counter + 1
    }
    else if (answer.toLowerCase() !== 'yes' && answer.toLowerCase() !== 'no') {
      console.log (`Let's try again, ${user}!`)
      return
    }
    else if (num % 2 === 0 && answer.toLowerCase() === 'no') {
      console.log (`Let's try again, ${user}!`)
      return
    }
    else if (num % 2 === 1 && answer.toLowerCase() === 'yes') {
      console.log (`Let's try again, ${user}!`)
      return
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${user}!`)
  }
}

const playGame = () => {
  explainRules()
  checkAnswer()
}

playGame()
