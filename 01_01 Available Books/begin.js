/*
  WRITE YOUR SOLUTION HERE
*/
export class Book {
  constructor(title, author, ISBN, numberOfAvailableCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numberOfAvailableCopies = numberOfAvailableCopies;
  }

  get availability() {
    if (this.numberOfAvailableCopies < 10) {
      if (this.numberOfAvailableCopies === 0) {
        return "Out of stock";
      }
      return "Low stock";
    }
    return "In stock";
  }

  sell(numberOfCopies = 1) {
    this.numberOfAvailableCopies -= numberOfCopies;
  }

  restock(numberOfCopies = 5) {
    this.numberOfAvailableCopies += numberOfCopies;
  }
}
