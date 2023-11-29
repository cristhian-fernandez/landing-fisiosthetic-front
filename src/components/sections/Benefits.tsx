import styles from './../../styles/Sections.module.css'
import { config } from '../../api/apiConfig';
import { CheckCircle } from '../icons';

interface Benefit {
  title: string
  description: string
}

const Benefits = () => {
  return (
    <div className={styles.sections}>
      <h1>Beneficios de nuestro Análisis Facial</h1>
      <div className={styles.instructions}>
        {
          config.VIEWS.home.Benefits.map((benefit:Benefit) => {
            return(
              <div className={styles.benefit}>     
                <div className={styles.benefits_title}>
                  <span><CheckCircle fill='var(--first-color)'/></span>
                  <p>{benefit.title}</p>
                </div>
                <p>{benefit.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Benefits