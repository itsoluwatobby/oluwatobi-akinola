import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/Dashboard';
import { useAppContext } from './hooks/useAppContext';
import { Toaster } from 'react-hot-toast';
import { Header } from './components';
import { Colors } from './utils/colors';

function App() {
  const { theme, appName } = useAppContext();

  return (
    <main className={`customScrollBar page-fade-in ${theme === 'light' ? 'bg-white' : `${Colors.navy} text-white`} w-full h-screen flex flex-col transition-colors overflow-y-scroll`}>
      <Header appName={appName} />

      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>

      <Toaster
        toastOptions={{
          style: {
            borderRadius: '8px',
            color: '#222',
            padding: '16px',
            fontSize: '14px',
          },
        }}
      />

    </main>
  );
}
export default App
