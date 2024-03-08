document.addEventListener('DOMContentLoaded', function () {
    const flashcardContainer = document.getElementById('flashcard-container');
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');

    let currentCardIndex = 0;
    
    // Define flashcards data
    const flashcardsData = [
      { question: 'Question 1:In Operating Systems What are the 3 process states?', answer: 'Answer: Running, blocked , ready' },
      { question: 'Question 2:The role of the PCB (process control block)', answer: 'Answer: Stores info of a process and list all active processes' },
      { question: 'Question 3:What are the PCB contents', answer: 'Answer:  pid, scheduling state, cpu state, pointers, memory locations, file openers' },
      { question: 'Question 4: mechanism for interruption', answer: 'Answer: IRQ, software interrupts, exception,signals' },
      { question: 'Question 5: DMA(Direct Acess Memory)', answer: 'Answer: a method that allows devices to transfer data directly from memory without CPU' },
      { question: 'Question 6:spin lock', answer: 'Answer:repeaditly checks if a lock is avaiable' },
      { question: 'Question 7:signal function', answer: 'Answer:used to notify waiting threads ' },
      { question: 'Question 8:semaphoric variable', answer: 'Answer:a counter,que,of threads or process mostly have wait and signal' },
      { question: 'Question 9:Mutual Exclusion', answer: 'Answer:specfic form of sync to prevent conflict when access shared resources' },
      { question: 'Question 10:What is a process?', answer: 'Answer:executing a program' },
      // Add more flashcards as needed
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

    // Add event listeners to the buttons
    nextButton.addEventListener('click', function() {
        currentCardIndex = (currentCardIndex + 1) % flashcardsData.length;
        updateCardDisplay();
    });

    prevButton.addEventListener('click', function() {
        currentCardIndex = (currentCardIndex - 1 + flashcardsData.length) % flashcardsData.length;
        updateCardDisplay();
    });
});