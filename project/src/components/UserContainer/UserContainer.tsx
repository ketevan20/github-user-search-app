import type { GitHubUser } from "../../types/GithubUserType";
import NotFound from "../NotFound/NotFound";
import UserHeader from "../UserHeader/UserHeader"
import UserInfo from "../UserInfo/UserInfo"
import UserStats from "../UserStats/UserStats"
// import NotFound from "../NotFound/NotFound"

type UserContainerType = {
  data: GitHubUser;
  invalidRequest: boolean;
}

const UserContainer = ({ data, invalidRequest }: UserContainerType) => {
  return (
    <div className="w-full bg-[rgba(30,42,71,1)] p-12 flex gap-8 rounded-2xl text-white max-sm:px-6 max-sm:py-8 light:bg-white light:shadow-[0_16px_30px_-10px_rgba(70,96,187,0.1986)] light:text-[rgba(43,52,66,1)]">
      {invalidRequest ? <NotFound /> :
        <div className="w-full flex gap-8">
          <img src={data.avatar_url} className="rounded-full max-w-29.25 max-h-29.25 max-sm:hidden" />
          <div className="flex-1 flex flex-col gap-6 w-full">
            <UserHeader avatarUrl={data.avatar_url} name={data.name} login={data.login} date={data.created_at} />
            <div className="opacity-70 text-[15px] leading-[150%] tracking-normal light:text-[rgba(75,106,155,1)]">{data.bio ? <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', margin: 0, backgroundColor: 'transparent', border: 'none' }}>{data.bio}</pre> : "This profile has no bio"}</div>
            <UserStats followers={data.followers} followings={data.following} repos={data.public_repos} />
            <UserInfo location={data.location} blog={data.blog} company={data.company} twitter={data.twitter_username} />
          </div>
        </div>
      }
    </div>
  )
}

export default UserContainer
