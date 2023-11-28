import { config } from '../../api/apiConfig';
import styles from './../../styles/Sections.module.css'

interface instruction {
  urlIcon: string,
  description: string,
  iconName: string
}

const Instructions = () => {
  console.log('config.VIEWS.home.Instructions::', config.VIEWS.home.Instructions)
  return (
    <div className={styles.sections}>
      <h1>Instrucciones</h1>
      <div className={styles.instructions}>
        {
          config.VIEWS.home.Instructions.map((instruction:instruction) => {
            return(
              <div className={styles.instruction}>
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