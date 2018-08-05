# [deployed site](https://contactmanager.netlify.com/)

master branch is using context api for state, redux-b will use redux.

Things I've learned when creating this project:

- Using React.Fragment instead of div to NOT render a useless div to DOM.

- Instead of messy and little problematic state passsing through components, I've used a React Context API which utilizes an Provider and Consumer for Redux-like state management. Although it's absolutely not necessary for such an small app.

- Implement Typechecking with React.PropTypes

- You can {[ put an expression in square brackets ]} like that to access it in JSX

- React.createRef() for uncontrolled components without declaring state

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
