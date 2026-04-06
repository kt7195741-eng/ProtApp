import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Login = ({ onLogin }) => {
    const { t } = useLanguage();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const userData = await response.json();
                localStorage.setItem('token', userData.token);
                localStorage.setItem('user', JSON.stringify(userData.user));

                onLogin();
                navigate('/dashboard');
            } else {
                const errorText = await response.text();
                try {
                    const json = JSON.parse(errorText);
                    setError(json.message || errorText);
                } catch {
                    setError(errorText);
                }
            }
        } catch (err) {
            setError("Sunucuya bağlanılamadı.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
            <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-gray-100">

                <h2 className="text-3xl font-extrabold text-[#0a3d2e] text-center mb-2">{t('welcome_back')}</h2>
                <p className="text-center text-gray-500 mb-8">{t('sign_in_subtitle')}</p>

                {error && (
                    <div className="mb-6 w-full bg-red-50 text-red-600 text-sm font-semibold text-center px-4 py-3 rounded-lg border border-red-100">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">{t('email_address_label')}</label>
                        <input
                            type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none text-gray-800 transition-all"
                            placeholder="ornek@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">{t('password_label')}</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none text-gray-800 transition-all pr-10"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#0a3d2e]"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center text-sm px-1">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#22c55e] focus:ring-[#22c55e]" />
                            <span className="text-gray-600 font-medium">{t('remember_me')}</span>
                        </label>
                        <Link to="/forgot-password" className="text-[#1a5c40] font-bold hover:text-[#22c55e] transition-colors">
                            {t('forgot_password')}
                        </Link>
                    </div>

                    <button type="submit" className="w-full py-3.5 mt-2 rounded-xl bg-[#22c55e] hover:bg-[#1a5c40] text-white font-bold transition-colors shadow-lg shadow-green-200">
                        {t('sign_in_btn')}
                    </button>
                </form>

                <div className="mt-8 text-center text-sm">
                    <span className="text-gray-500">{t('no_account')} </span>
                    <Link to="/signup" className="text-[#1a5c40] font-bold hover:text-[#22c55e] transition-colors">
                        {t('sign_up')}
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Login;