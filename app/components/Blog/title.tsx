export default function BlogTitle({ date, title }: { date: string, title: string }) {
    return (
        <div className="flex gap-3 items-center duration-200 hover:bg-green-900 cursor-pointer">
            <span className="bg-green-600 w-1 h-12 rounded-full"></span>
            <div className="flex flex-col">
                <p className="text-xs text-gray-600">{date}</p>
                <p className="font-mono text-gray-300">{title}</p>
            </div>
        </div>
    )
}
