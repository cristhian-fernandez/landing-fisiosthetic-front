import { ButtonProps } from '../../types';
import styles from './../../styles/Button.module.css';
const Button: React.FC<ButtonProps> = ({ title, onClick, className}) => {
    return (
        <div>
            <button className={`${styles.button} ${className}`} onClick={onClick}>
                {title}
            </button>  
        </div>
    );
}

export default Button;