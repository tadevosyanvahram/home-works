function Playlist() {
  this.songs = [];
  this.currentSongIndex = 0;
}

function Song(track, artist) {
  this.track = track;
  this.artist = artist;
  this.isPlaying = false;
}

Playlist.prototype.add = function (song) {
  this.songs.push(song);
};

Playlist.prototype.play = function () {
  if (this.songs.length > 0) {
    this.songs[this.currentSongIndex].isPlaying = true;
    console.log(
      `Playing: ${this.songs[this.currentSongIndex].track} by ${
        this.songs[this.currentSongIndex].artist
      }`
    );
  }
};

Playlist.prototype.stop = function () {
  if (this.songs.length > 0) {
    this.songs[this.currentSongIndex].isPlaying = false;
    console.log(
      `Stopped: ${this.songs[this.currentSongIndex].track} by ${
        this.songs[this.currentSongIndex].artist
      }`
    );
  }
};

Playlist.prototype.next = function () {
  if (this.songs.length > 0) {
    this.stop();
      this.currentSongIndex = this.currentSongIndex + 1;
    this.play();
  }
};

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
playlist.add(heyJude);
playlist.add(jaded);

playlist.play();
playlist.stop();
playlist.next();
