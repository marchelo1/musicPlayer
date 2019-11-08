const songs = [
  "01 - Sôl Austan.mp3",
  "02 - Sôlarrâs.mp3",
  "03 - Haugaeldr.mp3",
  "04 - Sôlarguði.mp3",
  "05 - Hîð.mp3",
  "06 - Heljarmyrkr.mp3",
  "07 - Sôlbjörg.mp3"
];

const createSongList = () => {
  const list = document.createElement("ol");

  for (let i = 0; i < songs.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(songs[i]));

    list.appendChild(item);
  }
  return list;
};

document.getElementById("songList").appendChild(createSongList());

songList.onclick = e => {
  const clickedItem = e.target;
  const source = document.getElementById("source");
  source.src = "songs/" + clickedItem.innerText;

  document.getElementById("currentlyPlayingSong").innerText =
    "Currently Playing: ";
  document.getElementById("currentSong").innerText = clickedItem.innerText;

  player.load();
  player.play();
};

const playAudio = () => {
  if (player.readyState) {
    player.play();
  }
};

const pauseAudio = () => {
  player.pause();
};

const slide = document.getElementById("volumeSlider");
slide.oninput = e => {
  const volume = e.target.value;
  player.volume = volume;
};

const updateProgress = () => {
  if (player.currentTime > 0) {
    const progressBar = document.getElementById("progress");
    progressBar.value = (player.currentTime / player.duration) * 100;
  }
};
