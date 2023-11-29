import { useState } from 'react';
import styles from './../../styles/Banner.module.css';
import { config } from '../../api/apiConfig';
import ButtonCall from '../button/ButtonCall';
import Modal from '../modal/Modal';
import ModalContent from '../modal/ModalContent';
import { CheckCircle } from '../icons';

const Diagnostic = (): JSX.Element => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return(
    <>
      <div className={`${styles.banner} ${styles.diagnostic_container}`}>
          <div className={styles.diagnostic_text}>
            <h1 className={styles.banner_title}>{config.VIEWS.home.Diagnostic.title}</h1>
            <p className={styles.banner_description}>{config.VIEWS.home.Diagnostic.description}</p>
            
            <div className={styles.diagnotic}>
              {
                config.VIEWS.home.Diagnostic.imperfections.map((imperfection:string, index:number) => (
                    <div className={styles.imperfection} key={index}>
                      <span><CheckCircle fill='var(--first-color)'/></span>
                      <p>{imperfection}</p>
                    </div>
                  )
                )
              }
            </div>

            <ButtonCall title={config.VIEWS.home.Diagnostic.button} onClick={openModal} icon={''}/>
          </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent />
      </Modal>
    </>
  )
}

export default Diagnostic;