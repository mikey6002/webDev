document.addEventListener('DOMContentLoaded', function () {
    const flashcardContainer = document.getElementById('flashcard-container');
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');
    const submitButton = document.getElementById('search-btn');
    const submitInput = document.getElementById('submit-input');
    const scoreDisplay = document.getElementById('score');

    let currentCardIndex = 0;
    let score = 0;
    
    // Define flashcards data
    const flashcardsData = [
      { question: 'Question 1:In Operating Systems What are the 3 process states?', answer: 'Running,blocked,ready' },
      { question: 'Question 2:The role of the PCB (process control block)', answer: 'Stores info of a process and list all active processes' },
      { question: 'Question 3:What are the PCB contents', answer: 'Pid,scheduling state, cpu state,pointers, memory locations,file openers' },
      { question: 'Question 4: mechanism for interruption', answer: 'IRQ,software interrupts,exception,signals' },
      { question: 'Question 5: DMA(Direct Acess Memory)', answer: 'A method that allows devices to transfer data directly from memory without CPU' },
      { question: 'Question 6:spin lock', answer: 'Repeaditly checks if a lock is avaiable' },
      { question: 'Question 7:signal function', answer: 'Used to notify waiting threads ' },
      { question: 'Question 8:semaphoric variable', answer: 'A counter,que,of threads or process mostly have wait and signal' },
      { question: 'Question 9:Mutual Exclusion', answer: 'Specfic form of sync to prevent conflict when access shared resources' },
      { question: 'Question 10:What is a process?', answer: 'Executing a program' },
    ];
  
    // Function to update the card display
    function updateCardDisplay() {
        flashcardContainer.innerHTML = '';
        const flashcard = flashcardsData[currentCardIndex];
        const card = document.createElement('div');
        card.classList.add('flashcard');
  
        const front = document.createElement('div');
        front.classList.add('front');
        front.textContent = flashcard.question;

        // Add event listener to flip card on click
        front.addEventListener('click', function() {
            card.classList.toggle('flipped');
        });
  
        const back = document.createElement('div');
        back.classList.add('back');
        back.textContent = flashcard.answer;

        // Add event listener to flip card on click
        back.addEventListener('click', function() {
            card.classList.toggle('flipped');
        });
  
        card.appendChild(front);
        card.appendChild(back);
  
        flashcardContainer.appendChild(card);
    }

    // Update the card display initially
    updateCardDisplay();

    // event listeners to the buttons
    nextButton.addEventListener('click', function() {
        currentCardIndex = (currentCardIndex + 1) % flashcardsData.length;
        updateCardDisplay();
    });

    prevButton.addEventListener('click', function() {
        currentCardIndex = (currentCardIndex - 1 + flashcardsData.length) % flashcardsData.length;
        updateCardDisplay();
    });

    submitButton.addEventListener('click', function() {
        const userAnswer = submitInput.value.trim().toLowerCase();
        const correctAnswer = flashcardsData[currentCardIndex].answer.toLowerCase();
    
        if (userAnswer === correctAnswer) {
            scoreDisplay.classList.add('flash-green');
            setTimeout(function() {
                scoreDisplay.classList.remove('flash-green');
            }, 500);
            score++;
        } else {
            // If the answer is wrong, add the flash-red class to the score container
            scoreDisplay.classList.add('flash-red');
            // Remove the flash-red class after 500ms (half a second)
            setTimeout(function() {
                scoreDisplay.classList.remove('flash-red');
            }, 500);
            score--; // Deduct one point for a wrong answer
        }
    
        scoreDisplay.textContent = score;
    });
    
});
