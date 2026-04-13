document.addEventListener('DOMContentLoaded', () => {

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for sticky nav
          behavior: 'smooth'
        });
        
        // Update active class
        document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // Accordion Logic
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = body.classList.contains('open');
      
      // Close all accordions in the same container (optional, but clean)
      header.parentElement.parentElement.querySelectorAll('.accordion-body').forEach(b => {
        b.classList.remove('open');
      });
      header.parentElement.parentElement.querySelectorAll('.accordion-header span').forEach(s => {
        s.textContent = '+';
      });

      if (!isOpen) {
        body.classList.add('open');
        header.querySelector('span').textContent = '-';
      }
    });
  });

});
