import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { SeasonsPage } from './scenes/seasons/seasons-page';
import { ShowPage } from './scenes/show/show-page';

export const App = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/shows" element={<ShowPage />}></Route>
                <Route path="/shows/:id/seasons" element={<SeasonsPage />}></Route>
                <Route path="*" element={<Navigate to="/shows" replace />}></Route>
            </Routes>
        </BrowserRouter>
    </>;
};