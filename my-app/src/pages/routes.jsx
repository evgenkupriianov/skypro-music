import { Routes, Route } from "react-router-dom";
import { NotFound } from ".//not-found";
import { MainPage } from "./main";
import { LoginPage } from "./login";
import { FavoritesPage } from "./favorites";
import { RegisterPage } from "./register";
import { CategoryPage } from "./category";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/favorites" element={<FavoritesPage/>} />
      <Route path="/category" element={<CategoryPage/>} />
      <Route path="/" element={<MainPage/>} />
    </Routes>
  );
};