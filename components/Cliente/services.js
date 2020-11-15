import React from "react";
import Head from "~/components/Head";

import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Filter2Icon from "@material-ui/icons/Filter2";

import Item from "~/components/Items";

const MockData = [
  { icon: Filter2Icon, title: "Nova Ligação de Energia" },
  { icon: Filter2Icon, title: "Religação de Energia" },
  { icon: Filter2Icon, title: "Informar falta de Energia" },
  { icon: Filter2Icon, title: "Auto-leitura" },
  { icon: Filter2Icon, title: "Desligar Energia" },
  { icon: Filter2Icon, title: "2ª Via de Conta" }
];

const Services = () => (
  <Container component="main" maxWidth="lg">
    <Head title="Serviços" />
    <CssBaseline />
    <div className="mt-3 text-4xl text-bold text-center  mb-5">Serviços</div>
    <div className="md:grid md:gap-4 md:grid-cols-3">
      {MockData.map((e, i) => (
        <Item title={e.title}>
          <e.icon className="m-3" style={{ color: "#63B3ED" }} />
        </Item>
      ))}
    </div>
  </Container>
);

export default Services;
