function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedbackElement = document.getElementById("feedback");
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green"; 
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; 
        }
    } else {
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.style.color = "orange"; 
    }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
