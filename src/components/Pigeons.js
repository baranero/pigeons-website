import { GiNestBirds } from 'react-icons/gi'
import classes from './Pigeons.module.css'
import ImageSlider from './ImageSlider'
import { SliderData } from '../sliderData'

const Pigeons = () => {
    return (
        <section id='pigeons' className={classes.pigeons}>
            <div className={classes.images}>
                <ImageSlider slides={SliderData}/>
                <div className={classes['images-container']}>
                <h2 className={classes.title}>Starannie wyselekcjowane linie gołębi</h2>
                <p className={classes.description}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            </div>
        </section>
    )
}

export default Pigeons