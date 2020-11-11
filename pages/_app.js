import React from 'react'
import Head from 'next/head'
import '../css/styles.css'

const App = ({ Component, pageProps }) => {
    return (
        <>
        <Head>
            <title>Início | CPFL</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        </Head>
        <Component {...pageProps}/>
        </>
    )
}

export default App