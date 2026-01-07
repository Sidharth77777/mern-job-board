"use client"

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { PROFILE_LINKS } from "@/lib/links";

export default function Footer() {

    const scrollTo = (id: string) => {
        if (window.location.pathname !== "/") {
            window.location.href = `/#${id}`
            return
        }

        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
    return (
        <footer id="footer" className="border-t scroll-smooth border-border bg-background mt-16">
            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">JobBoard</h3>
                        <p className="text-sm text-muted-foreground mt-2 max-w-xs">
                            A simple job board platform built with the MERN stack. Find jobs,
                            post openings, and connect talent with opportunity.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <button
                                    onClick={() => scrollTo("home")}
                                    className="hover:text-foreground cursor-pointer transition"
                                >
                                    Home
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() => scrollTo("jobs")}
                                    className="hover:text-foreground cursor-pointer transition"
                                >
                                    Jobs
                                </button>
                            </li>

                            <li>
                                <a
                                    href="/post-job"
                                    className="hover:text-foreground transition inline-block"
                                >
                                    Post a Job
                                </a>
                            </li>

                            <li>
                                <button
                                    onClick={() => scrollTo("footer")}
                                    className="hover:text-foreground cursor-pointer transition"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>

                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                            Contact
                        </h4>

                        <Link
                            href={`mailto:${PROFILE_LINKS.MAIL}`}
                            className="text-sm text-muted-foreground mb-4 block hover:text-primary transition"
                        >
                            {PROFILE_LINKS.MAIL}
                        </Link>

                        <div className="flex gap-4 text-muted-foreground">

                            <Link
                                href={PROFILE_LINKS.X}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X (Twitter)"
                            >
                                <FaXTwitter className="w-5 h-5 hover:text-primary cursor-pointer transition" />
                            </Link>

                            <Link
                                href={PROFILE_LINKS.GITHUB}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5 hover:text-primary cursor-pointer transition" />
                            </Link>

                            <Link
                                href={PROFILE_LINKS.LINKEDIN}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5 hover:text-primary cursor-pointer transition" />
                            </Link>

                            <a
                                href={`mailto:${PROFILE_LINKS.MAIL}`}
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5 hover:text-primary cursor-pointer transition" />
                            </a>

                        </div>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <span>© {new Date().getFullYear()} JobBoard. All rights reserved.</span>
                    <span className="mt-2 md:mt-0">Built with MERN Stack</span>
                </div>

            </div>
        </footer>
    );
}
