import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Edit({ auth, news }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Detail News
                </h2>
            }
        >
            <Head title="Edit" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form>
                                <div className="form-control w-full">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Title
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            name="title"
                                            required
                                            value={news.title}
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
                                            className="input input-bordered w-full"
                                            name="category"
                                            required
                                            value={news.category}
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
                                            className="textarea input-bordered w-full"
                                            required
                                            value={news.description}
                                            rows="5"
                                        ></textarea>
                                    </div>
                                    <Link
                                        href={route("dashboard")}
                                        className="btn btn-primary mt-4"
                                    >
                                        BACK
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
