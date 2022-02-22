
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import {PATHS} from '../configs/routes.config';
import {PrivateRoteute,  PublicRoute ,Protected} from './components';
import * as Page from '../pages';


const AppRoute = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PublicRoute haslogin={1} page={<Page.Home/>}/>}/>
                <Route path={PATHS.SHELVS} element={<PublicRoute haslogin={1} page={<Page.Shelvs/>}/>}/>
                <Route path={PATHS.COMMODITI} element={<PublicRoute haslogin={1} page={<Page.Commoditi/>}/>}/>
                <Route path={PATHS.BASKET} element={<PublicRoute haslogin={1} page={<Page.Basket/>}/>}/>
                <Route path={PATHS.SHOPING} element={<PublicRoute haslogin={1} page={<Page.Shoping/>}/>}/>
                <Route path={PATHS.RESULTE} element={<PublicRoute haslogin={1} page={<Page.Resulte/>}/>}/>
                <Route path={PATHS.LOGIN} element={<Protected  page={<Page.Login/>}/>}/>
                <Route path={PATHS.COMMODITIES} element={<PrivateRoteute haslogin={0} page={<Page.Commodities/>}/>}/>
                <Route path={PATHS.LISTOFASSETS} element={<PrivateRoteute haslogin={0} page={<Page.ListOfAssets/>}/>}/>
                <Route path={PATHS.ORDERS} element={<PrivateRoteute haslogin={0} page={<Page.Orders/>}/>}/>
                <Route path={PATHS.Resulte} element={<PrivateRoteute haslogin={0} page={<Page.Resulte/>}/>}/>
                <Route path={PATHS.Nahayi} element={<PublicRoute haslogin={1} page={<Page.Nahayi/>}/>}/>
            </Routes>
        </BrowserRouter>
     );
}
 
export {AppRoute};