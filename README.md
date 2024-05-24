# Title

Description

[`project`](https://khantorot.github.io/*)

## Author

Khantoro: [`khantorot.github.io`](https://khantorot.github.io)

## Contact

Email: [`khantorot@gmail.com`](mailto:khantorot@gmail.com)

## Usage

### Installation

```bash
git clone https://github.com/khantorot/*.git
```

### Commands

| Command           | Action                                                   |
| ----------------- | -------------------------------------------------------- |
| `npm install`     | Installs dependencies                                    |
| `npm run dev`     | Starts local dev server                                  |
| `npm run build`   | Build production site                                    |
| `npm run preview` | Preview build locally, before deploying                  |
| `npm run prepare` | Prepare `simple-git-hooks`, `lint-staged`                |
| `npm run fix`     | Format, lint code with `prettier`, `eslint`, `stylelint` |
| `npm run clean`   | Remove `dist`, `node_modules`                            |

### Environment

- Tools: [node](https://nodejs.org), [npm](https://npmjs.com), [vite](https://vitejs.dev)
- Integrations: [vituum](https://vituum.dev), [postcss](https://postcss.org), [posthtml](https://posthtml.org)
- Linters: [prettier](https://prettier.io), [eslint](https://eslint.org), [stylelint](https://stylelint.io)
- Utilities: [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks), [lint-staged](https://github.com/lint-staged/lint-staged)

### Structure

```
┌─ dist
├─ node_modules
│
│─ public
│  ├─ doc
│  └─ img
│     ├─ common
│     └─ icon
│
├─ src
│  ├─ assets
│  │  ├─ css
│  │  └─ js
│  │
│  ├─ components
│  ├─ layouts
│  └─ pages
│
└─ vite.config.js
```
