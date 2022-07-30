// Action 과 Reducer 사용을 편하게 하기 위한 패키지
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer"; //immer : 불변성 관리
// import moment from "moment"; // Date객체와 유사
import axios from "axios"; //axios: node.js와 브라우저를 위한 Promise 기반 HTTP 클라이언트

//Actions
const LOAD = "post/LOAD";
const UPDATE = "post/UPDATE";
const CREATE_POST = "post/CREATE_POST";


//reducer이 사용할 initialState
const initialState = {
    post: [
      {
          postId: 31,
          title: "개발자 머그컵 팝니다",
          address: "대구 달서구 도원동",
          price:  5000,
          image: "",
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
        image: "",
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
      image: "",
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
    image: "",
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
  image: "",
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
    return { type: LOAD, post }
  }
  
  export function updatePost(post, params) {
    console.log("확인", post, params)
    return { type: UPDATE, post, params }
  }
  
  export function createPost(post) {
    return { type: CREATE_POST, post }
  }
  
  // middlewares
  export const loadPostDB = () => {
    return async function (dispatch) {
      try {
        const res = await axios.get("http://ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com/post");
  
        dispatch(loadPost(res.data))
      } catch(error) {
        console.log(error)
      }
    }
  }
  
  // Reducer
  export default function reducer(state = initialState, action = {} ) {
    switch (action.type) {
      case "post/LOAD": {
        return { post: action.post }
      }
  
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