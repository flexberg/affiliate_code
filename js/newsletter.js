document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.footer-signup');
    console.log('Newsletter form found:', !!newsletterForm);
    
    if (newsletterForm) {
        newsletterForm.setAttribute('onsubmit', 'return false;');
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const submitButton = newsletterForm.querySelector('button');
        
        submitButton.addEventListener('click', async function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Submit button clicked');
            
            const email = emailInput.value.trim();
            console.log('Email value:', email);
            
            if (!email) {
                alert('Please enter an email address');
                return;
            }
            
            submitButton.disabled = true;
            submitButton.textContent = 'Subscribing...';
            
            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbzLLE5wRjmpNlpEa7OzqQh5wxDIn7Wp0TEIE2XRbWwg_6m751V0AmLydLrBc0BHTj6T/exec', {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                    body: JSON.stringify({
                        type: 'newsletter',
                        email: email,
                        timestamp: new Date().toISOString()
                    })
                });
                
                console.log('Request sent successfully');
                alert('Thank you for subscribing! Please check your email for confirmation.');
                emailInput.value = '';
                
            } catch (error) {
                console.error('Detailed Error:', error);
                alert('Sorry, something went wrong. Please try again later.');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Subscribe';
            }
        });
    }
});