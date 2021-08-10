"user strict";
let localStream = new Array(9);

var url = new URL(window.location.href);
var params = url.searchParams;

const peer = new Peer({
  key: 'c2ad39ff-ed02-41e1-b1f1-c918871c1f28',
  debug: 3
});

document.getElementById('button01').onclick = () => {
  const theirID = document.getElementById('text01').value;
  const mediaConnection = peer.call(theirID, localStream[0]);
  setEventListener(mediaConnection,1);
};
document.getElementById('button02').onclick = () => {
  const theirID = document.getElementById('text02').value;
  const mediaConnection = peer.call(theirID, localStream[1]);
  setEventListener(mediaConnection,2);
};
document.getElementById('button03').onclick = () => {
  const theirID = document.getElementById('text03').value;
  const mediaConnection = peer.call(theirID, localStream[2]);
  setEventListener(mediaConnection,3);
};
document.getElementById('button04').onclick = () => {
  const theirID = document.getElementById('text04').value;
  const mediaConnection = peer.call(theirID, localStream[3]);
  setEventListener(mediaConnection,4);
};
document.getElementById('button05').onclick = () => {
  const theirID = document.getElementById('text05').value;
  const mediaConnection = peer.call(theirID, localStream[4]);
  setEventListener(mediaConnection,5);
};
document.getElementById('button06').onclick = () => {
  const theirID = document.getElementById('text06').value;
  const mediaConnection = peer.call(theirID, localStream[5]);
  setEventListener(mediaConnection,6);
};
document.getElementById('button07').onclick = () => {
  const theirID = document.getElementById('text07').value;
  const mediaConnection = peer.call(theirID, localStream[6]);
  setEventListener(mediaConnection,7);
};
document.getElementById('button08').onclick = () => {
  const theirID = document.getElementById('text08').value;
  const mediaConnection = peer.call(theirID, localStream[7]);
  setEventListener(mediaConnection,8);
};
document.getElementById('button09').onclick = () => {
  const theirID = document.getElementById('text09').value;
  const mediaConnection = peer.call(theirID, localStream[8]);
  setEventListener(mediaConnection,9);
};


window.onload = function() {
  //document.getElementById('text01').value=params.get('id');
}

// イベントリスナを設置する関数
function setEventListener (mediaConnection, listt){
  mediaConnection.on('stream', stream => {
    // video要素にカメラ映像をセットして再生
    strrr='their-video0'+listt
    const videoElm = document.getElementById(strrr)
    videoElm.srcObject = stream;
    videoElm.play();
  });
}