import logo from './logo.svg';
import './App.css';
import StudentList from './components/Student/StudentList';


function App() {
  return (
    <>
      <div className='container py-5'>
        <h1 className='mb-4'>Gestion des stagiaires</h1>
        <StudentList />
      </div>
    </>
  );
}

export default App;
