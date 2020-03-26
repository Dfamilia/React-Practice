import React, { Component } from "react";

export default class Popular extends Component {
  render() {
    const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <div>
        <ul className="flex-center">
          {languages.map(language => (
            <li key={languages}>
              <button className="btn-clear nav-link">{language}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
