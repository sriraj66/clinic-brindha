/**
 * WhatsApp Chat Integration & Email Quick Actions
 * Dr.Brindha Skin & Hair Clinic
 */

// WhatsApp Configuration
const WHATSAPP_NUMBER = '918610249168'; // Format: country code + number (no + or spaces)
const CLINIC_EMAIL = 'drbrindhaskincare@gmail.com';
const CLINIC_NAME = 'Dr.Brindha Skin & Hair Clinic';

// Create WhatsApp Floating Button
function createWhatsAppButton() {
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Dr.Brindha%20Skin%20%26%20Hair%20Clinic.`;
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.title = 'Chat with us on WhatsApp';
    whatsappBtn.innerHTML = '<i class="fa fa-whatsapp"></i>';
    document.body.appendChild(whatsappBtn);
}

// Email Quick Action Functions
function openAppointmentEmail() {
    const subject = encodeURIComponent('Appointment Request - Dr.Brindha Clinic');
    const body = encodeURIComponent(`Dear Dr. Brindha,

I would like to book an appointment at your clinic.

My Details:
Name: 
Phone: 
Preferred Date: 
Treatment Required: 

Thank you.`);
    
    window.location.href = `mailto:${CLINIC_EMAIL}?subject=${subject}&body=${body}`;
}

function openGeneralEmail() {
    const subject = encodeURIComponent('Inquiry - Dr.Brindha Skin & Hair Clinic');
    const body = encodeURIComponent(`Dear Dr. Brindha,

I have an inquiry regarding your services.

My Details:
Name: 
Phone: 
Message: 

Thank you.`);
    
    window.location.href = `mailto:${CLINIC_EMAIL}?subject=${subject}&body=${body}`;
}

// Add Email Mailto Links
function enhanceEmailLinks() {
    // Find all email links and enhance with pre-filled content
    const emailLinks = document.querySelectorAll('a[href*="mailto:drbrindhaskincare"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only enhance if it doesn't already have a subject
            if (!this.href.includes('subject=')) {
                e.preventDefault();
                openGeneralEmail();
            }
        });
    });
    
    // Add click handler to appointment buttons to offer email option
    const appointmentBtns = document.querySelectorAll('.primary-btn');
    appointmentBtns.forEach(btn => {
        if (btn.textContent.toLowerCase().includes('appointment')) {
            // Add title for tooltip
            btn.title = 'You can also email us or contact via WhatsApp';
        }
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    createWhatsAppButton();
    enhanceEmailLinks();
});

// Success message for Web3Forms
window.addEventListener('load', function() {
    const forms = document.querySelectorAll('form[action*="web3forms"]');
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Reset after 3 seconds (Web3Forms redirects automatically)
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    });
});
