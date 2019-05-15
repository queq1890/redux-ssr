import { put, call, takeLatest } from 'redux-saga/effects';
import * as Action from '../animals/constants';
import { getAnimals } from '../animals/actions';
import AnimalApiService from '../../Services/AnimalAPIService';

const APIClient = new AnimalApiService();

function* runGetAnimals() {
  try {
    const result = yield call(APIClient.getAnimalList);
    // const result = APIClient.getAnimalList() as AnimalResponseType;
    yield put(getAnimals.succeed(result));
  } catch (error) {
    yield put(getAnimals.fail(error));
  }
}

export function* watchGetAnimals() {
  yield takeLatest(Action.GET_ANIMALS_START, runGetAnimals);
}
