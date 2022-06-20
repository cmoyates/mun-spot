import React, { useContext } from 'react'
import { DarkModeContext } from '../contexts/DarkModeContext';
import {SunIcon, MoonIcon} from "@heroicons/react/outline"

type Props = {}

const DarkModeToggleButton = (props: Props) => {

    const {darkMode, setDarkMode} = useContext(DarkModeContext);

    return (
        <div className='cursor-pointer' onClick={()=>{setDarkMode(!darkMode)}}>
            {darkMode ? <SunIcon className='w-5'/> : <MoonIcon className='w-5'/>}
        </div>
    )
}

export default DarkModeToggleButton