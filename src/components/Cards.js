import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom'

const Cards = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // const gotoDetail = () => {
    //     navigate(`/detail/${props.postId}`)
    // }
    // const { postId } = useParams();
    // console.log(postId)
    const { image, title, price } = props.post;
    console.log("나는 어디에", props)


    // let { postId } = useParams();
    // const { image, title, price, address } = useParams();
    // const { postId } = useParams();
    // console.log(props)


    // let { params } = useParams();
    // console.log(params)

    // useEffect(() => {
    //     fetch(`${API}/${params.postId}`)
    //       .then(res => res.json())
    //       .then(data => {
    //         setCommentArray(data);
    //       });
    //   }, []);

  return (
    <>
    {/* <Item onClick={() => {
      navigate('/boards/' + data.nickname + '/items')
    }}></Item> */}

            <Card>
                <CardInner>
                {/* onClick={() => navigate(`/item/${idx}`)}
                window.location.href = `/detail/${id}` */}
                    <CardHead>
                    {/* src={images} */}
                    <img src={props.image} alt="" />
                    </CardHead>
                    <CardContents>
                    <ItemName>{props.title}</ItemName>
                    <ItemContentBottom>
                        <Price>{props.price}</Price>
                        <Address>{props.Address}</Address>
                    </ItemContentBottom>
                    </CardContents>
                </CardInner>
          </Card>
          </>
    );
};

const Card = styled.div`
  width: 196px;
  margin-bottom: 20px;
  // background-color: blue;
  padding : 0px 20px 0px 20px;
  
  &:nth-child(5n) {
    margin-right: 0;
  }
`;

const CardInner = styled.a`
  border: 1px solid rgb(238, 238, 238);
  background: rgb(255, 255, 255);
  display: block;
`;

const CardHead = styled.div`
  position: relative;
  width: 100%;
  height: 194px;
  img {
    vertical-align: bottom;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`;

const Sth = styled.div``;
const CardContents = styled.div`
  padding: 15px 10px;
  height: 50px;
`;
const ItemName = styled.div`
  position: relative;
  font-size: 14px;
  padding-bottom: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ItemContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &::after{
    content: "원";
    font-size: 13px;
    margin-left: 3px;
  }
`;

const Address = styled.div`
  font-size: 12px;
  color: rgb(136, 136, 136);
`;

export default Cards;