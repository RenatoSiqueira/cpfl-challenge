import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Filter2Icon from "@material-ui/icons/Filter2";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  box: {
    flex: 1
  },
  button: {
    margin: theme.spacing(1),
    borderRadius: "5em",
    borderColor: theme.palette.secondary.main,
    borderWidth: 1
  }
}));

const Item = ({ children, title }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={4}
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ textAlign: "center" }}
    >
      <IconButton color="inherit" className={classes.button}>
        {children}
      </IconButton>
      <Typography textAlign="center">{title}</Typography>
    </Grid>
  );
};

export default function UserPointsCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        spacing={1}
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.box}
      >
        <Grid spacing={2} container justify="center" alignItems="flex-start">
          <Item title="2ª Via de Conta">
            <Filter2Icon fontSize="large" />
          </Item>
          <Item title="Comunicar falta de energia">
            <EmojiObjectsIcon fontSize="large" />
          </Item>
          <Item title="Receber conta por email">
            <EmailIcon fontSize="large" />
          </Item>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
