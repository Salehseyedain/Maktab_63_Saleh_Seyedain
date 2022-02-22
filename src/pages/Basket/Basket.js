// import React, { Component } from 'react'
// import PropTypes from 'prop-types';
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { visuallyHidden } from '@mui/utils';
// import Pagination from '@mui/material/Pagination';
// // import EditableLabel from "../Tagel/Tagel";


// function descendingComparator(a, b, orderBy) {
//     if (b[orderBy] < a[orderBy]) {
//         return -1;
//     }
//     if (b[orderBy] > a[orderBy]) {
//         return 1;
//     }
//     return 0;
// }

// function getComparator(order, orderBy) {
//     return order === 'desc'
//         ? (a, b) => descendingComparator(a, b, orderBy)
//         : (a, b) => -descendingComparator(a, b, orderBy);
// }

// // This method is created for cross-browser compatibility, if you don't
// // need to support IE11, you can use Array.prototype.sort() directly
// function stableSort(array, comparator) {
//     const stabilizedThis = array.map((el, index) => [el, index]);
//     stabilizedThis.sort((a, b) => {
//         console.log("a",a)
//         const order = comparator(a[0], b[0]);
//         if (order !== 0) {
//             return order;
//         }
//         return a[1] - b[1];
//     });
//     return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//     {
//         id: 'name',
//         numeric: false,
//         disablePadding: true,
//         label: 'کالا',
//     },
//     {
//         id: 'count',
//         numeric: true,
//         disablePadding: false,
//         label: 'موجودی',
//     },
//     {
//         id: 'price',
//         numeric: true,
//         disablePadding: false,
//         label: 'قیمت',
//     },

// ];

// function EnhancedTableHead(props) {
//     const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
//         props;
//     const createSortHandler = (property) => (event) => {
//         onRequestSort(event, property);
//     };

//     return (
//         <TableHead>
//             <TableRow>

//                 {headCells.map((headCell) => (
//                     <TableCell
//                         key={headCell.id}
//                         align='right'
//                         padding='normal'
//                         sortDirection={orderBy === headCell.id ? order : false}
//                     >
//                         <TableSortLabel
//                             active={orderBy === headCell.id}
//                             direction={orderBy === headCell.id ? order : 'asc'}
//                             onClick={createSortHandler(headCell.id)}
//                         >
//                             {headCell.label}
//                             {orderBy === headCell.id ? (
//                                 <Box component="span" sx={visuallyHidden}>
//                                     {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                                 </Box>
//                             ) : null}
//                         </TableSortLabel>
//                     </TableCell>
//                 ))}
//             </TableRow>
//         </TableHead>
//     );
// }

// EnhancedTableHead.propTypes = {
//     numSelected: PropTypes.number.isRequired,
//     onRequestSort: PropTypes.func.isRequired,
//     onSelectAllClick: PropTypes.func.isRequired,
//     order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//     orderBy: PropTypes.string.isRequired,
//     rowCount: PropTypes.number.isRequired,
// };


// function Basket(props) {
//     let rows = props.prop.data;
//     const [order, setOrder] = React.useState('asc');
//     const [orderBy, setOrderBy] = React.useState('count');
//     const [selected, setSelected] = React.useState([]);
//     const [page, setPage] = React.useState(1);
//     const [dense, setDense] = React.useState(false);
//     const [rowsPerPage, setRowsPerPage] = React.useState(3);

//     const handleRequestSort = (event, property) => {
//         const isAsc = orderBy === property && order === 'asc';
//         setOrder(isAsc ? 'desc' : 'asc');
//         setOrderBy(property);
//     };

//     const handleClick = (event, name) => {
//         const selectedIndex = selected.indexOf(name);
//         let newSelected = [];

//         if (selectedIndex === -1) {
//             newSelected = newSelected.concat(selected, name);
//         } else if (selectedIndex === 0) {
//             newSelected = newSelected.concat(selected.slice(1));
//         } else if (selectedIndex === selected.length - 1) {
//             newSelected = newSelected.concat(selected.slice(0, -1));
//         } else if (selectedIndex > 0) {
//             newSelected = newSelected.concat(
//                 selected.slice(0, selectedIndex),
//                 selected.slice(selectedIndex + 1),
//             );
//         }

//         setSelected(newSelected);
//     };

//     const handleChangePage = (event, newPage) => {
//         console.log(newPage)
//         setPage(newPage);
//     };


//     const isSelected = (name) => selected.indexOf(name) !== -1;

//     // Avoid a layout jump when reaching the last page with empty rows.
//     const emptyRows =Math.round( rows.length/rowsPerPage)


//     return (
//         <div >
//             <h1>2</h1>
//         <Box sx={{ width: '100%' }}>
//             <Paper sx={{ width: '100%', mb: 2 }}>

//                 <TableContainer>
//                     <Table
//                         sx={{ minWidth: 750 }}
//                         aria-labelledby="tableTitle"
//                         size={dense ? 'small' : 'medium'}
//                     >
//                         <EnhancedTableHead
//                             numSelected={selected.length}
//                             order={order}
//                             orderBy={orderBy}
//                             // onSelectAllClick={handleSelectAllClick}
//                             onRequestSort={handleRequestSort}
//                             rowCount={rows.length}
//                         />
//                         <TableBody>
//                             {/* if you don't need to support IE11, you can replace the `stableSort` call with:
//                  rows.slice().sort(getComparator(order, orderBy)) */}
//                             {stableSort(rows, getComparator(order, orderBy))
//                                 .slice((page-1) * rowsPerPage, (page-1) * rowsPerPage + rowsPerPage)
//                                 .map((row, index) => {
//                                     const isItemSelected = isSelected(row.name);
//                                     const labelId = `enhanced-table-checkbox-${index}`;

//                                     return (
//                                         <TableRow
//                                             hover
//                                             tabIndex={-1}
//                                             key={row.id}
//                                             selected={isItemSelected}
//                                         >
//                                             <TableCell
//                                                 component="th"
//                                                 id={labelId}
//                                                 scope="row"
//                                                 paddingRight="3rem"
//                                                 align="right"
//                                             >
//                                                 {row.category.name}
//                                             </TableCell>
//                                             {/* <TableCell align="right"><EditableLabel value={[row.count,"count",row]}/></TableCell>
//                                             <TableCell align="right"><EditableLabel value={[row.price,"price",row]}/></TableCell> */}
//                                         </TableRow>
//                                     );
//                                 })}
//                             {emptyRows > 0 && (
//                                 <TableRow
//                                     style={{
//                                         height: (dense ? 1 : 1) * emptyRows,
//                                     }}
//                                 >
//                                     <TableCell colSpan={6} />
//                                 </TableRow>
//                             )}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>

//             </Paper>
//         </Box>
//             <div style={{alignItems:"center",marginLeft:"37%"}}>
//                 <Pagination
//                     sx={{Color:"#060638",direction:"ltr" }}
//                     component="div"
//                     count={emptyRows}
//                     color="primary"
//                     rowsPerPage={rowsPerPage}
//                     page={page}
//                     align="left"
//                     direction="rtl"
//                     onChange={handleChangePage}
//                     justifyContent= "center"


//                 />
//             </div>

//         </div>

//     );
// }
// export {Basket};

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

function Basket() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper dir="rtl" sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer  sx={{ maxHeight: 440 }}>
        <Table  stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
export {Basket};