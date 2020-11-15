import React from "react";
import Head from "~/components/Head";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import EmailIcon from "@material-ui/icons/Email";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

import Item from "~/components/Items";

const MockData = [
  { icon: MonetizationOnIcon, title: "Contas e pagamentos" },
  { icon: EmailIcon, title: "Receber conta por Email" },
  { icon: EventAvailableIcon, title: "Alterar data de vencimento" },
  { icon: AutorenewIcon, title: "Cadastrar Débito Automático" },
  { icon: AccountBoxIcon, title: "Alterar Titularidade da Conta" },
  { icon: EmojiEmotionsIcon, title: "Negociar Débitos" }
];

const Services = () => (
  <Container component="main" maxWidth="lg">
    <Head title="Minha Conta" />
    <CssBaseline />
    <div className="mt-3 text-4xl text-bold text-center mb-5">Minha Conta</div>
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
