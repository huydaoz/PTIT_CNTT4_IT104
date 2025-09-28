import axios from "axios";
import type { Book } from "../utils/types";

const api = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
});

export const fetchBooks = async (): Promise<Book[]> => {
  const res = await api.get<Book[]>("/books");
  return res.data;
};

export const createBook = async (book: Omit<Book, "id">): Promise<Book> => {
  const res = await api.post<Book>("/books", book);
  return res.data;
};

export const updateBook = async (
  id: number,
  book: Omit<Book, "id">
): Promise<Book> => {
  const res = await api.put<Book>(`/books/${id}`, book);
  return res.data;
};

export const deleteBook = async (id: number): Promise<void> => {
  await api.delete(`/books/${id}`);
};

export const fetchCategories = async (): Promise<string[]> => {
  const res = await api.get<string[]>("/categories");
  return res.data;
};

export default api;
