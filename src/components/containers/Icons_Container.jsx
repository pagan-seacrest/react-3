import React, { useState, useEffect } from 'react';

export default function IconsContainer ({children}) {
    const [color, setColor] = useState("");
    
    return (
        <>
        {children}
        </>
    )
}