import { Route, Routes } from 'react-router';
import './App.scss';
import { MyLayout } from './components';
import { ChinaPage, JapanPage, USPage } from './pages';
import { Compose, OrganizaionProvider } from './providers';

function App() {
  return (
    <div>
      <Compose components={[OrganizaionProvider]}>
        <Routes>
          <Route path="/" element={<MyLayout />}>
            <Route index path="cn" element={<ChinaPage />} />
            <Route path="jp" element={<JapanPage />} />
            <Route path="us" element={<USPage />} />
          </Route>
        </Routes>
      </Compose>
    </div>
  );
}

export default App;
