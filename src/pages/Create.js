import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Create = () => {
  const navigate = useNavigate();

  const [playername, setPlayername] = useState("");
  const [teamname, setTeamname] = useState("");
  const [Nhandicap, setNhandicap] = useState("");
  const [Ohandicap, setOhandicap] = useState("");
  const [Ptotalpoints, setPtotalpoints] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!playername || !teamname || !Nhandicap || !Ohandicap || !Ptotalpoints) {
      setFormError("Please fill in all the fields correctly.");
      return;
    }

    const { data, error } = await supabase
      .from("players")
      .insert([{ playername, teamname, Nhandicap, Ohandicap, Ptotalpoints }]);

    if (error) {
      console.log(error);
      setFormError("Please fill in all the fields correctly.");
    }

    if (data) {
      console.log(data);
      setFormError("Update was successful.");
      navigate("/");
    }

    console.log(playername, teamname, Nhandicap, Ohandicap, Ptotalpoints);
  };

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="playername">Player Name:</label>
        <input
          type="text"
          id="playername"
          value={playername}
          onChange={(e) => setPlayername(e.target.value)}
        />

        <label htmlFor="teamname">Team Name:</label>
        <textarea
          id="teamname"
          value={teamname}
          onChange={(e) => setTeamname(e.target.value)}
        />

        <label htmlFor="Nhandicap">New Handicap:</label>
        <input
          type="number"
          id="Nhandicap"
          value={Nhandicap}
          onChange={(e) => setNhandicap(e.target.value)}
        />

        <label htmlFor="Ohandicap">Old Handicap:</label>
        <input
          type="number"
          id="Ohandicap"
          value={Ohandicap}
          onChange={(e) => setOhandicap(e.target.value)}
        />

        <label htmlFor="Ptotalpoints">Players total points:</label>
        <input
          type="number"
          id="Ptotalpoints"
          value={Ptotalpoints}
          onChange={(e) => setPtotalpoints(e.target.value)}
        />

        <button>Create Player</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Create;
