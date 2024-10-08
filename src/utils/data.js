import React from 'react'

export const DataContext = React.createContext(null)

export default ({ children }) => {

    const [loading, setLoading] = React.useState(false);
    const [msg, setMsg] = React.useState({
        load: false, message: ''
    });

    const data = {
        loading: { loading, setLoading },
        MsgLoad: { msg, setMsg }

    }

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}