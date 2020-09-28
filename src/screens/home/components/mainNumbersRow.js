import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FONT_REG, TEXT_BLACK } from "../../../consts";
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
    <Grid lg={12} className={classes.container}>
      <Grid lg={2}> <Card label="Merged Successfuly" value={40} valueType="PRs" /> </Grid>
      <Grid lg={2}> <Card label="Merge failed" value={32} valueType="PRs" /> </Grid>
      <Grid lg={2}> <ReversedCard label="AVG PR merge time " value={35} valueType="Minutes" /> </Grid>
      <Grid lg={2}> <Card label="AVG PR merge time " value={35} valueType="Minutes" /> </Grid>
      <Grid lg={2}> <Card label="AVG PR merge time " value={35} valueType="Minutes" /> </Grid>
      <Grid lg={2}> <Card label="AVG PR merge time " value={35} valueType="Minutes" /> </Grid>
    </Grid>
  );
};
