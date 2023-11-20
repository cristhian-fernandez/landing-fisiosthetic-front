import {useState} from 'react';
import AnalysisForm from '../FacialAnalysis/AnalysisForm';
import AnalysisImage from '../FacialAnalysis/AnalysisImage';
import styles from './../../styles/Modal.module.css';
import AnalysisSteps from '../FacialAnalysis/AnalysisSteps';
import AnalysisResult from '../FacialAnalysis/AnalysisResult';

const ModalContent = () => {
  const [currentStep, setCurrentStep] = useState('form');
  const [dataAnalysis, setDataAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scanEffect, setScanEffect] = useState(false);

  const handleNextSteps = () => {
    setCurrentStep('steps');
  };

  const handleNextResult = () => {
    setCurrentStep('result');
  };
  return (
    <div className={styles.modal_content}>
      {currentStep === 'form' && (
        <div className={styles.content_information}>
          <AnalysisForm onNextStep={handleNextSteps} />
        </div>
      )}

      {currentStep === 'steps' && (
        <div className={styles.content_information}>
          <AnalysisSteps onNextStep={handleNextResult} setDataAnalysis={setDataAnalysis} loading={loading} setLoading={setLoading} setScanEffect={setScanEffect}/>
        </div>
      )}

      {currentStep === 'result' && (
        <div className={styles.content_information}>
          <AnalysisResult dataAnalysis={dataAnalysis}/>
        </div>
      )}
      <div className={styles.content_image}>
        <AnalysisImage dataAnalysis={dataAnalysis} loading={loading} scanEffect={scanEffect}/>
      </div>
    </div>
  )
}

export default ModalContent