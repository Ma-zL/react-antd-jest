import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

export default function injectReducer(reducers, sagas) {
	const reducer = combineReducers(reducers);
	const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
	createStoreWithMiddleware(reducer);

	const sagaMiddleware = createSagaMiddleware();
	sagaMiddleware.run(sagas);
}
