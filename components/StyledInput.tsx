import React from 'react'

type Props = {
    query: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>
}

const StyledInput = (props: Props) => {
  return (
    <div>
        <input 
            className='
                w-96
                px-2
                py-1
                text-xl
                rounded-sm
                shadow-md
            '
            onChange={(e) => props.setQuery(e.target.value)}
            value={props.query}
            onSubmit={()=>console.log("sdfsdf")}
        />
    </div>
  )
}

export default StyledInput