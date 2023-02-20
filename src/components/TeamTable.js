import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TeamTable = ({ player }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Player Name</TableCell>
            <TableCell>Team Name</TableCell>
            <TableCell>New Handicap</TableCell>
            <TableCell>Old Handicap</TableCell>
            <TableCell>Break n Runs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>{player.playername}</TableCell>
            <TableCell>{player.teamname}</TableCell>
            <TableCell>{player.Nhandicap}</TableCell>
            <TableCell>{player.Ohandicap}</TableCell>
            <TableCell>{player.breakrun}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeamTable;
