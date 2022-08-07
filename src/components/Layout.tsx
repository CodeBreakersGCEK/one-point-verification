import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({title,children}:any) => {
  return (
    <div>
        <div>
        <Head>
        <title>{title}</title>
      </Head>
      <nav>
      <Navbar/>
      </nav>
      <main className='px-[6rem]' >
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
        </div>
      
    </div>
  )
}

export default Layout