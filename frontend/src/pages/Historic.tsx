import TournamentCard from "components/tournament-card";
import TournamentHistoric from "components/tournament-historic";
import React from "react";

export default function Historic() {
  const tournaments = [
    {
      date: "01/02/2023",
      games: [
        { team: "Team A", position: 1, points: 12 },
        { team: "Team B", position: 2, points: 10 },
        { team: "Team C", position: 3, points: 5 },
      ],
    },
    {
      date: "01/01/2023",
      games: [
        { team: "Team C", position: 1, points: 8 },
        { team: "Team A", position: 2, points: 7 },
        { team: "Team B", position: 3, points: 5 },
      ],
    },
  ];

  return (
    <div>
      <h3 className="fw-bold mb-4">Histórico</h3>
      <div className="d-flex gap-5 flex-column">
        {tournaments.map((tournament) => (
          <TournamentHistoric {...tournament} />
        ))}
      </div>
    </div>
  );
}
