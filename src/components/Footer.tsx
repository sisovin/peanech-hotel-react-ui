
import React from "react";
// import LogoIcon from "./LogoIcon";
// If LogoIcon is an SVG file, use the correct extension and import method:
import LogoIcon from "./LogoIcon";

// If LogoIcon is a TSX/JSX component, use the correct extension:
//
// import LogoIcon from "../assets/LogoIcon.tsx";
//
// Make sure the file exists at the specified path.

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <LogoIcon />
                            <h3 className="ml-2 text-xl font-bold">Peanech-HMS</h3>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Experience luxury, comfort, and exceptional service at our premier hotel.
                        </p>
                        <div className="flex space-x-4">
                            {/* Twitter */}
                            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.832.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.896-.959-2.173-1.559-3.591-1.559-3.179 0-5.515 2.966-4.797 5.441-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.98 4.89-.696.188-1.451.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.396-7.29 2.089 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.018 4.85.07 3.252.148 4.771 1.691 4.919 4.919.052 1.265.07 1.645.07 4.849 0 3.205-.018 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.052-1.644.07-4.85.07-3.204 0-3.584-.018-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.051-1.265-.07-1.644-.07-4.849 0-3.204.018-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.05 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.018-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.055 1.281-.074 1.689-.074 4.948 0 3.259.019 3.668.074 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.055 1.689.074 4.948.074 3.259 0 3.668-.019 4.948-.074 4.354-.2 6.78-2.618 6.979-6.98.059-1.28.077-1.689.077-4.948 0-3.259-.018-3.667-.077-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.077-4.949-.077zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.643-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.018 4.85.07 3.252.148 4.771 1.691 4.919 4.919.052 1.265.07 1.645.07 4.849 0 3.205-.018 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.052-1.644.07-4.85.07-3.204 0-3.584-.018-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.051-1.265-.07-1.644-.07-4.849 0-3.204.018-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.05 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.018-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.055 1.281-.074 1.689-.074 4.948 0 3.259.019 3.668.074 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.055 1.689.074 4.948.074 3.259 0 3.668-.019 4.948-.074 4.354-.2 6.78-2.618 6.979-6.98.059-1.28.077-1.689.077-4.948 0-3.259-.018-3.667-.077-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.077-4.949-.077zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.643-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rooms</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Booking</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Complaints</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Feedback</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Account</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and special offers.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 w-full rounded-l-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-foreground"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-primary dark:bg-primary-foreground text-white rounded-r-md hover:bg-primary-foreground dark:hover:bg-primary transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Peanech-HMS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;