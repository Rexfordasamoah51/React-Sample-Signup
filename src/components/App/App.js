import './App.css';

import {
  SwitchTransitionProvider,
} from '../../context/switchTransitionContext';
import SignUpBlue from '../SignUpBlue/signUpBlue.js';

function App() {
  return (
    <SwitchTransitionProvider>
      <SignUpBlue />
    </SwitchTransitionProvider>
  );
}

export default App;
