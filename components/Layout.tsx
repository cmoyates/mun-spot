import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import DarkModeToggleButton from './DarkModeToggleButton'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  return <div className='
  flex 
  flex-col
  bg-slate-200
  dark:bg-gray-900
  dark:text-white
  min-h-screen
  h-auto
'>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className='
      flex
      flex-row
      items-center
      justify-between
      py-2
      px-4
      sticky 
      top-0 
      z-50
      shadow-lg
      dark:shadow-2xl
      bg-white
      dark:bg-gray-800
    '>
      <Link href="/">
        <h1 className='text-2xl font-semibold cursor-pointer'>MUNSpot</h1>
      </Link>
      <nav className='flex flex-row items-center space-x-4'>
        <Link href="/search">
          <a>Search</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <DarkModeToggleButton/>
      </nav>
    </header>
    <div className='
      sm:py-8
      py-4
      sm:px-96
      px-2
      flex-grow
      flex
      flex-col
      justify-center
    '>
      {children}
    </div>
  </div>
}

export default Layout
