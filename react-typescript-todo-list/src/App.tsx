import './style-components/App.css';
import { InputField } from './InputField';

const App:React.FC =()=> {


  return (
    <div className="container">
      <p className='heading'>TASKIFY</p>
       <InputField/>
       

    </div>
  );
}

export default App;
