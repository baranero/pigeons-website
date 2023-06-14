import { GiNestBirds } from 'react-icons/gi'
import classes from './Pigeons.module.css'
import ImageSlider from './ImageSlider'
import { SliderData } from '../sliderData'

const Pigeons = () => {
    return (
        <section id='pigeons' className={classes.pigeons}>
            <div className={classes.images}>
                <ImageSlider slides={SliderData}/>
                <p className={classes['images-description']}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </section>
    )
}

export default Pigeons