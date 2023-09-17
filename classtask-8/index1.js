class Shiritori {
  constructor() {
    this.words = [];
    this.game_over = false;
  }
  play(word) {
    if (this.words.length === 0) {
      this.words = [word];
      return this.words;
    }

    if (this.words.includes(word)) {
      console.log("game over");
      return;
    }

    if (this.words[this.words.length - 1].at(-1) === word[0]) {
      this.words = [...this.words, word];
      return this.words;
    }

    this.game_over = true;
    console.log("game over");
  }

  restart() {
    this.words = [];
    this.game_over = false;
    return "game restarted";
  }
}

let myShiritori = new Shiritori();

console.log(myShiritori.play("apple")); // ["apple"]
console.log(myShiritori.play("ear")); // ["apple", "ear"]
console.log(myShiritori.play("rhino")); // ["apple", "ear", "rhino"]

myShiritori.play("corn"); // "game over"
