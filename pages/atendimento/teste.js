import React from "react";

import InfoIcon from "@material-ui/icons/Info";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SearchIcon from "@material-ui/icons/Search";

const MockData = [
  {
    cod: 2020092807,
    type: "Chat",
    dateTime: "28/11/2020 - 16:40"
  },
  {
    cod: 2020209286,
    type: "Chat",
    dateTime: "28/11/2020 - 17:20"
  },
  {
    cod: 2020092509,
    type: "WhatsApp",
    dateTime: "28/11/2020 - 17:33"
  },
  {
    cod: 2020092511,
    type: "E-mail",
    dateTime: "28/11/2020 - 17:53"
  },
  {
    cod: 2020092510,
    type: "E-mail",
    dateTime: "28/11/2020 - 18:10"
  },
  {
    cod: 2020092618,
    type: "Telefone",
    dateTime: "28/11/2020 - 18:52"
  },
  {
    cod: 2020102229,
    type: "Telefone",
    dateTime: "29/11/2020 - 09:33"
  },
  {
    cod: 2020109809,
    type: "Telefone",
    dateTime: "29/11/2020 - 18:33"
  },
  {
    cod: 2020109810,
    type: "Chat",
    dateTime: "30/11/2020 - 08:43"
  },
  {
    cod: 2020109925,
    type: "Chat",
    dateTime: "29/11/2020 - 10:03"
  }
];

const Item = ({ i, cod, type, dateTime }) => (
  <div className="w-full flex bg-gray-100 p-3">
    <div className="text-green-700 text-xl font-bold px-2 mr-1 self-center">
      {i < 10 ? "0" + i : i}
    </div>
    <div className="flex flex-col text-gray-600">
      <span>
        {cod} | <strong>{type}</strong>
      </span>
      <span>{dateTime}</span>
    </div>
    <div className="self-center ml-auto">
      <InfoIcon className="text-gray-500" />
    </div>
  </div>
);

const Search = ({ title, destak = false }) => (
  <div
    className={`w-1/2 text-center text-green-600 font-bold ${
      destak ? "border-green-600 border-b-4" : "border-gray-300 border-b-2"
    } mt-2`}
  >
    <span className="mx-auto">{title}</span>
    <SearchIcon className="float-right mr-2" />
  </div>
);

const Cat = () => (
  <div>
    <div className="flex ">
      <Search title="Comunicação" destak />
      <Search title="Chamados" />
    </div>
    <div className="grid grid-flow-col grid-cols-2 grid-rows-5 gap-1">
      {MockData.map((e, i) => (
        <Item key={i} i={i + 1} {...e} />
      ))}
    </div>
    <div className="flex justify-evenly mt-3 flex-col md:flex-row">
      <button className="bg-transparent hover:bg-red-700 text-red-600 font-bold hover:text-white py-1 px-4 border border-red-500 hover:border-transparent rounded-full">
        <AddCircleIcon className="mr-2" />
        Ocorrências
      </button>
      <button className="bg-transparent hover:bg-green-700 text-green-600 font-bold hover:text-white py-1 px-4 border border-green-500 hover:border-transparent rounded-full">
        <AddCircleIcon className="mr-2" />
        Oportunidade de melhoria
      </button>
      <button className="bg-transparent hover:bg-blue-700 text-blue-600 font-bold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full">
        <AddCircleIcon className="mr-2" />
        Chamado
      </button>
    </div>
  </div>
);

export default Cat;
