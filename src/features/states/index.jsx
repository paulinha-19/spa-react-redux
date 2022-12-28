import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getStates, setState } from "../states/estadosSlice";
import {ModalApp} from "../../components/index"

export const SelectState = () => {
  const dispatch = useDispatch();
  const [stateSelected, setStateSelected] = useState("");
  const states = useSelector((state) => state.states.statesData);
  const hasError = useSelector((state) => state?.states?.hasError);
  const status = useSelector((state) => state?.states?.status);


  useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);

  const handleChange = (e) => {
    setStateSelected(e.target.value);
    dispatch(setState(e.target.value));
  };

  return (
    <Box>
      {status === "Erro" ? (
        <ModalApp severity="error" variant="filled" titleAlert="Erro" content={hasError}/>
      ) : null
      }
      <FormControl sx={{ m: 5, minWidth: 220 }} size="small" >
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
    </Box>
  );
};
