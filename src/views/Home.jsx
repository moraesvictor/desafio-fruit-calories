import { Header } from '../components/Header/Header.jsx';
import { CardList } from '../components/CardList/CardList.jsx';

/**
 * Componente responsável por gerar a view inicial da aplicação com a listagem de todas as frutas...
 */
export const Home = () => {
  return (
    <>
      <Header />
      <CardList />
    </>
  );
};
