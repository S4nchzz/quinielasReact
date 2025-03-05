import React, { createContext, useEffect, useState } from "react";

export const QuinielasContext = createContext()

export const QuinielasProvider = ({children}) => {
    const [quinielasJson, setQuinielasJson] = useState([])

    useEffect(() => {
        const fetchQuinielas = async() => {
            const data = await fetch('quinielas.json')
            const json = await data.json();

            setQuinielasJson(json.apuestas)
        }

        fetchQuinielas();
    }, [])

    return (
        <QuinielasContext.Provider value={{ quinielasJson }}>
            {children}
        </QuinielasContext.Provider>
    );
}