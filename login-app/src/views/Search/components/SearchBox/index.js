import { useState } from 'react';
import "./style.css";

export default function SearchBox() {
    const [searchText, setSearchText] = useState("");
    
    return(
        <div className="search-box">
            <h2 className="search-box-title">Buscador de personal</h2>
            
            <div className='search-box-buttons'>
                <label>
                    <input 
                        value={searchText} 
                        onChange={({target: {value}}) => setSearchText(value)}
                        className="search-box-input" 
                    />
                </label>

                <button>Buscar</button>
                <button>Cerrar</button>
            </div>
        </div>
    )
}