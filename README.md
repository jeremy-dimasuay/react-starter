<h1>
  React Starter
</h1>

### Directory Layout

```bash
├── node_modules/                  # 3rd-party
├── src/                           # Application source code
│   ├── components/                # React components
│   ├── store/                     # Store of states and reducers
│   ├── index.html                 # Application template
│   ├── index.js                   # Root JS that initializes application storage and React application
│   ├── app.js                     # Top-level of React application
└── package.json                   # The list of project dependencies + NPM scripts
└── .babelrc                       # Babel (compiler) config
└── .eslintrc                      # ESLint (JS linter) config
└── .espintrc                      # ESLint runner config
└── webpack.config.js              # Webpack (module bundler) config
└── yarn.lock                      # Lock package versions on installs
```

### Prerequisites

- [Node.js][nodejs]
- [Yarn][yarn]

### Getting Started

```bash
$ git clone https://github.com/jeremy-dimasuay/react-starter.git MyApp
$ cd MyApp
$ yarn install
$ yarn start                       # Compile the app and opens it in a browser with "live reload"
```

### How to Test

```bash
$ yarn lint                        # Check JavaScript and CSS code for potential issues

$ yarn test                        # Run unit tests`
```

---

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
