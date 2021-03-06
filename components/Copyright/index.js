import React from "react";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Copyright = () => {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      textAlign="center"
      align="center"
    >
      {"Copyright © "}
      {new Date().getFullYear()}{" "}
      <Link color="inherit" href="http://cpfl-challenge.vercel.app/">
        CPFL.
      </Link>
    </Typography>
  );
};

export default Copyright;
