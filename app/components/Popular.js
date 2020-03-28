import React, { Component } from "react";

export default class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All"
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage
    });
  }

  render() {
    const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <div>
        <ul className="flex-center">
          {languages.map(language => (
            <li key={language}>
              <button
                style={
                  language === this.state.selectedLanguage
                    ? { color: "rgb(187, 46, 31)" }
                    : null
                }
                onClick={() => this.updateLanguage(language)}
                className="btn-clear nav-link"
              >
                {language}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
