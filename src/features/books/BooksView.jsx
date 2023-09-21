import React from "react";
import { useSelector } from "react-redux";

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  return (
    <div>
      <h2>List of Books</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { title, author } = book;
              return (
                <tr>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
