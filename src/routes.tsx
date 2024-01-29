import { Route, Routes } from 'react-router-dom';
// pages
import ExamplePage from './pages/ExamplePage';
import ExampleSwiperPage from './pages/ExampleSwiperPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

export default function Router() {
  return (
    <Routes>
      {/* example 開頭的等用不掉的時候可直接刪掉 */}
      <Route path="/example" index element={<ExamplePage />} />
      <Route path="/exampleSwiperPage" index element={<ExampleSwiperPage />} />
      <Route path="/" index element={<HomePage />} />
      <Route path="/login" index element={<LoginPage />} />
    </Routes>
  );
}
