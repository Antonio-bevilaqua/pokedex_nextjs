import React from 'react';
import "@/styles/footer/footer.css";

const Footer = ({ children }: { children: any }) => {
    return (
        <div className="footer fixed flex bottom-0 left-0 justify-center w-full pointer-events-none">
            <div className="pagination-wrapper relative">
                <div className={`
                    pagination-footer-container 
                    p-1 
                    w-fit 
                    pointer-events-auto  
                    border-t-2 
                    border-solid 
                    border-gray-600 
                    bg-gray-300 
                    dark:bg-gray-900
                    dark:border-sky-200
                    after:border-2 
                    after:border-solid 
                    after:border-gray-600 
                    after:bg-gray-300 
                    after:dark:bg-gray-900
                    after:dark:border-sky-200
                    before:border-2 
                    before:border-solid 
                    before:border-gray-600 
                    before:bg-gray-300 
                    before:dark:bg-gray-900
                    before:dark:border-sky-200
                `}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Footer