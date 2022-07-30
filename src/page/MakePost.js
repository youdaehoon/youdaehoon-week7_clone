import React from "react";
import styled from "styled-components";
import Category from "../components/Category";
import axios from"axios"
import { useNavigate } from 'react-router-dom';

const MakePost = () => {
  const navigate=useNavigate();
  const height = "50px";
  const value = [
    ["의류","CLOTHES"],
    ["도구","ELECTRIC"],
    ["스포츠/레져","SPORTS"],
    ["디지털기기","MEDIA"],
    ["생활/가공식품","FOOD"],
    ["기타 중고물품","ETC"],
    
  ];

  const RefPrice = React.useRef(null);
  const RefContent = React.useRef(null);
  const RefTitle = React.useRef(null);
  const RefCategory=React.useRef(null);
  const [ImageFile,setImageFile]=React.useState(null);
  
  

  const SetImgByFile=(e)=>{
    setImageFile(e.target.files[0])
    
    
    
    
  }
  const MakePostAX = async() => {
    const data = {
      title: RefTitle.current.value,
      category: RefCategory.current.value,
      price: RefPrice.current.value,
      image: ImageFile,
      content: RefContent.current.value,
    };
    
    console.log("전송하는 data모양은", data);
    navigate("login");
    // const apiImg = axios.create({
    //   baseURL: "http://13.125.106.21:8080",
    //   headers: {
    //     authorization: `Bearer ${auth.authorization}`,
    //     refresh_token: `Bearer ${auth.refresh_token}`,
    //     "Content-Type": "multipart/form-data",
    //   },
    // });

    // const CreateBoardAXImg = await apiImg
    //   .post("posts", data)
    //   .then(function (response) {
    //     console.log(response, "에러안남!!!!!");
    //   })
    //   .catch(function (error) {
    //     console.log("에러났음.", error);
    //   });





  };
  return (
    <WrapMakePost>
      title:
      <input ref={RefTitle} />
      category:
      <select id="pet-select" ref={RefCategory} style={{ height: height, width: "100%" }}>
        <option value="">--Please choose an option--</option>
        {value.map((v, i) => {
          return (
            <option key={`option${i}`} value={v[1]}>
              {v[0]}
            </option>
          );
        })}
      </select>
      price:
      <input type="number" ref={RefPrice} />
      image:
      <input type="file" onChange={SetImgByFile} />
      content:
      <input ref={RefContent} />
      <p />
      <button onClick={MakePostAX} style={{ height: "50px" }}>
        제출하기
      </button>
      <p />
      
    </WrapMakePost>
  );
};

export default MakePost;

const WrapMakePost = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  font-size: 40px;
  & > input {
    height: 50px;
  }
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
