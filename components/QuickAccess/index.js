import React from "react";

const MockData = [
  { icon: "", title: "Segunda Via", desc: "Texto" },
  { icon: "", title: "Está sem Energia?", desc: "texto" },
  { icon: "", title: "Atualizar Cadastro", desc: "Texto" },
  { icon: "", title: "Agendar Atendimento", desc: "Texto" },
  {
    icon: "",
    title: "Conta Por Email",
    desc: "Deseja receber sua fatura por e-mail?"
  },
  {
    icon: "",
    title: "Alteração de Titular",
    desc: "Deseja receber sua fatura por e-mail?"
  }
];

const Item = ({ title, desc }) => (
  <div className="p-4 w-full md:w-1/3">
    <div className="p-16 transition-all duration-150 bg-white rounded-lg shadow-xl ease hover:shadow-2xl">
      <div className="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden text-white rounded-full">
        <svg
          className="relative w-12 h-12 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
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
  <div className="pb-1 pt-10 md:pt-2 text-center text-gray-700 bg-gray-100 bg-cover pb-10">
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
