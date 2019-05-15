import * as ActionType from './constants';
import { Animal } from '../../mocks/animalAPI';
import { AnimalAction } from './actions';

export interface AnimalState {
  animals: Animal[];
  error?: Error | null;
}

export const initialState: AnimalState = {
  animals: [],
};

const AnimalReducer = (state: AnimalState = initialState, action: AnimalAction): AnimalState => {
  switch (action.type) {
    case ActionType.GET_ANIMALS_START:
      return { ...state };
    case ActionType.GET_ANIMALS_SUCCEED:
      return { ...state, animals: action.payload.animals };
    case ActionType.GET_ANIMALS_FAIL:
      // TODO : create error handling reducer and not use 'error' in this reducer
      return { ...state, error: action.error };

    default:
      return state;
  }
};

export default AnimalReducer;
