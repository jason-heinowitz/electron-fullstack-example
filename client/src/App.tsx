import * as React from 'react';
import Hello from './Hello';

interface AppProps {
  language: string;
}

const App: React.FunctionComponent<AppProps> = (props: AppProps) => (
  <>
    <h1>Welcome to Create {props.language} App!</h1>
    <input type="text" name="test" id="test" />
    <Hello />
  </>
);

export default App;
