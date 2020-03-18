import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { 
    ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, 
    ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_GROUP_REQUEST, 
    ADD_GROUP_SUCCESS, ADD_GROUP_FAILURE 
} from '../reducers/post';
import axios from 'axios';


function addPostAPI(){
    return axios.post("/post", postData,{
        withCredentials: true
    });
}
function addCommentAPI(){

}
function addGroupPosttAPI(){

}


// function* addPost() {
//     try {
//       yield delay(2000);
//       yield put({
//         type: ADD_POST_SUCCESS,
//       });
//     } catch (e) {
//       yield put({
//         type: ADD_POST_FAILURE,
//         error: e,
//       });
//     }
//   }

  function* addPost(action) {
    try {
      const result = yield call(addPostAPI, action.data);
      yield put({
        type: ADD_POST_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      yield put({
        type: ADD_POST_FAILURE,
        error: e,
      });
    }
  }
  

function* addComment(action){
    try{
        yield delay(2000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data:{
                postId : action.data.postId,
            },
        });
    } catch (e){ 
        console.error(e);
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: e,
        });
    }
}

function* addGroupPost(action){
    try{
        yield delay(2000);
        yield put({
            type: ADD_GROUP_SUCCESS,
            data:{
                postId : action.data.postId,
            },
        });
    } catch (e){ 
        yield put({
            type: ADD_GROUP_FAILURE,
            error: e,
        });
    }
}

function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* watchAddGroupPost(){
    yield takeLatest(ADD_GROUP_REQUEST, addGroupPost);
}


export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchAddGroupPost),
    ]);
}
