/* eslint-disable no-undef */
const gameCycle = (MAX_ROUNDS, generateQuestionAndAnswer, handleGameRound, user) => {
  for (let counter = 0; counter < MAX_ROUNDS; counter++) {
    const [correctAnswer, userAnswer] = generateQuestionAndAnswer()
    const isCorrect = handleGameRound(correctAnswer, userAnswer, user)

    if (!isCorrect) {
      // Если пользователь ошибся, игра заканчивается
      return
    }
  }
  // Если пользователь прошел все раунды
  console.log(`Congratulations, ${user}!`)
}

export default gameCycle
