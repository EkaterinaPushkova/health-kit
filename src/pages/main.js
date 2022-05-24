import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Purpose from '../components/main/Purpose'
import CheckLists from '../components/main/CheckLists';

function Main() {

//серверные движения с условием действия периода чеклиста (если действует -> рендерит один патн, иначе - другой)

    return(
        <React.StrictMode>
            <Routes>
                <Route path='selectPurpose' element={<Purpose/>} />
                <Route path='checklists' element={<CheckLists/>} />
            </Routes>

        </React.StrictMode>
    )
}

export default Main;