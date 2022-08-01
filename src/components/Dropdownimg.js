import React from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { AiFillCamera } from "react-icons/ai";



const Dropdownimg = ({setImageFile,ImageFile,setShowImg}) => {
 

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
        <AiFillCamera size={30}/>
        <div>{ImageFile.length}/10</div><div/>
      </DropdownZoneStyle>
    
    </div>
  );
};

export default Dropdownimg;

const DropdownZoneStyle=styled.div`
border: 1px solid black;
width: 250px;
height: 200px;;
`
