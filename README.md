# Typescript React+Redux+Styled playground

+ React 16.8
+ React-router 5.0
+ Redux
+ Styled-components 4.2

# Available Scripts:
## Installation
### `npm install`


## Compiles and hot-reloads for development
### `npm run dev`

Runs the app in the development mode.<br>
The application will run automatically in the browser at `[http://localhost:3001]`.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Compiles and minifies for production
### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles App in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Project serve from  `./dist` folder after 'build'
### `npm run serve`
Serve production version of the application 

## Project serve from  `./dist` folder after 'build'
### `npm run test`
Serve production version of the application 

# Определение типов в React
### "Function Component"
###<span style="color:#4527A0;">"Функциональный компонент"</span>
##### React.FC<Props> | React.FunctionComponent<Props>
Type representing a functional component
```js
const FunctionalComponent: React.FC<Props> = (props)=>{
  ...
  return (
    ...
  )
}
```
##### React.Component<Props, State>
Type representing a class component

```js
class ClassComponent extends React.Component<Props, State> { 
  ...
  render(){
    ...
    return(
      ...
    )
  }
}
```
##### React.ComponentType<Props>
Type representing union of (React.FC | React.Component) - used in HOC
```js
const withState = <P extends WrappedComponentProps>(
  WrappedComponent: React.ComponentType<P>,
) => { ... }
```
##### React.ComponentProps<typeof XXX>
Gets Props type of a specified component XXX (WARNING: does not work with statically declared default props and generic props)
```js
type MyComponentProps = React.ComponentProps<typeof MyComponent>;
```
