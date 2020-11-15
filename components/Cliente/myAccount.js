import React from "react";
import Head from "~/components/Head";

import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Filter2Icon from "@material-ui/icons/Filter2";

import Item from "~/components/Items";

const MockData = [
  { icon: Filter2Icon, title: "Contas e pagamentos" },
  { icon: Filter2Icon, title: "Receber conta por Email" },
  { icon: Filter2Icon, title: "Alterar data de vencimento" },
  { icon: Filter2Icon, title: "Cadastrar Débito Automático" },
  { icon: Filter2Icon, title: "Alterar Titularidade da Conta" },
  { icon: Filter2Icon, title: "Negociar Débitos" }
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
