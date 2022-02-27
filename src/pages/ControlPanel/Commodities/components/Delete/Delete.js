import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import * as api from "../../../../../api/user.api";
import {PATHS} from "../../../../../configs/routes.config";

export default function DeleteBut(props) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
    };
    const handleDelete = async (e) => {
        try {
            const response = await api.Delete(props.data.id);
            props.func(props.data.id)
            // console.log("hi")

            setOpen(false);

        } catch (e) {
            alert("نشد")
            setOpen(false);

        }

    }

    return (
        <div style={{direction:"rtl"}}>

            <Button onClick={handleClickOpen} variant="contained" color="success" size="small" style={{ height:"1rem" , width:"2rem",background:"#cb5f07", marginLeft:"10px"}}>حذف</Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title" >
                    {`اطمينان داريد؟ ${props.data.category.name}آيا از حذف`}
                </DialogTitle>
                <DialogContent align="right">
                    <DialogContentText>
                        {` ${props.data.category.group} : دسته بندي  `}
                    </DialogContentText>
                    <DialogContentText>
                        {` ${props.data.count}:  موجودي   `}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        خير
                    </Button>
                    <Button onClick={handleDelete} autoFocus>
                        بله
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
