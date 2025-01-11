import Hero from "./sections/Hero/Hero.tsx";
import Projects from "./sections/Projects/Projects.tsx";
import { ThemeProvider } from "@/components/theme-provider"



function App() {

  return (
    <>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Hero />
            <Projects/>
        </ThemeProvider>
    </>
  )
}

export default App
