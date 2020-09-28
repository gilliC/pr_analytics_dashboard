import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Card } from "../../../common/card";
import { ReversedCard } from "../../../common/reversedCard";
import data from "../../../../data.json";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});

const getAvgPrDuration = () => {
  const array =
    data && data.merged_to_duration
      ? Object.values(data.merged_to_duration)
      : null;
  if (!array) {
    return 0;
  }
  const avg = array.reduce((a, b) => a + b) / array.length;
  return avg.toFixed(2);
};

export const MainNumbersRow = (props) => {
  const classes = useStyles();
  const successPrsCount =
    data && data.success_prs ? data.success_prs.length : 0;
  const failedPrsCount = data && data.failed_prs ? data.failed_prs.length : 0;
  const avgPrDuration = getAvgPrDuration();
  return (
    <Grid item md={12} className={classes.container}>
      <Grid item md={2}>
        <Card
          label="Merged Successfuly"
          value={successPrsCount}
          valueType="PRs"
        />
      </Grid>
      <Grid item md={2}>
        <Card label="Merge failed" value={failedPrsCount} valueType="PRs" />
      </Grid>
      <Grid item md={2}>
        <ReversedCard
          label="AVG PR merge time "
          value={avgPrDuration}
          valueType="Minutes"
        />
      </Grid>
      <Grid item md={2}>
        {/* <Card label="AVG PR merge time " value={35} valueType="Minutes" /> */}
      </Grid>
      <Grid item md={2}>
        {/* <Card label="AVG PR merge time " value={35} valueType="Minutes" /> */}
      </Grid>
      <Grid item md={2}>
        <Card label="AVG PR merge time " value={35} valueType="Minutes" />
      </Grid>
    </Grid>
  );
};
