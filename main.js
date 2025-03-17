// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Select the modal element
const modal = document.getElementById('modal');

// Hide the modal by default
modal.classList.add('hidden');

// Function to show the modal with a message
function showModal(message) {
  modal.classList.remove('hidden');
  modal.querySelector('#modal-message').textContent = message;
}

// Function to hide the modal
function hideModal() {
  modal.classList.add('hidden');
}

// Example: Add event listeners to mimic server call and toggle modal
document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.like-glyph');

  likeButtons.forEach(button => {
    button.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          button.textContent = button.textContent === EMPTY_HEART ? FULL_HEART : EMPTY_HEART;
          button.classList.toggle('activated-heart');
        })
        .catch(error => {
          showModal(error);
          setTimeout(hideModal, 3000); // Hide modal after 3 seconds
        });
    });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
