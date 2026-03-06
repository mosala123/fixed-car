'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const NotFound = () => {
    const router = useRouter()

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 bg-[#0f0f1a]"
            style={{ backgroundImage: "linear-gradient(rgba(15,15,26,.9), rgba(15,15,26,.95)), url('/images.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="text-center mt-13 bg-[#1a1a2e]/95 border border-white/10 rounded-2xl p-8 max-w-lg">
                <div className="mb-6 rounded-xl overflow-hidden border border-white/10">
                    <img src="/worker1.png" alt="Mechanic team" className="w-full h-36 object-cover" />
                </div>
                <div className="mb-8">
                    <h1 className="text-8xl font-bold text-white mb-4">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-400 max-w-md mx-auto">
                        Sorry, we couldn't find the page you're looking for.
                        The page might have been moved or deleted.
                    </p>
                </div>

                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                    <Link
                        href="/"
                        className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        Return Home
                    </Link>
                    <button
                        onClick={() => router.back()}
                        className="inline-block border border-white/20 text-gray-300 px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFound
