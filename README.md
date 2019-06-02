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
#### useEffect with TypeScript
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

#### useReducer with TypeScript
```js
const [state, dispatch] = useReducer(reducer, initialState, init);
```
```js
import * as React from 'react';

enum ActionType {
  Increment = 'increment',
  Decrement = 'decrement',
}

interface IState {
  count: number;
}

interface IAction {
  type: ActionType;
  payload: {
    count: number; 
  };
}

const initialState: IState = {count: 0};

const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.Increment:
      return {count: state.count + action.payload.count};
    case ActionType.Decrement:
      return {count: state.count - action.payload.count};
    default:
      throw new Error();
  }
}

const ComplexState = () => {
  const [state, dispatch] = React.useReducer<React.Reducer<IState, IAction>>(reducer, initialState);

  return (
    <div>
      <div>Count: {state.count}</div>
      <button onClick={
        () => dispatch({type: ActionType.Increment, payload: { count: 1 } })
      }>+</button>
      <button onClick={
        () => dispatch({type: ActionType.Decrement, payload: { count: 1 }})
      }>-</button>
    </div>  
  );
```
The useReducer function can utilize the following types:
```js
type Dispatch<A> = (value: A) => void;
type Reducer<S, A> = (prevState: S, action: A) => S;
type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any> ? S : never;
type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<any, infer A> ? A : never;

function useReducer<R extends Reducer<any, any>, I>(
  reducer: R,
  initializerArg: I & ReducerState<R>,
  initializer: (arg: I & ReducerState<R>) => ReducerState<R>
): [ReducerState<R>, Dispatch<ReducerAction<R>>];

function useReducer<R extends Reducer<any, any>, I>(
  reducer: R,
  initializerArg: I,
  initializer: (arg: I) => ReducerState<R>
): [ReducerState<R>, Dispatch<ReducerAction<R>>];

function useReducer<R extends Reducer<any, any>>(
  reducer: R,
  initialState: ReducerState<R>,
  initializer?: undefined
): [ReducerState<R>, Dispatch<ReducerAction<R>>];
```
#### useCallback with TypeScript
```js
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```
The TypeScript definition of useCallback is the following:
```js
function useCallback<T extends (...args: any[]) => any>(callback: T, deps: DependencyList): T;
```
#### useMemo with TypeScript
```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
```js
const computeExpensiveValue = (end: number) => {
  let result = 0;

  for (let i = 0; i < end * 1000000; i++) {
    for (let j = 0; i < end * 1000; j++) {
       result = result + i - j;
    }
  }

  return result;
};

const MyComponent = ({ end = 0 }) => {
  const memoizedNumber = React.useMemo<number>(computeExpensiveValue(end))
    
  return (
    <DisplayResult result={memoizedNumber} />
  );
}
```
The TypeScript definition of useMemo is the following:
```js
function useMemo<T>(factory: () => T, deps: DependencyList): T;
```
#### useRef with TypeScript
```js
const refContainer = useRef(initialValue);
```
```js
function TextInputWithFocusButton() {
  // The type of our ref is an input element
  const inputEl = useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```
The TypeScript definition for useRef is the following:
```js
function useRef<T>(initialValue: T): MutableRefObject<T>;
  
interface MutableRefObject<T> {
  current: T;
}
```
#### useImperativeHandle with TypeScript
```js
useImperativeHandle(ref, createHandle, [inputs])
```
```js
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = React.forwardRef(FancyInput);
// You can now get a ref directly to the DOM button:
const fancyInputRef = React.createRef();
<FancyInput ref={fancyInputRef}>Click me!</FancyInput>;
```
The TypeScript definition of useImperativeHandle is the following:
```js
function useImperativeHandle<T, R extends T>(ref: Ref<T>|undefined, init: () => R, deps?: DependencyList): void;
```
#### useLayoutEffect with TypeScript
```js
function useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
```
#### useDebugValue with TypeScript
```js
useDebugValue(value)
```
```js
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}
```
#### Custom Hooks
```js
import React, { useState, useEffect } from 'react';

type Hook = (friendID: number) => boolean

interface IStatus {
  id: number;
  isOnline: boolean;
}

const useFriendStatus: Hook = (friendID) => {
  // The type of the value and function are inferred
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  function handleStatusChange(status: IStatus) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```
```js
import * as React from 'react';
import useFriendStatus from './useFriendStatus';

interface IUser {
  id: number;
  username: string;
}

const FriendsListItem ({ user }) => {
  // We know this value is a boolean since we defined our hook
  const isOnline = userFriendStatus(user.id);
  return (
    <li>
      <span style={{ backgroundColor: isOnline ? 'green' : 'red }} />
      <span>
        {user.username}
      </span>
    <li>
  );
};
```
This logic is now able to be extended to any component that needs to know the online status of a user
```js
interface FunctionComponent<P = {}> {
  (props: P & { children?: ReactNode }, context?: any): ReactElement | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}
```