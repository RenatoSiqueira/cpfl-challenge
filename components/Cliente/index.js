import React from "react";
import Head from "~/components/Head";
import Link from "next/link";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import UserPointsCard from "~/components/UserPointsCard";
import Chart from "~/components/Chart";
import CurrentOrder from "~/components/CurrentOrder";
import TipMenu from "~/components/TipMenu";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingRight: 24
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 230
  },
  pointsPaper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      height: 230
    }
  }
}));

const Dash = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      <Head title="Meu Painel" />
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} md={6}>
          <Link href="/cliente/cashback">
            <Paper className={classes.pointsPaper}>
              <UserPointsCard />
            </Paper>
          </Link>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={fixedHeightPaper}>
            <CurrentOrder />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper className={fixedHeightPaper}>
            <TipMenu />
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper className={fixedHeightPaper}>
            <Chart />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Dash;
