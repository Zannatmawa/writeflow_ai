"use client"

import React, { useState } from 'react';
import { Menu, X, LayoutDashboard, FileText, Home, Compass, BookOpen, Info, Mail, LogOut, User, Settings } from 'lucide-react';

export default function Navbar() {
    // Authentication states to manage route configurations dynamically
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    // Structural Route Matrices
    const loggedOutRoutes = [
        { name: 'Home', path: '#home', icon: Home },
        { name: 'Explore', path: '#explore', icon: Compass },
        { name: 'Blog', path: '#blog', icon: BookOpen },
        { name: 'About', path: '#about', icon: Info },
        { name: 'Contact', path: '#contact', icon: Mail },
    ];

    const loggedInRoutes = [
        { name: 'Dashboard', path: '#dashboard', icon: LayoutDashboard },
        { name: 'My Documents', path: '#documents', icon: FileText },
        { name: 'Explore', path: '#explore', icon: Compass },
        { name: 'Blog', path: '#blog', icon: BookOpen },
        { name: 'About', path: '#about', icon: Info },
        { name: 'Contact', path: '#contact', icon: Mail },
    ];

    const activeRoutes = isLoggedIn ? loggedInRoutes : loggedOutRoutes;

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Brand Identity */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <span className="font-bold text-xl tracking-tight">
                            WriteFlow AI
                        </span>
                    </div>

                    {/* Desktop Links (>= 1280px Grid targets) */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {activeRoutes.map((route) => (
                            <a
                                key={route.name}
                                href={route.path}
                                className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100"
                            >
                                {route.name}
                            </a>
                        ))}
                    </div>

                    {/* User Operations Control Panel */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* Dev Simulator Button to quickly test both logged out / logged in states */}
                        <button
                            onClick={() => { setIsLoggedIn(!isLoggedIn); setIsProfileOpen(false); }}
                            className="text-xs text-gray-400 hover:text-gray-600 border border-dashed border-gray-300 px-2 py-1 rounded"
                        >
                            {isLoggedIn ? "Simulate: Log Out" : "Simulate: Log In"}
                        </button>

                        {isLoggedIn ? (
                            /* Profile Menu Dropdown */
                            <div className="relative">
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="flex items-center p-1 rounded-full border border-gray-200 hover:shadow-sm focus:outline-none transition-all"
                                >
                                    <img
                                        className="h-8 w-8 rounded-full object-cover"
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                                        alt="User Menu"
                                    />
                                </button>

                                {isProfileOpen && (
                                    <div className="absolute right-0 mt-2 w-56 rounded-md border bg-white border-gray-200 shadow-lg py-1 z-50">
                                        <div className="px-4 py-2 border-b border-gray-100">
                                            <p className="text-sm font-semibold">Sarah Jenkins</p>
                                            <p className="text-xs text-gray-500 truncate">sarah.j@writeflow.ai</p>
                                        </div>
                                        <a href="#profile" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50"><User size={16} /> Profile</a>
                                        <a href="#settings" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50"><Settings size={16} /> Settings</a>
                                        <hr className="border-gray-100" />
                                        <button
                                            onClick={() => { setIsLoggedIn(false); setIsProfileOpen(false); }}
                                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors text-left"
                                        >
                                            <LogOut size={16} /> Log Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* Guest Actions */
                            <div className="flex items-center space-x-3">
                                <button onClick={() => setIsLoggedIn(true)} className="text-sm font-medium hover:text-gray-600">
                                    Sign In
                                </button>
                                <button onClick={() => setIsLoggedIn(true)} className="bg-black text-white text-sm px-4 py-2 rounded-md font-medium">
                                    Get Started
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Responsive Mobile Trigger Container */}
                    <div className="flex lg:hidden items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Drawer Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-inner">

                    {isLoggedIn && (
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md mb-2">
                            <img
                                className="h-10 w-10 rounded-full object-cover"
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                                alt="Mobile user card"
                            />
                            <div>
                                <p className="text-sm font-semibold">Sarah Jenkins</p>
                                <p className="text-xs text-gray-500">sarah.j@writeflow.ai</p>
                            </div>
                        </div>
                    )}

                    <div className="space-y-1">
                        {activeRoutes.map((route) => {
                            const IconComponent = route.icon;
                            return (
                                <a
                                    key={route.name}
                                    href={route.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
                                >
                                    <IconComponent size={18} className="text-gray-400" />
                                    {route.name}
                                </a>
                            );
                        })}
                    </div>

                    <hr className="border-gray-200 my-2" />

                    {/* Contextual Action Rows for Mobile Stack */}
                    <div>
                        {isLoggedIn ? (
                            <div className="space-y-1">
                                <a href="#profile" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2 text-base rounded-md hover:bg-gray-50"><User size={18} className="text-gray-400" /> Profile Settings</a>
                                <button
                                    onClick={() => { setIsLoggedIn(false); setIsMobileMenuOpen(false); }}
                                    className="w-full flex items-center gap-3 px-3 py-2 text-base rounded-md text-red-600 hover:bg-red-50 text-left"
                                >
                                    <LogOut size={18} /> Log Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col space-y-2 px-3">
                                <button onClick={() => { setIsLoggedIn(true); setIsMobileMenuOpen(false); }} className="w-full py-2 text-center text-sm font-medium border border-gray-300 rounded-md">
                                    Sign In
                                </button>
                                <button onClick={() => { setIsLoggedIn(true); setIsMobileMenuOpen(false); }} className="w-full py-2 text-center text-sm font-medium bg-black text-white rounded-md">
                                    Get Started
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}