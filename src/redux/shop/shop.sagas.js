import { takeLatest, call, put, all } from 'redux-saga/effects';  // there is take(), takeEvery(), takeLatest()

// difference between take and takeEvery is that if we consider for the code below, it does not take any
// function argument like takeEvery and so calls generator function once, but in takeEvery the generator function is
// called to start over again and again whenever the async action is triggered that is it is regenerating the generator.
// So take() listens to only one async call where as takeEvery() listens to async calls as many times as the call happens.
/*
In other words, takeEvery() =   while(true){    but takeEvery does this concurrently that is it spawns new sagas for every action triggered
                                    take();
                                    // logic of whatever the function passed in takeEvery() does
                                }
takeLatest() takes the latest saga. Meaning say in an async action, there was a delay of 3 secs. In these 3 secs, many
sagas were spawned, but takeLatest() would take the latest one, which is the one that was spawned just after 3 secs
*/

import { store, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    // yield console.log("I am fired");
    // put is the saga keyword for dispatch
    try{
        const collectionRef = store.collection('collection');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {  // * in the function means it's a generator function. Sagas need generators and yield
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}