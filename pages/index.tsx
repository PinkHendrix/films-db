import React from 'react';
import type { NextPage } from 'next';
// Fetch hook
import { useFetchMovies } from '../api/fetchHooks';
//Components
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Grid from '../components/Grid/Grid';
import Card from '../components/Card/Card';
import Spinner from '../components/Spinner/Spinner';

const Home: NextPage = () => {
  const [query, setQuery] = React.useState(''); // Preference to see what's coming from React, 'setQuery' is for search field

  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query); // All these props are coming from React-Query, our fetchHooks

  console.log(data);

  return (
    <main className="relative h-screen overflow-y-scroll">
      <Header setQuery={setQuery} />
      <Hero />
      <Grid />
      <Card />
      <Spinner />
    </main>
  );
};

export default Home;
