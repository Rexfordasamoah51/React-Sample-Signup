import {
  createContext,
  useState,
} from 'react';

const switchContext = createContext();



const SwitchTransitionProvider = ({ children }) => {
    const [switchValue, setSwitchValue] = useState(true);

    const updateSwitchValue = () => {
        setSwitchValue(switchValue => !switchValue)
        console.log(switchValue)
    }

    return (
        <switchContext.Provider value={{ switchValue, updateSwitchValue }}>
            {children}
        </switchContext.Provider>
    )
}

export { switchContext, SwitchTransitionProvider };