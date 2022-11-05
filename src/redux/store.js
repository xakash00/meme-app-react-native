import createSagaMiddleware from 'redux-saga';
import {applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import rootSaga from './sagas/rootSaga';
import rootReducer from './reducers/index';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
export const store = configureStore({
  
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(middleware),
});

sagaMiddleware.run(rootSaga);

console.log(store.getState());
