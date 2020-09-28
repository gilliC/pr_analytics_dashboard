import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ScreenTitle } from "./components/title";
import { BACKGROUND_GRAY } from "../../consts";
import { MainNumbersRow } from "./components/mainNumbersRow";
import Table from "../../common/table";
import { TablesRow } from "./components/tablesRow";

const useStyles = makeStyles({
  container: {
    paddingRight: 50,
    paddingLeft: 50,
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    flex: 1,
    backgroundColor: BACKGROUND_GRAY,
    height: "95vh",
  },
});

export const ScreenHome = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid md={12}>
        <ScreenTitle />
        <MainNumbersRow />
        <div style={{height:20}} />
        <TablesRow />
      </Grid>
    </div>
  );
};
