import classes from './About.module.css'

const About = () => {
    return (
        <section id='about' className={classes.about}>
            <img className={classes.image} src='./images/profile.jpg' alt='Profile'/>
            <img className={classes['image-background']} src='./images/profile.jpg' alt='Profile'/>
            <div className={classes['about-container']}>
                <h2 className={classes.title}>Krzysztof Baran</h2>
                <p className={classes.description}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </section>
    )
}

export default About