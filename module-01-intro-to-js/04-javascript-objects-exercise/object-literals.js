//Option one
const bookOptionOne = {
  title: 'Learning JS',
  author: 'Daniel F',
  pages: 150,
  isRead: false,
  summary: function () {
    return `Title: ${this.title}, Author: ${this.author}, pages: ${
      this.pages
    }, Read: ${this.isRead ? 'Yes' : 'No'}`;
  },
};

console.log(bookOptionOne.summary());

// -------------------------------------

//Option two
const bookOptionTwo = {
  title: 'Learning JS',
  author: 'Daniel F',
  pages: 150,
  isRead: false,
  summary() {
    return `Title: ${this.title}, Author: ${this.author}, pages: ${
      this.pages
    }, Read: ${this.isRead ? 'Yes' : 'No'}`;
  },
};

console.log(bookOptionTwo.summary());

// -------------------------------------

//Option Three
function bookSummary() {
  return `Title: ${this.title}, Author: ${this.author}, pages: ${
    this.pages
  }, Read: ${this.isRead ? 'Yes' : 'No'}`;
}

const bookOptionThree = {
  title: 'Learning JS',
  author: 'Daniel F',
  pages: 150,
  isRead: false,
};

bookOptionThree.summary = bookSummary;

console.log(bookOptionThree.summary());
