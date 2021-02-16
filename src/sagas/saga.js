import { takeEvery, put, delay, all, call, takeLatest } from "redux-saga/effects";

function* ageUpAsync1() {
  yield delay(4000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

function* watchAgeUp() {
  yield takeEvery("AGE_UP", ageUpAsync1);
}

function* productAll() {
  const json = fetch('https://my-json-server.typicode.com/prograk/demo/items')
              .then( response => response.json(), );
  yield put({ type: "PRODUCT_RECIEVED", json: json});
}

function* watchProductFetch() {
  yield takeLatest("GET_PRODUCT", productAll);
}

export function* rootSaga() {
  yield all([
    watchAgeUp(),
    watchProductFetch()
  ])
}