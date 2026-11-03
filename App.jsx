import './App.css'
import InputQuiz from './input_quiz.jsx'
import TambahKurang from './tambah_kurang.jsx'

function App() {
  return (
    <div style={{
      maxWidth: '700px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Aplikasi Quiz</h1>

      <hr />

      <TambahKurang />

      <hr />

      <InputQuiz />

    </div>
  )
}

export default App