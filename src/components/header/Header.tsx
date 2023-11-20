import styles from './../../styles/Header.module.css';
import logo from './../../assets/logo/logo_fisiosthetic.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className={styles.header} >
            <picture>
                <Link to='/'><img src={logo} alt="logo_edisea" loading="lazy"/></Link>
            </picture>
        </nav>
    );
}

export default Header;