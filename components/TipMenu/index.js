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
  }
  //   button: {
  //     margin: theme.spacing(1),
  //     borderRadius: "5em",
  //     borderColor: theme.palette.secondary.main,
  //     borderWidth: 1
  //   }
}));

const Item = ({ children, title }) => {
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
      <div className="border-solid border-2 border-blue-300 rounded-full mb-2">
        <IconButton aria-label="Action Icon">{children}</IconButton>
      </div>
      <Typography textAlign="center" className="text-xs">
        {title}
      </Typography>
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
            <Filter2Icon style={{ color: "#63B3ED" }} className="m-3" />
          </Item>
          <Item title="Comunicar falta de energia">
            <EmojiObjectsIcon style={{ color: "#63B3ED" }} className="m-3" />
          </Item>
          <Item title="Receber conta por email">
            <EmailIcon style={{ color: "#63B3ED" }} className="m-3" />
          </Item>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
