import { Route, Routes } from 'react-router-dom';
// pages
import ExamplePage from './pages/ExamplePage';
import ExampleSwiperPage from './pages/ExampleSwiperPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MemberUserInfoPage from './pages/MemberUserInfoPage';
import MemberUserOrdersPage from './pages/MemberUserOrdersPage';
import RegisterPage from './pages/RegisterPage';
import RoomPage from './pages/RoomPage';

export default function Router() {
  return (
    <Routes>
      {/* example 開頭的等用不掉的時候可直接刪掉 */}
      <Route path="/example" element={<ExamplePage />} />
      <Route path="/exampleSwiperPage" element={<ExampleSwiperPage />} />
      <Route path="/" index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/member/user-info" element={<MemberUserInfoPage />} />
      <Route path="/member/orders" element={<MemberUserOrdersPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/password" element={<p>忘記密碼，設計稿沒有，之後再處理</p>} />
      <Route path="/rooms" element={<RoomPage />} />
    </Routes>
  );
}
