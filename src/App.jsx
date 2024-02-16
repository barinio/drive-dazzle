import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectIsOpenModal } from './redux/cars.selectors';
import { ModalCar } from './components/ModalCar/ModalCar';
import { Loader } from './components/Loader/Loader';

const Layout = lazy(() => import('./components/Layout/Layout'));
const HomePage = lazy(() => import('./page/HomePage'));
const CarsRentPage = lazy(() => import('./page/CarsRentPage'));
const FavoriteCarsPage = lazy(() => import('./page/FavoriteCarsPage'));

function App() {
  const isOpenModal = useSelector(selectIsOpenModal);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    document.body.style.overflow = isOpenModal ? 'hidden' : '';
  }, [isOpenModal]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CarsRentPage />} />
            <Route path="/favorites" element={<FavoriteCarsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
      {isOpenModal && <ModalCar />}
      {isLoading && <Loader />}
    </>
  );
}

export default App;
