import classes from './Contact.module.css'
import { BsFillPinMapFill } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import { MdOutlineContactPhone } from 'react-icons/md'

const Contact = () => {
    return (
        <section id='contact' className={classes.contact}>
            <div className={classes.container}>
                <iframe className={classes.map} title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19772.186491370718!2d18.13763368694281!3d51.723463083653414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ac406ca2cd9c1%3A0x46a67fe3479acd2b!2zU3phxYJl!5e0!3m2!1spl!2spl!4v1686603388393!5m2!1spl!2spl" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className={classes.description}>
                    <div className={classes['description-item']}>
                        <BsFillPinMapFill className={classes.icon} size={45}/>
                        <p>Szałe, ul. Kaliska 193<br/>62-860 Opatówek</p>

                    </div>
                    <div className={classes['description-item']}>
                        <AiFillPhone className={classes.icon} size={45}/>
                        <p>+48 602 180 484</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact