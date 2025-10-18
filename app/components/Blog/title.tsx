export default function BlogTitle({ date, title }: { date: string, title: string }) {
    return (
        <div className="flex gap-3 items-center duration-200 hover:bg-green-950 cursor-pointer">
            <span className="bg-green-800 w-1 h-10 rounded-full"></span>
            <div className="flex flex-col py-1">
                <p className="text-xs text-gray-600">{date}</p>
                <p className="font-mono font-medium text-gray-300 text-[15.5px]">{title}</p>
            </div>
        </div>
    )
}
