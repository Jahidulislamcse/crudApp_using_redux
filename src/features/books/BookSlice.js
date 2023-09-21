const { createSlice } = require("@reduxjs/toolkit");
const { v4: uuidv4 } = require("uuid");

const initialBooks = {
  books: [
    { id: uuidv4(), title: "The nation of heroes", author: "Hamza Kader" },
    { id: uuidv4(), title: "The book of war", author: "Alen Xios" },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { showBooks, addBook } = booksSlice.actions;
export default booksSlice.reducer;
