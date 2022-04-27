import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Inicial } from '../pages/Inicial';
import { Personagem } from '../pages/Personagem';

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/personagem/:id" element={<Personagem />} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}