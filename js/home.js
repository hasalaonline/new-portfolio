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
    });
  
    window.addEventListener('scroll', function() {
      var image = document.querySelector('.zoom-image');
      var hero_image = document.querySelector('.hero-image')
      var hero_name = document.querySelector('.container')
      var hero_container = document.querySelector('.hero-container')
      var scale = 0.8;
      var duration = 1500;
      var delay = 0;

      var hero_scale = 0.5
      
    //   image.style.transition = 'transform ' + duration + 'ms ease-in ' + delay + 'ms';
    //   image.style.transform = 'scale(' + scale + ')';

    //   hero_image.style.transition = 'transform ' + duration + 'ms ease-out ' + delay + 'ms';
    //   hero_image.style.transform = 'scale(' + hero_scale + ')';

    hero_container.style.transition = 'transform ' + duration + 'ms ease-out ' + delay + 'ms';
    hero_container.style.transform = 'scale(' + hero_scale + ')';
    });
  }
  