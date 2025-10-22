'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const NotFound = () => {
    const router = useRouter()

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center mt-13">
                <div className="mb-8">
                    <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-500 max-w-md mx-auto">
                        Sorry, we couldn't find the page you're looking for.
                        The page might have been moved or deleted.
                    </p>
                </div>

                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                    <Link
                        href="/"
                        className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Return Home
                    </Link>
                    <button
                        onClick={() => router.back()}
                        className="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFound