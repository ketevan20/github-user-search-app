import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between">
        <p className="font-bold text-[26px] leading-[100%] tracking-normal text-white light:text-[rgba(20,29,47,1)]">devfinder</p>
        <ThemeSwitch />
    </div>
  )
}

export default Header