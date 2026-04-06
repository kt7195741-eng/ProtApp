import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Signup = ({ onLogin }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setError(t('photoTooLarge') || 'Fotoğraf 2 MB\'tan küçük olmalıdır');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePhoto(reader.result);
      setError('');
    };
    reader.readAsDataURL(file);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError(t('error_passwords_not_match'));
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, profilePhoto: profilePhoto || null }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.token) localStorage.setItem('token', data.token);
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        } else {
          localStorage.setItem('user', JSON.stringify({ name, email, profilePhoto: profilePhoto || null }));
        }

        setSuccess(true);
        onLogin();

        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        const errorText = await response.text();
        try {
          const errorJson = JSON.parse(errorText);
          const msg = errorJson.message || errorText;
          setError(msg);
        } catch {
          setError(errorText);
        }
      }
    } catch (err) {
      setError("Sunucu bağlantı hatası.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden transition-all duration-500">

        {success ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="rounded-full bg-green-50 p-6 mb-6">
              <svg className="w-16 h-16 text-[#22c55e] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold text-[#0a3d2e] mb-3">{t('registration_success_title')}</h2>
            <p className="text-gray-500">{t('redirecting_to_dashboard')}</p>
            <div className="mt-8 w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div className="bg-[#22c55e] h-2 rounded-full animate-[width_2s_ease-in-out_forwards]" style={{ width: '0%' }}></div>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-[#0a3d2e]">{t('create_account_title')}</h2>
              <p className="mt-2 text-sm text-gray-500">{t('join_today')}</p>
            </div>

            {error && (
              <div className="mb-6 w-full bg-red-50 text-red-600 text-sm font-semibold text-center px-4 py-3 rounded-lg border border-red-100">
                {error}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSignup}>

              {/* Profile Photo Upload */}
              <div className="flex flex-col items-center mb-6">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-dashed border-gray-300 hover:border-[#22c55e] bg-gray-50 transition-colors group focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                >
                  {profilePhoto ? (
                    <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 group-hover:text-[#22c55e]">
                      <svg className="h-8 w-8 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                <span className="text-xs text-gray-400 mt-2 font-medium">{t('uploadPhoto') || 'Fotoğraf Yükle'}</span>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Ad Soyad</label>
                <input
                  name="name" type="text" required value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none text-gray-800 transition-all"
                  placeholder={t('full_name_placeholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">E-posta</label>
                <input
                  name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none text-gray-800 transition-all"
                  placeholder={t('email_address_label')}
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Şifre</label>
                <input
                  name="password" type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none text-gray-800 transition-all pr-10"
                  placeholder={t('password_placeholder')}
                />
                <button
                  type="button" className="absolute bottom-0 right-0 top-6 pr-4 flex items-center text-gray-400 hover:text-[#0a3d2e]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  )}
                </button>
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Şifre Tekrar</label>
                <input
                  name="confirm-password" type={showConfirmPassword ? "text" : "password"} required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none text-gray-800 transition-all pr-10"
                  placeholder={t('confirm_password_placeholder')}
                />
                <button
                  type="button" className="absolute bottom-0 right-0 top-6 pr-4 flex items-center text-gray-400 hover:text-[#0a3d2e]"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  )}
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-4 mt-2 rounded-xl bg-[#22c55e] hover:bg-[#1a5c40] text-white font-bold transition-all shadow-lg shadow-green-200"
              >
                {t('create_account_btn')}
              </button>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-500">
                  {t('already_have_account')}{' '}
                  <Link to="/login" className="font-bold text-[#1a5c40] hover:text-[#22c55e] transition-colors">
                    {t('sign_in_link')}
                  </Link>
                </p>
              </div>
            </form>
          </>
        )}
      </div>
      <style>{`
        @keyframes width {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Signup;