import Nav from '../components/nav';
import Footer from '../components/footer';
import {Outlet} from 'react-router-dom';

export default function MainLayout({cart}){
    return(
        <>
        <Nav cart={cart}/>
        <main>
           <Outlet/>
        </main>
        <Footer/>
        </>
    )
}