function isMobileView() {
    return window.innerWidth >= 600; // Adjust the value as needed for your mobile breakpoint
  }
  
  if (isMobileView()) {
    window.addEventListener('load', function() {
      var image = document.querySelector('.zoom-image');
      var scale = 1.7;
      var duration = 1000;
      var delay = 500;
      
      image.style.transition = 'transform ' + duration + 'ms ease-out ' + delay + 'ms';
      image.style.transform = 'scale(' + scale + ')';
    });
  
    window.addEventListener('scroll', function() {
      var image = document.querySelector('.zoom-image');
      var scale = 0.8;
      var duration = 500;
      var delay = 100;
      
      image.style.transition = 'transform ' + duration + 'ms ease-in ' + delay + 'ms';
      image.style.transform = 'scale(' + scale + ')';
    });
  }
  