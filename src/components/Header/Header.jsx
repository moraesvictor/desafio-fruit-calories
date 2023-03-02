import './Header.css';
import arrow from '../../arrow.svg';
import { Link } from 'react-router-dom';
import { HOME } from '../../Routes/Routes';

/**
 * Cabeçalho da aplicação.
 * Nele há uma arrow que permite o usuário retornar para a listagem principal
 */
export const Header = () => {
  return (
    <div className="header">
      <Link to={HOME}>
        <img className="arrow" src={arrow} />
      </Link>
      <h2>Frutas e suas calorias</h2>
    </div>
  );
};
