function toggleAccordion(element) {
    const isActive = element.classList.contains('active');
    
    // Close all accordion items
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.classList.remove('active');
        header.nextElementSibling.style.display = 'none';
        header.querySelector('.accordion-icon').textContent = '+';
    });
    
    // Toggle the current accordion item
    if (!isActive) {
        element.classList.add('active');
        element.nextElementSibling.style.display = 'block';
        element.querySelector('.accordion-icon').textContent = '-';
    }
}
