import React from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { AiFillCamera } from "react-icons/ai";

const Dropdownimg = ({ setImageFile, ImageFile, setShowImg }) => {
  const onDrop = (e) => {
    // Do something with the files

    setImageFile([e[0]]);
    setShowImg(URL.createObjectURL(e[0]));
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <DropdownZoneStyle {...getRootProps()}>
        <input {...getInputProps()} />
        <WrapIcon>
          
          <AiFillCamera size="30%" />
          
          <CountImage>{ImageFile.length}/10</CountImage>
        
        </WrapIcon>
      </DropdownZoneStyle>
    </div>
  );
};

export default Dropdownimg;

const DropdownZoneStyle = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 100px;
`;

const WrapIcon=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
const CountImage=styled.div`
background-color: yellow;

font-size: 15px;

`
