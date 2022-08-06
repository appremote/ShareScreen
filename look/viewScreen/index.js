"user strict";
let localStream = new Array(9);

var url = new URL(window.location.href);
var params = url.searchParams;

const peer = new Peer({
  key: "c2ad39ff-ed02-41e1-b1f1-c918871c1f28",
  debug: 3,
});

document.getElementById("button01").onclick = () => {
  const theirID = document.getElementById("text01").value;
  const mediaConnection = peer.call(theirID, localStream[0]);
  setEventListener(mediaConnection, 1);
};

window.onload = function () {
  //document.getElementById('text01').value=params.get('id');
};

// イベントリスナを設置する関数
function setEventListener(mediaConnection, listt) {
  mediaConnection.on("stream", (stream) => {
    // video要素にカメラ映像をセットして再生
    strrr = "their-video0" + listt;
    const videoElm = document.getElementById(strrr);
    videoElm.srcObject = stream;
    videoElm.play();
  });
}
