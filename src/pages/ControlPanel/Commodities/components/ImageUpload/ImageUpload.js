import React, { useState, useRef } from "react";
import Button from '@mui/material/Button';

const ImageUpload = (props) => {
    const [image, setImage] = useState("");

    const inputFile = useRef(null);
    const inputFileBlock = useRef(null);

    const handleFileUpload = e => {
        const { files } = e.target;
        if (files && files.length) {
            const filename = files[0].name;

            var parts = filename.split(".");
            const fileType = parts[parts.length - 1];
            // console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.

            setImage(files[0]);
            inputFileBlock.current.value=filename

        }
    };

    const onButtonClick = () => {
        inputFile.current.click();
    };

    // console.log("imageimage", image);
    return (
        <div>
            <input
                 name={"image"}
                style={{ display: "none" }}
                // accept=".zip,.rar"
                ref={inputFile}
                onChange={handleFileUpload}
                type="file"
            />
            <div style={{ display: "flex",flexDirection:"column" }}>
                <label htmlFor={"inputFileBlock"}>تصوير كالا:</label>
                <div>
                    <input value={props.value} ref={inputFileBlock} id={"inputFileBlock"} style={{ width:"73%",marginLeft:"1rem" }}/>
                    <Button onClick={onButtonClick} style={{ height:"1.7rem" , width:"5rem" ,background:"#060638",color:"white",left:"0"}} >Browse</Button>
                </div>

            </div>

        </div>
    );
};

export default ImageUpload;
