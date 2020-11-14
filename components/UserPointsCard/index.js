import React from "react";
import Link from "@material-ui/core/Link";
import Moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  },
  points: {
    color: 'rgb(0 0 0 / 75%)',
    fontWeight: 800
  }
});

Moment.locale("pt-br");

export default function UserPointsCard() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="flex flex-row md:flex-col place-content-between">
        <Typography
          component="h2"
          variant="h6"
          style={{ color: "#63B3ED" }}
          gutterBottom
        >
          <strong>CP</strong>oints disponíveis
        </Typography>
        <Typography component="p" variant="h4" className={classes.points}>
          2085
        </Typography>
      </div>
      <Typography
        className={classes.depositContext}
      >
        em {Moment().format("ll")}
      </Typography>
      <div className="underline mt-1">
        <Link href="#" onClick={preventDefault}>
          Trocar pontos por benefícios
        </Link>
      </div>
    </React.Fragment>
  );
}
