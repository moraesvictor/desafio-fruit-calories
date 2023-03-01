import { createContext, useEffect, useState } from 'react';

export const APIContext = createContext([]);

/**
 * Context da aplicação
 */
// eslint-disable-next-line react/prop-types
export const APIProvider = ({ children }) => {
  const [fruits, setFruits] = useState([]);
  const [fruit, setSelectedFruit] = useState();

  const handleSelectFruitClick = (fruit) => setSelectedFruit(fruit);

  console.log(fruit);

  const fetchData = () => {
    return fetch(
      'http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json',
    )
      .then((response) => response.json())
      .then((data) => setFruits(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const objectData = {
    fruits,
    fruit,
    handleSelectFruitClick,
  };

  return (
    <APIContext.Provider value={objectData}>{children}</APIContext.Provider>
  );
};
