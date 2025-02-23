import { ProfilePage } from './pages/ProfilePage';
import { Route, Routes } from 'react-router';
import './index.css';
import { BrowserRouter } from 'react-router';
import { AppLayout } from 'components/layout/AppLayout';
import { UiShowRoom } from 'pages/UiShowRoom';
import { CreatingProjectPage } from 'pages/CreatingProjectPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="ui-show-room" element={<UiShowRoom />} />
                    <Route path="create-project" element={<CreatingProjectPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
