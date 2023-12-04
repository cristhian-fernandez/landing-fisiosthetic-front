import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { AnalysisResultProps, PercentagePrediction, Prediction } from '../../types'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Button from '../button/Button'
import styles from './../../styles/FacialAnalysis.module.css';
import { getAllImperfections, getAllTreatments } from '../../redux/actions';
import html2pdf from 'html2pdf.js';

const AnalysisResult: React.FC<AnalysisResultProps> = ({ dataAnalysis}) => {
  const handleContactClick = () => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=+51926207451&text=Quiero%20sacar%20una%20consulta%20con%20un%20especialista%20de%20Fisiosthetic.`;
    window.open(whatsappURL, '_blank');
  };
  const [pdfContent, setPdfContent] = useState<string | null>(null);
  console.log(html2pdf)

  const treatments = useSelector((state: any) => state.treatments);
  const imperfections = useSelector((state: any) => state.imperfections);
  const dispatch: any = useDispatch();

  let showTreatments = [];
  let listImperfections = []

  useEffect(() => {
    dispatch(getAllImperfections());
    dispatch(getAllTreatments());
  }, [dispatch]);

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

  if(treatments.length > 0 && imperfections.length > 0 && dataAnalysis?.predictions){
    const filteredImperfections = imperfections.filter((imperfection:any) => {
      const matchingData = dataAnalysis?.predictions.find(data => data.class === imperfection.name);
      return matchingData && matchingData.score > 0.1;
    });
    listImperfections = filteredImperfections;
    console.log('filteredImperfections::', filteredImperfections)
    
    const uniqueTreatmentIds = [...new Set(filteredImperfections.flatMap((imperfection:any) => imperfection.treatments))];
    const uniqueTreatments = treatments.filter((treatment:any) => uniqueTreatmentIds.includes(treatment.idTreatment));
    
    const matchingTreatments = uniqueTreatments.map((treatment:any) => {
      const matchingImperfections = filteredImperfections.filter((imperfection:any) =>
        imperfection.treatments.includes(treatment.idTreatment)
      );
      return {
        ...treatment,
        matchingImperfections
      };
    });
    showTreatments = matchingTreatments;
    
  }

  const showTreatmentMessage = (filteredImperfections: any) => {
    const names = filteredImperfections.map((item:any )=> item.name);

    let message = 'Estos tratamientos pueden ayudarte con tus problemas de ';
  
    if (names.length === 0) {
      message = 'No se encontraron problemas detectados.';
    } else if (names.length === 1) {
      message += `${names[0]}:`;
    } else {
      message += `${names.slice(0, -1).join(', ')} y ${names.slice(-1)[0]}:`;
    }
    return(
      <p>{message}</p>
    )
  }

  const headerPdf = () =>{
    return(
      `<img src="/assets/images/footer_fisiosthetic.jpg" alt="tratamientos_faciales" class="pdf_discount_image"></img>
      `
    )
  }
  const footerPdf = () =>{
    return(
      `<p class="pdf_discount_title">Presenta este diagnóstico y obtendrás (%):</p>
      <p class="pdf_discount_item">50% de descuento en evaluación médica</p>
      <p class="pdf_discount_item">15% de descuento en tratamiento láser</p>
      <p class="pdf_discount_item">05% de descuento en medicina estética</p>
      `
    )
  }

  const downloadPDF = () => {
    const contentToConvert = document.getElementById('pdf-content');
    const headerContainer = document.createElement('div');
    headerContainer.innerHTML = headerPdf();

    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = footerPdf();

    if (contentToConvert) {
      const clonedContent = contentToConvert.cloneNode(true) as HTMLElement;

      clonedContent.insertBefore(headerContainer, clonedContent.firstChild);
      clonedContent.appendChild(footerContainer);

      html2pdf(clonedContent, {
        margin: 10,
        filename: 'analisis_facial.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      }).then((pdf: any) => {
        setPdfContent(pdf.output('datauristring'));
      });
    }
  };

  return (
    <>
      <div id="pdf-content">
        <div>
          {percentagePredictions.length > 0
            ? <p className={styles.title}>Resultados de nuestro Análisis Facial IA:</p>
            : 'Volver a cargar la página. Hay muchas peticiones en este momento. Si persiste, regrese en unos minutos.'}
        </div>
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
        {percentagePredictions.length > 0 && showTreatments.length > 0 && (
          <div className={styles.show_treatment_content}>
            <div className={styles.show_treatment_title}>
              {
                listImperfections.length > 0 ? 
                showTreatmentMessage(listImperfections) :
                <p>Estos tratamientos pueden ayudarte con estos problemas:</p>
              }    
            </div>
            {showTreatments.map((showTreatment: any) => (
              <div key={showTreatment.idTreatment} className={styles.show_treatment_section}>
                <h4>{showTreatment.fullName}</h4>
                <p className={styles.show_treatment_item}>{showTreatment.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.button_result}>
        <Button title="Contactar con un especialista" onClick={handleContactClick} className={styles.button_contact}/>
        <Button title="Descargar PDF" onClick={downloadPDF} className={styles.button_downloadPDF}/>
      </div>
      {pdfContent && (
        <div className={styles.pdf_viewer}>
          <iframe title="PDF Viewer" src={pdfContent} width="100%" height="500px" />
        </div>
      )}
    </>
  )
}

export default AnalysisResult