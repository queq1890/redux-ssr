import * as ActionType from './constants';
import { AnimalResponseType } from '../../mocks/animalAPI';

export const getAnimals = {
  start: () => ({
    type: ActionType.GET_ANIMALS_START,
  }),

  succeed: (payload: AnimalResponseType) => ({
    type: ActionType.GET_ANIMALS_SUCCEED,
    payload,
  }),

  fail: (error: Error) => ({
    type: ActionType.GET_ANIMALS_FAIL,
    error,
  }),
};

export type AnimalAction =
  | ReturnType<typeof getAnimals.start>
  | ReturnType<typeof getAnimals.succeed>
  | ReturnType<typeof getAnimals.fail>;
