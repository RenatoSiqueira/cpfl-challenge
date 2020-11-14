import React from "react";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Head from "~/components/Head";

import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Copyright from "~/components/Copyright";

const MockData = [
  {
    img: "uber.png",
    title: "Cupom de 10% de desconto no Uber Eats",
    point: 4000
  },
  {
    img: "ifood.png",
    title: "Cupom de 12% de desconto do Ifood",
    point: 5000
  },
  {
    img: "gplay.png",
    title: "R$ 10,00 em créditos na Google Play",
    point: 4000
  },
  {
    img: "amazon.png",
    title: "Cupom de 5% de desconto na Amazon",
    point: 4200
  }
];

const Total = ({ points }) => (
  <div
    className="flex sm:place-content-center bg-white rounded-lg mx-auto place-items-center p-2 py-4 shadow-lg mb-3 w-full"
    style={{ color: "#63B3ED" }}
  >
    <span className="text-xl ml-2">
      <strong>CP</strong>oints disponíveis
    </span>
    <span className="text-4xl mx-auto sm:mx-10">{points}</span>
  </div>
);

const Item = ({ img, title, point }) => (
  <div className="flex flex-col bg-white rounded-lg mx-auto place-items-center p-2 py-4 shadow-lg mb-3 w-full">
    <div className="w-full text-right" style={{ color: "#63B3ED" }}>
      {point} CPoints
    </div>
    <div className="flex flex-row mt-1">
      <div className="mr-6 ml-2">
        <Image
          src={`/images/cashback/${img}`}
          alt="Image"
          width={50}
          height={50}
        />
      </div>
      <Typography className="text-xs self-center">{title}</Typography>
    </div>
  </div>
);

const Cashback = () => (
  <Container component="main" maxWidth="lg">
    <Head title="Benefícios" />
    <CssBaseline />
    <div className="mt-3 text-4xl text-bold text-center text-blue-400 mb-5">
      Benefícios
    </div>
    <Total points={2089} />
    <div className="md:grid md:gap-4 md:grid-cols-3">
      {MockData.map((e, i) => (
        <Item key={i} {...e} />
      ))}
    </div>
    <Box mt={8}>
      <Copyright />
    </Box>
  </Container>
);

export default Cashback;
