import styles from './../../styles/Modal.module.css';
import Button from '../button/Button';
import { ModalProps } from '../../types';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        {children}
        <Button title='Cerrar' onClick={onClose} className={styles.bottomRightButton}/>
      </div>
    </div>
  );
};

export default Modal;
