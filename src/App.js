import { useSelector } from 'react-redux';
import SignupPage from './pages/SignupPage';

function App() {
  const {registration} = useSelector((state) => {
    console.log(state);
    return state.registration;
  });
  return (
    <SignupPage />
  );
}

export default App;
