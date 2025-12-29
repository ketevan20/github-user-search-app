import { useEffect, useState } from "react";
import MainWrapper from "../MainWrapper/MainWrapper"
import axios from 'axios';
import WithLoader from "../WithLoader/WithLoader";

const Content = () => {
    const [requestedUser, setRequestedUser] = useState('octocat')
    const [invalidInput, setInvalidInput] = useState(false);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const MainWrapperWithLoader = WithLoader(MainWrapper);

    let API_URL = `https://api.github.com/users/${requestedUser}`;

    useEffect(() => {
        setLoading(true);
        const FetchData = async () => {
            try {
                const res = await axios.get(API_URL);
                setUser(res.data);
                setLoading(false);
                setInvalidInput(false);
            } catch (err) {
                setInvalidInput(true);
                setLoading(false);
                console.log(err);
            }
        }

        FetchData();
    }, [API_URL]);

    function SearchUser(username: string) {
        setRequestedUser(username);
    }

    return (
        <div className="w-full min-h-screen bg-[rgba(20,29,47,1)] px-8 py-10 flex items-center justify-center max-sm:px-4 max-sm:py-8 max-md:items-start light:bg-[rgba(246,248,255,1)]">
            <MainWrapperWithLoader isLoading={loading} data={user} searchUser={SearchUser} invalidRequest={invalidInput}/>
        </div>
    )
}

export default Content