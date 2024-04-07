
// Chris made the random image example https://codepen.io/bronzehedwick/pen/dyLdJmG 
// Load random image from images folder on load
(function main() {
    'use strict';
  
    window.addEventListener('load', function handleLoad() {
      const imagePaths = [
        '/images/review001.jpg',
        '/images/review002.jpg',
        '/images/review003.jpg',
        '/images/review004.jpg',
        '/images/review005.jpg',
        '/images/review006.jpg',
        '/images/review007.jpg',
        '/images/review008.jpg',
        '/images/review009.jpg',
        '/images/review010.jpg',
        '/images/review011.jpg',
        '/images/review012.jpg',
        '/images/review013.jpg',
        '/images/review014.jpg',
        '/images/review015.jpg',
        '/images/review016.jpg',
        '/images/review017.jpg',
        '/images/review018.jpg',
        '/images/review019.jpg',
        '/images/review020.jpg',
        '/images/review021.jpg',
        '/images/review022.jpg',
        '/images/review023.jpg', 
        '/images/review024.jpg',      
      ];
  
      const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      const imageContainer = document.getElementById('image-container');
      const randomImage = new Image();
      randomImage.src = randomImagePath;
      randomImage.alt = '';
      imageContainer.appendChild(randomImage);
    });
  })();