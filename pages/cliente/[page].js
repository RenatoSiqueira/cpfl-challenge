import React from "react";
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Copyright from "~/components/Copyright";
import MenuClient from "~/components/MenuClient";
import Dashboard from "~/components/Cliente";
import Services from "~/components/Cliente/services";
import MyAccount from "~/components/Cliente/myAccount";
import Cashback from "~/components/Cliente/cashback";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  }
}));

export default function painel() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MenuClient />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container component="main" maxWidth="lg">
          {router.query.page === "painel" && <Dashboard />}
          {router.query.page === "myAccount" && <MyAccount />}
          {router.query.page === "services" && <Services />}
          {router.query.page === "cashback" && <Cashback />}
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
