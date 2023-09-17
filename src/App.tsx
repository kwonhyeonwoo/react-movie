import React from 'react';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Tv from './components/Tv/Tv';
import Search from './components/Search/Search';
import GlobalStyle from './GlobalStyle/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from './components/Footer/Footer';

const client = new QueryClient();

function App() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/react-movie" element={<Home />} />
          <Route path="/react-movie/tv" element={<Tv />} />
          <Route path="/react-movie/search" element={<Search />} />
        </Routes>
        <Footer />
      </QueryClientProvider>

    </BrowserRouter>
  );
}

export default App;
