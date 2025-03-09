import './Layout.css'
import { Main } from '../Main/Main'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Outlet } from 'react-router-dom'


export function Layout(){

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