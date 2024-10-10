import React, { useState } from 'react'

export const DataContext = React.createContext(null)

function DataProvider({ children }) {

    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState({
        load: false, message: ''
    });

    const data = {
        loading: { loading, setLoading },
        MsgLoad: { msg, setMsg }

    }

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}
export default DataProvider;