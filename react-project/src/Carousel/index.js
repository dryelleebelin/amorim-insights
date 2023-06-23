import React, { useState } from 'react';
import './carossel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: 'Despertar da mina de ouro',
      subtitle: 'Universo dos dados',
      description: 'Onde eles estão, como se comportam, como posso me aproveitar desse momento da tecnologia?',
    },
    {
      title: 'Mineração estratégica',
      subtitle: 'Demandas urgentes',
      description: 'Como o mercado está se comportando com a nova era dos dados, qual perfil procuram, o que devo estudar para alcançar essas oportunidades?',
    },
    {
      title: 'Fundição do conhecimento',
      subtitle: 'Unindo experiências',
      description: 'Como usar todo meu aprendizado para aplicar no mundo dos dados?',
    },
    {
      title: 'teste1Despertar da mina de ouro',
      subtitle: 'Universo dos dados',
      description: 'Onde eles estão, como se comportam, como posso me aproveitar desse momento da tecnologia?',
    },
    {
      title: 'teste2Mineração estratégica',
      subtitle: 'Demandas urgentes',
      description: 'Como o mercado está se comportando com a nova era dos dados, qual perfil procuram, o que devo estudar para alcançar essas oportunidades?',
    },
    {
      title: 'teste3Fundição do conhecimento',
      subtitle: 'Unindo experiências',
      description: 'Como usar todo meu aprendizado para aplicar no mundo dos dados?',
    },
  ];

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const renderItems = () => {
    const startIndex = currentIndex;
    const endIndex = (currentIndex + 2) % items.length;
    const indices = [startIndex, (startIndex + 1) % items.length, endIndex];

    return indices.map((index) => (
      <div key={index} className="carossel-item">
        <h2>{items[index].title}</h2>
        <span>
          <p>{items[index].subtitle}</p>
          <p>{items[index].description}</p>
        </span>
      </div>
    ));
  };

  return (
    <div className="carossel">
      <button onClick={prevItem}>Anterior</button>
      {renderItems()}
      <button onClick={nextItem}>Próximo</button>
    </div>
  );
};

export default Carousel;
