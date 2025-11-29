import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
        }}>
            <div style={{
                textAlign: 'center',
                maxWidth: '600px'
            }}>
                {/* 404 Number */}
                <div style={{
                    fontSize: '150px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f97316 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: '1',
                    marginBottom: '20px'
                }}>
                    404
                </div>

                {/* Error Message */}
                <h1 className="text-4xl font-bold text-white mb-4">
                    Page Not Found
                </h1>

                <p className="text-xl text-slate-300 mb-8">
                    Oops! The page you're looking for doesn't exist.
                    <br />
                    <span className="text-slate-400 text-base">
                        It might have been moved or deleted.
                    </span>
                </p>

                {/* Illustration */}
                <div className="flex justify-center mb-8">
                    <svg className="w-64 h-64 text-purple-500/20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        to="/"
                        className="w-full sm:w-auto bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 flex items-center justify-center gap-2 group"
                    >
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Go Home</span>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-500/30 flex items-center justify-center gap-2 group border border-slate-600"
                    >
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Go Back</span>
                    </button>
                </div>

                {/* Quick Links */}
                <div className="mt-12">
                    <p className="text-slate-400 text-sm mb-4">Maybe you were looking for:</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link
                            to="/about"
                            className="px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            About
                        </Link>
                        <Link
                            to="/projects"
                            className="px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Projects
                        </Link>
                        <Link
                            to="/contact"
                            className="px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
