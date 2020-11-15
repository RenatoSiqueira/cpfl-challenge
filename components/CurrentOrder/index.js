import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  pay: {
    marginTop: theme.spacing(2)
  },
  badge: {
    marginLeft: theme.spacing(3)
  },
  title: {
    marginBottom: theme.spacing(1)
  }
}));

export default function UserPointsCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography
        className={`${classes.title} flex place-content-between items-baseline`}
        component="h2"
        variant="h6"
        color="primary"
        gutterBottom
        style={{ color: "#63B3ED" }}
      >
        <span>Sua conta atual</span>
        <Chip
          className={classes.badge}
          size="small"
          label="Pendente"
          style={{ backgroundColor: "#F6AD55", color: "#fff" }}
        />
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Typography>Mês:</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>Janeiro/2020</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography>Vencimento:</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>10/11/2020</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography>Valor:</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>R$ 85,00</Typography>
        </Grid>
      </Grid>
      <button
        className={`border border-red-500 text-red-500 rounded-md mt-4 text-bold py-3`}
      >
        Pagar
      </button>
    </React.Fragment>
  );
}
