import TeamSelect from "components/team-select";
import TournamentBracket from "components/tournament-bracket";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Results() {
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [tournamentBracket, setTournamentBracket] = useState<any[]>([]);

  const options = [
    { value: "teamA", label: "Team A" },
    { value: "teamB", label: "Team B" },
    { value: "teamC", label: "Team C" },
    { value: "teamD", label: "Team D" },
    { value: "teamE", label: "Team E" },
    { value: "teamF", label: "Team F" },
    { value: "teamG", label: "Team G" },
    { value: "teamH", label: "Team H" },
  ];

  function simulateTournament() {
    if (selectedTeams.length < 8) toast.error("Selecione pelo menos 8 times.");
    else {
      setTournamentBracket([
        {
          id: 7,
          startTime: "2021-05-30",
          state: "SCHEDULED",
          participants: [
            {
              id: "9397971f-4b2f-44eb-a094-722eb286c59b",
              resultText: "2",
              isWinner: true,
              status: null,
              name: "Team D",
            },
            {
              id: "9397971f-4b2f-44eb-a094-722eb286c59b",
              resultText: "1",
              isWinner: false,
              status: null,
              name: "Team F",
            },
          ],
        },
        {
          id: 2,
          nextMatchId: 7,
          startTime: "2021-05-30",
          state: "SCHEDULED",
          participants: [
            {
              id: "9397971f-4b2f-44eb-a094-722eb286c59b",
              resultText: "0",
              isWinner: false,
              status: null,
              name: "Team A",
            },
            {
              id: "9397971f-4b2f-44eb-a094-722eb286c59b",
              resultText: "1",
              isWinner: true,
              status: null,
              name: "Team D",
            },
          ],
        },
        {
          id: 3,
          nextMatchId: 2,
          startTime: "2021-05-30",
          state: "SCHEDULED",
          participants: [
            {
              id: "9397971f-4b2f-44eb-a094-722eb286c59b",
              resultText: "0",
              isWinner: false,
              status: null,
              name: "Team C",
            },
            {
              id: "9397971f-4b2f-44eb-a094-722eb286c59b",
              resultText: "1",
              isWinner: true,
              status: null,
              name: "Team D",
            },
          ],
        },
        {
          id: 1,
          nextMatchId: 2,
          startTime: "2021-05-30",
          state: "SCHEDULED",
          tournamentRoundText: "1",
          participants: [
            {
              id: "42fecd89-dc83-4821-80d3-718acb50a30c",
              resultText: "0",
              isWinner: false,
              status: null,
              name: "Team B",
            },
            {
              id: "df01fe2c-18db-4190-9f9e-aa63364128fe",
              resultText: "2",
              isWinner: true,
              status: null,
              name: "Team A",
            },
          ],
        },
        {
          id: 6,
          nextMatchId: 7,
          startTime: "2021-05-30",
          state: "SCHEDULED",
          participants: [
            {
              id: "9397971f-4b2f-44eb-a094-722eb286c59b",
              resultText: "0",
              isWinner: false,
              status: null,
              name: "Team E",
            },
            {
              id: "9397971f-4b2f-44eb-a094-722eb286c59b",
              resultText: "1",
              isWinner: true,
              status: null,
              name: "Team F",
            },
          ],
        },
        {
          id: 4,
          nextMatchId: 6,
          startTime: "2021-05-30",
          state: "SCHEDULED",
          participants: [
            {
              id: "9397971f-4b2f-44eb-a094-722eb286c59b",
              resultText: "0",
              isWinner: false,
              status: null,
              name: "Team H",
            },
            {
              id: "9397971f-4b2f-44eb-a094-722eb286c59b",
              resultText: "1",
              isWinner: true,
              status: null,
              name: "Team E",
            },
          ],
        },
        {
          id: 5,
          nextMatchId: 6,
          startTime: "2021-05-30",
          state: "SCHEDULED",
          tournamentRoundText: "1",
          participants: [
            {
              id: "42fecd89-dc83-4821-80d3-718acb50a30c",
              resultText: "0",
              isWinner: false,
              status: null,
              name: "Team G",
            },
            {
              id: "df01fe2c-18db-4190-9f9e-aa63364128fe",
              resultText: "2",
              isWinner: true,
              status: null,
              name: "Team F",
            },
          ],
        },
      ]);
    }
  }

  return (
    <div className="row">
      <div className="d-flex gap-4 col-12">
        <div className="col-10">
          <TeamSelect options={options} onChange={setSelectedTeams} />
        </div>
        <div className="col-2">
          <button className="btn btn-primary" onClick={simulateTournament}>
            Simular
          </button>
        </div>
      </div>
      <div className="col-12 mt-5">
        {tournamentBracket.length > 0 && <TournamentBracket tournamentBracket={tournamentBracket} />}
      </div>
    </div>
  );
}
