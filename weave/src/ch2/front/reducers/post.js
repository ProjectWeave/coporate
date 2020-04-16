export const initialState={
    mainPosts:[], 
    CommentPosts:[], 
    imagePaths:[], //미리보기 이미지경로
    addPostErrorReason: false,  //포스트 업로드 실패사유
    isAddingPost: false,  //포스트 업로드중
    postAdded : false, //포스트 업로드 성공
    isAddingComment: false,
    addCommentErrorReason: '',
    commentAdded: false,
};


export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';


export default (state = initialState, action) => {
    switch (action.type){
        case ADD_POST_REQUEST: {
            return {
                ...state, 
                isAddingPost: true,
                addPostErrorReason: '',
                postAdded: false,
            };
        }
        case ADD_POST_SUCCESS: {
            return {
                ...state,
                isAddingPost: false, 
                mainPosts: [action.data, ...state.mainPosts],
                postAdded: true, 
                imagePaths:[],
            };
        }
        case ADD_POST_FAILURE: {
            return {
                ...state,
                isAddingPost: false,
                addPostErrorReason : action.error,
            };
        }
        // 게시물 지우기
        case REMOVE_POST_REQUEST: {
            return {
                ...state,
            };
        }
        case REMOVE_POST_SUCCESS: {
            return {
                ...state,
                mainPosts: state.mainPosts.filter( v => v.id !== action.data),
            };
        }
        case REMOVE_POST_FAILURE: {
            return {
                ...state,
            };
        }
        // 댓글 리퀘스트
        case ADD_COMMENT_REQUEST: {
            return {
                ...state,
                isAddingComment: true,
                addCommentErrorReason: '',
                commentAdded: false,
            };
        }
        case ADD_COMMENT_SUCCESS: { 
            const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);//어떤게시물에 댓글을 작성할것인지
            const post = state.mainPosts[postIndex];
            const Comments = [...post.Comments, action.data.comment];
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = { ...post, Comments };
            return {
                ...state,
                isAddingComment: false, 
                mainPosts,
                commentAdded: true, 
            };
        } 
        case ADD_COMMENT_FAILURE: {
            return {
                ...state,
                isAddingComment: false,
                addCommentErrorReason : action.error,
            };
        }
        // 댓글 불러오기
        case LOAD_COMMENTS_SUCCESS: {
            const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
            const post = state.mainPosts[postIndex];
            const Comments = action.data.comments;
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = { ...post, Comments };
            return {
              ...state,
              mainPosts,
            };
        }
        // 게시물 불러오기
        case LOAD_MAIN_POSTS_REQUEST: {
            return {
              ...state,
              mainPosts: [],
            };
          }
        case LOAD_MAIN_POSTS_SUCCESS: {
            return {
              ...state,
              mainPosts: action.data,
            };
          }
        case LOAD_MAIN_POSTS_FAILURE: {
            return {
                  ...state,
            };
          }

        //이미지 업로드 
        case UPLOAD_IMAGES_REQUEST: {
            return {
                ...state,
            };
        }
        case UPLOAD_IMAGES_SUCCESS: {
            return {
                ...state,
                imagePaths: [...state.imagePaths, ...action.data],
            };
        }
        case  UPLOAD_IMAGES_FAILURE: {
            return {
                ...state,
            };
        }
        //미리보기 이미지 삭제
        case REMOVE_IMAGE: {
            return {
                ...state,
                imagePaths: state.imagePaths.filter((v,i) => i !== action.index),
            };
        }
       
        default: {
            return{
                ...state,
            };
        }
    }
};



// {
//     id: 1,
//     User:{
//         id: 1,
//         nickname: "위브",
//     },
//     title: "두리안그룹(그룹포스트)",
//     img:"https://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/dailylife/187ea4bc2ad54b1db5030743265c5397.jpg", 
//     content: ["두리안 좋아하는사람들의 모임"],
// }