import React from "react";
import styled from "styled-components";
import Category from "../components/Category";
import axios from"axios"

const MakePost = () => {
  const height = "50px";
  const value = [
    "디지털기기",
    "생활가전",
    "인테리어",
    "유아",
    "의류",
    "게임/취미",
    "뷰티",
    "생활가전",
    "도서",
  ];

  const RefPrice = React.useRef(null);
  const RefContent = React.useRef(null);
  const RefTitle = React.useRef(null);
  const RefCategory=React.useRef(null);
  const [ImageFile,setImageFile]=React.useState(null);
  

  const SetImgByFile=(e)=>{
    setImageFile(e.target.files[0])
    
  }
  const MakePostAX = () => {
    const data = {
      title: RefTitle.current.value,
      Category: RefCategory.current.value,
      price: RefPrice.current.value,
      image: ImageFile,
      content: RefContent.current.value,
    };
    console.log("전송하는 data모양은", data);





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
            <option key={`option${i}`} value={v}>
              {v}
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
