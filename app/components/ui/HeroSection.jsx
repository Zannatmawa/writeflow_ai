import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Bot, Layers, CheckCircle } from 'lucide-react';

export default function Hero() {
    // Array of roles the autonomous agent cycles through for the animated headline
    const roles = ["Blog Posts", "Social Captions", "Email Copies", "Launch Strategy"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [fadeState, setFadeState] = useState('fade-in');

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeState('fade-out');

            // Allow time for the fade-out animation to complete before changing the text
            setTimeout(() => {
                setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                setFadeState('fade-in');
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-[65vh] min-h-[500px] max-h-[700px] flex items-center bg-white text-gray-900 overflow-hidden pt-16 border-b border-gray-100">

            {/* Background Subtle Mesh Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

                {/* Left Column: Context & Conversion Path (7/12 Width) */}
                <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6">

                    {/* Agent Activity Badge */}
                    <div className="inline-flex items-center justify-center lg:justify-start gap-2 self-center lg:self-start bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full shadow-sm">
                        <Sparkles size={14} className="text-gray-500 animate-pulse" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                            Multi-Role Autonomous AI Engine
                        </span>
                    </div>

                    {/* Animated Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-none">
                        Deploy background AI <br className="hidden sm:inline" />
                        agents to generate <br />
                        <span className={`inline-block text-gray-600 border-b-4 border-black pb-1 min-w-[280px] transition-all duration-300 transform ${fadeState === 'fade-in' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                            }`}>
                            {roles[currentRoleIndex]}.
                        </span>
                    </h1>

                    {/* Value Proposition Statement */}
                    <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 font-medium">
                        WriteFlow AI doesn't just suggest text. Your dedicated workspace agents run research, layout structures, and write copy entirely in the background while you manage strategy.
                    </p>

                    {/* Call To Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                        <button className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-lg font-bold text-base hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-gray-900/10 active:scale-98">
                            Start Writing Free
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto px-6 py-4 bg-transparent text-gray-700 hover:bg-gray-50 rounded-lg font-semibold text-base transition-colors border border-gray-200">
                            Watch Agent Workflow
                        </button>
                    </div>
                </div>

                {/* Right Column: Interactive Background Agent Simulation (5/12 Width) */}
                <div className="hidden lg:col-span-5 lg:flex items-center justify-center relative h-full">

                    {/* Floating Base Module Card */}
                    <div className="w-full max-w-[400px] bg-white border border-gray-200 rounded-2xl shadow-xl p-5 relative space-y-4 animate-[bounce_6s_ease-in-out_infinite]">

                        {/* Card Header Status Row */}
                        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                            <div className="flex items-center gap-2.5">
                                <div className="p-2 bg-gray-100 rounded-lg">
                                    <Bot size={18} className="text-gray-700" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-gray-900">ContentAgent_04</h4>
                                    <p className="text-[11px] text-gray-400 font-mono">ID: WFA-9082</p>
                                </div>
                            </div>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                                Running Task
                            </span>
                        </div>

                        {/* Simulated Live Activity Steps */}
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 text-xs">
                                <CheckCircle size={14} className="text-gray-400 mt-0.5 shrink-0" />
                                <p className="text-gray-500 line-through">Analyzing target audience intent parameters</p>
                            </div>
                            <div className="flex items-start gap-3 text-xs">
                                <CheckCircle size={14} className="text-gray-400 mt-0.5 shrink-0" />
                                <p className="text-gray-500 line-through">Drafting semantic SEO outline map</p>
                            </div>
                            <div className="flex items-start gap-3 text-xs bg-gray-50 p-2.5 border border-gray-100 rounded-lg animate-pulse">
                                <Layers size={14} className="text-black mt-0.5 shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-900">Executing Content Generation</p>
                                    <p className="text-gray-500 text-[11px] mt-0.5">Assembling variant optimization sets for email & blog channels...</p>
                                </div>
                            </div>
                        </div>

                        {/* Dynamic Card Graphic Accent */}
                        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-black h-full rounded-full w-2/3 animate-[pulse_1.5s_infinite]" />
                        </div>
                    </div>

                    {/* Decorative Secondary Blurry Glow Bubble in background */}
                    <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gray-100 rounded-full filter blur-3xl opacity-60 -z-10" />
                </div>

            </div>

            {/* Visual Flow Indicator Arrow to transition to next section */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 pointer-events-none">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Scroll to Explore</span>
                <div className="w-1 h-3 border border-gray-300 rounded-full flex justify-center p-0.5">
                    <div className="w-full h-1 bg-gray-400 rounded-full animate-[bounce_1.5s_infinite]" />
                </div>
            </div>

        </section>
    );
}