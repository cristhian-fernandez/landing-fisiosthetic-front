import { useState} from "react";
import { AnalysisFormProps, FormFields } from "../../types";
import styles from './../../styles/FacialAnalysis.module.css';
import stylesLoader from './../../styles/Loader.module.css';
import FormAnalysis from "../form/FormAnalysis"
import useForm from "../../hooks/useForm";

const AnalysisForm: React.FC<AnalysisFormProps> = ({ onNextStep }) => {

  const [isLoading, setIsLoading] = useState(false);

  const { formValues, handleInputChange, handleSubmit, errors } = useForm({
    initialValues: {
      name: '',
      email: '',
      whatsapp: '',
    },
    onSubmit: async (data: FormFields) => {
      setIsLoading(true);
      try {
        console.log('data:::', data)
        onNextStep()
      } catch (error) {
        console.error("Error al enviar los datos a Firebase:", error);
      } finally {
        setIsLoading(false);
      }
    },
    validate: (values: FormFields) => {
      const errors: FormFields = {};
      if (!values.name) {
        errors.name = '* Nombre es requerido';
      }

      if(!values.email){
        errors.email = '* Email es requerido';
      } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = '* Email es inválido, ejm: prueba@gmail.com';
      }

      if(!values.whatsapp){
        errors.whatsapp = '* Whatsapp es requerido';
      }else if(!/^[0-9 ]+$/.test(values.whatsapp)){
        errors.whatsapp = '* Whatsapp es inválido, sólo ingrese números';
      }
      return errors;
    },
  });

  return (
      isLoading ? 
        <div className={stylesLoader.loader_content}>
          <span className={stylesLoader.loader}></span>
        </div>
      : (
        <>
          <p className={styles.title}>Prepárate para empezar el análisis de piel</p>
          <p className={styles.subtitle}>Antes de iniciar rellena este formulario para una mejor personalización</p>
          <FormAnalysis
            formValues={formValues}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        </>
      )
  )
}

export default AnalysisForm