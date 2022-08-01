import React from "react";
import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Cards from "../components/Cards";

const Main = () => {
  const data = useSelector((state) => state.post.post);

  // console.log("나야나", data);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

    // React.useEffect(() => {
    //     const apiMain = axios.create({
    //         baseURL: "http://ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       });
      
    //       const CreateBoardAXImg = await apiMain
    //         .get("/posts?keyword=""&location=""&size=8&lastId=8") // 로그인 후 "지역" 처리 - "posts?size=12&page=0"
    //         .then(function (response) {
    //           console.log(response, "에러 놉");
    //         })
    //         .catch(function (error) {
    //           console.log("실패: 400 BAD_REQUEST", error);
    //         });
    // })


  return (
    <>
      <MainBanner
        style={{ backgroundColor: "#efefef", width: "200%", height: "450px"}}
      />
        <H2>중고거래 인기매물</H2>
        <SearchContainer>
          <Search
          placeholder="물품이나 동네를 검색해보세요!"
           />
          {/* <SearchIcon /> */}
        </SearchContainer>
  
        <CardList>
        {data.map((v, idx) => (
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
    </>
  );
};


const MainBanner = styled.div`
  margin-left: -50%;
    & img {
      background-position: 50% 50%;
      max-width: 200%;
      max-height: 100%;
    }
`;

const H2 = styled.div`
  font-size: 1.5rem;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardList = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;

  display:flex;
  flex-direction: row;
  flex-basis: 33.3%;
  flex-wrap : wrap;

  // border: 5px solid red;
  // background-color: blue;
`;

const CardsBox = styled.div`
  width: 25%;
  height: 100%;
  margin-bottom : 4%;
  
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
  width: 100%;
  height: 100%;
  outline: none;
`;

export default Main;
