import React from "react";
import Icon from "@material-ui/core/Icon";
import { Height } from "@material-ui/icons";

const MockData = [
  { icon: "content_copy", title: "Segunda Via", desc: "Solicite sua energia" },
  { icon: "power_off", title: "Está sem Energia?", desc: "Informe sobre falta de energia" },
  { icon: "mail", title: "Conta por E-mail", desc: "Cadestre seu email" },
  { icon: "date_range", title: "Agendar Atendimento", desc: "Agende seu atendimento presencial" },
  { icon: "change_history", title: "Alteração de Titular", desc: "Troque o titular da conta" },
  { icon: "power", title: "Religação", desc: "Solicite o restabelecimento do fornecimento de energia" },
  { icon: "payments", title: "Débito Automático", desc: "Cadastre sua conta em débito automático" },
  { icon: "miscellaneous_services", title: "Outros serviços", desc: "Lista de mais serviços" }
];

const Item = ({ icon, title, desc }) => (
  <div className="p-4 w-full md:w-1/3 h-full">
    <div className="p-16 transition-all duration-150 bg-white rounded-lg shadow-xl ease hover:shadow-2xl">
      <div className="relative inline-flex items-center justify-center overflow-hidden text-blue-500">
        <Icon fontSize="large"> {icon} </Icon>
      </div>
      <div className="mt-3 mb-6">
        <h5 className="pb-2 text-xl font-bold leading-6 text-gray-600">
          {title}
        </h5>
        <p className="mt-1 text-base leading-6 text-gray-500">{desc}</p>
      </div>
    </div>
  </div>
);

const QuickAccess = () => (
  <div className="pt-10 md:pt-2 text-center text-gray-700 bg-gray-100 bg-cover pb-10">
    <div className="container relative max-w-2xl px-5 pt-3 mx-auto sm:py-12 lg:px-0">
      <h2 className="mb-3 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-4xl sm:text-center">
        Acesso <span className="inline-block text-blue-500">Rápido</span>
      </h2>
      <p className="mt-1 text-xl opacity-75 text-center">
        Serviços Essenciais de acesso direto.
      </p>
    </div>
    <div className="container px-5 py-2 mx-auto">
      <div className="flex flex-wrap -m-4">
        {MockData.map((e, i) => (
          <Item key={i} {...e} />
        ))}
      </div>
    </div>
  </div>
);

export default QuickAccess;
