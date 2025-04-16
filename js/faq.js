// Select all the FAQ question elements
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    // Toggle the answer's visibility and apply smooth animation
    answer.classList.toggle('open');
  });
});

//for back button
function goBack() {
  window.history.back();
}
