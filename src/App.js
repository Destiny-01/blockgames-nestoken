import { useState } from "react";
import Input from "./components/Input";
import Nav from "./components/Nav";
import { HandleConnect } from "./utils/contract";

function App() {
  const [account, setAccount] = useState("");

  const connect = () => HandleConnect().then((token) => {
    setAccount(token);
  });

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Nav account={account} connect={connect} />
      <Input account={account} />
    </div>
  );
}

export default App;
