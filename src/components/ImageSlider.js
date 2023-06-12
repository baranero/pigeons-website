import React, { useState } from 'react';
import classes from './ImageSlider.module.css'
import { SliderData } from '../sliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={classes.slider}>
      <FaArrowAltCircleLeft className={classes['left-arrow']} onClick={prevSlide} />
      <FaArrowAltCircleRight className={classes['right-arrow']} onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
          className={`${classes.slide} ${index === current ? classes.active : ''}`}
          key={index}
        >
          {index === current && (
            <img src={slide.image} alt='Pigeon' className={classes.image} />
          )}
        </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;