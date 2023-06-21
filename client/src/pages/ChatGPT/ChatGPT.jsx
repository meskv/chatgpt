import React from 'react'

const ChatGPT = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-600 min-h-screen">
                {/* Sidebar content */}
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col min-h-screen">
                <div className="overflow-auto h-4/5 bg-gray-800">
                    {/* Main content scrollable area */}
                    {/* Add your scrollable content here */}

                </div>

                <div className="bg-red-300 h-1/5">
                    {/* Fixed bottom div */}
                    {/* Add your fixed bottom content here */}
                </div>
            </div>
        </div>
    )
}

export default ChatGPT