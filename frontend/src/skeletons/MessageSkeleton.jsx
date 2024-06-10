

const MessageSkeleton = () => {
    return (
        <>
            <div className="flex flex-col gap-4 ">
                <div className="skeleton h-4 w-20">

                </div>
                <div className="skeleton h-4 w-28">

                </div>
            </div>

            <div className="flex flex-col gap-4 justify-end">
                <div className="skeleton h-4 w-20"></div>
                <div className="skeleton h-4 w-28"></div>
            </div>
        </>
    )
}

export default MessageSkeleton
