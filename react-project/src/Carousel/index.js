import React, { useState, useEffect } from 'react';
import './carossel.css';

import { GrPrevious, GrNext } from 'react-icons/gr';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isResponsive, setIsResponsive] = useState(false);

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
      title: 'Forjando a jóia',
      subtitle: 'Qual ferramenta de mercado?',
      description: 'Como usar a ferramenta para obter os resultados desejados?',
    },
    {
      title: 'Polimento criativo',
      subtitle: 'Um novo descobrimento',
      description: 'Saquei a ideia, posso tirar muito proveito disso na minha carreira profissional.',
    },
    {
      title: 'Exposição Exponencial',
      subtitle: 'Insights valiosos',
      description: 'Não imaginei que conseguiria fazer isso, me expondo ao mercado.',
    },
  ];

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 1150);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderItems = () => {
    if (isResponsive) {
      return (
        <div className='carossel'>
          <div className="carossel-item">
            <h2>{items[currentIndex].title}</h2>
            <div>
              <p>{items[currentIndex].subtitle}</p>
              <p>{items[currentIndex].description}</p>
            </div>
          </div>
        </div>
      );
    }

    const startIndex = currentIndex;
    const endIndex = (currentIndex + 2) % items.length;
    const indices = [startIndex, (startIndex + 1) % items.length, endIndex];

    return indices.map((index) => (
      <div className='carossel' key={index}>
        <div className="carossel-item">
          <h2>{items[index].title}</h2>
          <div>
            <p>{items[index].subtitle}</p>
            <p>{items[index].description}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="carossel">
      <div className="carossel2">
        <button onClick={prevItem}><GrPrevious /></button>
        {renderItems()}
        <button onClick={nextItem}><GrNext /></button>
      </div>
      <div className="carousel-dots">
        {items.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;