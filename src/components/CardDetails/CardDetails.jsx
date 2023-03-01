import './CardDetails.css';

/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
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
