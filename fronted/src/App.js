import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Chatpanel from "./feature/Chat/components/Chatpanel";
import Register from "./feature/auth/components/Register";
import Login from "./feature/auth/components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/register" element={<Register/>}  />
        <Route path="/login" element={<Login/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/chat/:chatId" element={<Chatpanel/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
