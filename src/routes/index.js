import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import BooksView from "../features/books/BooksView";
import AddBook from "../features/books/AddBook";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/show-books" element={<BooksView />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Index;
