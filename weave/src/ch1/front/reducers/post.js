export const initialState={
    mainPosts:[{
        id:1,
        User:{
            id: 1,
            nickname: "위브",
        },
        content: "첫번째 게시글",
        img:"https://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/dailylife/187ea4bc2ad54b1db5030743265c5397.jpg", 
        Comments: [],
    }], // 화면에 보일 포스트들 
    GroupPosts:[{
        id:1,
        User:{
            id: 1,
            nickname: "위브",
        },
        content: "첫번째 게시글",
        img:"https://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/dailylife/187ea4bc2ad54b1db5030743265c5397.jpg", 
        Comments: [],
    }], // 그룹화면에 보일 포스트들 
    imagePaths:[], //미리보기 이미지경로
    addPostErrorReason: false,  //포스트 업로드 실패사유
    isAddingPost: false,  //포스트 업로드중
    postAdded : false, //포스트 업로드 성공
    isAddingComment: false,
    addCommentErrorReason: '',
    commentAdded: false,
    addingGroupPost: false, // 그룹만들기폴더 업로드중
    GroupErrorReason: '', //그룹만들기업로드 실패사유
    addedGroupPost: false, // 그룹만들기폴더 업로드 성공

};

const dummyPosts = {
    id:2,
    User: {
        id: 1,
        nickname: '위브',
    },
    content: '위브위브위브',
    Comments: [],
};

const dummyComment = {
    id:1,
    User : {
      id:1,
      nickname:"위브",
  },
    createdAt: new Date(),
    content: '위브댓글입니다.',
};

const dummyGroupPost = {
    id:1,
    User : {
      id:1,
      nickname:"위브",
  },
    createdAt: new Date(),
    content: "위브글입니다.",
};

// mainPosts:[{
//     id:1,
//     User:{
//         id: 1,
//         nickname: "위브",
//     },
//     content: "첫번째 게시글",
//     img:"https://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/dailylife/187ea4bc2ad54b1db5030743265c5397.jpg", 
//     Comments: [],
// }], // 화면에 보일 포스트들 



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

export const ADD_GROUP_REQUEST = 'ADD_GROUP_REQUEST';
export const ADD_GROUP_SUCCESS = 'ADD_GROUP_SUCCESS';
export const ADD_GROUP_FAILURE = 'ADD_GROUP_FAILURE';

const ADD_POST = "ADD_POST";
const ADD_DUMMY = "ADD_DUMMY";

const addPost={
    type: ADD_POST,   
};

// const addDummy = {
//     type: ADD_DUMMY,
//     data:{
//         content:'Hello',
//         UserId: 1,
//         User:{
//             nickname:"두리안",
//         },
//     },
// };

export default (state = initialState, action) => {
    switch (action.type){
        case ADD_POST_REQUEST: {
            return {
                ...state, //immutable
                isAddingPost: true,
                addPostErrorReason: '',
                postAdded: false,
            };
        }
        case ADD_POST_SUCCESS: {
            return {
                ...state,
                isAddingPost: false, 
                mainPosts: [dummyPosts, ...state.mainPosts],
                postAdded: true, 
            };
        }
        case ADD_POST_FAILURE: {
            return {
                ...state,
                isAddingPost: false,
                addPostErrorReason : action.error,
            };
        }
        case ADD_COMMENT_REQUEST: {
            return {
                ...state, //immutable
                isAddingComment: true,
                addCommentErrorReason: '',
                commentAdded: false,
            };
        }
        case ADD_COMMENT_SUCCESS: { //immutable
            const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
            const post = state.mainPosts[postIndex];
            const Comments = [...post.Comments, dummyComment];
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
                addedGroupPost: true,
                mainPosts: [dummyGroupPost, ...state.GroupPosts],
            };
        }
        case ADD_GROUP_FAILURE: {
            return {
                ...state,
                addedGroupPost: false,
                GroupErrorReason : action.error,
            };
        }
        default: {
            return{
                ...state,
            };
        }
    }
};
