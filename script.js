const images = ['home.jpg','home10.jpg','home11.jpg'];
    
    let index = 0;
    const background = document.querySelector('.background');
    
    function changeBackground() {
      index = (index + 1) % images.length;
      background.style.backgroundImage = `url(${images[index]})`;
    }
    
    setInterval(changeBackground, 5000);