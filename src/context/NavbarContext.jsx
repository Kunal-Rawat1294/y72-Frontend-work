import React, { createContext } from 'react'
import { useState } from 'react'
export const NavContext = createContext()
const NavbarContext = ({ children }) => {
    const [navOpen, setnavopen] = useState(false)
    return (
        <NavContext.Provider value={[navOpen, setnavopen]}>
            {children}
        </NavContext.Provider>
    )
}
export default NavbarContext