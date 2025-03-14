import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/Dashboard';
import { useAppContext } from './hooks/useAppContext';
import { Toaster } from 'react-hot-toast';
import { Header, Modal } from './components';
import { Colors } from './utils/colors';
import { useState } from 'react';
import Projects from './pages/Projects';
import { useIntersectionObserver } from './hooks';

function App() {
  const { theme, appInfo } = useAppContext();
  const [toggle, setToggle] = useState(false);
  const { intersecting, observerRef } = useIntersectionObserver(
    { screenPosition: '0px', threshold: 0.9 },
  );

  return (
    <main className={`customScrollBar page-fade-in ${theme === 'light' ? 'bg-white' : `${Colors.navy} text-white`} w-full h-screen flex flex-col transition-colors overflow-y-scroll`}>
      <Header appName={appInfo.name} toggle={toggle} setToggle={setToggle} />
      <Modal toggle={toggle} setToggle={setToggle} />

      <Routes>
        <Route path='/' element={<AppLayout intersecting={intersecting} />}>
          <Route index element={<Dashboard observerRef={observerRef} />} />
          <Route path='projects' element={<Projects observerRef={observerRef} />} />
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
