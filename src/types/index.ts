/* eslint-disable @typescript-eslint/no-explicit-any */
export interface GetDispatchAction {
  type: string;
  payload: any;
}

export interface actionProps {
  type: 'GET_IMPERFECTIONS' | 'GET_TREATMENTS'
  payload: any
}

export interface ButtonProps {
  title: string;
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export interface FormFields {
  [key: string]: string;
}  

export interface UseFormOptions {
  initialValues?: FormFields;
  onSubmit: (data: FormFields) => Promise<void>;
  validate?: (values: FormFields) => FormFields;
}

export interface FormProps {
  formValues: FormFields;
  handleInputChange: any;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors: FormFields;
  title?: string
}

export interface AnalysisFormProps {
  onNextStep: () => void;
}

export interface AnalysisImageProps {
  dataAnalysis?: any;
  loading?: boolean;
  scanEffect: boolean;
}

export interface AnalysisStepsProps {
  onNextStep: () => void;
  setDataAnalysis: (data: any) => void;
  setLoading: (value: boolean) => void;
  setScanEffect: (value: boolean) => void;
  loading: boolean;
}

export interface Prediction {
  class: string;
  score: number;
}

export interface DataAnalysis {
  imgbb: any;
  predictions: Prediction[];
}

export interface AnalysisResultProps {
  dataAnalysis?: DataAnalysis | null;
}

export interface PercentagePrediction {
  class: string;
  percentage: number;
}