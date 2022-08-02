import React from "react";
import styled from "styled-components";
import { Button } from '@material-ui/core';

import Category from "../components/Category";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Dropdownimg from "../components/Dropdownimg";

const MakePost = () => {
  const navigate = useNavigate();
  const height = "50px";
  const value = [
    ["의류", "CLOTHES"],
    ["도구", "ELECTRIC"],
    ["스포츠/레져", "SPORTS"],
    ["디지털기기", "MEDIA"],
    ["생활/가공식품", "FOOD"],
    ["기타 중고물품", "ETC"],
  ];

  const auth={
    authorization:sessionStorage.getItem("access_token"),
    refresh_token:sessionStorage.getItem("refresh_token")
    }

  const RefPrice = React.useRef(null);
  const RefContent = React.useRef(null);
  const RefTitle = React.useRef(null);
  const RefCategory = React.useRef(null);

  const [ImageFile, setImageFile] = React.useState([]);
  const [ShowImg, setShowImg] = React.useState(null);
  const UpdateformData = new FormData();
  const formData = new FormData();

  const { postId } = useParams();
  console.log("postid값은~~~",postId,typeof(postId));

  const MakePostAX = async () => {
    const data = {
      title: RefTitle.current.value,
      category: RefCategory.current.value,
      price: Number(RefPrice.current.value),
      image: ImageFile,
      content: RefContent.current.value,
    };
    console.log( RefPrice.current.value,typeof(Number(RefPrice.current.value) ))
    formData.append("title", RefTitle.current.value);
    formData.append("category", RefCategory.current.value);
    formData.append("price", Number(RefPrice.current.value));
    for(let i=0;i<1;i++){
      formData.append("image", ImageFile[i]);
    }
   
    formData.append("content", RefContent.current.value);
    console.log("보내는 데이터 file형식은", formData);
    console.log("file 안에서 data의 형식 및 이름은", data);
    const auth={
      authorization:sessionStorage.getItem("access_token"),
      refresh_token:sessionStorage.getItem("refresh_token")
     }
    //  console.log(auth);
    //  console.log(`Bearer ${auth.authorization}`)
    //  console.log(`Bearer ${auth.refresh_token}`)
    
    
    const apiImg = axios.create({
      baseURL: "http://ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com/",   
      headers: {
        Authorization: `Bearer ${auth.authorization}`,
        refresh_token: `Bearer ${auth.refresh_token}`,
        "Content-Type": "multipart/form-data",
      }
    });

    const CreateBoardAXImg = await apiImg
      .post("api/post", formData)
      .then(function (response) {
        console.log(response, "에러안남!!!!!");
      })
      .catch(function (error) {
        console.log("에러났음.", error);
      });
    }

  const UpdatePostAX = async () => {
    const data = {
      title: RefTitle.current.value,
      category: RefCategory.current.value,
      price: RefPrice.current.value,
      content: RefContent.current.value,
      newFile: ImageFile,
      deleteFile: null,
    };
    UpdateformData.append("title", RefTitle.current.value);
    UpdateformData.append("category", RefCategory.current.value);
    UpdateformData.append("price", Number(RefPrice.current.value));
    for(let i=0;i<1;i++){
      formData.append("image", ImageFile[i]);
    }
    UpdateformData.append("deleteFile", null);
    UpdateformData.append("content", RefContent.current.value);
    console.log("보내는 데이터 file형식은", UpdateformData);
    console.log("file 안에서 data의 형식 및 이름은", data);

     const auth = {
      authorization:sessionStorage.getItem("access_token"),
      refresh_token:sessionStorage.getItem("refresh_token")
     }
     console.log(auth);
    const apiImg = axios.create({
      baseURL: "http://ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com/",   
      headers: {
        Authorization: `Bearer ${auth.authorization}`,
        refresh_token: `Bearer ${auth.refresh_token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    const CreateBoardAXImg = await apiImg
      .put("/api/post/1", UpdateformData)
      .then(function (response) {
        console.log(response, "에러안남!!!!!");
      })
      .catch(function (error) {
        console.log("에러났음.", error);
      });
  };

  return (
    <Wrap>

      <WrapTitle>
        <PostTitle>중고거래 글쓰기</PostTitle>

        {true&&<button>예시</button>}
        <Button style={{color: 'gray', margin: "0px 100px 0px 0px"}} variant="outlined" color="inherit">
          예시</Button>

        {postId=="0"?<button style={{ width: "200px" }} onClick={MakePostAX}>
          작성하기
        </button> : <button 
        style={{ color: 'white'}} variant="outlined" color="inherit"
        onClick={UpdatePostAX}>
          수정하기
        </button>}
        
     
      </WrapTitle>
      <div
        style={{
          width: "",
          height: "150px",
          display: "flex",
          flexDirection: "row",
          // marginLeft: "40px"
          // display: "flex", alignItems: "center", justifyContent: "center"
        }}>
        <Dropdownimg
          setImageFile={setImageFile}
          ImageFile={ImageFile}
          ShowImg={ShowImg}
          setShowImg={setShowImg}
        />
        {ImageFile.lengh !== 0 && (
          <img
            style={{ width:'150px', height: "100%", objectFit: "cover", marginLeft: "20px"}}
            src={ShowImg}
          />
        )}
      </div>
      <WrapTitleInput>
        <InputTitle ref={RefTitle} placeholder="제목"
        style={{ paddingLeft:"10px"}} />
        <select
          id="pet-select"
          ref={RefCategory}
          style={{ width: "15%", height: "40px", marginLeft: "10px", color: "gray"}}
        >
          {/* <Option> */}
          <option value="">카테고리 선택</option>
          {/* </Option> */}
          {value.map((v, i) => {
            return (
              <option key={`option${i}`} value={v[1]}>
                {v[0]}
              </option>
            );
          })}
        </select>{" "}
      </WrapTitleInput>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <InputPrice type="number" ref={RefPrice} placeholder="가격(선택사항)" />
      </div>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <MyTextarea
          ref={RefContent}
          placeholder="[현재 글쓴이 주소]에 올릴 게시글 내용을 작성해주세요. (가품 및 판매금지품목은 게시가 제한될 수 있어요.)"
        />
      </div>
      {/* <WrapMakePost></WrapMakePost> */}
    </Wrap>
  );
};


export default MakePost;

const Wrap = styled.div`
  max-width: 50%;
  position: relative;
  height: 100%;
  margin: 0 auto;

  margin-top: 40px;
  padding: 20px 20px 60px 20px;
  border: solid 1px #dadada;
  border-radius: 8px;
`;

// const WrapMakePost = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 500px;
//   font-size: 40px;
//   & > input {
//     height: 50px;
//   }
// `;

const WrapTitle = styled.div`
  display: flex;
  padding-bottom: 20px;
  // border-bottom: 3px solid black;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 50px;
`;

const PostTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 70%;
  text-align: center;
  margin-left: 55px;
`;

const WrapTitleInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const InputPrice = styled.input`
  width: 80%;
  height: 30px;
  padding-left: 10px;
  margin-bottom: 20px;
`;

const InputTitle = styled.input`
  width: 63%;
  height: 35px;
`;

// const Option = styled.option`
//   width: 60%;
//   height: 30px;
//   color: gray;
// `;

const MyTextarea = styled.textarea`
  width: 80%;
  height: 80px;
  padding-left: 10px;
  padding-right: 5px;
  padding-top: 10px;
`;

// Content-Type: “multipart/form-data”
// Authorization: Bearer 엑세스 토큰
// refresh_token: Bearer 리프레시 토큰
// {
//     title: "제목입니다",
//     category: “카테고리”,
//     price: 가격,
//     image: [이미지 파일…],
//     content: 본문
// }
