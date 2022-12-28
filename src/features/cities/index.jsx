import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCities, setCity } from "../cities/municipiosSlice";

export const SelectCity = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.citiesData);
  const [citySelected, setCitySelected] = useState("");
  const UF = useSelector((state) => state?.states?.selectedState);

  const loading = useSelector((state) => state?.cities?.loading);
  const status = useSelector((state) => state?.cities?.status);

  const cityLength = cities.length > 0;

  { console.log("cities", cityLength ) }

  useEffect(() => {
    setTimeout(() => {
      dispatch(getCities(UF));
    }, 2000)
  }, [dispatch, UF]);

  const handleChange = (e) => {
    setCitySelected(e.target.value);
    dispatch(setCity(e.target.value));
  };

  return (
    <>
      <FormControl sx={{ m: 5, minWidth: 220 }} size="small" label="teste">
        {loading ? (
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
    </>
  );
};