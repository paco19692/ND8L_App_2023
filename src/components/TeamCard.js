const TeamCard = ({ player }) => {
  return (
    <div className="team-card">
      <p>
        {player.playername} {player.teamname} {player.Nhandicap}{" "}
        {player.Ohandicap} {player.breakrun} {player.eightbrk}{" "}
        {player.matchwins} {player.weeksplyd} {player.Ptotalpoints}
      </p>
    </div>
  );
};

export default TeamCard;
