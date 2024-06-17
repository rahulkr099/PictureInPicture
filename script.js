// Get the video element and button element from the DOM
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Asynchronous function to prompt the user to select a media stream
async function selectMediaStream() {
    try {
        // Request the user to select a display media (screen, window, tab, etc.)
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // Set the selected media stream as the source for the video element
        videoElement.srcObject = mediaStream;
        // Once the video element has loaded metadata, play the video
        videoElement.onloadedmetadata = function() {
            videoElement.play();
        }
    } catch (error) {
        // Log any errors that occur during the getDisplayMedia call
        console.log('API not called:', error);
    }
}

// Add an event listener to the button for the 'click' event
button.addEventListener('click', async function() {
    // Disable the button to prevent multiple clicks
    button.disabled = true;
    // Request Picture in Picture mode for the video element
    await videoElement.requestPictureInPicture();
    // Re-enable the button after entering Picture in Picture mode
    button.disabled = false;
});

// Call selectMediaStream when the script loads to set up the media stream
selectMediaStream();
