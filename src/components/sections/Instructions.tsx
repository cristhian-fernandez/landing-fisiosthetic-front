import { config } from '../../api/apiConfig';
import { instruction } from '../../types';
import styles from './../../styles/Sections.module.css'

const Instructions = () => {
  return (
    <div className={styles.sections}>
      <h1>Instrucciones</h1>
      <div className={styles.instructions}>
        {
          config.VIEWS.home.Instructions.map((instruction:instruction) => {
            return(
              <div className={styles.instruction} key={instruction.iconName}>
                <img src={instruction.urlIcon} alt={instruction.iconName} />
                <p>{instruction.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Instructions