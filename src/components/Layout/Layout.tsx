import { ReactNode } from 'react'
import './Layout.css'

interface ILayoutProps{
    children: ReactNode
}

export function Layout(props:ILayoutProps){

    return (
        <>
            {props.children}
        </>
    )
}