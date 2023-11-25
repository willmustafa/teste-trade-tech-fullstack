import TournamentCard, { ITournamentCard } from "components/tournament-card";
import React from "react";

interface ITournamentHistoric {
  date: string;
  games: ITournamentCard[];
}

export default function TournamentHistoric({
  date,
  games,
}: ITournamentHistoric) {
  return (
    <div>
      <h5 className="pb-2">Campeonato {date}</h5>
      <div className="row">
        {games.map((game) => (
          <div className="col-4">
            <TournamentCard {...game} />
          </div>
        ))}
      </div>
    </div>
  );
}
