import { all, delay, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { 
    ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, 
    ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS,
    ADD_GROUP_REQUEST, ADD_GROUP_SUCCESS, ADD_GROUP_FAILURE,
    LOAD_MAIN_POSTS_FAILURE, LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS 
} from '../reducers/post';

// 게시물 올리기
function addPostAPI(postData){
    return axios.post("/post", postData,{
        withCredentials: true
    });
}
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
function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

// 게시물 로드하기
function loadMainPostsAPI() {
    return axios.get('/posts');
} 
function* loadMainPosts() {
    try {
      const result = yield call(loadMainPostsAPI);
      yield put({
        type: LOAD_MAIN_POSTS_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      yield put({
        type: LOAD_MAIN_POSTS_FAILURE,
        error: e,
      });
    }
}  
function* watchLoadMainPosts() {
    yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
}


// 그룹 만들기
function addGroupPosttAPI(){
    // return axios.post("/gpost", gpostData,{
    //     withCredentials: true
    // });
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
function* watchAddGroupPost(){
    yield takeLatest(ADD_GROUP_REQUEST, addGroupPost);
}


// 댓글 올리기
function addCommentAPI(data){
    return axios.post(`/post/${data.postId}/comment`, { content: data.content }, {
        withCredentials: true,
      });
}
function* addComment(action){
    try{
        // yield delay(2000);
        const result = yield call(addCommentAPI, action.data);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data:{
                postId : action.data.postId,
                comment: result.data,
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
function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}



export default function* postSaga(){
    yield all([
        fork(watchLoadMainPosts),
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchAddGroupPost),
    ]);
}
