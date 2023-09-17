// Write Pagination object that will get an array and pageSize, then will return the following.
// prevPage
// nextPage
// firstPage
// lastPage
// goToPage
// getPageItems

const Pagination = {
  init: function (array, pageSize) {
    this.array = array;
    this.pageSize = pageSize;
    this.currentPage = 1;
    return this;
  },

  prevPage: function () {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    return this;
  },

  nextPage: function () {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
    return this;
  },

  firstPage: function () {
    return (this.currentPage = 1);
  },

  lastPage: function () {
    return this.totalPages();
  },

  goToPage: function (num) {
    this.currentPage = num;
    return this;
  },

  getPageItems: function () {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.array.slice(start, end);
  },

  totalPages: function () {
    return Math.ceil(this.array.length / this.pageSize);
  },
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);

console.log(Pagination.getPageItems()); // ["a", "b", "c", "d"]
Pagination.nextPage();
console.log(Pagination.getPageItems()); // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage();
console.log(Pagination.getPageItems());
Pagination.goToPage(3);
console.log(Pagination.currentPage); // 3
console.log(Pagination.lastPage());
