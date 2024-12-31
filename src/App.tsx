import Hero from "./sections/Hero/Hero.tsx";
import { ThemeProvider } from "@/components/theme-provider"



function App() {

  return (
    <>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Hero />
        </ThemeProvider>
    </>
  )
}

export default App
