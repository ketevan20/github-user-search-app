import type { GitHubUser } from "../../types/GithubUserType";
import Header from "../Header/Header"
import SearchBar from "../SearchBar/SearchBar"
import UserContainer from "../UserContainer/UserContainer"

type MainWrapperType = {
  data: GitHubUser;
  searchUser: (username: string) => void;
  invalidRequest: boolean;
}

const MainWrapper = ({data, searchUser, invalidRequest}: MainWrapperType) => {
  return (
    <div className="w-full max-w-182.5 flex flex-col gap-10 font-['Space_Mono'] max-sm:gap-8">
        <Header />
        <SearchBar invalidRequest={invalidRequest} searchUser={searchUser}/>
        <UserContainer data={data} invalidRequest={invalidRequest}/>
    </div>
  )
}

export default MainWrapper