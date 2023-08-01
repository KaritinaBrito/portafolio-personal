import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.tsx';
import AllResponsive from './pages/AllResponsive.tsx';
import NotFound from './pages/NotFound.tsx';
import Working from './pages/Working.tsx';

function App () {    
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} errorElement={ <NotFound />} />
                <Route path="/projectsResponsive" element={<AllResponsive />}/>
                <Route path="/working" element={<Working />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App;
