import React from 'react'
import styled from 'styled-components';
// import { Button } from '@material-ui/core';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

import Cards from '../components/Cards';

const Main = () => {
  const data = useSelector((state) => state.post.post)
  console.log("나야나", data)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // 그림을 그리고 온클릭 => 상세페이지 이동 => 주소(ID를 심어준다)
  // 디테일 페이지에서 연결..! (card)

  return (

    <>
     <div style={{"backgroundColor": "#efefef", "width":"100%", "height" : "350px"
    }}/>
        <div>
            <h2>중고거래 인기매물</h2>
            <div>
              {data.map((v, idx) => <Cards
              onClick={()=>
              navigate.push(`/detail/${v.postId}`)}
              post = {[v]} data={v} key={idx} />)}
            </div>
        </div>
    </>
  )
};


export default Main