import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FormPage from '../pages/FormPage'
import {ThanksPage} from '../pages/ThanksPage'
import {NotFoundPage} from '../pages/NotFoundPage'
import { OfflinePage } from '../pages/OfflinePage';
import { FormPageCL } from '../pages/FormPageCL';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<FormPage/>}></Route>
                <Route path='/thanks' element={<ThanksPage/>}></Route>
                <Route path='/captadores/offline' element={<OfflinePage/>}></Route>
                <Route path='/chile' element={<FormPageCL/>}></Route>
                <Route path='*' element={<NotFoundPage/>}></Route>
            </Routes>
        </Router>
    )
}

export default App;