import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FormPage from '../pages/FormPage'
import {ThanksPage} from '../pages/ThanksPage'
import {NotFoundPage} from '../pages/NotFoundPage'
import { FormPageCOoffline } from '../pages/FormPageCOoffline';
import { FormPageCL } from '../pages/FormPageCL';
import { FormPageCLoffline } from '../pages/FormPageCLoffline';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<FormPage/>}></Route>
                <Route path='/thanks' element={<ThanksPage/>}></Route>
                <Route path='/colombia' element={<FormPage/>}></Route>
                <Route path='/colombia/offline' element={<FormPageCOoffline/>}></Route>
                <Route path='/chile' element={<FormPageCL/>}></Route>
                <Route path='/chile/offline' element={<FormPageCLoffline/>}></Route>
                <Route path='*' element={<NotFoundPage/>}></Route>
            </Routes>
        </Router>
    )
}

export default App;