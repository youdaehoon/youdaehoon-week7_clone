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
    ]
  }

// Action Creators
export function loadPost(post) {
  console.log("액션함수에서 확인",post)
    return { type: LOAD, post }
  }
  
  export function updatePost(post, params) {
    console.log("확인", post, params)
    return { type: UPDATE, payload: {post, params} }
  }
  
  export function createPost(post) {
    return { type: CREATEPOST, post }
  }
  
  // middlewares
  export const loadPostDB = ( ) => {
    return async function (dispatch) {
      await axios
      .get("http://ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com/api/posts?location=ABC&size=8", {
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => {
        console.log(response.data.content, "미들에어 에서 확인!");
        dispatch(loadPost(response.data.content));
      })
      .catch((error) => {
        console.log("실패: 400 BAD_REQUEST", error);
      });
    }
  }
  
  // Reducer
  export default function reducer(state = initialState, action = {} ) {
    switch (action.type) {
      case "post/LOAD": {
        console.log("redux",state,action.post)
        return { post:action.post}
      }
  
     
      default: return state;
    }
  }