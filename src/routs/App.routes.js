import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import {PublicRoute} from'./components/Public/PubliceRoute.component'
import {PrivateRoteute} from "./components/Private/PrivateRoute";
import {Home} from '../pages/Home/Home.page'
import Shelvs from "../pages/Shelvs/Shelvs";
import Commoditi from "../pages/Commoditi/Commoditi";
import Basket from "../pages/Basket/Basket";
import Shoping from "../pages/Shoping/Shoping";
import Resulte from "../pages/Resulte/Resulte";
import Login from "../pages/Login/Login";
import Commodities from "../pages/ControlPanel/Commodities/Commodities";
import ListOfAssets from "../pages/ControlPanel/ListOfAssets/ListOfAssets";
import Orders from "../pages/ControlPanel/Orders/Orders";

const AppRoute = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PublicRoute haslogin={1} page={<Home/>}/>}/>
                <Route path='/Shelvs' element={<PublicRoute haslogin={true} page={<Shelvs/>}/>}/>
                <Route path='/Commoditi' element={<PublicRoute haslogin={true} page={<Commoditi/>}/>}/>
                <Route path='/Basket' element={<PublicRoute haslogin={true} page={<Basket/>}/>}/>
                <Route path='/Shoping' element={<PublicRoute haslogin={true} page={<Shoping/>}/>}/>
                <Route path='/Resulte' element={<PublicRoute haslogin={true} page={<Resulte/>}/>}/>
                <Route path='/Login' element={<PublicRoute haslogin={true} page={<Login/>}/>}/>
                <Route path='/Commodities' element={<PrivateRoteute haslogin={true} page={<Commodities/>}/>}/>
                <Route path='/ListOfAssets' element={<PrivateRoteute haslogin={true} page={<ListOfAssets/>}/>}/>
                <Route path='/Orders' element={<PrivateRoteute haslogin={0} page={<Orders/>}/>}/>
            </Routes>
        </BrowserRouter>
     );
}
 
export {AppRoute};