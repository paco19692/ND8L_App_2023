import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";

const PlayerCard = ({ player, onDelete }) => {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("players")
      .delete()
      .eq("id", player.id);
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onDelete(player.id);
    }
  };

  return (
    <div className="player-card">
      <h3>{player.playername}</h3>
      <p>{player.teamname}</p>
      <div className="newhandicap">{player.Nhandicap}</div>
      <div className="ptotalpoints">{player.Ptotalpoints}</div>
      <div className="buttons">
        <Link to={"/" + player.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>
          delete
        </i>
      </div>
    </div>
  );
};
export default PlayerCard;
