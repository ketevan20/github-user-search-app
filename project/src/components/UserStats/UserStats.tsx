type UserStatsType = {
    followers: number;
    followings: number;
    repos: number;
}

const UserStats = ({followers, followings, repos}: UserStatsType) => {
    return (
        <div className="max-w-full bg-[rgba(20,29,47,1)] px-8 py-4 rounded-[10px] flex gap-4 tracking-normal max-sm:flex-col max-sm:p-4 light:bg-[rgba(246,248,255,1)]">
            <div className="sm:flex-1 max-w-full">
                <p className="text-[13px] font-normal leading-[150%] light:text-[rgba(75,106,155,1)]">Repos</p>
                <p className="font-bold text-[22px] leading-[140%] mt-1">{repos}</p>
            </div>
            <div className="sm:flex-1 max-w-full">
                <p className="text-[13px] font-normal leading-[150%] light:text-[rgba(75,106,155,1)]">Followers</p>
                <p className="font-bold text-[22px] leading-[140%] mt-1">{followers}</p>
            </div>
            <div className="sm:flex-1 max-w-full">
                <p className="text-[13px] font-normal leading-[150%] light:text-[rgba(75,106,155,1)]">Following</p>
                <p className="font-bold text-[22px] leading-[140%] mt-1">{followings}</p>
            </div>
        </div>
    )
}

export default UserStats