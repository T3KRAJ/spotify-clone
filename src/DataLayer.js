import React, {createContext, useContext, useReducer} from 'react';
import reducer, {initialState} from "./reducer"

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)