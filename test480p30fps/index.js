"user strict";
let localStream;
var peer;
var ID;

/*peer.on('open', () => {
  document.getElementById('my-id').textContent = peer.id;
});*/

const mediaStreamConstraints = {
  audio: {
    noiseSuppression: false,
    autoGainControl: false,
    channelCount: 2,
  },
  video: {
    width: 720,
    height: 480,
    frameRate: { max: 30 },
  },
};

document.getElementById("start").onclick = function () {
  navigator.mediaDevices
    .getDisplayMedia(mediaStreamConstraints)
    .then(gotLocalMediaStream)
    .catch(handleLocalMediaStreamError);
  ID = document.getElementById("set-id").value;
  if (ID != "") {
    console.log("IDがセットされている");
    peer = new Peer(ID, {
      key: "c2ad39ff-ed02-41e1-b1f1-c918871c1f28",
      debug: 3,
    });
  } else {
    console.log("IDがセットされていない");
    peer = new Peer({
      key: "c2ad39ff-ed02-41e1-b1f1-c918871c1f28",
      debug: 3,
    });
  }

  peer.on("open", () => {
    document.getElementById("my-id").textContent = peer.id;
  });
  peer.on("call", (mediaConnection) => {
    mediaConnection.answer(localStream, {
      videoBandwidth: 14000,
      audioBandwidth: 4000,
    });
    setEventListener(mediaConnection);
  });
  navigator.clipboard.writeText(
    "https://share-screen.vercel.app/look/viewScreen/?id=" + ID
  );
  console.log(peer.id);
};

const localVideo = document.querySelector("video");

function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream;
}

function handleLocalMediaStreamError(error) {
  console.log("navigator.getUserMedia error: ", error);
}
