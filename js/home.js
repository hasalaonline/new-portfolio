document.addEventListener("DOMContentLoaded", function() {
    function isMobileView() {
        return window.innerWidth >= 600; // Adjust the value as needed for your mobile breakpoint
      }
      
      if (isMobileView()) {
        window.addEventListener('load', function() {
          var image = document.querySelector('.zoom-image');
          var scale = 1.5;
          var duration = 0;
          var delay = 0;
          
          image.style.transition = 'transform ' + duration + 'ms ease-out ' + delay + 'ms';
          image.style.transform = 'scale(' + scale + ')';
          image.style.display = 'block'
        });
      
        window.addEventListener('scroll', function() {
          var hero_container = document.querySelector('.hero-container')
          var duration = 1500;
          var delay = 0;
    
          var hero_scale = 0.5
    
        hero_container.style.transition = 'transform ' + duration + 'ms ease-out ' + delay + 'ms';
        hero_container.style.transform = 'scale(' + hero_scale + ')';
        });
      }

    //   testimonials
        const testimonials = document.querySelectorAll('.testimonial');
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        let currentIndex = 0;

        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                if (i === index) {
                    testimonial.classList.add('active');
                } else {
                    testimonial.classList.remove('active');
                }
            });
        }

        function showNextTestimonial() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }

        function showPrevTestimonial() {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentIndex);
        }

        nextButton.addEventListener('click', showNextTestimonial);
        prevButton.addEventListener('click', showPrevTestimonial);

        function autoplay() {
            showNextTestimonial();
        }

        let interval = setInterval(autoplay, 5000);

        nextButton.addEventListener('click', () => {
            clearInterval(interval);
            interval = setInterval(autoplay, 5000);
        });

        prevButton.addEventListener('click', () => {
            clearInterval(interval);
            interval = setInterval(autoplay, 5000);
        });

        showTestimonial(currentIndex);


      
});
