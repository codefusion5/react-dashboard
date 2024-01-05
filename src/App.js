
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from '../src/scenes/global/Topbar'
import Sidebar from "./scenes/global/Sidebar";
import { useState } from "react";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
    <div className="App" style={{display:"flex"}}>
      <Sidebar isSidebar={isSidebar}/>
      <main className="content">
      <Topbar setIsSidebar={setIsSidebar}/>
      </main>
      </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
   
    
  );
}

export default App;
