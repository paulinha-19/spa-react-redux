import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInformationCity } from "./informacaoSlice";
import Loader from "../../styles/Spinner";
import { AlertError } from "../../components/AlertError";
import { Box, Card, CardContent, List, ListItem, ListItemText, Divider } from '@mui/material';

export const InformationCity = () => {
  const dispatch = useDispatch();
  const selectedCity = useSelector((state) => state?.cities?.selectedCity);
  const information = useSelector(
    (state) => state?.informationCity?.dataInformation
  );
  const hasError = useSelector((state) => state?.informationCity?.hasError);
  const loading = useSelector((state) => state?.informationCity?.loading);
  const status = useSelector((state) => state?.informationCity?.status);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getInformationCity(selectedCity));
    }, 3000)
  }, [dispatch, selectedCity]);

  return (
    <Box>
      {(status === "Carregando" && selectedCity) ? (
        <Box sx={{ display: "flex", justifyContent: "center" }} >
          <Loader />
        </Box>
      ) : status === "Erro" ? (
        <AlertError hasError={hasError}></AlertError>
      ) :
        <Card sx={{ minWidth: 220, boxShadow: 2, padding: "0 20px", backgroundColor: "#EDEDED" }} variant="elevation">
          {information.map((item, i) => (
            <CardContent key={item.id}>
              <List>
                <ListItem disablePadding sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  <ListItemText>
                    Nome: {item.nome}
                  </ListItemText>
                  <ListItemText>
                    Microrregião: {item.municipio.microrregiao.nome}
                  </ListItemText>
                  <ListItemText>
                    Mesorregião: {item.municipio.microrregiao.mesorregiao.nome}
                  </ListItemText>
                  <ListItemText>
                    UF: {item.municipio.microrregiao.mesorregiao.UF.nome}
                  </ListItemText>
                  <ListItemText>
                    Região do município: {item.municipio.microrregiao.mesorregiao.UF.regiao.nome}
                  </ListItemText>
                </ListItem>
              </List>
            </CardContent>
          ))}
        </Card>
      }
    </Box >
  );
};


