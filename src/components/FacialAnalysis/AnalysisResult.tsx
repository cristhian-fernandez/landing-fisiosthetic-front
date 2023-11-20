import { AnalysisResultProps, PercentagePrediction, Prediction } from '../../types'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Button from '../button/Button'
import styles from './../../styles/FacialAnalysis.module.css';

const AnalysisResult: React.FC<AnalysisResultProps> = ({ dataAnalysis}) => {
  const handleContactClick = () => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=+51926207451&text=Quiero%20sacar%20una%20consulta%20con%20un%20especialista%20de%20Fisiosthetic.`;
    window.open(whatsappURL, '_blank');
  };

  const convertScoresToPercentage = (predictions: Prediction[] | undefined) => {

    if (!predictions) {
      return [];
    }

    const totalScore = predictions.reduce((sum, prediction) => sum + prediction.score, 0);

    const percentagePredictions: PercentagePrediction[] = predictions.map((prediction) => ({
      class: prediction.class,
      percentage: (prediction.score / totalScore) * 100,
    }));

    return percentagePredictions;
  }

  const percentagePredictions = convertScoresToPercentage(dataAnalysis?.predictions);

  return (
    <>
      <p>
        {percentagePredictions.length > 0
          ? <div className={styles.title}>Resultados de nuestro Análisis Facial IA:</div>
          : 'Volver a cargar la página. Hay muchas peticiones en este momento. Si persiste, regrese en unos minutos.'}
      </p>
      {percentagePredictions.length > 0 && (
        <ul className={styles.result_list}>
          {percentagePredictions.map((prediction) => (
            <li key={prediction.class} className={styles.result_item}>
              <span className={styles.class_name}>{prediction.class}</span>
              <div className={styles.circular_progressbar}>
                <CircularProgressbar
                  value={prediction.percentage}
                  text={`${prediction.percentage.toFixed(2)}%`}
                  styles={buildStyles({
                    textColor: 'var(--text-color)',
                    pathColor: 'var(--second-color)',
                    trailColor: 'var(--grey-500)',
                  })}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className={styles.button_contact}>
        <Button title="Contactar con un especialista" onClick={handleContactClick} />
      </div>
    </>
  )
}

export default AnalysisResult