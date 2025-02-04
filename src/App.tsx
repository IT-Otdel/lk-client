import { ProfilePage } from './pages';
import { Route, Routes } from 'react-router';
import { Header } from './components';
import './index.css';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<ProfilePage />} />
            </Routes>
        </>
    );
}

export default App;
