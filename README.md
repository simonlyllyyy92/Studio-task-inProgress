This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Library and Frameworks

I have chosen to use several libraries mainly including:

1. React, Redux, Material-ui/core, Material-ui/icons, React-bootstrap, bootstrap, styled-components, Jest, enzyme
   ...

## How it works

1. Enter a number from -100 to 100 will change the color of the Star from blue(-100) to red(100). The default value is 0 where Star's color will not change when the value is 0

2. Move the Slider will update the velocity's input value.
   At the same time, the Star's color will change as well.

3. The slider is based on a log or exponential scale and I have left more details towards the negative velocity range (Blue)

4. Velocity's input can be and only be a number, ranging from -100 to 100.(Regex) Others will not be allowed to enter

## Results

Overall, it has met the requirements, there are some sample test cases for the action and reducer.

Besides the app is built based on responsive design, the components layout structure will changed based on mobile devices and small browser window.

## Time sheet

Overall time consuming: 7 hours and 40 mins
The most time consuming part is (PNG image color changing & styling)

Partially time consuming:

1. Structure layout in App.js and Finish writing Stars, Sliders and Velocity Component -- 1 hour and 13 mins
2. Configuring redux store and set up action and reducer -- 20 mins
3. Detailed Styling -- 3 hours approximately (Figuring how the change the PNG image's color -- 2 hour and 30 mins, other styling -- about 30 mins)
4. Figuring out how 'log' works and calculate (2 hours 13 mins)
5. Testing -- 30mins
6. Others (including searching and installing packages, create github repo and edit readme File) -- 30 mins

Overall 7 hours and 40 mins approximately.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
