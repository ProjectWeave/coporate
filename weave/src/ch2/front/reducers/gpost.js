//초기값
export const initialState={
    GroupPosts:[], // 그룹화면에 보일 포스트들  
    imagePaths:[], //미리보기 이미지경로
    addingGroupPost: false, // 그룹만들기폴더 업로드중
    GroupErrorReason: '', //그룹만들기업로드 실패사유
    addedGroupPost: false, // 그룹만들기폴더 업로드 성공
    poster:null, //그룹만든아이디
};


export const ADD_GROUP_REQUEST = 'ADD_GROUP_REQUEST';
export const ADD_GROUP_SUCCESS = 'ADD_GROUP_SUCCESS';
export const ADD_GROUP_FAILURE = 'ADD_GROUP_FAILURE';

export const LOAD_GROUP_POSTS_REQUEST = 'LOAD_GROUP_POSTS_REQUEST';
export const LOAD_GROUP_POSTS_SUCCESS = 'LOAD_GROUP_POSTS_SUCCESS';
export const LOAD_GROUP_POSTS_FAILURE = 'LOAD_GROUP_POSTS_FAILURE';


export default (state = initialState, action) => {
    switch (action.type){
        //그룹만들기 업로드 
        case ADD_GROUP_REQUEST: {
            return {
                ...state,
                addingGroupPost: true,
                GroupErrorReason : '',
                addedGroupPost: false,
            };
        }
        case ADD_GROUP_SUCCESS: {
            return {
                ...state,
                addingGroupPost: false,
                GroupPosts: [action.data, ...state.GroupPosts],
                addedGroupPost: true,
            };
        }
        case ADD_GROUP_FAILURE: {
            return {
                ...state,
                addedGroupPost: false,
                GroupErrorReason : action.error,
            };
        }
        //그룹 불러오기
        case LOAD_GROUP_POSTS_REQUEST: {
            return {
              ...state,
              GroupPosts: [],
            };
          }
          case LOAD_GROUP_POSTS_SUCCESS: {
            return {
              ...state,
              GroupPosts: action.data,
            };
          }
          case LOAD_GROUP_POSTS_FAILURE: {
            return {
              ...state,
            };
          }
        default: {
            return{
                ...state,
            };
        }
    }
};

