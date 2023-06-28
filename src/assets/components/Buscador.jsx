import { FaSearch } from "react-icons/fa";

export const Buscador = ({ Search, onChange }) => {
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon"/>
      <input 
          placeholder="Type to search..."
          value={Search} 
          onChange={onChange}/>
    </div>
  )
}
export default Buscador