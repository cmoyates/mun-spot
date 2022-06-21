import React from 'react'
import { SunIcon, MoonIcon } from "@heroicons/react/outline"
import { useTheme } from "next-themes";

type Props = {}

const DarkModeToggleButton = (props: Props) => {
    const { theme, setTheme } = useTheme()

    return (
        <div className='cursor-pointer' onClick={()=>{setTheme(theme === 'dark' ? 'light' : 'dark')}}>
            <SunIcon className='w-5 dark:block hidden'/>
            <MoonIcon className='w-5 dark:hidden'/>
        </div>
    )
}

export default DarkModeToggleButton