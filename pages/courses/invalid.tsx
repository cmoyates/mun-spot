import React from 'react'
import Layout from '../../components/Layout'

type Props = {}

const Invalid = (props: Props) => {
  return (
    <Layout title={"Invalid Course"}>
        <div className='
            flex
            flex-col
            justify-start
            items-center
        '>
            <h2 className='text-3xl'>This course doesn't exist</h2>
        </div>
    </Layout>
  )
}

export default Invalid