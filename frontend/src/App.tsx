import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Homepage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OverviewPage from './pages/OverviewPage';
import LibraryPage from './pages/LibraryPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Homepage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route
            path="overview"
            element={<OverviewPage />}
          />
          <Route
            path="library"
            element={<LibraryPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
