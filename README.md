# Portfolio Website

A terminal-themed portfolio website inspired by LazyVim, built with React and Vite.

## Features

- **LazyVim-style Interface**: Terminal-inspired UI with file tree, bufferline, and status bar
- **Modular Components**: Clean, reusable React components
- **Responsive Design**: Mobile-friendly with collapsible sidebar
- **Syntax Highlighting**: Custom C++ and Markdown syntax highlighting
- **Easy Content Management**: Portfolio data stored in JSON for easy updates

## Tech Stack

- React 19
- Vite
- Bootstrap 5
- Lucide React (icons)
- TypeScript (for build configuration)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  components/     # React components
  config/         # Configuration files (theme, file system, config)
  data/           # Portfolio data (JSON)
  index.css       # Global styles
  main.jsx        # Entry point
  App.jsx         # Main application component
```

## Editing Portfolio Content

Edit `src/data/portfolio.json` to update:
- About Me section
- Projects
- Technical Skills
- Hobbies & Interests
- Contact information

See `src/data/README.md` for detailed instructions on editing the portfolio data.

## License

MIT
