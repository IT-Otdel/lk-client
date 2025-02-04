import { ProfilePage } from './pages/ProfilePage';
import { Route, Routes } from 'react-router';
import { Header } from './components/header';
import './index.css';
import { BrowserRouter } from 'react-router';

function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProfilePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
