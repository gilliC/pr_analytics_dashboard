import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Card } from "../../../common/card";
import { ReversedCard } from "../../../common/reversedCard";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});

export const MainNumbersRow = (props) => {
  const classes = useStyles();
  return (
    <Grid md={12} className={classes.container}>
      <Grid md={2}> <Card label="Merged Successfuly" value={40} valueType="PRs" /> </Grid>
      <Grid md={2}> <Card label="Merge failed" value={32} valueType="PRs" /> </Grid>
      <Grid md={2}> <ReversedCard label="AVG PR merge time " value={35} valueType="Minutes" /> </Grid>
      <Grid md={2}> <Card label="AVG PR merge time " value={35} valueType="Minutes" /> </Grid>
      <Grid md={2}> <Card label="AVG PR merge time " value={35} valueType="Minutes" /> </Grid>
      <Grid md={2}> <Card label="AVG PR merge time " value={35} valueType="Minutes" /> </Grid>
    </Grid>
  );
};
