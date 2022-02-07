import CustomerHedar from "./customerHedar/CustomerHedar";
import AdminHedar from "./adminHeder/AdminHedar";


const MainLayout = (props) => {
    console.log(props);
    return ( 
        <>
            {props.haslogin==1?<CustomerHedar/>: <AdminHedar/> }

            <div>
                <h1>
                    {props.children}
                </h1>
            </div>
        </>
     );
}
 
export {MainLayout};