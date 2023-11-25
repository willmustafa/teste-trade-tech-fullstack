import React from 'react'

export interface ITournamentCard {
    team: string,
    position: number,
    points: number,
}

export default function TournamentCard({team, position, points}: ITournamentCard) {
  return (
    <div className='card'>
        <div className="card-body">
            <h5 className='mb-2 fw-bold'>{team}</h5>
            <p className='mb-0'>Posição: {position}</p>
            <p className='mb-0'><small>Pontos: {points}</small></p>
        </div>
    </div>
  )
}
