import React from 'react'

const Navbar = ({ categories, filtreActif, setFiltre }) => {
    return (
        <div>
            {
                categories.map((categorie) => (
                    <button 
                        key={categorie} 
                        onClick={() => setFiltre(categorie)}
                        className={filtreActif === categorie ? "actif" : ""}
                        >
                        {categorie}
                    </button>
                ))
            }
        </div>
    )
}

export default Navbar
