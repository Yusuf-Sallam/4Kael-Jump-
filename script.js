document.getElementById("buy").addEventListener("click", function() {
    // Redirect to another HTML file when the button is clicked
    window.location.href = "survey.html";
});


document.getElementById("standard_learn").addEventListener("click", function() {
    // Redirect to another HTML file when the button is clicked
    window.location.href = "standard_learn.html";
});

document.getElementById("personal_learn").addEventListener("click", function() {
    // Redirect to another HTML file when the button is clicked
    window.location.href = "personal_learn.html";
});



// script.js
document.getElementById("schedule").addEventListener("click", function () {
    window.location.href = "1on1_learn.html";
});


        // JavaScript function to toggle the visibility of content
        function toggleSection(sectionId) {
            var content = document.getElementById(sectionId);
            if (content.style.display === "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        }


        const gifContainer = document.querySelector('.gif-container');
        const navigation = document.querySelector('.navigation');

        const gifs = [
            'dunk_2.gif',
            'dunk_1.gif',
            'dunk_3.gif',
            'dunk_4.gif',
            'dunk_5.gif',
            'dunk_6.gif',
            'dunk_7.gif',
        ];

        // Create navigation circles
        gifs.forEach((_, index) => {
            const circle = document.createElement('div');
            circle.classList.add('navigation-circle');
            circle.addEventListener('click', () => showGif(index));
            navigation.appendChild(circle);
        });

        let currentGifIndex = 0;

        // Function to display a GIF
        function showGif(index) {
            currentGifIndex = index;
            gifContainer.innerHTML = `<img class="gif" src="${gifs[index]}">`;
            updateNavigationCircles();
        }

        // Function to update navigation circles
        function updateNavigationCircles() {
            const circles = document.querySelectorAll('.navigation-circle');
            circles.forEach((circle, index) => {
                if (index === currentGifIndex) {
                    circle.classList.add('active');
                } else {
                    circle.classList.remove('active');
                }
            });
        }

        // Initial display
        showGif(currentGifIndex);






        document.addEventListener("DOMContentLoaded", function() {
          const starField = document.getElementById('stars');
          const numberOfStars = 150;
          const numberOfRockets = 5; // Number of rockets

          for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}vw`;
            star.style.bottom = `${Math.random() * 100}vh`;
            star.style.animationDuration = `${Math.random() * 5 + 5}s`;
            star.style.animationDelay = `-${Math.random() * 10}s`;

            starField.appendChild(star);
          }

          for (let i = 0; i < numberOfRockets; i++) {
            const rocket = document.createElement('div');
            const trail = document.createElement('div');
            
            rocket.className = 'rocket';
            rocket.style.left = `${Math.random() * 100}vw`;
            rocket.style.bottom = `${Math.random() * 100}vh`;
            rocket.style.animationDuration = `${Math.random() * 5 + 5}s`;
            rocket.style.animationDelay = `-${Math.random() * 10}s`;

            trail.className = 'trail';
            trail.style.left = `calc(${rocket.style.left} - 1px)`;
            trail.style.animationDuration = rocket.style.animationDuration;
            trail.style.animationDelay = rocket.style.animationDelay;
            
            starField.appendChild(trail);
            starField.appendChild(rocket);
          }
        });
