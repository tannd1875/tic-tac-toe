This is basic Tic-Tac-Toe game for two player

1. Technical: ReactJs + TypeScript + TailwindCSS, built by Vite
2. To run

- Clone this project
- "npm i" to install node_modules needed
- "npm run dev" to run this project => localhost:5173

3. Features

- Two player: player 1 - X; player 2 - O in default
- Can "Restart" match when playing
- History review:
  - Summary: total match win of each player, total draw game
  - Review history match by hover on match
  - Clear history

4. Project structure

├── src
│ ├── assets
│ ├── component
│ │ ├── ui
│ │ ├── layout
│ ├── context
│ ├── pages
│ ├── types
│ ├── utils
│ ├── main.tsx
│ ├── index.css

- assets: favicon
- components: all components in project
  - layout: play ground and history box
  - ui: rest components
- context: contextAPI for playground
- pages: one page for this project
- types: some types used
- utils: helper function, const value, localStorage helper for handle history review
