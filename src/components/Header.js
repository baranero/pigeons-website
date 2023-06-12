import classes from './Header.module.css'

const Header = () => {
    return (
        <section className={classes.header}>
            <div className={classes['header-logo']}>
                <img className={classes.image} src="./images/logo.png" alt="Logo"/>
                <h1>Krzysztof Baran</h1>
            </div>
            <nav>
                <ul className={classes.navbar}>
                    <li className={classes['navbar-item']}><a href="/about">O mnie</a></li>
                    <li className={classes['navbar-item']}><a href="/achievements">Osiągniecia</a></li>
                    <li className={classes['navbar-item']}><a href="/pigeons">Gołębie</a></li>
                    <li className={classes['navbar-item']}><a href="/contact">Kontakt</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default Header