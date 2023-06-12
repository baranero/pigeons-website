import { GiNestBirds } from 'react-icons/gi'
import classes from './Pigeons.module.css'

const Pigeons = () => {
    return (
        <section className={classes.pigeons}>
            <div className={classes['title-container']}>
                <GiNestBirds size={50}/>
                <p className={classes['title']}>Gołębie</p>
            </div>
        </section>
    )
}

export default Pigeons