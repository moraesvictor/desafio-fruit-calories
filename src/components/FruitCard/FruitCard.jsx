/* eslint-disable react/prop-types */
import './FruitCard.css';

/**
 * Card que renderiza o nome e a imagem da fruta.
 */
export const FruitCard = ({ fruitName, onClick, img }) => {
  return (
    <div onClick={onClick} className="wrapper">
      <span className="title">{fruitName}</span>
      <img className="img" src={img} />
    </div>
  );
};
