import { Header } from "components/header";
import { Outlet } from "react-router";

export const AppLayout = () => {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}