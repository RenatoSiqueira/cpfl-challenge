import React from 'react'

const Item = ({category, title, text}) => (
    <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/>
            <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">{category}</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
    </div>
)

const FastAccess = () => (
    <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Serviços Essenciais</h1>
                    <div className="h-1 w-20 bg-blue-500 rounded"></div>
                </div>
                <p className="lg:w-1/2 w-full leading-relaxed text-base">Algum texto sobre...</p>
            </div>
            <div className="flex flex-wrap -m-4">
                <Item category="CONTA" title="Segunda Via" text="" />
                <Item category="ATENDIMENTO" title="Agendar Presencial" text="" />
                <Item category="DADOS" title="Alteração de Titular" text="" />
                <Item category="LOCAIS" title="Locais de Pagamento" text="" />
                <Item category="ATENDIMENTO" title="Religação" text="" />
                <Item category="CONTA" title="Débito Automático" text="" />
                <Item category="ATENDIMENTO" title="Sem Energia?" text="" />
                <Item category="CONTA" title="Cancelamento de Contrato" text="" />
                <Item category="CPFL" title="Dúvidas Frequentes" text="" />
            </div>
        </div>
    </section>
)

export default FastAccess
