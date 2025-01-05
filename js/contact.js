document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const statusDiv = document.getElementById('contactStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const nameInput = contactForm.querySelector('#name');
            const emailInput = contactForm.querySelector('#email');
            const messageInput = contactForm.querySelector('#message');
            const submitButton = contactForm.querySelector('.submit-button');
            
            if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
                showStatus('Please fill in all fields', 'error');
                return;
            }
            
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            showStatus('Sending your message...', 'sending');
            
            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbzm8uLVTRhIWz8a9eaAtNsU9R5Xlqcl8GCNBhI6zWb0lp6d7DqUkAO2DsRGQOZ8qnyM/exec', {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        type: 'contact',
                        name: nameInput.value.trim(),
                        email: emailInput.value.trim(),
                        message: messageInput.value.trim(),
                        timestamp: new Date().toISOString()
                    })
                });
                
                contactForm.reset();
                showStatus('Thank you! Your message has been sent.', 'success');
                
            } catch (error) {
                console.error('Error:', error);
                showStatus('Sorry, something went wrong. Please try again later.', 'error');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }
        });
    }
    
    function showStatus(message, type) {
        statusDiv.textContent = message;
        statusDiv.className = `status-message ${type}`;
    }
}); 