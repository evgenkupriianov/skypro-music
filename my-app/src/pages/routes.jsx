import { Routes, Route } from "react-router-dom";
import { NotFound } from "./not-found";
import { MainPage } from "./main";
import { LoginPage } from "./login";
import { FavoritesPage } from "./favorites";
import { SignUpPage } from "./signup";
import { CategoryPage } from "./category";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Главная страница */}
      <Route path="/" element={<MainPage />} />

      {/* Вход в приложение */}
      <Route path="/login" element={<LoginPage />} />

      {/* Регистрация */}
      <Route path="/signup" element={<SignUpPage />} />

      {/* ??? */}
      <Route path="/favorites" element={<FavoritesPage />} />

      {/* ??? */}
      <Route path="/category/:id" element={<CategoryPage />} />

      {/* Страница не найдена */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
