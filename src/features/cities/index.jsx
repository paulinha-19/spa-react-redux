import React, { useState, useEffect } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCities, setCity } from "../cities/municipiosSlice";
import { ModalApp } from "../../components/index";

export const SelectCity = () => {
  const dispatch = useDispatch();
  const [citySelected, setCitySelected] = useState("");
  const cities = useSelector((state) => state.cities.citiesData);
  const UF = useSelector((state) => state?.states?.selectedState);
  const loading = useSelector((state) => state?.cities?.loading);
  const status = useSelector((state) => state?.cities?.status);
  const hasError = useSelector((state) => state?.cities?.hasError);

  useEffect(() => {
    dispatch(getCities(UF));
  }, [dispatch, UF]);

  const handleChange = (e) => {
    setCitySelected(e.target.value);
    dispatch(setCity(e.target.value));
  };

  return (
    <Box>
      {status === "Erro" ? (
        <ModalApp severity="error" variant="filled" titleAlert="Erro" content={hasError}/>
      ) : null
      }
      <FormControl sx={{ m: 5, minWidth: 220 }} size="small" label="teste">
        {(status === "Carregando" && UF != "") ? (
          <InputLabel id="demo-select-small">Carregando</InputLabel>
        ) : (
          <InputLabel id="demo-select-small">Cidade</InputLabel>
        )
        }
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={citySelected}
          label="Cidade"
          onChange={handleChange}
        >
          <MenuItem disabled>Selecione a cidade</MenuItem>
          {cities?.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
