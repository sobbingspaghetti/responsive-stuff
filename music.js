 // Function to change the music based on screen width
 function updateMusicBasedOnScreenSize() {
    const audioElement = document.getElementById('background-music');
    const audioSource = document.getElementById('audio-source');
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) { // Small screen, mobile
        audioSource.src = "audio/バラック集落 4.mp3"; 
    } else if (screenWidth > 768 && screenWidth <= 1024) { // Medium screen, tablet
        audioSource.src = "audio/Yume Nikki (OST ) - Snow World 4.mp3"; 
    } else { // Large screen, desktop
        audioSource.src = "audio/SDR2 OST_ -3-16- Beautiful Ruin [16bit] 4.mp3"; 
    }

    // Load the new audio source and play it
    audioElement.load();
    audioElement.play();
}

// Listen for window resize events and update the music
window.addEventListener('resize', updateMusicBasedOnScreenSize);

// Initial check on page load
window.onload = updateMusicBasedOnScreenSize;
  