import { 
  GET_IMPERFECTIONS, 
  GET_TREATMENTS 
} from "../constans";

import { Dispatch } from 'redux';
import {GetDispatchAction} from "./../../types"
import apiImperfections from './../../api/apiImperfections.json'
import apiTreatments from './../../api/apiTreatments.json'

export const getAllTreatments = () => {
  return async (dispatch: Dispatch<GetDispatchAction>) => {
    try {
      const response = apiTreatments;
      dispatch({
        type: GET_TREATMENTS,
        payload: response.data.treatments
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllImperfections = () => {
  return async (dispatch: Dispatch<GetDispatchAction>) => {
    try {
      const response = apiImperfections;
      dispatch({
        type: GET_IMPERFECTIONS,
        payload: response.data.imperfections
      });
    } catch (error) {
      console.log(error);
    }
  };
};