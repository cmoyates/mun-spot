import React from 'react'
import Layout from '../components/Layout'

type Props = {}

const about = (props: Props) => {
  return (
    <Layout title="About">
        <div className='
            flex
            flex-col
            justify-center
            items-center
            h-full
        '>
            The about page will go here.
        </div>
    </Layout>
  )
}

export default about