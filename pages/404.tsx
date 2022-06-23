import React from 'react'
import Layout from "../components/Layout";

type Props = {}

const Error404 = (props: Props) => {
  return (
    <Layout title="Page not Found">
        <h2 className='text-4xl text-center font-semibold'>
            Error 404: Page not Found
        </h2>
    </Layout>
  )
}

export default Error404