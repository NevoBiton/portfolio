// import { createContext, useContext, useEffect, useState } from "react"
//
// type Theme = "dark" | "light" | "system"
//
// type ThemeProviderProps = {
//     children: React.ReactNode
//     defaultTheme?: Theme
//     storageKey?: string
// }
//
// type ThemeProviderState = {
//     theme: Theme
//     setTheme: (theme: Theme) => void
// }
//
// const initialState: ThemeProviderState = {
//     theme: "system",
//     setTheme: () => null,
// }
//
// const ThemeProviderContext = createContext<ThemeProviderState>(initialState)
//
// export function ThemeProvider({
//                                   children,
//                                   defaultTheme = "system",
//                                   storageKey = "vite-ui-theme",
//                                   ...props
//                               }: ThemeProviderProps) {
//     const [theme, setTheme] = useState<Theme>(
//         () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
//     )
//
//     useEffect(() => {
//         const root = window.document.documentElement
//
//         root.classList.remove("light", "dark")
//
//         if (theme === "system") {
//             const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
//                 .matches
//                 ? "dark"
//                 : "light"
//
//             root.classList.add(systemTheme)
//             return
//         }
//
//         root.classList.add(theme)
//     }, [theme])
//
//     const value = {
//         theme,
//         setTheme: (theme: Theme) => {
//             localStorage.setItem(storageKey, theme)
//             setTheme(theme)
//         },
//     }
//
//     return (
//         <ThemeProviderContext.Provider {...props} value={value}>
//             {children}
//         </ThemeProviderContext.Provider>
//     )
// }
//
// export const useTheme = () => {
//     const context = useContext(ThemeProviderContext)
//
//     if (context === undefined)
//         throw new Error("useTheme must be used within a ThemeProvider")
//
//     return context
// }

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    systemTheme: "dark" | "light"
    setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
    theme: "system",
    systemTheme: "light",
    setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
                                  children,
                                  defaultTheme = "system",
                                  storageKey = "vite-ui-theme",
                                  ...props
                              }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    )
    const [systemTheme, setSystemTheme] = useState<"dark" | "light">(() =>
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    )

    useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove("light", "dark")

        const updateSystemTheme = () => {
            setSystemTheme(
                window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light"
            )
        }

        if (theme === "system") {
            updateSystemTheme()
            root.classList.add(systemTheme)
        } else {
            root.classList.add(theme)
        }

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        mediaQuery.addEventListener("change", updateSystemTheme)

        return () => mediaQuery.removeEventListener("change", updateSystemTheme)
    }, [theme, systemTheme])

    const value = {
        theme,
        systemTheme,
        setTheme: (theme: Theme) => {
            localStorage.setItem(storageKey, theme)
            setTheme(theme)
        },
    }

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}
