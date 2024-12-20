import logo from './logo.svg';
import './App.css';



import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import TodoPage from './pages/TodoPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<AuthPage />} />
                <Route path="/todos" element={<TodoPage />} />
            </Routes>
        </Router>
    );
};

export default App;
App;
