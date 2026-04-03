/**
 * Individual Services Content Switcher - Optimized
 * Dr.Brindha Skin & Hair Clinic
 * 23 Individual Services with CSS show/hide for instant switching
 */

$(document).ready(function() {
    console.log('Services switcher initialized - 23 individual services');
    
    // Switch active service
    function switchService(serviceId) {
        console.log('Switching to service:', serviceId);
        
        // Hide all service content sections
        $('.services__details__content').removeClass('active');
        
        // Show selected service
        $('.services__details__content[data-service="' + serviceId + '"]').addClass('active');
        
        // Smooth scroll to top of content
        const $activeService = $('.services__details__content.active');
        if ($activeService.length) {
            $activeService.get(0).scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }
    
    // Handle individual service link clicks
    $(document).on('click', 'a[data-service]', function(e) {
        e.preventDefault();
        
        const serviceId = $(this).data('service');
        console.log('Service clicked:', $(this).text(), 'ID:', serviceId);
        
        switchService(serviceId);
    });
    
    // Set blue-laser as default on page load
    switchService('blue-laser');
});
