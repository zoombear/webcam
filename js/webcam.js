const captureVideoButton =
  document.querySelector('#screenshot .capture-button');
const screenshotButton = document.querySelector('#screenshot-button');
// const img = document.querySelector('#screenshot img');
const div = document.getElementById('screenshot');
const video = document.querySelector('#screenshot video');

const canvas = document.createElement('canvas');

captureVideoButton.onclick = function() {
  console.log('click');
  navigator.mediaDevices.getUserMedia({video: true}).
    then(handleSuccess).catch(handleError);
};

screenshotButton.onclick = video.onclick = function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  var img = new Image();
  // Other browsers will fall back to image/png
  img.src = canvas.toDataURL('image/webp');
  // div.appendChild(img);
  div.insertBefore(img, div.childNodes[0])
};

const handleSuccess = (stream) => {
  screenshotButton.disabled = false;
  video.srcObject = stream;
}

const handleError = error => console.error('error:', error);
