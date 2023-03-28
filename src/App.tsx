import { useState, FormEvent } from "react";

import "./App.css";

function App() {
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);

    setTimeout(() => {
      setPhone("");
      setEmail("");
    }, 500);

    const iframe = document.querySelector("iframe");
    const wind = iframe?.contentWindow;

    const data = {
      phone: phone,
      email: email,
    };

    wind?.postMessage(JSON.stringify(data), "*");
  };

  return (
    <div className="App">
      <h1>SENDER</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="your phone number"
          type="phone"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your email address"
          type="email"
          required
        />
        <button type="submit">submit</button>
      </form>

      <iframe src="https://kabakoo-portfolio"></iframe>
    </div>
  );
}

export default App;
