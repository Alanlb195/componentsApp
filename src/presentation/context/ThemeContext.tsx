import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { ThemeColors, themes } from "../../config";
import { Appearance, AppState, useColorScheme } from "react-native";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";

export type ThemeColor = 'luxe' | 'noir' | 'royal' | 'crimson';
interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;
    setTheme: (theme: ThemeColor) => void;
    isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const colorScheme = useColorScheme();
    const [currentTheme, setCurrentTheme] = useState<ThemeColor>(colorScheme === 'dark' ? 'royal' : 'crimson');
    const isDarkTheme = ['noir', 'royal'].includes(currentTheme);

    useEffect(() => {
        setCurrentTheme(colorScheme === 'dark' ? 'royal' : 'crimson');
    }, [colorScheme]);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', () => {
            setCurrentTheme(Appearance.getColorScheme() === 'dark' ? 'royal' : 'crimson');
        });
        return () => subscription.remove();
    }, []);

    return (
        <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
            <ThemeContext.Provider value={{
                currentTheme,
                colors: themes[currentTheme],
                setTheme: setCurrentTheme,
                isDark: isDarkTheme
            }}>
                {children}
            </ThemeContext.Provider>
        </NavigationContainer>
    );
};
