document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links li a');

    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.fontWeight = 'bold';
            this.style.transition = 'transform 0.3s ease, font-weight 0.3s ease';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.fontWeight = 'normal';
        });
    });

    
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentTime = currentDate.getHours();

    
    

    
    const reservationForm = document.getElementById('reservation-form');

    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

     
        alert(`Reservation Details:\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nNumber of Guests: ${guests}`);
        
       
        this.reset();
    });
});
