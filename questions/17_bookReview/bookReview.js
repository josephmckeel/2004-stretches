class BookReview {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.notes = [];
    this.rating = 0;
  }

  addNotes(page, note) {
    if (this.notes[page]) {
      this.notes[page] = this.notes[page].concat(" ", note);
    } else {
      this.notes[page] = note;
    }
  }

  addRating(rating) {
    if (rating > 5) {
      throw new Error("too large");
    }
    this.rating = rating;
  }
}
module.exports = { BookReview };
