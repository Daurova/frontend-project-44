import readlineSync from 'readline-sync'

const greetUser = () => {
  const name = readlineSync.question('May I have your name?')
  // eslint-disable-next-line no-undef
  console.log(`Hello, ${name}!`)
}

export default greetUser
