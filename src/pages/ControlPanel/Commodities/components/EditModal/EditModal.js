import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

import {useRef} from "react";
import {useNavigate} from "react-router-dom";

import styles from '../../../../../asset/styles/Modal.Commodities.module.css';
import ImageUpload from "../ImageUpload/ImageUpload";
import SelectAutoWidth from "../Selctor/Selctor";
import MinHeightTextarea from "../Textarea/TextArea";
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';


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

export default function EditModal(props) {
    const [openedit, setOpenedit] = React.useState(false);
    const handleOpen = () => setOpenedit(true);
    const handleClose = () => setOpenedit(false);
    const formRef = useRef();
    const navigate = useNavigate();
    const addHandelear = (e) => {
        e.preventDefault()
        const form = new FormData(e.target);
        const data = Object.fromEntries(form);
        console.log("mooodal",form)
    }


    return (
        <div >

            <Button onClick={handleOpen} variant="contained" color="success" size="small" style={{ height:"1rem" , width:"2rem",background:"#031b3a"}}>ويرايش</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openedit}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}

            >
                <Fade in={openedit}>
                    <Box sx={style}>
                        <div className={styles.modalContaner}>
                            <div className={styles.header}><EditIcon/><CloseIcon onClick={handleClose} className={styles.closeHover}/></div>
                            <form className={styles.main} onSubmit={addHandelear}>
                                <ImageUpload value={props.data.category.photo}/>
                                <div style={{ display: "flex",flexDirection:"column",margin:"0.5rem 0" }}>
                                    <label htmlFor={"commoditiNam"}>نام كالا:</label>
                                    <input id={"commoditiNam"} value={props.data.category.name} />
                                </div>
                                <SelectAutoWidth value={props.data.category.group}/>
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