import { useState } from 'react';
import search from '/images/icon-search.svg';

type SearchBarType = {
  searchUser: (username: string) => void;
  invalidRequest: boolean;
}

const SearchBar = ({ searchUser, invalidRequest }: SearchBarType) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="group focus-within:ring-2 focus-within:ring-[rgba(0,121,255,1)] w-full flex items-center bg-[rgba(30,42,71,1)] px-6 py-2 rounded-2xl max-md:pr-3 max-sm:px-3 light:bg-white light:shadow-[0_16px_30px_-10px_rgba(70,96,187,0.1986)]">
      <img className='max-sm:w-5' src={search} />
      <input  onChange={(e) => setInputValue(e.target.value)} className='flex-1 w-full outline-0 text-white ml-5 placeholder:text-[rgba(255,255,255,0.3)] placeholder:text-[18px] placeholder:leading-[140%] placeholder:font-normal placeholder:line-clamp-1 placeholder:truncate max-sm:ml-3 max-sm:placeholder:text-[13px] light:placeholder:text-[rgba(75,106,155,1)] light:text-[#223c67]' placeholder='Search Github username...' />
      {invalidRequest && <p className='text-[rgba(247,70,70,1)] text-[16px] font-bold leading-[150%] mx-6 tracking-normal'>No Result</p>}
      <button onClick={() => {inputValue.trim() !== '' ? searchUser(inputValue) : ""}} className='bg-[rgba(0,121,255,1)] text-white px-6 py-3 rounded-[10px] hover:bg-[rgba(96,171,255,1)] max-sm:px-4'>Search</button>
    </div>
  )
}

export default SearchBar