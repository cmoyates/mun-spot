import React, { useContext } from 'react'
import {SunIcon, MoonIcon} from "@heroicons/react/outline"
import { useTheme } from "next-themes";

type Props = {}

const DarkModeToggleButton = (props: Props) => {

    const { theme, setTheme } = useTheme()

    return (
        <div className='cursor-pointer' onClick={()=>{setTheme(theme === 'dark' ? 'light' : 'dark')}}>
            {theme === 'dark' ? <SunIcon className='w-5'/> : <MoonIcon className='w-5'/>}
        </div>
    )
}

export default DarkModeToggleButton