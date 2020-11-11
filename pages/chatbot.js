import React, { Component } from "react";
import ChatBot from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

class Review extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: '',
        service: '',
        unid: '',
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { name, service, unid } = steps;
  
      this.setState({ name, service, unid });
    }
  
    render() {
      const { name, service, unid } = this.state;
      return (
        <div style={{ width: '100%' }}>
          <h3>Solicitação</h3>
          <table>
            <tbody>
              <tr>
                <td>Nome: {name.value}</td>
              </tr>
              <tr>
                <td>Serviço: {service.value}</td>
              </tr>
              <tr>
                <td>Unidade Consumidora: {unid.value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  Review.propTypes = {
    steps: PropTypes.object,
  };
  
  Review.defaultProps = {
    steps: undefined,
  };

const theme = {
    background: '#f5f8fb',
    // fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

const App = () => {
    const handleEnd = ({ steps, values }) => {
        // console.log(steps);
        // console.log(values);
        alert(`Chat handleEnd callback! Number: ${values[0]}`);
      }

  return (
      <ThemeProvider theme={theme}>
      <ChatBot
        handleEnd={handleEnd}
        headerTitle="Solicitação do Serviço"
        speechSynthesis={{ enable: true, lang: 'pt-BR' }}
        steps={[
            {
              id: '1',
              message: 'Qual seu nome?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Olá {previousValue}! Qual serviço você busca?',
              trigger: 'service',
            },
            {
              id: 'service',
              options: [
                { value: 'Segunda Via', label: 'Segunda Via', trigger: '5' },
                { value: 'Solicitar Religação', label: 'Solicitar Religação', trigger: '5' },
                { value: 'Negociar Débito', label: 'Negociar Débito', trigger: '5' },
                { value: 'Trocar Titularidade', label: 'Trocar Titularidade', trigger: '5' },
              ],
            },
            {
              id: '5',
              message: 'Qual sua Unidade Consumidora?',
              trigger: 'unid',
            },
            {
              id: 'unid',
              user: true,
              trigger: '7',
              validator: (value) => {
                if (isNaN(value)) {
                  return 'Apenas Números';
                } else if (value < 0) {
                  return 'Apenas Números';
                }  
                return true;
              },
            },
            {
              id: '7',
              message: 'Excelente! Vamos confirmar?',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: 'Deseja corrigir alguma informação?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'yes', label: 'Sim', trigger: 'update-yes' },
                { value: 'no', label: 'Não', trigger: 'end-message' },
              ],
            },
            {
              id: 'update-yes',
              message: 'Qual informação deseja corrigir?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Nome', trigger: 'update-name' },
                { value: 'service', label: 'Serviço', trigger: 'update-service' },
                { value: 'unid', label: 'Unidade Consumidora', trigger: 'update-unid' },
              ],
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: '7',
            },
            {
              id: 'update-service',
              update: 'service',
              trigger: '7',
            },
            {
              id: 'update-unid',
              update: 'unid',
              trigger: '7',
            },
            {
              id: 'end-message',
              message: 'Obrigado. Seus dados foram salvos.',
              end: true,
            },
          ]}
        />
    </ThemeProvider>
   );
 }

export default App;