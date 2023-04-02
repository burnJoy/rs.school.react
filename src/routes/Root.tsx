import { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

export const TitleContext = createContext<((title: string) => void) | null>(null);

export type Props = {
  title: string;
};

const Root = () => {
  const [title, setTitle] = useState('');

  return (
    <div className="root">
      <Header title={title} />
      <div className="content">
        <TitleContext.Provider value={setTitle}>
          <Outlet />
        </TitleContext.Provider>
      </div>
    </div>
  );
};

export default Root;
