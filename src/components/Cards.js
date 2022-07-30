import React from "react";
import styled from "styled-components";

import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

const Cards = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <>
    {/* <Item onClick={() => {
      navigate('/boards/' + data.nickname + '/items')
    }}></Item> */}
    
          <Card>
                <div>
                    <div>
                    <img src="" alt="" />
                    
                    </div>
                    <div>
                    <p>팝니다</p>
                    <div>
                        <p>100</p>
                        <p>주소</p>
                    </div>
                    </div>
                </div>
          </Card>
          </>
    );
};

const Card = styled.div`
  width: 196px;
  // margin-bottom: 10px;
  // background-color: blue;
  padding : 0px 20px 0px 20px;
  
  &:nth-child(5n) {
    margin-right: 0;
  }
`;

export default Cards;