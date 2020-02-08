import { all, fork, takeLatest, takeEvery, call, put, take, delay } from 'redux-saga/effects';
import axios from "axios";
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_FAILURE, SIGN_UP_SUCCESS, LOG_OUT_REQUEST,LOG_OUT_SUCCESS, LOG_OUT_FAILURE } from "../reducers/user";

function loginAPI(){
    //서버에 요청을 보내는 부분
    return axios.post('/login');
}

function* login(){
    try {
        // yield fork(logger);  // logger는 내기록을 로깅하는 함수,
        yield delay(1000);
        yield put({ // put은 dispatch와 동일
            type: LOG_IN_SUCCESS,
        });
    } catch (e) { // 로그인 실패시
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
        });
    }
}

function* watchLogin(){
    yield takeEvery(LOG_IN_REQUEST, login);
}

function signUpAPI(signUpData){
    //서버에 요청을 보내는 부분
    return axios.post('http://localhost:3065/api/user/login', signUpData);
}

function* signUp(action){
    try {
        // yield fork(logger);  // logger는 내기록을 로깅하는 함수,
        // yield delay(2000);
        yield call(signUpAPI, action.data);
        yield put({ // put은 dispatch와 동일
            type: SIGN_UP_SUCCESS,
        });
    } catch (e) { // 로그인 실패시
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
            error: e
        });
    }
}

function* watchSignUp(){
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}



function logoutAPI(){
    //서버에 요청을 보내는 부분
    return axios.post('/login');
}

function* logout(){
    try {
        yield delay(1000);
        yield put({ // put은 dispatch와 동일
            type: LOG_OUT_SUCCESS,
        });
    } catch (e) { // 로그아웃 실패시
        console.error(e);
        yield put({
            type: LOG_OUT_FAILURE,
        });
    }
}

function* watchLogout(){
    yield takeEvery(LOG_OUT_REQUEST, logout);
}

export default function* userSaga(){
    yield all([
        fork(watchLogin),
        fork(watchSignUp), //순서의미없음
        fork(watchLogout),
    ]);
}

/// call은 동기호출, 순서있음
/// fork는 비동기호출, 순서없음
/// take : 해당액션이 dispatch 되면 제너레이터를 next(재게)하게한다
/// yield : 제너레이터함수에서 중단하는 역할
