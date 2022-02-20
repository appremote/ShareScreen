"user strict";
let localStream = new Array(20);

var url = new URL(window.location.href);
var params = url.searchParams;

const peer = new Peer({
  key: '30c3a75c-c746-4f2d-a676-bd436ea1c7b3',
  debug: 3,
  config: {
    iceTransportPolicy: 'relay',
  }
});

document.getElementById('button01').onclick = () => {
  const theirID = document.getElementById('text01').value;
  const mediaConnection = peer.call(theirID, localStream[0]);
  setEventListener(mediaConnection,"01");
};
document.getElementById('button02').onclick = () => {
  const theirID = document.getElementById('text02').value;
  const mediaConnection = peer.call(theirID, localStream[1]);
  setEventListener(mediaConnection,"02");
};
document.getElementById('button03').onclick = () => {
  const theirID = document.getElementById('text03').value;
  const mediaConnection = peer.call(theirID, localStream[2]);
  setEventListener(mediaConnection,"03");
};
document.getElementById('button04').onclick = () => {
  const theirID = document.getElementById('text04').value;
  const mediaConnection = peer.call(theirID, localStream[3]);
  setEventListener(mediaConnection,"04");
};
document.getElementById('button05').onclick = () => {
  const theirID = document.getElementById('text05').value;
  const mediaConnection = peer.call(theirID, localStream[4]);
  setEventListener(mediaConnection,"05");
};
document.getElementById('button06').onclick = () => {
  const theirID = document.getElementById('text06').value;
  const mediaConnection = peer.call(theirID, localStream[5]);
  setEventListener(mediaConnection,"06");
};
document.getElementById('button07').onclick = () => {
  const theirID = document.getElementById('text07').value;
  const mediaConnection = peer.call(theirID, localStream[6]);
  setEventListener(mediaConnection,"07");
};
document.getElementById('button08').onclick = () => {
  const theirID = document.getElementById('text08').value;
  const mediaConnection = peer.call(theirID, localStream[7]);
  setEventListener(mediaConnection,"08");
};
document.getElementById('button09').onclick = () => {
  const theirID = document.getElementById('text09').value;
  const mediaConnection = peer.call(theirID, localStream[8]);
  setEventListener(mediaConnection,"09");
};
document.getElementById('button10').onclick = () => {
  const theirID = document.getElementById('text10').value;
  const mediaConnection = peer.call(theirID, localStream[9]);
  setEventListener(mediaConnection,"10");
};
document.getElementById('button11').onclick = () => {
  const theirID = document.getElementById('text11').value;
  const mediaConnection = peer.call(theirID, localStream[10]);
  setEventListener(mediaConnection,"11");
};
document.getElementById('button12').onclick = () => {
  const theirID = document.getElementById('text12').value;
  const mediaConnection = peer.call(theirID, localStream[11]);
  setEventListener(mediaConnection,"12");
};
document.getElementById('button13').onclick = () => {
  const theirID = document.getElementById('text13').value;
  const mediaConnection = peer.call(theirID, localStream[12]);
  setEventListener(mediaConnection,"13");
};
document.getElementById('button14').onclick = () => {
  const theirID = document.getElementById('text14').value;
  const mediaConnection = peer.call(theirID, localStream[13]);
  setEventListener(mediaConnection,"14");
};
document.getElementById('button15').onclick = () => {
  const theirID = document.getElementById('text15').value;
  const mediaConnection = peer.call(theirID, localStream[14]);
  setEventListener(mediaConnection,"15");
};
document.getElementById('button16').onclick = () => {
  const theirID = document.getElementById('text16').value;
  const mediaConnection = peer.call(theirID, localStream[15]);
  setEventListener(mediaConnection,"16");
};
document.getElementById('button17').onclick = () => {
  const theirID = document.getElementById('text17').value;
  const mediaConnection = peer.call(theirID, localStream[16]);
  setEventListener(mediaConnection,"17");
};
document.getElementById('button18').onclick = () => {
  const theirID = document.getElementById('text18').value;
  const mediaConnection = peer.call(theirID, localStream[17]);
  setEventListener(mediaConnection,"18");
};
document.getElementById('button19').onclick = () => {
  const theirID = document.getElementById('text19').value;
  const mediaConnection = peer.call(theirID, localStream[18]);
  setEventListener(mediaConnection,"19");
};
document.getElementById('button20').onclick = () => {
  const theirID = document.getElementById('text20').value;
  const mediaConnection = peer.call(theirID, localStream[19]);
  setEventListener(mediaConnection,"20");
};


window.onload = function() {
  //document.getElementById('text01').value=params.get('id');
}

// イベントリスナを設置する関数
function setEventListener (mediaConnection, listt){
  mediaConnection.on('stream', stream => {
    // video要素にカメラ映像をセットして再生
    strrr='their-video'+listt
    const videoElm = document.getElementById(strrr)
    videoElm.srcObject = stream;
    videoElm.play();
  });
}
