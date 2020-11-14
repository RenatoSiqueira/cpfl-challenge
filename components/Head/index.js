import React from "react";
import Head from "next/head";

const CustomHead = ({ title }) => (
  <Head>
    <title>{title} | CPFL</title>
  </Head>
);

export default CustomHead;
