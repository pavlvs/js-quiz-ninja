const quiz = [
    ['What is Superman\'s real name?', 'Clark Kent'],
    ['What is Wonder Woman\'s real name?', 'Diana Prince'],
    ['What is Batman\'s real name?', 'Bruce Wayne']
]

function start(quiz) {
    let score = 0 // initialize score

    // main game loop

    for (const [question, answer] of quiz) {
        const response = prompt(question)
        check(response, answer)
    }

    // end of main game loop

    gameOver()

    // function declarations
    function ask(question) {
        return prompt(question)
    }

    function check(response, answer) {
        if (response === answer) {
            alert('Correct')
            score++
        } else {
            alert(`Wrong! The correct answer was ${answer}`)
        }
    }

    function gameOver() {
        alert(`Game over,  you scored ${score} points`)
    }
}


start(quiz)
