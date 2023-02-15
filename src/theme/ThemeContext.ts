import {createContext} from "react";

export enum Theme {
    LIGHT = 'light',
    DARK =  'dark'
}

export interface ThemeContextProps {
    theme?: Theme,
    setTheme?: (theme: Theme) => void,

}                                           // это женерик
export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_CONTEXT_THEME_KEY = 'theme';

