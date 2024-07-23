document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const counter = document.getElementById('counter');
    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    const heartBtn = document.getElementById('heart');
    const pauseBtn = document.getElementById('pause');
    const submitBtn = document.getElementById('submit');
    const likesList = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    
    let timerInterval;
    let count = 0;
    let paused = false;
    
    function incrementCounter() {
      count++;
      counter.textContent = count;
    }
  
    function decrementCounter() {
      count--;
      counter.textContent = count;
    }
});