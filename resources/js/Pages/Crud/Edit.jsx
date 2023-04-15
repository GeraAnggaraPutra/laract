import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import { useState } from "react";

export default function Edit({ auth, news, flash }) {
    const { data, setData, errors, put } = useForm({
        title: news.title || "",
        description: news.description || "",
        category: news.category || "",
    });
    const [isnotif, setIsNotif] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        put(route("news.update", news.id));
        setIsNotif(true)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Edit News
                </h2>
            }
        >
            <Head title="Edit" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {isnotif && (
                                <div className="alert alert-success shadow-lg mb-5">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="stroke-current flex-shrink-0 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>{flash.message}</span>
                                    </div>
                                </div>
                            )}
                            <div className="header">
                                <Link
                                    href={route("dashboard")}
                                    className="btn btn-primary mb-1 w-full"
                                >
                                    Back
                                </Link>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-control w-full">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Title
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="input title..."
                                            className="input input-bordered w-full"
                                            name="title"
                                            required
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Category
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="input category..."
                                            className="input input-bordered w-full"
                                            name="category"
                                            required
                                            value={data.category}
                                            onChange={(e) =>
                                                setData(
                                                    "category",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Description
                                            </span>
                                        </label>
                                        <textarea
                                            name="description"
                                            placeholder="input description..."
                                            className="textarea input-bordered w-full"
                                            required
                                            value={data.description}
                                            onChange={(e) =>
                                                setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            rows="5"
                                        ></textarea>
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary mt-4"
                                    >
                                        SAVE
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
