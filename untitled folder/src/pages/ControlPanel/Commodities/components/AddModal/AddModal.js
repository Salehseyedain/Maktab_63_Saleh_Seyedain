import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import logo from "../../../../../asset/images/logo-removebg-preview.png";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import {PATHS} from "../../../../../configs/routes.config";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import * as api from "../../../../../api/user.api";
import {tableCellClasses} from "@mui/material/TableCell";
import styles from '../../../../../asset/styles/Modal.Commodities.module.css';
import ImageUpload from "../ImageUpload/ImageUpload";
import SelectAutoWidth from "../Selctor/Selctor";
import MinHeightTextarea from "../Textarea/TextArea";
import ToggleButtonsMultiple from "../ToggleBut/ToggleBut";
import store from "../../../../../redux/store";
import {getCommoditis} from "../../../../../redux/actions/add.action";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // height:"30rem",
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 1,

};

export default function AddModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const formRef = useRef();
    const navigate = useNavigate();


    const addHandelear = async (e) => {
        e.preventDefault()
        let imgeFile = new FormData();
        imgeFile.append("image", e.target.image.files[0])
        const date = new Date(0)
        let image=""
        try {
            const response = await api.post("/upload", imgeFile);
            image = response.filename;
                    // console.log("mooodal",image)
        } catch (e) {
            alert("عكس اپلود نشد")
             image ="5b231eda24525225722b92103daeae00"
        }
        const form = new FormData(e.target);
        const data = Object.fromEntries(form);


        let commoditi={
            "brand": "microsoft",
            "image": [
                image
            ],
            "thumbnail": image,
            "price": "0",
            "count": "0",
            "createdAt": date,

            "category": {
                "group": data.group,
                "name": data.name,
                "icon": image
            }
    }

    try {
        const response = await api.post("/products",commoditi);
        store.dispatch(getCommoditis(commoditi))
        console.log("DDDDDD",store.getState())
    } catch (e) {
        alert("كالا ثبت نشد")


    }


    handleClose()

    }
    const handleSubmit = async (e) => {
        try {
            const response = await api.login(e);
            navigate(PATHS.COMMODITIES);
            // console.log("hi")

        } catch (e) {
            alert("اکانت وجود ندارد")

        }
    };

    return (
        <div >
            <Button onClick={handleOpen} variant="contained" color="success" size="small" style={{ height:"2rem" , width:"9rem" ,marginTop:"1rem",marginLeft:"-1.5rem",background:"#060638"}}>افزودن كالا</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}

            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className={styles.modalContaner}>
                            <div className={styles.header}><h5>افزودن</h5><span>icon</span></div>
                          <form className={styles.main} onSubmit={addHandelear}>
                             <ImageUpload/>
                              <div style={{ display: "flex",flexDirection:"column",margin:"0.5rem 0" }}>
                                  <label htmlFor={"commoditiName"}>نام كالا:</label>
                                  <input name={"name"} id={"commoditiName"}  />
                              </div>
                              <SelectAutoWidth/>
                              <MinHeightTextarea/>
                              <Button type={"submit"} variant="contained" color="success" size="small" style={{ height:"2rem" , width:"9rem" ,marginTop:"1rem",marginLeft:"-1.5rem",background:"#060638"}}>ذخيره</Button>
                          </form>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}