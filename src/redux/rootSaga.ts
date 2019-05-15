import { all, fork } from 'redux-saga/effects';
import { watchGetAnimals } from './animals/sagas';

export default function* rootSaga() {
  yield all([fork(watchGetAnimals)]);
}
