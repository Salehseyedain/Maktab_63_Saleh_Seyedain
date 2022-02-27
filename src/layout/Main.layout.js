import CustomerHedar from "./customerHedar/customerHedar";
import AdmiHedar from "./adminHeder/admiHedar";
import style from '../asset/styles/Layout.module.css'

const MainLayout = (props) => {
    console.log(props);
    return ( 
        <div className={style.container}>
            {props.haslogin==1?<CustomerHedar/>: <AdmiHedar/>   }

                   <div className={style.content}> {props.children} </div>

                    {props.haslogin != 1 ?<></> :          
                <div className={style.footerContainer}>
                    <div className={style.boxss}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <p>Trobche - Copyright © 2022 - All Rights Reserved - Made by Saleh Seyedain</p>
                        <span>Logos</span>
                    </div>
                </div>
                }               
        </div>
     );
}
 
export {MainLayout};