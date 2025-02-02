// App.js
import React, { useState } from "react";
import "./App.css";
import List from "./List";
import birthdays from "./Data";

function App() {
  const [people, setPeople] = useState(birthdays);

  return (
    <main>
    <section className = "container">
     
      {/* Pass the state variable instead of the original birthdays array */}
      <List birthdays={people} />

    </section>
    </main>
  );
}

export default App;
