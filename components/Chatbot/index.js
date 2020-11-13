import React, { useEffect, useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { useRouter } from "next/router";
import slugify from "slugify";

const Review = ({ steps: { service, unid } }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData({ service: service.value, unid: unid.value });
  }, [service, unid]);

  return (
    <div style={{ width: "100%" }}>
      <h3>Você Deseja:</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Serviço:</strong>
              <br />
              {data.service}
            </td>
          </tr>
          <tr>
            <td>
              <strong>Unid. Consumidora</strong>
              <br />
              {data.unid}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const theme = {
  background: "#f5f8fb",
  headerBgColor: "#4299e1",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#4299e1",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a"
};

const App = () => {
  const router = useRouter();

  const handleEnd = ({ steps, values }) => {
    const slug = slugify(values[0], { lower: true });
    router.push(`servicos/${slug}/${values[1]}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        floating={true}
        handleEnd={handleEnd}
        speechSynthesis={{ enable: true, lang: "pt-br" }}
        headerTitle="Solicitação do Serviço"
        placeholder="Escreva aqui..."
        userDelay="300"
        steps={[
          {
            id: "1",
            message: "Olá, Qual serviço você busca?",
            trigger: "service"
          },
          {
            id: "service",
            options: [
              { value: "Segunda Via", label: "Segunda Via", trigger: "5" },
              {
                value: "Solicitar Religação",
                label: "Solicitar Religação",
                trigger: "5"
              },
              {
                value: "Negociar Débito",
                label: "Negociar Débito",
                trigger: "5"
              },
              {
                value: "Trocar Titularidade",
                label: "Trocar Titularidade",
                trigger: "5"
              }
            ]
          },
          {
            id: "5",
            message: "Qual sua Unidade Consumidora?",
            trigger: "unid"
          },
          {
            id: "unid",
            user: true,
            trigger: "7",
            validator: value => {
              if (isNaN(value)) {
                return "Apenas Números";
              } else if (value < 0) {
                return "Apenas Números";
              }
              return true;
            }
          },
          {
            id: "7",
            message: "Excelente! Vamos confirmar?",
            trigger: "review"
          },
          {
            id: "review",
            component: <Review />,
            asMessage: true,
            trigger: "update"
          },
          {
            id: "update",
            message: "Deseja corrigir alguma informação?",
            trigger: "update-question"
          },
          {
            id: "update-question",
            options: [
              {
                value: "no",
                label: "Não. Está tudo certo.",
                trigger: "end-message"
              },
              {
                value: "yes",
                label: "Sim, quero corrigir.",
                trigger: "update-yes"
              }
            ]
          },
          {
            id: "update-yes",
            message: "Qual informação deseja corrigir?",
            trigger: "update-fields"
          },
          {
            id: "update-fields",
            options: [
              {
                value: "service",
                label: "Alterar Serviço",
                trigger: "update-service"
              },
              {
                value: "unid",
                label: "Unidade Consumidora",
                trigger: "update-unid"
              }
            ]
          },
          {
            id: "update-service",
            update: "service",
            trigger: "7"
          },
          {
            id: "update-unid",
            update: "unid",
            trigger: "7"
          },
          {
            id: "end-message",
            message: "Aguarde...",
            end: true
          }
        ]}
      />
    </ThemeProvider>
  );
};

export default App;
