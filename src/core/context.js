import { createContext } from "react"

export const CONTEXT = createContext({});

const Provider = ({value, children}) => (
    <CONTEXT.Provider value={value}>
        {children}
    </CONTEXT.Provider>
);

export default Provider;