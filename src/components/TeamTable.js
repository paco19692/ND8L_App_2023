import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { color } from "@mui/system";

const TeamTable = ({ player }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="large" aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#6d15df" }}>
          <TableRow>
            <TableCell sx={{ minWidth: 100, color: "white" }} alight="left">
              Player Name
            </TableCell>
            <TableCell sx={{ minWidth: 100, color: "white" }} alight="left">
              Team Name
            </TableCell>
            <TableCell sx={{ color: "white" }} alight="left">
              New Handicap
            </TableCell>
            <TableCell sx={{ color: "white" }} alight="left">
              Old Handicap
            </TableCell>
            <TableCell sx={{ color: "white" }} alight="left">
              Break n Runs
            </TableCell>
            <TableCell sx={{ color: "white" }} alight="left">
              8 on Breaks
            </TableCell>
            <TableCell sx={{ color: "white" }} alight="left">
              Weeks Played
            </TableCell>
            <TableCell sx={{ color: "white" }} alight="left">
              Match Wins
            </TableCell>
            <TableCell sx={{ color: "white" }} alight="left">
              Total Points
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="left">{player.playername}</TableCell>
            <TableCell align="left">{player.teamname}</TableCell>
            <TableCell align="left">{player.Nhandicap}</TableCell>
            <TableCell align="left">{player.Ohandicap}</TableCell>
            <TableCell align="left">{player.breakrun}</TableCell>
            <TableCell align="left">{player.eightbrk}</TableCell>
            <TableCell align="left">{player.weeksplyd}</TableCell>
            <TableCell align="left">{player.matchwins}</TableCell>
            <TableCell align="left">{player.Ptotalpoints}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeamTable;
