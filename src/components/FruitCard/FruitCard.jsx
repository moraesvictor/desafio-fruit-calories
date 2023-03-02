import './FruitCard.css';

/**
 * Componente que renderiza um card que onde há o nome e a imagem da fruta.
 * @param fruitName - Nome da fruta
 * @param onClick - função responsável por determinar alguma ação no click do card.
 * @param img - URL da imagem a ser renderizada no card
 */
export const FruitCard = ({ fruitName, onClick, img }) => {
  return (
    <div onClick={onClick} className="wrapper">
      <span className="title">{fruitName}</span>
      <img className="img" src={img} />
    </div>
  );
};
