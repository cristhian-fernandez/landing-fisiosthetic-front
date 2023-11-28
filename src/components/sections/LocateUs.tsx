import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOffices } from "../../redux/actions";
import styles from './../../styles/Office.module.css';
import { ArrowLeft, ArrowRight, CellphoneIcon, LocationIcon, PhoneIcon, TimeIcon } from "../icons";
import Button from "../button/Button";

interface Office {
  idOffice: number;
  urlImagen: string;
  address: string;
  phone: string;
  cellphone: string;
  horary: string[];
}

const LocateUs = () => {
  const offices = useSelector((state: any) => state.offices);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getAllOffices());
  }, [dispatch]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex === 0 ? offices.length * 2 - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex === offices.length * 2 - 1 ? 0 : prevIndex + 1));
  };

  const reservar = () => {
    console.log('reservar')
  }

  return (
    <div className={styles.locateUs}>
      <h1 className={styles.title}>Ubícanos en nuestros locales</h1>
      <div className={styles.office_container}>
        <div className={styles.carousel}>
          <button onClick={handlePrev} className={`${styles.arrowButton} ${styles.left}`}>
            <ArrowLeft />
          </button>
          <div className={styles.carouselContainer} style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
            {offices.concat(offices, offices, offices, offices, offices, offices).map((office: Office, index: number) => (
              <div
                key={`${office.idOffice}-${index}`}
                className={`${styles.carouselItem} ${
                  index >= currentIndex && index < currentIndex + 3 ? styles.center : ''
                } ${index === currentIndex ? styles.highlightedLeft : ''} ${index === currentIndex + 1 ? styles.highlightedCenter : ''} ${index === currentIndex + 2 ? styles.highlightedRight : ''}`}
              >
                <div>
                  <img src={office.urlImagen} alt={`Office ${office.idOffice}`} />
                  <div className={styles.officeInfo}>
                    {index === currentIndex && (
                      <div className={styles.icon_container}>
                        <div className={styles.icon_office}><LocationIcon fill="var(--first-color-dark)"/></div>
                        <p className={styles.address}>{office.address}</p>
                      </div>
                    )}
                    {index === currentIndex + 1 && (
                      <>
                        <div className={styles.icon_container}>
                          <div className={styles.icon_office}><LocationIcon fill="var(--first-color-dark)"/></div>
                          <p className={styles.address}>{office.address}</p>
                        </div>
                        
                        <div className={styles.icon_container}>
                          <div className={styles.icon_office}><PhoneIcon fill="var(--first-color-dark)"/></div>
                          <p>{office.phone}</p>
                        </div>
                        <div className={styles.icon_container}>
                          <div className={styles.icon_office}><CellphoneIcon fill="var(--first-color-dark)"/></div>
                          <p>{office.cellphone}</p>
                        </div>
                        <ul>
                          {office.horary.map((time, idx) => (
                            <li key={idx} className={styles.icon_container}>
                              <div className={styles.icon_office}><TimeIcon fill="var(--first-color-dark)"/></div>
                              {time}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    {index === currentIndex + 2 && (
                      <div className={styles.icon_container}>
                        <div className={styles.icon_office}><LocationIcon fill="var(--first-color-dark)"/></div>
                        <p className={styles.address}>{office.address}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className={`${styles.arrowButton} ${styles.right}`}>
            <ArrowRight />
          </button>
        </div>
        <Button title={'Reservar'} onClick={reservar} icon={''} className={styles.button_call}/>
      </div>
    </div>
  );
}

export default LocateUs;
