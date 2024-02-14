import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout/Layout'));
const HomePage = lazy(() => import('./page/HomePage'));
const CarsRentPage = lazy(() => import('./page/CarsRentPage'));
const FavoriteCarsPage = lazy(() => import('./page/FavoriteCarsPage'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CarsRentPage />} />
            <Route path="/favorites" element={<FavoriteCarsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
