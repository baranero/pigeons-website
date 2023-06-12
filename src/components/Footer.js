import classes from './Footer.module.css'
import { BsFacebook, BsInstagram } from 'react-icons/bs'


const Footer = () => {
    return (
        <section className={classes.footer}>
            <div className={classes.icons}>
                <a className={classes.link} href="https://www.facebook.com/profile.php?id=100027016935553">
                    <BsFacebook size={35}/>
                </a>
                <a className={classes.link} href="https://www.instagram.com/krzysztof.b68/">
                    <BsInstagram size={35}/>
                </a>
            </div>
            <p>&copy;2023 <a className={classes.link} href='https://jakubbaran.dev/'>Jakub Baran</a> | All rights reserved.</p>
        </section>
    )
}

export default Footer