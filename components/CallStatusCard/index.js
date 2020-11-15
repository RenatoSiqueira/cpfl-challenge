import React from "react";
import Link from "@material-ui/core/Link";
import Moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  },
  attendance: {
    marginBottom: 5,
    color: 'rgb(0 0 0 / 75%)',
    fontWeight: 800
  }
});

Moment.locale("pt-br");

export default function UserPointsCard({ onClick }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="flex flex-row md:flex-col place-content-between">
        <Typography
          component="h2"
          variant="h6"
          style={{ color: "#ff1744", marginBottom: "20px" }}
          gutterBottom
        >
          Status de Atendimento
        </Typography>
        <Typography component="p" variant="h5" className={classes.attendance}>
          4 atendimentos pendentes
        </Typography>
      </div>
      <Typography
        className={classes.depositContext}
      >
        em {Moment().format("ll")}
      </Typography>
      <div className="underline mt-1">
        <Link href="#" onClick={onClick}>
          Visualizar atendimentos pendentes
        </Link>
      </div>
    </React.Fragment>
  );
}
