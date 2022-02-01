import { MainLayout } from "../../../layout/Main.layout";

const PublicRoute = (props) => {
    const homePage = props.home
    const layout = props.hasLayout

    return ( 
        <>

        {layout ? (
            <MainLayout>{homePage}</MainLayout>
        ) : homePage
        }
            
            
        </>
     );
}
 
export  {PublicRoute};