import './CardDetails.css';

/**
 * Componente responsável pelo detalhamento e especifiação dos detalhes de cada fruta
 * (nome, calorias, porção e etc...)
 * @param info - recebe por parâmetro um objeto que com as propriedades:
 * { "name", "calories", "protein", "carbohydrates","fiber", "blubber", "portion", "photo"}
 */
/* eslint-disable react/jsx-key */
export const CardDetails = ({ info }) => {
  const keys = Object.keys(info).filter(
    (item) => item !== 'name' && item !== 'photo',
  );
  const values = Object.values(info).filter(
    (item) => item !== info.name && item !== info.photo,
  );

  return (
    <div className="card-details-wrapper">
      <h3>{info.name}</h3>
      {keys.map((key, index) => (
        <div>
          <span>{`${key}: ${values[index]}`}</span>
        </div>
      ))}
    </div>
  );
};
