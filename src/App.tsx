import { ProfilePage } from './pages/ProfilePage';
import { Route, Routes } from 'react-router';
import './index.css';
import { BrowserRouter } from 'react-router';
import { AppLayout } from 'components/layout/AppLayout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route path="profile" element={<ProfilePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
