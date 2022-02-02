import { MainLayout } from "../../../layout/Main.layout";

const PrivateRoteute = (props) => {
    const Page = props.page
    const haslogin = props.haslogin

    return (
        <>


                <MainLayout haslogin={0}>{Page}</MainLayout>



        </>
    );
}

export {PrivateRoteute}