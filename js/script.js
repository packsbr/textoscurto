document.addEventListener('DOMContentLoaded', () => {
  // Timer Logic
  const minutesEl = document.getElementById('timer-minutes');
  const secondsEl = document.getElementById('timer-seconds');
  
  let timeLeft = 14 * 60 + 59; // 14 minutes 59 seconds

  const updateTimer = () => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    
    if (minutesEl) minutesEl.textContent = String(m).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(s).padStart(2, '0');
    
    if (timeLeft > 0) {
      timeLeft--;
    } else {
      timeLeft = 15 * 60; // Reset loop
    }
  };

  setInterval(updateTimer, 1000);
  updateTimer();

  // Accordion Logic
  const accordions = document.querySelectorAll('.accordion-trigger');
  
  accordions.forEach(acc => {
    acc.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.chevron-icon');
      
      // Toggle current
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      
      if (!isExpanded) {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.remove('hidden');
        if(icon) icon.style.transform = 'rotate(180deg)';
      } else {
        content.style.maxHeight = "0px";
        content.classList.add('hidden');
        if(icon) icon.style.transform = 'rotate(0deg)';
      }
    });
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
