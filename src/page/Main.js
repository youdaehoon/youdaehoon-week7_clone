import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// import SearchIcon from '@material-ui/icons/Search';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Cards from "../components/Cards";
import { loadPostDB } from "../redux/modules/post";

const Main = () => {
  const data = useSelector((state) => state.post.post);
  const [postData,setPostData]=React.useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = {
    authorization: sessionStorage.getItem("access_token"),
    refresh_token: sessionStorage.getItem("refresh_token")
  }
  const address = sessionStorage.getItem("address")

  const loadData = useSelector((state) => state.post.post);
  console.log("힝왤캐안됑?",loadData)

  useEffect(() => {
    dispatch(loadPostDB());
    
  }, []);

  return (
    <>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#FBF7F2"
      }}>
        <MainBanner
          className="ManiBanner"
          alt="main"
          src="/images/MainBanner.png"
        />
      </div>
      <Wrap>
        <H2>중고거래 인기매물</H2>
        <SearchContainer>
          <Search
            placeholder="물품이나 동네를 검색해보세요!"
          />
        </SearchContainer>

        <CardList>
          {data?.map((v, idx) => (
            <CardsBox
              onClick={() => {
                navigate(`/detail/${v.postId}`);
              }}
              key={idx}
            >
              <Cards post={v} />
            </CardsBox>
          ))}
        </CardList>
      </Wrap>
    </>
  );
};


const MainBanner = styled.img`
    & img {
      width: 100vw;
      height: 100vw;
    }
`;

const Wrap = styled.div`
  mwidth: 100vw;
  position: relative;
  height: 100%;
  margin: 0 auto;
  // background-color: yellow;
`;

const H2 = styled.div`
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardList = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: row;
  flex-basis: 33.3%;
  flex-wrap : wrap;

  // border: 5px solid red;
  // background-color: blue;
`;

const CardsBox = styled.div`
  width: 195px;
  height: 100%;
  margin-bottom : 4%;
  margin-left: 2%;
  margin-right: 2%;

  // border: 5px solid red;
  // background-color: blue;
`;

const SearchContainer = styled.div`
  width: 100%;
  height: 45px;
  position: relative;
  margin: 0 auto;
  border: 0;
  margin-bottom: 20px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

const Search = styled.input`
  border: 0;
  padding-left: 10px;
  background-color: #eaeaea;
  
  width: 70%;
  height: 100%;
  outline: none;
`;

export default Main;