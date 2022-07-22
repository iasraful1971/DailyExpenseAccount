import './App.css';
import Copyright from './components/Copyright';
import Form from './components/Form';
import Graph from './components/Graph';

function App() {
  return (
    <>
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-grey-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Daily Expense Account</h1>
        {/* grid columns  */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* chart  */}
          <Graph/>
          {/* Form  */}
          <Form/>
        </div>
        
      </div>
     
    </div>
     <Copyright/>
     </>
  );
}

export default App;
