import { Province } from '../services/provinceService'
import { useProvincesByName } from '../hooks/useProvinces';
import { useState } from "react"

const SearchProvince = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const { data: searchResults, isLoading, error, refetch } = useProvincesByName(searchTerm);

    const handleSearch = () => {
      if (!searchTerm.trim()) {
        console.error('Province name is required');
        return;
      }
      refetch();
    };

  return (
    <div>
        <div className="flex gap-10">
          <input type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='outline-none border-solid border-2 rounded-md pl-3 py-2 w-[180px] md:w-[350px] focus:shadow-custom-shadow-inp border-red-500 transition-all'>
          </input>
          <button className="bg-black rounded text-white px-5" onClick={handleSearch}>Search</button>
        </div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <ul>
        {searchResults && searchResults.map((province: Province) => (
          <li key={province.code}>{province.name}</li>
        ))}
        {searchResults?.length==0&&<p>No data available</p>}
      </ul>
    </div>
  )
}

export default SearchProvince