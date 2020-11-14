import React from 'react';
import Link from '@material-ui/core/Link';
import Moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

Moment.locale('pt-br')

export default function UserPointsCard() {
    const classes = useStyles();
    return (
      <React.Fragment>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
              CPoints disponíveis
          </Typography>
          <Typography component="p" variant="h4">
              2085
          </Typography>
          <Typography color="textSecondary" className={classes.depositContext}>
              em {Moment().format('ll')}
          </Typography>
          <div>
              <Link color="primary" href="#" onClick={preventDefault}>
                  Trocar pontos por benefícios
              </Link>
          </div>
        </React.Fragment>
    );
}
