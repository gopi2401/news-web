import React from 'react';

function Skeleton() {

    return (
        <>
            {/* <div className='flex flex-col justify-center items-center'> */}
            <div className="grid grid-cols-1 p-5 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
                <div role="status" class="overflow-y-hidden overflow-x-hidden border border-gray-200 rounded-lg shadow animate-pulse dark:border-gray-700">
                    <div class="flex items-center justify-center h-72 bg-gray-300 dark:bg-gray-700">
                        <svg class="rounded-t-lg w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                    <div className="p-5">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        <div class="flex items-center mt-4">
                            <div className='px-3 py-2  h-6 w-14 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
                        </div>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div role="status" class="hidden md:block max-w-lg overflow-y-hidden overflow-x-hidden border border-gray-200 rounded-lg shadow animate-pulse dark:border-gray-700">
                    <div class="flex items-center justify-center h-72 bg-gray-300 dark:bg-gray-700">
                        <svg class="rounded-t-lg w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                    <div className="p-5">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        <div class="flex items-center mt-4">
                            <div className='px-3 py-2  h-6 w-14 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
                        </div>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div role="status" class="hidden lg:block max-w-lg overflow-y-hidden overflow-x-hidden border border-gray-200 rounded-lg shadow animate-pulse dark:border-gray-700">
                    <div class="flex items-center justify-center h-72 bg-gray-300 dark:bg-gray-700">
                        <svg class="rounded-t-lg w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                    <div className="p-5">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        <div class="flex items-center mt-4">
                            <div className='px-3 py-2  h-6 w-14 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
                        </div>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default Skeleton
