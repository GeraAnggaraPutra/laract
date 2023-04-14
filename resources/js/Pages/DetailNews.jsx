import Navbar from "@/Components/Navbar";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function DetailNews({ title, auth, news }) {
    console.log(news);
    return (
        <div className="min-h-screen bg-slate-200">
            <Head title={title} />
            <Navbar user={auth.user} />
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold text-center mb-4">
                    {news.title}
                </h1>
                <div className="flex justify-center items-center mb-8">
                    <div className="text-gray-500 text-sm mr-2">
                        {news.category} |
                    </div>
                    <div className="text-gray-500 text-sm">{news.author}</div>
                </div>
                <div className="text-lg leading-8">{news.description}</div>
                <div className="flex justify-center items-center mt-8">
                    <Link href="/" className="btn btn-primary">
                        Kembali
                    </Link>
                </div>
            </div>
        </div>
    );
}
