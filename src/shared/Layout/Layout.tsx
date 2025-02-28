// не нужен
import { ReactNode } from 'react'
import './Layout.css'
import { Main } from '../Main/Main'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

// пропсы не используются
interface ILayoutProps{
    children?: ReactNode
}
// пропсы не используются
export function Layout(props:ILayoutProps){

    return (
        <div id='Layout'>
            <Header></Header>
            <Main>
                <Outlet/>
            </Main>
            <Footer></Footer>
        </div>
    )
}