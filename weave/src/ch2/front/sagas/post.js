import { all, delay, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { 
    ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, 
    LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAILURE,
    ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS,
    LOAD_MAIN_POSTS_FAILURE, LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, 
    UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE,
    REMOVE_POST_REQUEST,REMOVE_POST_SUCCESS,REMOVE_POST_FAILURE
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

//게시물 삭제하기
function removePostAPI(postId) {
    return axios.delete(`/post/${postId}`, {
      withCredentials: true,
    });
  }
  function* removePost(action) {
    try {
      const result = yield call(removePostAPI, action.data);
      yield put({
        type: REMOVE_POST_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.error(e);
      yield put({
        type: REMOVE_POST_FAILURE,
        error: e,
      });
    }
  }
  function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
  }

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
            data: result.data,
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

// 댓글 불러오기
function loadCommentsAPI(postId) {
    return axios.get(`/post/${postId}/comments`);
}  
function* loadComments(action) {
    try {
        const result = yield call(loadCommentsAPI, action.data);
        yield put({
        type: LOAD_COMMENTS_SUCCESS,
        data: {
            postId: action.data,
            comments: result.data,
        },
        });
    } catch (e) {
        console.error(e);
        yield put({
        type: LOAD_COMMENTS_FAILURE,
        error: e,
        });
    }
}
function* watchLoadComments() {
    yield takeLatest(LOAD_COMMENTS_REQUEST, loadComments);
}

// 이미지업로드
function uploadImagesAPI(formData) {
    return axios.post(`/post/images`,formData, {
        withCredentials: true,
    });
}  
function* uploadImages(action) {
    try {
        const result = yield call(uploadImagesAPI, action.data);
        yield put({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: UPLOAD_IMAGES_FAILURE,
            error: e,
        });
    }
}
function* watchUploadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}
  

export default function* postSaga(){
    yield all([
        fork(watchLoadMainPosts),
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchLoadComments),
        fork(watchUploadImages),
        fork(watchRemovePost),
    ]);
}
