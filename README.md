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
##### Interface FunctionComponent
```js
interface FunctionComponent<P = {}> {
  (props: P & { children?: ReactNode }, context?: any): ReactElement | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}
```
`The React team is discussing removing defaultProps from function components. It adds unnecessary complexity because default function arguments work equally as well without needing to introduce a new concept beyond standard JavaScript.`
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
## React Hooks
#### useState with TypeScript
```js
interface IUser {
  username: string;
  email:  string;
  password: string;
}

const ComplexState = ({ initialUserData }) => {
  const [user, setUser] = React.useState<IUser | null>(initialUserDate);
  
  if (!user) {
    // do something else when our user is null
  }

  return (
    <form>
      <input value={user.username} onChange={e => setUser({...user, username: e.target.value})} />
      <input value={user.email} onChange={e => setUser({...user, email: e.target.value})} />
      <input value={user.password} onChange={e => setUser({...user, password: e.target.value})} />
    </form>  
  );
}
```
Official typing useState
```js
function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);
```
####useEffect with TypeScript
Official typing useEffect
```js
function useEffect(effect: EffectCallback, deps?: DependencyList): void;
// The first argument, `effect`
type EffectCallback = () => (void | (() => void | undefined));
// The second argument, `deps?`
type DependencyList = ReadonlyArray<any>;
```
#### useContext with TypeScript
```js
import { createContext, useContext } from 'react';
props ITheme {
  backgroundColor: string;
  color: string;
}
// The standard way to create context. It takes an initial value object
const ThemeContext = createContext<ITheme>({
  backgroundColor: 'black',
  color: 'white',
})
// Accessing context in a child component
const themeContext = useContext<ITheme>(ThemeContext);
```
```js
Official typing useContext
function useContext<T>(context: Context<T>): T;

interface Context<T> {
  Provider: Provider<T>;
  Consumer: Consumer<T>;
  displayName?: string;
}
```
