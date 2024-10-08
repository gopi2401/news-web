import React, { useEffect } from 'react';
import { DataContext } from '../utils/data';


function Message() {
    const { MsgLoad } = React.useContext(DataContext)
    useEffect(() => {
        setTimeout(() => {
            MsgLoad.setMsg({ load: false, message: '' })
        }, 1000)
    }, 1000);
    return (
        <>
            {MsgLoad.msg.load && <div className="fixed top-0 right-0 left-0 z-50">
                <div className="relative p-4 w-full flex justify-center items-end mb-20 h-screen">
                    <div class="max-w-lg p-1 bg-white flex justify-center items-center overflow-y-hidden overflow-x-hidden border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 class=" text-xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        <div class="">
                            <p class=" font-normal text-gray-700 dark:text-gray-400">{MsgLoad.msg.message}</p>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Message
