// Action 과 Reducer 사용을 편하게 하기 위한 패키지
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer"; //immer : 불변성 관리
// import moment from "moment"; // Date객체와 유사
import axios from "axios"; //axios: node.js와 브라우저를 위한 Promise 기반 HTTP 클라이언트

//Actions
const LOAD = "post/LOAD";
const UPDATE = "post/UPDATE";
const CREATEPOST = "post/CREATEPOST";


//reducer이 사용할 initialState
const initialState = {
    post: [
      {
          postId: 31,
          title: "개발자 머그컵 팝니다",
          address: "대구 달서구 도원동",
          price:  5000,
          image: "http://economychosun.com/query/upload/348/20200517222140_wlbxvfak.jpg",
          category: "ETC",
          status: "판매 상태",
          createdAt: "시간",
          like: 5,
          view: 10
      },
      {
        postId: 32,
        title: "개발자 머그컵 팝니다",
        address: "대구 달서구 도원동",
        price:  5000,
        image: "https://shop3.daumcdn.net/thumb/R500x500/?fname=http%3A%2F%2Fshop3.daumcdn.net%2Fshophow%2Fp%2FP12871783076.jpg%3Fut%3D20210408163353",
        category: "ETC",
        status: "판매 상태",
        createdAt: "시간",
        like: 5,
        view: 10
    },
    {
      postId: 33,
      title: "개발자 머그컵 팝니다",
      address: "대구 달서구 도원동",
      price:  5000,
      image: "https://shop3.daumcdn.net/thumb/R500x500/?fname=http%3A%2F%2Fshop3.daumcdn.net%2Fshophow%2Fp%2FI18261130012.jpg%3Fut%3D20220715125905",
      category: "ETC",
      status: "판매 상태",
      createdAt: "시간",
      like: 5,
      view: 10
  },
  {
    postId: 34,
    title: "개발자 머그컵 팝니다",
    address: "대구 달서구 도원동",
    price:  5000,
    image: "https://shop3.daumcdn.net/thumb/R500x500/?fname=http%3A%2F%2Fshop3.daumcdn.net%2Fshophow%2Fp%2FW17377317922.jpg%3Fut%3D20220509163355",
    category: "ETC",
    status: "판매 상태",
    createdAt: "시간",
    like: 5,
    view: 10
},
{
  postId: 35,
  title: "개발자 머그컵 팝니다",
  address: "대구 달서구 도원동",
  price:  5000,
  image: "https://dnvefa72aowie.cloudfront.net/origin/article/202208/151bee691662f359981c4524b4331aea8057ef6504b82e940a341a0dd714c0e3.webp?q=95&s=1440x1440&t=inside",
  category: "ETC",
  status: "판매 상태",
  createdAt: "시간",
  like: 5,
  view: 10
},
{
  postId: 36,
  title: "개발자 머그컵 팝니다",
  address: "대구 달서구 도원동",
  price:  5000,
  image: "https://dnvefa72aowie.cloudfront.net/origin/article/202207/178f72ab016badb02120af28c5ed2f43f480e5f5225fc98aba91637df515a948.webp?q=95&s=1440x1440&t=inside",
  category: "ETC",
  status: "판매 상태",
  createdAt: "시간",
  like: 5,
  view: 10
},
{
  postId: 37,
  title: "개발자 머그컵 팝니다",
  address: "대구 달서구 도원동",
  price:  5000,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgBZvVwIq8hraM60fDgwzy8xiJiHE35QYVg&usqp=CAU",
  category: "ETC",
  status: "판매 상태",
  createdAt: "시간",
  like: 5,
  view: 10
},
{
  postId: 38,
  title: "개발자 머그컵 팝니다",
  address: "대구 달서구 도원동",
  price:  5000,
  image: "https://dnvefa72aowie.cloudfront.net/origin/article/202207/f7dcc6751a329bb162a43bcc8317e488f108c161878c0777df7a33c03f11e1a4.webp?q=95&s=1440x1440&t=inside",
  category: "ETC",
  status: "판매 상태",
  createdAt: "시간",
  like: 5,
  view: 10
},
    ]
  }

// Action Creators
export function loadPost(post) {
  console.log("d액션함수에서 post확인",post)
    return { type: LOAD, post }
  }
  
  export function updatePost(post, params) {
    console.log("확인", post, params)
    return { type: UPDATE, post, params }
  }
  
  export function createPost(post) {
    return { type: CREATEPOST, post }
  }
  
  // middlewares
  export const loadPostDB = ( ) => {
    return async function (dispatch) {
     
    }
  }
  
  // Reducer
  export default function reducer(state = initialState, action = {} ) {
    switch (action.type) {
      // case "post/LOAD": {
      //   return { post: action.post }
      // }
  
      case "post/UPDATE": {
        state.post.find((include) => {
          if(include.title === action.title) {
            include.category = action.post.category;
            include.price = action.post.price;
            include.image = action.post.image;
            include.content = action.post.content;
  
            return;
          }
        })
          return {...state}
        }
  
        case "post/CREATE_POST" : {
          const new_post = [ ...state.post, action.post ]
          return { ...state, post: new_post }
        }
  
      default: return state;
    }
  }