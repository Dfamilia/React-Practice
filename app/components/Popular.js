import React, { Component } from "react";

function LanguagesNav({ selected, onUpdateLanguage }) {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
  return (
    <div>
      <ul className="flex-center">
        {languages.map(language => (
          <li key={language}>
            <button
              style={
                language === selected ? { color: "rgb(187, 46, 31)" } : null
              }
              onClick={() => onUpdateLanguage(language)}
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
    const { selectedLanguage } = this.state;

    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
      </React.Fragment>
    );
  }
}
