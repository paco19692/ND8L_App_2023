import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const MatchPage = () => {

    const navigate = useNavigate();

    const [matplayername, setMatplayername] = useState("");
    const [matteamname, setMatteamname] = useState("");
    const [matnhandicap, setMatnhandicap] = useState("");
    const [matracegames, setMatracegames] = useState("");
    const [matgameswon, setMatgameswon] = useState("");
    const [matbreakruns, setMatbreakruns] = useState("");
    const [mateightbreaks, setMateightbreaks] = useState("");
    const [mattotalpoints, setMattotalpoints] = useState("");
    const [matwinorloss, setMatwinorloss] = useState("");
    const [formError, setFormError] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (
        !matplayername ||
        !matteamname ||
        !matnhandicap ||
        !matracegames ||
        !matgameswon ||
        !matbreakruns||
        !mateightbreaks ||
        !mattotalpoints ||
        !matwinorloss
      ) {
        setFormError("Please fill in all the fields correctly.");
        return;
      }
  
      const { data, error } = await supabase.from("players").insert([
        {
          matplayername,
          matteamname,
          matnhandicap,
          matracegames,
          matgameswon,
          matbreakruns,
          mateightbreaks,
          mattotalpoints,
          matwinorloss
        },
      ]);
  
      if (error) {
        setFormError("Please fill in all the fields correctly.");
      } else if (data) {
        setFormError("null");
      }
      navigate("/home")
    };
  
    return (
      <div className="page create">
        <p className="success-card">Match Player A</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="playername">Player Name:</label>
          <input
            type="text"
            id="playername"
            value={matplayername}
            onChange={(e) => setMatplayername(e.target.value)}
          />
  
          <label htmlFor="teamname">Team Name:</label>
          <input
            type="text"
            id="teamname"
            value={matteamname}
            onChange={(e) => setMatteamname(e.target.value)}
          />
  
          <label htmlFor="Nhandicap">Handicap:</label>
          <input
            type="number"
            id="Nhandicap"
            value={matnhandicap}
            onChange={(e) => setMatnhandicap(e.target.value)}
          />
  
          <label htmlFor="matracegames">Race:</label>
          <input
            type="number"
            id="matracegames"
            value={matracegames}
            onChange={(e) => setMatracegames(e.target.value)}
          />
  
          <label htmlFor="matgameswon">Games Won:</label>
          <input
            type="number"
            id="matgameswon"
            value={matgameswon}
            onChange={(e) => setMatgameswon(e.target.value)}
          />
  
          <label htmlFor="matbreakruns">Players total break and runs:</label>
          <input
            type="number"
            id="matbreakruns"
            value={matbreakruns}
            onChange={(e) => setMatbreakruns(e.target.value)}
          />
  
          <label htmlFor="mateightbreaks">Players total 8s on breaks:</label>
          <input
            type="number"
            id="mateightbreaks"
            value={mateightbreaks}
            onChange={(e) => setMateightbreaks(e.target.value)}
          />
  
          <label htmlFor="mattotalpoints">Players total match points:</label>
          <input
            type="number"
            id="mattotalpoints"
            value={mattotalpoints}
            onChange={(e) => setMattotalpoints(e.target.value)}
          />
  
          <label htmlFor="matwinorloss">Player Won:</label>
          <input
            type="number"
            id="matwinorloss"
            value={matwinorloss}
            onChange={(e) => setMatwinorloss(e.target.value)}
          />
  
          <button>Create Player Match</button>
  
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    );
};

export default MatchPage