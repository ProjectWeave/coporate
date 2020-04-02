import { all, delay, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { 
    ADD_GROUP_REQUEST, ADD_GROUP_SUCCESS, ADD_GROUP_FAILURE,
    LOAD_GROUP_POSTS_REQUEST, LOAD_GROUP_POSTS_SUCCESS, LOAD_GROUP_POSTS_FAILURE
} from '../reducers/post';

// 그룹 만들기
function addGroupPostAPI(gpostData){
    return axios.post("/gpost", gpostData,{
        withCredentials: true
    });
}
function* addGroupPost(action){
    try{
        // yield delay(2000);
        const result = yield call(addGroupPostAPI, action.data);
        yield put({
            type: ADD_GROUP_SUCCESS,
            data: {
                gpostId: action.data,
                content: result.data,
            }
        });
    } catch (e){ 
        yield put({
                type: ADD_GROUP_FAILURE,
                error: e,
            });
    }
}
function* watchAddGroupPost(){
    yield takeLatest(ADD_GROUP_REQUEST, addGroupPost);
}


// 그룹 로드하기
function loadGroupPostAPI(){
    return axios.get('/gpost');
}
function* loadGroupPost(){
    try {
        const result = yield call(loadGroupPostAPI);
        yield put({
          type: LOAD_GROUP_POSTS_SUCCESS,
          data: result.data,
        });
      } catch (e) {
        yield put({
          type: LOAD_GROUP_POSTS_FAILURE,
          error: e,
        });
      }
}
function* watchloadGroupPost(){
    yield takeLatest(LOAD_GROUP_POSTS_REQUEST, loadGroupPost);
}


export default function* postSaga(){
    yield all([
        fork(watchAddGroupPost),
        fork(watchloadGroupPost),
    ]);
}
