import { useState } from "react";
import { AnalysisStepsProps } from "../../types"
import Button from "../button/Button"
import styles from './../../styles/FacialAnalysis.module.css';
import stylesButton from './../../styles/Button.module.css';
import stylesLoader from './../../styles/Loader.module.css';

const AnalysisSteps: React.FC<AnalysisStepsProps> = ({ onNextStep, setDataAnalysis, loading, setLoading, setScanEffect }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const onHandleNextStep = () => {
    setScanEffect(true);
    setTimeout(() => {
      setScanEffect(false);
      imageLoaded && onNextStep()
    }, 8000);
  }
  
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
  
    if (file) {
      try {
        setLoading(true);
  
        const image = new Image();
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          image.src = e.target.result;
  
          image.onload = async () => {
            const maxWidth = 400;
            const maxHeight = (maxWidth / image.width) * image.height;
  
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d')!;
  
            canvas.width = maxWidth;
            canvas.height = maxHeight;
  
            context.drawImage(image, 0, 0, maxWidth, maxHeight);
            canvas.toBlob(async (blob) => {
              if (blob) {
                const resizedFormData = new FormData();
                resizedFormData.append('image', blob, file.name);
  
                const response = await fetch('https://apirest-teachable-machine-two.vercel.app/api/image', {
                  method: 'POST',
                  body: resizedFormData,
                });
  
                const result = await response.json();
  
                if (response.ok) {
                  setDataAnalysis(result.data);
                  setErrorOccurred(false);
                  setImageLoaded(true);
                } else {
                  setErrorOccurred(true);
                }
                setLoading(false);
              } else {
                console.error('Error al redimensionar la imagen');
                setErrorOccurred(true);
                setLoading(false);
              }
            }, 'image/jpeg', 0.9);
          };
        };
  
        reader.readAsDataURL(file);
      } catch (error) {
        console.error("Error uploading image:", error);
        setErrorOccurred(true);
        setLoading(false);
      }
    }
  };
  
  return (
    <div>
      <p className={styles.title}>Prepárate para empezar el análisis de piel</p>
      <p className={styles.subtitle}>Instrucciones para subir tu foto</p>
      <div className={styles.steps}>
        <div className={styles.step_list}>
          <div className={styles.step}>
            <p>Quítate las gafas y asegúrate de que no tengas flequillo en la frente.</p>
          </div>
          <div className={styles.step}>
            <p>Asegúrate de que estes en un entorno bien iluminado.</p>
          </div>
          <div className={styles.step}>
            <p>Si haces la prueba sin maquillaje, obtendrás resultados más precisos.</p>
          </div>
          <div className={styles.step}>
            <p>Mira directamente a la cámara y mantén la cara dentro del círculo.</p>
          </div>
        </div>
        {
          loading ? 
          <div className={stylesLoader.loader_content}>
            <span className={stylesLoader.loader}></span>
          </div>
          : (
            <>
              {!imageLoaded && (
                <label className={stylesButton.button}>
                  <span>Subir Foto</span>
                  <input type="file" name="imageFile" accept="image/*" id="imageInput" className={styles.image_input} onChange={handleFileChange} />
                </label>
              )}
              {imageLoaded && !errorOccurred && <Button title={"Iniciar diagnóstico de Piel"} onClick={onHandleNextStep} />}
              {imageLoaded && !errorOccurred && <p className={styles.image_loaded}>Imagen Cargada con Éxito</p>}
              {errorOccurred && <p className={styles.error_occurred}>Error al cargar la imagen, ingrese otra imagen o actualice la página</p>}
            </>
          )
        }
      </div>
    </div>
  )
}

export default AnalysisSteps