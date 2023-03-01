/* eslint-disable react/prop-types */
import { Header } from '../components/Header/Header.jsx';
import { CardDetails } from '../components/CardDetails/CardDetails.jsx';
import { APIContext } from '../services/context';
import { useContext } from 'react';

export const FruitDetails = () => {
  const { fruit } = useContext(APIContext);

  return (
    <>
      <Header />
      <CardDetails info={fruit} />
    </>
  );
};
