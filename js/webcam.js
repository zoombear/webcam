// Set up video and DOM variables
const div = document.getElementById('screenshot');
const video = document.querySelector('#screenshot video');
const canvas = document.createElement('canvas');
let timer;

// Initialize camera on page load
const init = () => {
  console.log('init!');
  navigator.mediaDevices.getUserMedia({video: true}).
    then(handleSuccess).catch(handleError);
}

// Take video and set up screenshot timer
const handleSuccess = (stream) => {
  video.srcObject = stream;
  timer = setInterval(() => {takeScreenshot()}, 1000);
}

// Take video feed and insert images into DOM
const takeScreenshot = () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  const img = new Image();
  img.src = canvas.toDataURL('image/webp');
  div.insertBefore(img, div.childNodes[0])
}

const handleError = error => console.error('error:', error);
