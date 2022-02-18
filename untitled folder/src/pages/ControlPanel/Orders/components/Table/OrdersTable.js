import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as moment from "jalali-moment";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import OrdersModal from "../Modal/OrdersModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor:   "#060638",
        color: "#f5eee8",
        fontSize: 20
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}



export default function CustomizedTables(props) {
    let data =props.prop.data;
    let rows = props.prop.data.filter(row=>{
        return row.OrderStatus == props.prop.value
    })
    console.log(rows)




    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="right">نام كاربر</StyledTableCell>
                        <StyledTableCell align="right">مجموع مبلغ</StyledTableCell>
                        <StyledTableCell align="right">زمان ثبت سفارش</StyledTableCell>
                        <StyledTableCell align="right">جزئیات</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row" align="right">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.TotalPrice}</StyledTableCell>
                            <StyledTableCell align="right">{moment(row.OrderTime).locale('fa').format('YYYY/MM/DD')}</StyledTableCell>
                            <StyledTableCell align="right" > <DialogActions align="right"style={{direction:"rtl",justifyContent: "start"}}  >
                                <OrdersModal data={row}/>
                            </DialogActions></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
