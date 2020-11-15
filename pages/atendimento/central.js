import React from "react";
import { useRouter } from "next/router";
import Head from "~/components/Head";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import UserPointsCard from "~/components/UserPointsCard";
import Copyright from "~/components/Copyright";
import ChartCall from "~/components/ChartCall";
import ChartDebit from "~/components/ChartDebit";
import CurrentOrder from "~/components/CurrentOrder";
import TipMenu from "~/components/TipMenu";
import MenuCentral from "~/components/MenuCentral";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
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
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
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

export default function painel() {
  const classes = useStyles();
  const router = useRouter();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <Head title="Central de Atendimento" />
      <CssBaseline />
      <MenuCentral />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container component="main" maxWidth="lg">
          <Grid container spacing={3} className={classes.container}>
            <Grid item xs={12} md={6}>
              <Paper className={classes.pointsPaper}>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper className={fixedHeightPaper}>
                <ChartDebit />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper className={fixedHeightPaper}>
                
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper className={fixedHeightPaper}>
                <ChartCall />
              </Paper>
            </Grid>
          </Grid>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
