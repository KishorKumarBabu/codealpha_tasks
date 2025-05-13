const songs = [
    {
      name: "song1",
      title: "Kaathirunthai Anbe",
      artist: "Chinmayi",
      cover: "images/cover1.jpg"
    },
    {
      name: "song2",
      title: "Aarum Kaanaathinnen",
      artist:"Shaan Rahman",
      cover: "images/cover2.jpg"
    },
    {
      name: "song3",
      title: "Freak Penne",
      artist: "Shaan Rahman",
      cover: "images/cover3.jpg"
    }
  ];
  
  let songIndex = 0;
  const audio = document.getElementById("audio");
  const title = document.getElementById("title");
  const artist = document.getElementById("artist");
  const cover = document.getElementById("cover");
  const playBtn = document.getElementById("play");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  
  let isPlaying = false;
  
  function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = `music/${song.name}.mp3`;
    cover.src = song.cover;
  }
  
  function playSong() {
    isPlaying = true;
    audio.play();
    playBtn.textContent = "⏸️";
  }
  
  function pauseSong() {
    isPlaying = false;
    audio.pause();
    playBtn.textContent = "▶️";
  }
  
  playBtn.addEventListener("click", () => {
    isPlaying ? pauseSong() : playSong();
  });
  
  nextBtn.addEventListener("click", () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
  });
  
  prevBtn.addEventListener("click", () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
  });
  
  loadSong(songs[songIndex]);
  