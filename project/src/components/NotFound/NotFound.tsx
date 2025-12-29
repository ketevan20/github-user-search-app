

const NotFound = () => {
  return (
    <div className="text-center">
        <p className="text-[22px] font-bold leading-[140%] tracking-normal">No results found!</p>
        <p className="text-[rgba(144,164,212,1)] text-[15px] leading-[150%] tracking-normal mt-4 light:text-[rgba(75,106,155,1)]">We couldn’t find any GitHub users matching your search. Please double-check the username and try again.</p>
    </div>
  )
}

export default NotFound