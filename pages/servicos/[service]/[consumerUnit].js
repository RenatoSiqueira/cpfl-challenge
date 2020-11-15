import React from "react";
import { useRouter } from "next/router";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ShareIcon from "@material-ui/icons/Share";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Image from "next/image";
import Link from "next/link";

const MockData = [
  {
    value: "217,98",
    venc: "21/12/2020"
  }
];

const Item = ({ value, venc }) => (
  <div className="p-4 w-full h-full">
    <div className="p-8 transition-all duration-150 bg-white rounded-lg shadow-xl ease hover:shadow-2xl">
      <div className="mt-3 mb-6 text-center">
        <h5 className="pb-2 text-4xl font-bold leading-6 text-gray-600">
          R$ {value}
        </h5>
        <p className="mt-1 text-base leading-6 text-gray-500">
          Vencimento: {venc}
        </p>
        <p className="mt-10 text-base leading-6 text-gray-500">
          Código para pagamento
        </p>
        <p className="mt-1 text-base leading-6 text-gray-700 break-words">
          8364000000029179800109003022078321308000020857710
        </p>
        <div style={{ textAlign: "-webkit-center" }}>
          <div className="mt-20 flex flex-col max-w-sm">
            <button className="py-2 rounded-full text-white font-bold bg-blue-600">
              Código Copiado <CheckCircleIcon className="ml-5" />
            </button>
            <button className="mt-2 py-2 font-bold rounded-full text-gray-700 border-solid border-2 border-gray-600">
              <ShareIcon className="mr-2" /> Compartilhar
            </button>
            <Link href="/">
              <button className="mt-8 py-2 font-bold rounded-full text-gray-700 border-solid border-2 border-gray-600">
                <ArrowBackIcon className="mr-2" /> Voltar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const router = useRouter();
  const { service, consumerUnit } = router.query;

  const serviceName = {
    "segunda-via": "Segunda Via",
    "solicitar-religacao": "Solicitar Religação",
    "negociar-debito": "Negociar Débito",
    "trocar-titularidade": "Trocar Titularidade"
  };

  const section = serviceName[service];

  return (
    <div>
      <header className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/images/brand/logo-cpfl-energia.png"
              alt="CPFL"
              width={99}
              height={61}
            />
            <span className="ml-3 text-xl text-gray-700">
              {section?.toUpperCase()}
              <br />
              Unidade Consumidora: {consumerUnit}
            </span>
          </a>
        </div>
      </header>
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-wrap -m-4">
          {MockData.map((e, i) => (
            <Item key={i} {...e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
