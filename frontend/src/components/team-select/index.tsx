import React from "react";
import Creatable from "react-select/creatable";

export default function TeamSelect() {
  const options = [
    { value: "teamA", label: "Team A" },
    { value: "teamB", label: "Team B" },
  ];

  return (
    <Creatable
      isMulti
      options={options}
      formatCreateLabel={(inputValue) => `Criar novo time: ${inputValue}`}
      placeholder="Selecione os 8 times participantes"
    />
  );
}
