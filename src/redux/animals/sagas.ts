import { put, call, takeLatest } from 'redux-saga/effects';
import * as Action from '../animals/constants';
import { getAnimals } from '../animals/actions';
import AnimalApiService from '../../services/AnimalAPIService';

const APIClient = new AnimalApiService();

function* runGetAnimals() {
  try {
    const result = yield call(APIClient.getAnimalList);
    yield put(getAnimals.succeed(result));
  } catch (error) {
    //TODO: create error handling reducer and invoke a action here
    // e.g) yield put (handleErrors(error.message))
    yield put(getAnimals.fail(error.message));
  }
}

export function* watchGetAnimals() {
  yield takeLatest(Action.GET_ANIMALS_START, runGetAnimals);
}
