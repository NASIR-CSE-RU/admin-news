// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },

  // hide last border
  '&:last-of-type td, &:last-of-type th': {
    border: 0
  }
}))

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
]

const NotesTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>S/L</StyledTableCell>
            <StyledTableCell align='right'>Title</StyledTableCell>
            <StyledTableCell align='right'>Description</StyledTableCell>
            <StyledTableCell align='right'>Created By</StyledTableCell>
            <StyledTableCell align='right'>Created At</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.notes.map(row => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component='th' scope='row'>
                {row._id}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.title}</StyledTableCell>
              <StyledTableCell align='right'>{row.description}</StyledTableCell>
              <StyledTableCell align='right'>{row.userId}</StyledTableCell>
              <StyledTableCell align='right'>{row.createdAt}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default NotesTable
