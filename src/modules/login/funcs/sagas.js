import { put, takeEvery, call } from "redux-saga/effects";
import * as constants from "./constants";
import * as apis from "../../../apis/login";

function* callLogin({ loginPost }) {
	try {
		const result = yield call(apis.login, loginPost);
		if (result && result.status) {
			if (result.status.code === "200") {
				yield put(constants.loginSuccess());
				// yield put(message.success("Login success"));
			} else {
				// yield put(message.warn(result.status.message));
			}
		} else {
			// yield put(message.error("Login fail"));
		}
	} catch (e) {
		// yield put(message.error("Login fail"));
	}
}

export default function* root() {
	yield takeEvery(constants.LOGIN_REQUEST, callLogin);
}
