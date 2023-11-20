import styles from './../../styles/FacialAnalysis.module.css';
import stylesLoader from './../../styles/Loader.module.css';
import img_skincare from './../../assets/images/img_skincare.jpg';
import { AnalysisImageProps } from '../../types';

const AnalysisImage: React.FC<AnalysisImageProps> = ({ dataAnalysis , loading, scanEffect}) => {
  return (
    <div className={`${styles.analysis_image} ${scanEffect &&styles.scan_effect}`}>
      {
        loading ? 
        <div className={stylesLoader.loader_content}>
          <span className={stylesLoader.loader}></span>
        </div>
        : (
          <picture>
            <img 
              src={dataAnalysis && dataAnalysis.imgbb ? dataAnalysis.imgbb.url : img_skincare}
              alt="facial_analysis" 
              loading="lazy"/>
          </picture>
        )
      }
    </div>
  )
}

export default AnalysisImage