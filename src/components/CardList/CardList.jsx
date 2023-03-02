import { useContext } from 'react';
import { FruitCard } from '../FruitCard/FruitCard';
import { APIContext } from '../../services/context';
import './CardList.css';
import { Link } from 'react-router-dom';
import { DETAIL_CARD } from '../../Routes/Routes';

/**
 * Componente responsável pela renderização da listagem de frutas com seu nome e descrição
 */
export const CardList = () => {
  const { fruits, handleSelectFruitClick } = useContext(APIContext);

  return (
    <Link style={{ textDecorationLine: 'none' }} to={DETAIL_CARD}>
      <div className="list">
        {fruits.map((fruit, index) => (
          <FruitCard
            onClick={() => handleSelectFruitClick(fruit)}
            key={index}
            fruitName={fruit.name}
            img={fruit.photo}
          />
        ))}
      </div>
    </Link>
  );
};
