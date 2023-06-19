import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EditorPage from './pages/EditorPage'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              theme: {
                primary: '#4aed44',
                secondary: '#363636',
              },
            },
          }} />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/editor/:roomId" element={<EditorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;