import { Header } from '../components/Header/Header.jsx';
import { CardDetails } from '../components/CardDetails/CardDetails.jsx';
import { APIContext } from '../services/context';
import { useContext } from 'react';

export const FruitDetails = () => {
  const { fruit } = useContext(APIContext);

  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <CardDetails info={fruit} />
    </div>
  );
};
