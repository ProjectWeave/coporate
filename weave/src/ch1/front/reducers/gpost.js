// export const initialStateForGroup={// 화면에 보일 포스트들 
//     GroupPosts:[{
//         id: 1,
//         User:{
//             id: 1,
//             nickname: "위브",
//         },
//         content: "두리안그룹(그룹포스트)",
//         img:"https://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/dailylife/187ea4bc2ad54b1db5030743265c5397.jpg", 
//         gtext: ["두리안 좋아하는사람들의 모임"],
//     }], // 그룹화면에 보일 포스트들 
//     imagePaths:[], //미리보기 이미지경로
//     addingGroupPost: false, // 그룹만들기폴더 업로드중
//     GroupErrorReason: '', //그룹만들기업로드 실패사유
//     addedGroupPost: false, // 그룹만들기폴더 업로드 성공

// };

// const dummyGroupPost = {
//     id:1,
//     User : {
//       id:1,
//       nickname:"위브",
//   },
//     createdAt: new Date(),
//     content: "위브글입니다.(더미그룹포스트)",
// };

// export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
// export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
// export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';


// export default (state = initialStateForGroup, action) => {
//     switch (action.type){
//         //그룹만들기 업로드 
//         case ADD_GROUP_REQUEST: {
//             return {
//                 ...state,
//                 addingGroupPost: true,
//                 GroupErrorReason : '',
//                 addedGroupPost: false,
//             };
//         }
//         case ADD_GROUP_SUCCESS: {
//             return {
//                 ...state,
//                 addingGroupPost: false,
//                 GroupPosts: [dummyGroupPost, ...state.GroupPosts],
//                 addedGroupPost: true,
//             };
//         }
//         case ADD_GROUP_FAILURE: {
//             return {
//                 ...state,
//                 addedGroupPost: false,
//                 GroupErrorReason : action.error,
//             };
//         }
//         default: {
//             return{
//                 ...state,
//             };
//         }
//     }
// };
