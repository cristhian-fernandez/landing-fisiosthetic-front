import { useState } from 'react';
import styles from './../../styles/Banner.module.css';
import { config } from '../../api/apiConfig';
import ButtonCall from '../button/ButtonCall';
import Modal from '../modal/Modal';
import ModalContent from '../modal/ModalContent';

const Banner = (): JSX.Element => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return(
    <>
      <div className={styles.banner}>
          <div>
            <h1 className={styles.banner_title}>{config.VIEWS.home.banner.title}</h1>
            <h3 className={styles.banner_subtitle}>{config.VIEWS.home.banner.subtitle}</h3>
            <p className={styles.banner_description}>{config.VIEWS.home.banner.description}</p>
            <ButtonCall title={config.VIEWS.home.banner.button} onClick={openModal} icon={''}/>
          </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent />
      </Modal>
    </>
  )
}

export default Banner;