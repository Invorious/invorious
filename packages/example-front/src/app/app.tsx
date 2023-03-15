import { Route, Routes, Navigate } from 'react-router-dom';
import LoginOptions from './modules/login-options/login-options';
import Register from './modules/register/register';

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginOptions />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
