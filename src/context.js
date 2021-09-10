import React, { useState, useEffect, useContext } from "react";
import useRequests from "./useRequests";

// Set up the app's global context via the React Context API...
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [pressed, setPressed] = useState(false);
    useEffect(() => {
        window.onpopstate = (e) => {
            setPressed(true);
        };
    });
    const [searchQuery, setSearchQuery] = useState("");
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const openSideNav = () => {
        setIsSideNavOpen(true);
    };
    const closeSideNav = () => {
        setIsSideNavOpen(false);
    };
    const {
        isLoading,
        error,
        info: medalCountries,
        setInfo,
        toggle,
        setToggle,
        toggledIcon,
        setToggledIcon,
    } = useRequests("all");

    // Pass all necessary state values through the Provider component's value prop to be accessed from elsewhere within the app...
    return ( <
        AppContext.Provider value = {
            {
                toggledIcon,
                setToggledIcon,
                isLoading,
                error,
                medalCountries,
                setInfo,
                toggle,
                setToggle,
                searchQuery,
                setSearchQuery,
                isSideNavOpen,
                openSideNav,
                closeSideNav,
                pressed,
                setPressed,
            }
        } >
        { children } { " " } <
        /AppContext.Provider>
    );
};

// Create a custom hook to handle and export context for ease of reuse throughout the app...
export const useGlobalContext = () => {
    return useContext(AppContext);
};

// Export the Provider component so that consuming components throughout the app can subscribe to context changes...
export { AppProvider };