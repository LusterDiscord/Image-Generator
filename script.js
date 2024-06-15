// script.js

const randomImage = document.getElementById('randomImage');
const notificationBox = document.getElementById('notificationBox');
const closeNotification = document.getElementById('closeNotification');

// Show notification initially
notificationBox.classList.add('active');

// Close notification when X button is clicked
closeNotification.addEventListener('click', () => {
    notificationBox.classList.remove('active');
});

async function fetchRandomImage() {
    try {
        const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=10000&col=1&base=10&format=plain&rnd=new');
        const randomNumber = await response.text();
        const imageUrl = `https://picsum.photos/seed/${randomNumber}/600/400`; // Using Picsum.photos for random images
        randomImage.src = imageUrl;

        // Log message to console
        console.log('Image changed successfully:', imageUrl);
    } catch (error) {
        console.error('Error fetching random image:', error);
    }
}

// Fetch a new image initially
fetchRandomImage();

// Set interval to change images periodically
setInterval(fetchRandomImage, 5000); // Fetch a new image every 5 seconds
