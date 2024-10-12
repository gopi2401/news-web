import React, { useState } from 'react'

export const DataContext = React.createContext(null)

function DataProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState({
        load: false, message: ''
    });
    const [Country, setCountrie] = useState(localStorage.getItem('Country') ? localStorage.getItem('Country') : 'us');
    const data = {
        loading: { loading, setLoading },
        MsgLoad: { msg, setMsg },
        Countrie: { Country, setCountrie }
    };

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}
export default DataProvider;