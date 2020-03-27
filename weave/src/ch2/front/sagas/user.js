import { all, fork, call, put, takeEvery } from 'redux-saga/effects';
import axios from "axios";
import { 
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, 
    SIGN_UP_REQUEST, SIGN_UP_FAILURE, SIGN_UP_SUCCESS, 
    LOG_OUT_REQUEST,LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    LOAD_USER_REQUEST,LOAD_USER_SUCCESS,LOAD_USER_FAILURE
} from "../reducers/user";


// 로그인 하기
function loginAPI(loginData){
    //서버에 요청을 보내는 부분
    return axios.post('/user/login', loginData, {
        withCredentials: true,
    });
}
function* login(action) {
    try {
      const result = yield call(loginAPI, action.data);
      yield put({ // put은 dispatch 동일
        type: LOG_IN_SUCCESS,
        data: result.data,
      });
    } catch (e) { // loginAPI 실패
      console.error(e);
      yield put({
        type: LOG_IN_FAILURE,
      });
    }
  }
function* watchLogin(){
    yield takeEvery(LOG_IN_REQUEST, login);
}

// 회원가입하기
function signUpAPI(signUpData){
    //서버에 요청을 보내는 부분
    return axios.post('/user/', signUpData);
}
function* signUp(action){
    try {
        // yield fork(logger);  // logger는 내기록을 로깅하는 함수,
        // yield delay(2000);
        yield call(signUpAPI, action.data);
        yield put({ 
            type: SIGN_UP_SUCCESS,
        });
    } catch (e) { // 회원가입 실패시
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


// 로그아웃하기
function logOutAPI(){
    //서버에 요청을 보내는 부분
    return axios.post('/user/logout', {}, {
        withCredentials: true,
    });
}
function* logout(){
    try {
        // yield delay(1000);
        yield call(logOutAPI);
        yield put({ // put은 dispatch와 동일
            type: LOG_OUT_SUCCESS,
        });
    } catch (e) { // 로그아웃 실패시
        console.error(e);
        yield put({
            type: LOG_OUT_FAILURE,
            error: e,
        });
    }
}
function* watchLogout(){
    yield takeEvery(LOG_OUT_REQUEST, logout);
}

// 로그인한 유저 로드하기
function loadUserAPI() {
    // 서버에 요청을 보내는 부분
    return axios.get('/user/', {
      withCredentials: true,
    });
}  
function* loadUser() {
    try {
      // yield call(loadUserAPI);
      const result = yield call(loadUserAPI);
      yield put({
        type: LOAD_USER_SUCCESS,
        data: result.data,
      });
    } catch (e) { // loadUserAPI 실패시
      console.error(e);
      yield put({
        type: LOAD_USER_FAILURE,
        error: e,
      });
    }
}
function* watchLoadUser() {
  yield takeEvery(LOAD_USER_REQUEST, loadUser);
}


export default function* userSaga(){
    yield all([
        fork(watchLogin),
        fork(watchSignUp), //순서의미없음
        fork(watchLoadUser),
        fork(watchLogout),
        
    ]);
}

/// call은 동기호출, 순서있음
/// fork는 비동기호출, 순서없음
/// take : 해당액션이 dispatch 되면 제너레이터를 next(재게)하게한다
/// yield : 제너레이터함수에서 중단하는 역할
