"use client"

import { Search, Briefcase, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter()

    const scrollTo = (id: string) => {
        if (window.location.pathname !== "/") {
            window.location.href = `/#${id}`
            return
        }

        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <header className="w-full fixed top-0 border-b z-100 border-border bg-background">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-md bg-card border border-border flex items-center justify-center">
                        <Briefcase size={18} className="text-primary" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">
                        JobBoard
                    </span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <button
                        onClick={() => scrollTo("home")}
                        className="hover:text-foreground cursor-pointer transition flex items-center gap-1"
                    >
                        <Briefcase size={14} /> Home
                    </button>

                    <button
                        onClick={() => scrollTo("jobs")}
                        className="hover:text-foreground cursor-pointer transition flex items-center gap-1"
                    >
                        <Search size={14} /> Jobs
                    </button>

                    <button
                        onClick={() => scrollTo("footer")}
                        className="hover:text-foreground cursor-pointer transition flex items-center gap-1"
                    >
                        <Mail size={14} /> Contact
                    </button>

                </nav>

                {/* Post Job Button */}
                <button
                    onClick={() => router.push("/post-job")}
                    className="bg-primary cursor-pointer hover:bg-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold transition">
                    Post a Job
                </button>

            </div>
        </header>
    );
}
