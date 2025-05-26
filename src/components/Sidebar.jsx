import { useState, useRef, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from "next-themes";

const navLinks = [
	{ label: 'Home', section: 'hero' },
	{ label: 'About', section: 'about' },
	{ label: 'Projects', section: 'projects' },
	{ label: 'Experience', section: 'experience' },
	{ label: 'Skills', section: 'skills' },
	{ label: 'Contact', section: 'contact' },
];

const socialLinks = [
	{
		href: 'https://github.com/dodoshrey',
		icon: Github,
		label: 'GitHub',
	},
	{
		href: 'https://www.linkedin.com/in/shrey-wahi/',
		icon: Linkedin,
		label: 'LinkedIn',
	},
	{
		href: 'mailto:wahishrey@gmail.com',
		icon: Mail,
		label: 'Email',
	},
];

const scrollToSection = (sectionId, closeMenu) => {
	const element = document.getElementById(sectionId);
	if (element) {
		window.scrollTo({
			top: element.getBoundingClientRect().top + window.pageYOffset,
			behavior: 'smooth',
		});
	}
	if (closeMenu) closeMenu(false);
};

// Sidebar open button component
function SidebarOpenButton({ className, onClick }) {
	return (
		<button
			className={`fixed bottom-6 left-6 z-50 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
			onClick={onClick}
			aria-label="Open sidebar"
			tabIndex={0}
		>
			<Menu size={28} />
		</button>
	);
}

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const desktopSidebarRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Keyboard navigation: close on Escape
    useEffect(() => {
        if (!isSidebarOpen) return;

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setIsSidebarOpen(false);
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isSidebarOpen]);

    // Only attach outside click for desktop sidebar
    useEffect(() => {
        if (!isSidebarOpen) return;

        function handleClickOutside(event) {
            if (
                desktopSidebarRef.current &&
                !desktopSidebarRef.current.contains(event.target)
            ) {
                setIsSidebarOpen(false);
            }
        }

        // Only add listener if desktop sidebar is visible
        if (window.innerWidth >= 768) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [isSidebarOpen]);

    return (
        <>
            {/* Desktop Sidebar */}
            {isSidebarOpen && (
                <aside
                    ref={desktopSidebarRef}
                    className="hidden md:flex fixed top-0 left-0 h-full w-64 bg-black/80 backdrop-blur shadow-xl z-50 flex-col justify-between border-r border-blue-300"
                    role="navigation"
                    aria-label="Sidebar Navigation"
                    tabIndex={-1}
                >
                    <div>
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-white hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                            onClick={() => setIsSidebarOpen(false)}
                            aria-label="Close sidebar"
                            tabIndex={0}
                        >
                            <X size={28} />
                        </button>
                        <br /><br />
                        <div
                            className="flex items-center justify-center h-24 text-3xl font-bold text-white tracking-wide hover:text-blue-700 transition-colors cursor-pointer"
                            onClick={() => scrollToSection('hero')}
                            tabIndex={0}
                            aria-label="Go to Home"
                            role="button"
                            onKeyDown={e => { if (e.key === "Enter" || e.key === " ") scrollToSection('hero'); }}
                        >
                            Portfolio
                        </div>
                        {/* Navigation */}
                        <nav className="flex flex-col gap-2 mt-10 px-6" aria-label="Main navigation">
                            {navLinks.map((link) => (
                                <button
                                    key={link.section}
                                    onClick={() => scrollToSection(link.section)}
                                    className="text-lg text-white hover:text-blue-700 py-3 px-4 rounded-lg transition-colors text-left font-medium hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    aria-label={`Go to ${link.label}`}
                                    tabIndex={0}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav><br /><br /><br />
                        {/* Resume Link */}
                        <div className="flex justify-center my-4">
                            <a
                                href="https://drive.google.com/uc?export=download&id=1S0nqdpUimw_mBBQNxVdTZzinGrdFv7Xg"
                                className="flex items-center gap-2 px-4 py-2 w-44 justify-center rounded-lg bg-gray-900 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                                aria-label="Download Resume"
                                target="_blank"
                                rel="noopener noreferrer"
                                tabIndex={0}
                            >
                                Download Resume
                            </a>
                        </div>
                        <div className="flex justify-center my-4">
                            {mounted && (
                                <button
                                    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                                    className="flex items-center gap-2 px-4 py-2 w-44 justify-center rounded-lg bg-gray-900 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    aria-label="Toggle theme"
                                    tabIndex={0}
                                >
                                    {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                                    <span>{resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                                </button>
                            )}
                        </div>
                    </div>
                    {/* Social Links */}
                    <div className="flex flex-row items-center gap-4 mb-8 px-16">
                        {socialLinks.map(({ href, icon: Icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                                aria-label={label}
                                tabIndex={0}
                            >
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>
                </aside>
            )}

            {/* Mobile Drawer Sidebar */}
            {isSidebarOpen && (
                <div className="md:hidden fixed inset-0 z-50 flex" role="dialog" aria-modal="true" aria-label="Mobile Sidebar Navigation">
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setIsSidebarOpen(false)}
                        tabIndex={-1}
                        aria-hidden="true"
                    />
                    {/* Drawer */}
                    <aside
                        className="relative w-4/5 max-w-xs bg-black/90 backdrop-blur shadow-xl flex flex-col justify-between border-r border-blue-300 animate-slide-in-left"
                        tabIndex={-1}
                        role="navigation"
                        aria-label="Sidebar Navigation"
                    >
                        <div>
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 text-white hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                onClick={() => setIsSidebarOpen(false)}
                                aria-label="Close sidebar"
                                tabIndex={0}
                            >
                                <X size={28} />
                            </button>
                            <br /><br />
							<div
								className="flex items-center justify-center h-24 text-3xl font-bold text-white cursor-pointer"
								onClick={() => {
									scrollToSection('hero', setIsSidebarOpen);
								}}
								tabIndex={0}
								aria-label="Go to Home"
								role="button"
								onKeyDown={e => { if (e.key === "Enter" || e.key === " ") scrollToSection('hero', setIsSidebarOpen); }}
							>
								Portfolio
							</div>
							{/* Navigation */}
							<nav className="flex flex-col gap-2 mt-10 px-6" aria-label="Main navigation">
								{navLinks.map((link) => (
									<button
										key={link.section}
										onClick={() => scrollToSection(link.section, setIsSidebarOpen)}
										className="text-lg text-white py-3 px-4 rounded-lg transition-colors text-left font-medium hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
										aria-label={`Go to ${link.label}`}
										tabIndex={0}
									>
										{link.label}
									</button>
								))}
							</nav><br /><br /><br />
                            {/* Resume Link */}
                            <div className="flex justify-center my-4">
                                <a
                                    href="https://drive.google.com/uc?export=download&id=1S0nqdpUimw_mBBQNxVdTZzinGrdFv7Xg"
                                    className="flex items-center gap-2 px-4 py-2 w-44 justify-center rounded-lg bg-gray-900 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    aria-label="Download Resume"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    tabIndex={0}
                                >
                                    Download Resume
                                </a>
                            </div>
							{/* Theme Toggle Button */}
							<div className="flex justify-center my-4">
								{mounted && (
									<button
										onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
										className="flex items-center gap-2 px-4 py-2 w-44 justify-center rounded-lg bg-gray-900 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
										aria-label="Toggle theme"
										tabIndex={0}
									>
										{resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
										<span>{resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}</span>
									</button>
								)}
							</div>
						</div>
						{/* Social Links */}
						<div className="flex flex-row items-center gap-4 mb-8 px-8">
							{socialLinks.map(({ href, icon: Icon, label }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
									aria-label={label}
									tabIndex={0}
								>
									<Icon size={24} />
								</a>
							))}
						</div>
					</aside>
				</div>
            )}

            {/* Sidebar Open Buttons */}
            {!isSidebarOpen && (
				<>
					{/* Desktop */}
					<SidebarOpenButton
						className="hidden md:flex"
						onClick={() => setIsSidebarOpen(true)}
					/>
					{/* Mobile */}
					<SidebarOpenButton
						className="md:hidden"
						onClick={() => setIsSidebarOpen(true)}
					/>
				</>
			)}
		</>
	);
};

export default Sidebar;