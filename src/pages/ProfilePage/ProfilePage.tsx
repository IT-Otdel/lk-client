import {FC, JSX} from "react";
import {Header} from "../../components";
import {Profile, ProfileProjects} from "../../modules";

export const ProfilePage : FC = () : JSX.Element => {
    return (
        <>
            <Header />
            <Profile />
            <ProfileProjects />
        </>
    )
}