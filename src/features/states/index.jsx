import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getStates, setState } from "../states/estadosSlice";

export const SelectState = () => {
  const dispatch = useDispatch();
  const states = useSelector((state) => state.states.statesData);
  const [stateSelected, setStateSelected] = useState("");

  useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);

  const handleChange = (e) => {
    setStateSelected(e.target.value);
    dispatch(setState(e.target.value));
  };

  return (
    <FormControl sx={{ m: 5, minWidth: 220}} size="small" >
      <InputLabel id="demo-select-small">Estado</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={stateSelected}
        label="Estados"
        onChange={handleChange}
      >
        <MenuItem disabled>Selecione o estado</MenuItem>
        {states?.map((item) => (
          <MenuItem key={item.id} value={item.sigla}>
            {item.nome}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
