import React from "react";
import Creatable from "react-select/creatable";

interface ITeamSelect {
  onChange: Function;
  options: {
    value: string;
    label: string;
  }[];
}

export default function TeamSelect({ options, onChange }: ITeamSelect) {
  return (
    <Creatable
      isMulti
      options={options}
      formatCreateLabel={(inputValue) => `Criar novo time: ${inputValue}`}
      placeholder="Selecione os 8 times participantes"
      onChange={(choice) => onChange(choice)}
      closeMenuOnSelect={false}
      noOptionsMessage={() => "Sem mais opções"}
    />
  );
}
