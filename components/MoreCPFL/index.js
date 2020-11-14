import React from "react";
import Image from "next/image";
import Link from "next/link";

const MockData = [
  {
    img: "item-cafefilosofico.jpg",
    title: "Instituto CPFL",
    desc: "Conheça todos as ações do Grupo CPFL"
  },
  {
    img: "guardiao-da-vida.jpg",
    title: "Guardião da Vida",
    desc: "Evite os Riscos: A informação é a melhor Proteção"
  },
  {
    img: "ourpeople.png",
    title: "Nossa Gente",
    desc:
      "Conheça nossos programas de valorização da diversidade e desenvolvimento da ética."
  },
  {
    img: "relatorios.jpg",
    title: "Relatório Anual",
    desc:
      "A CPFL Energia apresenta suas principais informações econômicas, sociais e ambientais."
  },
  {
    img: "fornecedores.jpg",
    title: "Fornecedores",
    desc: "Portal para fornecedores do Grupo CPFL Energia"
  },
  {
    img: "sac-4.0.jpg",
    title: "Atendimento",
    desc: "Confira os canais de atendimento da CPFL Energia"
  }
];

const Item = ({ img, title, desc }) => (
  <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
    <div className="relative flex-shrink-0">
      <Image
        className="object-cover w-full h-56"
        src={`/images/${img}`}
        alt="Sobre"
        width={392}
        height={224}
      />
      <span className="absolute bottom-0 right-0 inline-flex items-center px-3 py-1 mr-4 -mb-3 text-xs font-medium leading-tight text-gray-800 bg-gray-100 border rounded-full">
        12 reviews
      </span>
    </div>
    <div className="flex flex-col justify-between flex-1">
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div>
          <Link href="/">
            <a className="block text-xl font-semibold leading-7 text-gray-900">
              {title}
            </a>
          </Link>
          <p className="mt-3 text-base leading-6 text-gray-500">{desc}</p>
        </div>
        <p className="mt-3 text-sm font-medium leading-5">
          <Link href="/">
            <a className="inline-block">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-blue-800 bg-blue-100 rounded-full">
                Saiba Mais
              </span>
            </a>
          </Link>
        </p>
      </div>
    </div>
  </div>
);

const MoreCPFL = () => (
  <div className="py-12 bg-gray-100">
    <div className="container flex flex-col items-center justify-center px-4 pt-2 pb-8 mx-auto sm:px-6 lg:px-8">
      <h2 className="mb-3 text-4xl font-extrabold leading-10 tracking-tight text-left text-gray-900 sm:text-5xl sm:leading-none md:text-4xl sm:text-center">
        Conheça a <span className="inline-block text-blue-500">CPFL</span>
      </h2>
      <div className="grid max-w-lg gap-5 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3 md:max-w-none">
        {MockData.map((e, i) => (
          <Item key={i} {...e} />
        ))}
      </div>
    </div>
  </div>
);

export default MoreCPFL;
