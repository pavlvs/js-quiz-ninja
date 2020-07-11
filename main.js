const quiz = [
    ['What is Superman\'s real name?', 'Clark Kent'],
    ['What is Wonder Woman\'s real name?', 'Diana Prince'],
    ['What is Batman\'s real name?', 'Bruce Wayne']
]

let score = 0 // initialize score

for (const [question, answer] of quiz) {
    const response = prompt(question)
    if (response === answer) {
        alert('Correct')
        score++
    } else {
        alert(`Wrong! The correct anser was ${answer}`)
    }
}

// At the end of the game , report the player's score
alert(`Game over,  you scored ${score} points`)
