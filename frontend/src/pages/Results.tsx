import TeamSelect from "components/team-select";
import TournamentBracket from "components/tournament-bracket";
import React from "react";

export default function Results() {
  return (
    <div className="row">
      <div className="d-flex gap-4 col-12">
        <div className="col-4">
          <TeamSelect />
        </div>
        <div className="col-5">
          <button className="btn btn-primary">Simular</button>
        </div>
      </div>
      <div className="col-12 mt-5">
        <TournamentBracket />
      </div>
    </div>
  );
}
