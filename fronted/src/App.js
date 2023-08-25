import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Chatpanel from "./feature/Chat/components/Chatpanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/chat/:chatId" element={<Chatpanel/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
