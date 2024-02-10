import React, { useEffect ,useContext} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "bootstrap-icons/font/bootstrap-icons.css";
import "jquery/dist/jquery.min.js";
import Box from "@mui/material/Box";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Userdatatable({ data, column,deletebtn }) {
  useEffect(() => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  });
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table id="example" sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {column.map((row) => (
              <TableCell>{row.head}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((value, index) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{value.firstname}</TableCell>
              <TableCell>{value.lastname}</TableCell>
              <TableCell>{value.email}</TableCell>
              <TableCell>{value.contact}</TableCell>
              <TableCell>{value.address}</TableCell>
              <TableCell>{value.location}</TableCell>
              <TableCell>{value.department}</TableCell>
              <TableCell>{value.title}</TableCell>
              <TableCell>{value.reporting}</TableCell>
              <TableCell>
                <Box className="tabel-action-icon">
                 <Link to={`/ViewUser/${value._id}`}>
                    <i className="bi bi-eye-fill view-icon"></i>
                  </Link>
                  <Link to={`/EditUser/${value._id}`} >
                  <i
                    className="bi bi-pencil-square edit-icon"
                  ></i>
                  </Link>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Userdatatable;
