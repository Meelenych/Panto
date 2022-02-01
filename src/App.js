import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

import HomeView from './components/Home/HomeView';
import SearchResultPage from './components/SearchResultPage/SearchResultPage';
import FurnitureDetailsPage from './components/FurnitureDetailsPage/FurnitureDetailsPage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Container from './components/Container/Container';

export default function App() {
  return (
    <div>
      {/* <HomeView /> */}

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeView />}></Route>
          <Route path="/furniture/*" element={<SearchResultPage />}></Route>
          <Route
            path=":furnitureId/"
            element={<FurnitureDetailsPage />}
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Suspense>

      <Container>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
        <ToastContainer />
      </Container>
    </div>
  );
}
