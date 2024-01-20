import styles from "./Navbar.module.css"

const  Navbar = () => {
    return (
        <nav>
            <a href=""><img src="logo.png" ></img></a>
            <p className={styles.head}>PhotoFolio</p>
        </nav>
    )
}

export default Navbar;