import { 
  GET_IMPERFECTIONS, 
  GET_TREATMENTS,
  GET_OFFICES
} from "../constans";

import { Dispatch } from 'redux';
import {GetDispatchAction} from "./../../types"
import apiImperfections from './../../api/apiImperfections.json'
import apiTreatments from './../../api/apiTreatments.json'
import apiOffices from './../../api/apiOffices.json'

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

export const getAllOffices = () => {
  return async (dispatch: Dispatch<GetDispatchAction>) => {
    try {
      const response = apiOffices;
      dispatch({
        type: GET_OFFICES,
        payload: response.data.offices
      });
    } catch (error) {
      console.log(error);
    }
  };
};