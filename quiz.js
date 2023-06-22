document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("quiz-form");
    const questionsContainer = document.getElementById("questions-container");
    const result = document.getElementById("result");

    function displayQuestions() {
        questions.forEach((questionObj, index) => {
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");

            const questionTitle = document.createElement("h3");
            questionTitle.textContent = questionObj.question;
            questionDiv.appendChild(questionTitle);

            const optionsDiv = document.createElement("div");
            optionsDiv.classList.add("options");

            questionObj.options.forEach((option) => {
                const optionLabel = document.createElement("label");
                optionLabel.classList.add("option");

                const optionInput = document.createElement("input");
                optionInput.type = "radio";
                optionInput.name = `question-${index}`;
                optionInput.value = option;

                optionLabel.appendChild(optionInput);
                optionLabel.appendChild(document.createTextNode(option));
                optionsDiv.appendChild(optionLabel);
            });

            questionDiv.appendChild(optionsDiv);
            questionsContainer.appendChild(questionDiv);
        });
    }

    function calculateResult(e) {
        e.preventDefault();

        let score = 0;
        const totalQuestions = questions.length;

        questions.forEach((questionObj, index) => {
            const selectedOption = document.querySelector(
                `input[name="question-${index}"]:checked`
            );

            if (selectedOption) {
                score += parseInt(selectedOption.value);
            }
        });

        const averageScore = score / totalQuestions;

        if (averageScore >= 7) {
            result.textContent = "You are prone to being a System Thinker!";
        } else {
            result.textContent = "You are not prone to being a System Thinker.";
        }
    }

    displayQuestions();
    form.addEventListener("submit", calculateResult);
});
