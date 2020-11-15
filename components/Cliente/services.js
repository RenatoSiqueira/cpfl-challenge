import React from "react";
import Head from "~/components/Head";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AddBoxIcon from "@material-ui/icons/AddBox";
import RestoreIcon from "@material-ui/icons/Restore";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import MenuBookIcon from "@material-ui/icons/MenuBook";

import Item from "~/components/Items";

const MockData = [
  { icon: AddBoxIcon, title: "Nova Ligação de Energia" },
  { icon: RestoreIcon, title: "Religação de Energia" },
  { icon: AddLocationIcon, title: "Informar falta de Energia" },
  { icon: GpsFixedIcon, title: "Auto-leitura" },
  { icon: EmojiObjectsIcon, title: "Desligar Energia" },
  { icon: MenuBookIcon, title: "2ª Via de Conta" }
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
