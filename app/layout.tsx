import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

import Head from 'next/head'

export const metadata = {
    title: "Promptopia - discover & share AI prompts",
    description: "Discover & Share AI Prompts"    
}

const Layout = ({children} : {children: any}) => {
  return (
    <html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Provider session={null}>
            <body>
                <div className='main'>
                    <div className='gradient'/>
                </div>

                <main className="app">
                    <Nav />
                    {children}
                </main>
            </body>
        </Provider>
    </html>
  )
}

export default Layout