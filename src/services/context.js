import { createContext, useEffect, useState } from 'react';

export const APIContext = createContext([]);

/**
 * Context da aplicação criado a partir do React.createContext
 */
export const APIProvider = ({ children }) => {
  const [fruits, setFruits] = useState([]);
  const [fruit, setSelectedFruit] = useState();

  /**
   * Função que adiciona ao estado a fruta desejada de acordo com o click do usuário
   * @param {*} fruit - fruta a ser passada
   */
  const handleSelectFruitClick = (fruit) => setSelectedFruit(fruit);

  /**
   * Função responsável por fazer o fetch da API de frutas...
   */
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
