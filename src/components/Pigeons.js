import { GiNestBirds } from 'react-icons/gi'
import classes from './Pigeons.module.css'
import ImageSlider from './ImageSlider'
import { SliderData } from '../sliderData'

const Pigeons = () => {
    return (
        <section id='pigeons' className={classes.pigeons}>
            <div className={classes['title-container']}>
                <GiNestBirds size={50}/>
                <p className={classes['title']}>Gołębie</p>
            </div>
            <ImageSlider slides={SliderData}/>
        </section>
    )
}

export default Pigeons