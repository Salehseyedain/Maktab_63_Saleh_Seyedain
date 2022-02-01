import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {PublicRoute} from'./components/Public/PubliceRoute.component'
import {Home} from '../pages/Home/Home.page'
import { Dashboard } from '../pages/Dashboard/Dashboard.page';

const AppRoute = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<PublicRoute hasLayout={true} home={<Home/>}/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
     );
}
 
export {AppRoute};