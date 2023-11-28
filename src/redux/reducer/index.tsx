import { 
  GET_IMPERFECTIONS, 
  GET_TREATMENTS,
  GET_OFFICES 
} from "../constans";
import {actionProps} from "./../../types"
const initialState = {
  imperfections : [] as any[],
  treatments : [] as any[],
  offices : [] as any[],
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
      case GET_OFFICES:
          return {
              ...state,
              offices : [...action.payload],
          } 

      default: return state;
  }
};

export default rootReducer;