import React from "react";
import styled from "styled-components";
import Category from "../components/Category";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

  const RefPrice = React.useRef(null);
  const RefContent = React.useRef(null);
  const RefTitle = React.useRef(null);
  const RefCategory = React.useRef(null);
 
  const [ImageFile, setImageFile ] = React.useState([]);
  const [ShowImg, setShowImg] = React.useState(null
  );


  const MakePostAX = async () => {
    const data = {
      title: RefTitle.current.value,
      category: RefCategory.current.value,
      price: RefPrice.current.value,
      image: ImageFile,
      content: RefContent.current.value,
    };

    console.log("전송하는 data모양은", data);

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
    <div>
      <WrapTitle>
        <PostTitle>중고거래 글쓰기</PostTitle>
        <button style={{ width: "200px" } } onClick={MakePostAX}>완료</button>
      </WrapTitle>
      <div
      style={{width: "", height: "200px",display:"flex",flexDirection:"row"}}
      >
        <Dropdownimg  setImageFile={setImageFile} ImageFile={ImageFile} ShowImg={ShowImg} setShowImg={setShowImg}/>
        {ImageFile.lengh!==0&&<img
          style={{ width: "250px", height: "200px", objectFit: "cover" }}
          src={ShowImg}/>
      }
      </div>
      <WrapTitleInput>
        <InputTitle ref={RefTitle} placeholder="제목" />
        <select
          id="pet-select"
          ref={RefCategory}
          style={{ height: height, width: "20%" }}
        >
          <option value="">카테고리 선택</option>
          {value.map((v, i) => {
            return (
              <option key={`option${i}`} value={v[1]}>
                {v[0]}
              </option>
            );
          })}
        </select>{" "}
      </WrapTitleInput>
      <div>
        <InputPrice type="number" ref={RefPrice} placeholder="가격(선택사항)" />
      </div>
      <div>
        <MyTextarea
          ref={RefContent}
          placeholder="현재글쓴이주소에 올릴 게시글 내용을 작성해주세요. 가품 및 판매금지품목은 게시가 제한될 수 있어요."
        />
      </div>

      <WrapMakePost></WrapMakePost>
    </div>
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
const WrapTitle = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 3px solid black;
  width: 100%;
`;
const PostTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 70%;
  text-align: center;
`;
const WrapTitleInput = styled.div`
  display: flex;
  flex-direction: row;
`;
const InputPrice = styled.input`
  width: 100%;
`;
const InputTitle = styled.input`
  width: 90%;
`;
const MyTextarea = styled.textarea`
  width: 100%;
  height: 80px;
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
