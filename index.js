let pictureIn = document.querySelector("#pictureIn");
let videoElement = document.querySelector("#video");

async function pictureInPicture() {
  try {
    const inPicture = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = inPicture;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
  pictureIn.addEventListener("click", async () => {
    pictureIn.disabled = true;
    await videoElement.requestPictureInPicture();
    pictureIn.disabled = false;
  });
}
pictureInPicture();
