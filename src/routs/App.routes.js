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
                <Route path='/shelvs' element={<PublicRoute haslogin={true} page={<Shelvs/>}/>}/>
                <Route path='/commoditi' element={<PublicRoute haslogin={true} page={<Commoditi/>}/>}/>
                <Route path='/basket' element={<PublicRoute haslogin={true} page={<Basket/>}/>}/>
                <Route path='/shoping' element={<PublicRoute haslogin={true} page={<Shoping/>}/>}/>
                <Route path='/resulte' element={<PublicRoute haslogin={true} page={<Resulte/>}/>}/>
                <Route path='/login' element={<PublicRoute haslogin={true} page={<Login/>}/>}/>  {/* protected */}
                <Route path='/commodities' element={<PrivateRoteute haslogin={true} page={<Commodities/>}/>}/>
                <Route path='/listOfAssets' element={<PrivateRoteute haslogin={true} page={<ListOfAssets/>}/>}/>
                <Route path='/orders' element={<PrivateRoteute haslogin={false} page={<Orders/>}/>}/>
            </Routes>
        </BrowserRouter>
     );
}
 
export {AppRoute};