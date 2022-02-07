import { MainLayout } from "../../../layout/Main.layout";

const PrivateRoteute = (props) => {
    const Page = props.page
    const haslogin = props.haslogin

    return (
        <>


                <MainLayout haslogin={haslogin}>{Page}</MainLayout>



        </>
    );
}

export {PrivateRoteute}