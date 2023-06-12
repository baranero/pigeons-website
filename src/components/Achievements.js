import { AiFillTrophy } from 'react-icons/ai'
import classes from './Achievements.module.css'

const Achievements = () => {
    return (
        <section id='achievements' className={classes.achievements}>
            <div className={classes['title-container']}>
                <AiFillTrophy size={50}/>
                <p className={classes['title']}>Osiągniecia</p>
            </div>
        </section>
    )
}

export default Achievements