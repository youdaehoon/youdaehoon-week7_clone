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
  
  const auth = {
    authorization:sessionStorage.getItem("access_token"),
    refresh_token:sessionStorage.getItem("refresh_token")
    }

    // React.useEffect(() => {
    //     const apiMain = axios.create({
    //         baseURL: "http://ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       });
      
    //       const CreateBoardAXImg = await apiMain
    //         .get("/api/posts?keyword=""&location=""&size=8&lastId=8") // 로그인 후 "지역" 처리 - "posts?size=12&page=0"
    //         .then(function (response) {
    //           console.log(response, "에러 놉");
    //         })
    //         .catch(function (error) {
    //           console.log("실패: 400 BAD_REQUEST", error);
    //         });
    // })


  return (
    <>
    <div style={{ width: "100vw", height: "450px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // position: "absolute", top: "0", left: "-25%", bottom: "0", right: "0",
    backgroundColor: "#FBF7F2"}}>
      <MainBanner
        className="ManiBanner"
        alt="main"
        src="/images/MainBanner.png"
        // style={{ marginLeft: "-50%"}}
        // style={{ backgroundColor: "#FBF7F2", width: "200%", height: "450px"}}
        />
        </div>
        <Wrap>
        <H2>중고거래 인기매물</H2>
        <SearchContainer>
          <Search
          placeholder="물품이나 동네를 검색해보세요!"
           />
          {/* <SearchIcon /> */}
        </SearchContainer>
  
        <CardList>
        {/* // style={{backgroundColor: 'gray'}} */}
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
  // margin: 0 auto;
  // background-color: yellow;
`;

const H2 = styled.div`
  font-size: 1.5rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardList = styled.div`
  width: 100%;
  height: 100%;
  // padding-left: 80px;
  // margin: 0 auto;
  // margin-left: 150px;
  // margin-right: 150px;

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
  margin-left: 4%;
  margin-right: 4%;  
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
