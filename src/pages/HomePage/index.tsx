import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div>
      <ol className="ol">
        <li>
          Za použití Reactu vytvořte klon tohoto příkladu včetně této stránky se
          zadáním.
        </li>
        <li>
          Pro data použijte otevřenou API{" "}
          <a href="https://breakingbadapi.com/documentation">
            https://breakingbadapi.com/documentation
          </a>
        </li>
        <li>
          Pro epizody použijte endpoint https://breakingbadapi.com//api/episodes
        </li>
        <li>
          Pro postavy použijte endpoint
          https://breakingbadapi.com/api/characters
        </li>
      </ol>
    </div>
  );
};

export default HomePage;
