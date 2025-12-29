type UserHeaderType = {
    avatarUrl: string;
    name: string | null;
    login: string;
    date: string;
}
const UserHeader = ({avatarUrl, name, login, date}: UserHeaderType) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const createdDate = new Date(date);
    const day = createdDate.getDate();
    const month = months[createdDate.getMonth()];
    const year = createdDate.getFullYear();

    return (
        <div className="flex gap-5">
            <div className="hidden max-sm:block">
                <img src={avatarUrl} className="rounded-full max-w-17.5" />
            </div>

            <div className="w-full flex justify-between max-sm:flex-col max-sm:justify-normal">
                <div>
                    <p className="font-bold text-[26px] tracking-normal leading-[120%]">{name}</p>
                    <p className="text-[rgba(96,171,255,1)] text-[16px] leading-[150%] tracking-normal">@{login}</p>
                </div>
                <p className="font-normal text-[15px] leading-[150%] tracking-normal light:text-[rgba(75,106,155,1)]">Joined {day} {month} {year}</p>
            </div>
        </div>
    )
}

export default UserHeader