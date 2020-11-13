import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MockData = [
    { 
      title:'Institucional',
      items:['Quem Somos', 'Energias Sustentáveis', 'Governança Corporativa', 'Trabalhe conosco', 'Fornecedores', 'Relatório Anual', 'Ética CPFL']
    },
    { 
      title:'Atendimento',
      items:['Serviços Online', 'Para Você', 'Para Grandes Empresas', 'Credenciados', 'Informações ao Consumidor', 'Investidores', 'Imprensa']
    },
    {
      title:'Fale Conosco',
      items:['Serviços Online', 'Dúvidas Frequentes', 'Facebook', 'Twitter', 'Informações ao Consumidor', 'Ouvidoria']
    },
]

const BlockItems = ({title, items}) => (
  <nav className="col-span-1 md:col-span-1 lg:col-span-2">
  <p className="uppercase text-gray-600 text-xs tracking-wider font-semibold mb-3">{title}</p>
  {
    items?.map((e,i) => (
      <Link href='/'>
        <a 
          key={i} 
          className="flex mb-3 md:mb-2 text-sm font-medium text-gray-800 hover:text-purple-800 transition-colors duration-100 ease-in">
          {e}
        </a>
      </Link>
    ))
  }
</nav>
)

const Footer = () => (
  <footer className="container mx-auto py-12 px-4">
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-11 gap-10 lg:gap-20 mb-3">
    <div className="col-span-3">
      <Link href='/' >
      <a className="flex items-center">
        <Image 
          src='/images/brand/logo-cpfl-energia.png'
          alt='CPFL'
          width={100}
          height={80}
        />
        <span className="sr-only">CPFL</span>
      </a>
     </Link>
    </div>
    {
      MockData.map((e, i) => (
        <BlockItems key={i} {...e} />
      ))
    }
  </div>
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-200 pt-10 mt-10">
    <p className="text-gray-700 font-medium text-xs text-left mb-2 md:mb-0">
      Todos os direitos reservados - Política de Privacidade - Termos de Serviço
    </p>
    <p className="text-gray-700 font-medium text-xs text-left mb-0 md:mb-0">Copyright &copy; 2020 CPFL</p>
  </div>
</footer>

)

export default Footer
