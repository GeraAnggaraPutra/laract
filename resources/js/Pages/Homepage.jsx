import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';
import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';

export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-slate-200">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-center p-4 gap-4">
                <NewsLists news={props.news.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    );
}