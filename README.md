# Grid Fibonacci Game

This app is a Fibonacci game on a table. You should on each that you want and you can create a Fibonacci pattern.
When you click on each cell you should expect to see the cell increase the number by 1 and change the background color to Yellow.
If you find 5 successful Fibonacci patterns, the cells' backgrounds will change to Green, then after 2 seconds they will be empty and will change to 0.

## Demo

You can see the demo after running project in local machine at:

https://localhost:3000/

## Installation

I started to work on this project with [Create React App](https://github.com/facebook/create-react-app)

to install packages.

npm:

```bash
npm install
```

yarn:

```bash
yarn
```

## Deployment

To Start this project run

npm:

```bash
npm run start
```

yarn:

```bash
yarn start
```

To build the project run:

npm:

```bash
npm run build
```

yarn:

```bash
yarn build
```

## Testing

npm:

```bash
npm run test
```

yarn:

```bash
yarn test
```

## Tech Stack

**Client:** React, Typescript, TailwindCSS

**Tests:** React testing library, Enzyme

## Tasks list

- [x] Create function for create a matrix
- [x] Enable reset the game
- [x] Change cell backgroud color to Yellow when click
- [x] Change 5 cells backgroudcolors to Green when a Fibonacci pattern found
- [x] Clean the cells after finding the pattern
- [x] Create function to check if a pattern found from left side
