import React from 'react';
import { FormProps } from '../../types';
import styles from './../../styles/Form.module.css';

const FormAnalysis: React.FC<FormProps> = ({
  formValues,
  handleInputChange,
  handleSubmit,
  errors
}) => {

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.form_content}>
        <div className={styles.form_field}>
          <input
            type="text"
            name="name"
            placeholder='Nombres'
            value={formValues.name}
            onChange={handleInputChange}
          />
          {errors.name && <div className={styles.error}>{errors.name}</div>}
        </div>
        <div className={styles.form_field}>
          <input
            type="text"
            name="email"
            placeholder='Email'
            value={formValues.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className={styles.error}>{errors.email}</div>}
        </div>
        <div className={styles.form_field}>
          <div className={styles.form_field_whatsapp}>
            <span>+51</span>
            <input
              type="text"
              name="whatsapp"
              placeholder="whatsapp"
              value={formValues.whatsapp}
              onChange={handleInputChange}
            />
          </div>
          {errors.whatsapp && <div className={styles.error}>{errors.whatsapp}</div>}
        </div>
        <button type="submit" className={styles.form_button}>Siguiente</button>
      </div>
    </form>
  );
};

export default FormAnalysis;