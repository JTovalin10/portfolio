# Portfolio Data

This directory contains the portfolio data in JSON format for easy editing.

## File: `portfolio.json`

This file contains all the portfolio information that is displayed in the LazyVim-style editor interface.

### Structure

- **name**: Your full name (used in the terminal prompt and file tree)
- **host**: The hostname for the terminal prompt (e.g., "portfolio.dev")
- **about**: About me section
  - **title**: The title/header for the about section
  - **lines**: Array of strings representing each line of the about section
- **projects**: Array of project objects
  - **title**: Comment-style title for the project
  - **classDef**: C++ class definition line
  - **public**: Array of strings representing public members (description, tech_stack, features, etc.)
  - **links**: Object containing source_code and/or live_demo URLs
  - **closeBrace**: Closing brace for the class
- **contact**: Contact information
  - **title**: The title/header for the contact section
  - **lines**: Array of contact objects with:
    - **icon**: Icon name (Github, Linkedin, Mail, FileText)
    - **label**: Display label
    - **value**: Display value
    - **href**: Link URL

### Editing Tips

1. **Adding a new project**: Copy an existing project object and modify the fields
2. **Updating contact info**: Edit the contact.lines array
3. **Changing about text**: Edit the about.lines array (use empty strings for blank lines)
4. **Adding features to projects**: Add them to the features array in the public array

### Icon Names

Available icon names for contact items:
- `Github`
- `Linkedin`
- `Mail`
- `FileText`

### Example: Adding a New Project

```json
{
  "title": "// --- Project X: 'My New Project' ---",
  "classDef": "class MyNewProject {",
  "public": [
    "std::string description = \"Description of my project\";",
    "std::vector<std::string> tech_stack = { \"React\", \"Node.js\" };"
  ],
  "links": {
    "source_code": "https://github.com/username/project",
    "live_demo": "https://project-demo.com"
  },
  "closeBrace": "};"
}
```

