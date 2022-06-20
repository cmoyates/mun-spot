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
                rounded-md
                shadow-md
                dark:bg-gray-700
            '
            onChange={(e) => props.setQuery(e.target.value)}
            value={props.query}
        />
    </div>
  )
}

export default StyledInput