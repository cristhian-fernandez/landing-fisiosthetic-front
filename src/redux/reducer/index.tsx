/* eslint-disable @typescript-eslint/no-explicit-any */
import { 
  GET_IMPERFECTIONS, 
  GET_TREATMENTS 
} from "../constans";
import {actionProps} from "./../../types"
const initialState = {
  imperfections : [] as any[],
  treatments : [] as any[],
};

const rootReducer = (state = initialState, action:actionProps) => {
  switch(action.type) {

      case GET_IMPERFECTIONS:
          return {
              ...state,
              imperfections : [...action.payload],
          } 
      case GET_TREATMENTS:
          return {
              ...state,
              treatments : [...action.payload],
          } 

      default: return state;
  }
};

export default rootReducer;