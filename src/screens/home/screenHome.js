import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ScreenTitle } from "./components/title";
import { MainNumbersRow } from "./components/mainNumbersRow";
import { TablesRow } from "./components/tablesRow";

const useStyles = makeStyles({
  container: {
    paddingRight: 50,
    paddingLeft: 50,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export const ScreenHome = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid item md={12}>
        <ScreenTitle />
        <MainNumbersRow />
        <div style={{height:20}} />
        <TablesRow />
      </Grid>
    </div>
  );
};
