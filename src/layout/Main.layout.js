const MainLayout = (props) => {
    console.log(props);
    return ( 
        <>
            <h1>this is MainLayout</h1>
            <div>
                <h1>
                    {props.children}
                </h1>
            </div>
        </>
     );
}
 
export {MainLayout};