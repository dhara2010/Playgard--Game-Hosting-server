import React, { useState } from 'react'

function Que() {
    const QA = [
        {
            que: "What is Shared hosting?",
            ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice."
        },
        {
            que: "Do you include SSL Certificates?",
            ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice."
        },
        {
            que: "How many websites can I host?",
            ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice."
        },
        {
            que: "How to use the Track Delivery feature in cPanel?",
            ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice."
        },
        {
            que: "How can I diversify my investment portfolio?",
            ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice."
        },
        {
            que: "How can I diversify my investment portfolio?",
            ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice."
        }
    ]
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='bg-dark h-150 text-white'>
            <div className="flex mx-30 pt-30 ">
                <div className="w-1/2 flex flex-col gap-4">
                    <h1 className='text-5xl max-w-sm leading-tight font-bold'>Got Questions?We've Got Answers.</h1>
                </div>
                <div className='w-1/2 flex flex-col gap-13 p-4'>
                    {QA.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className={`flex flex-col ${isOpen ? "border border-neutral-700 rounded-xl p-4 -ml-4" : ""}`}>
                                <div className={`flex justify-between items-center cursor-pointer `} onClick={() => toggleAnswer(index)} >
                                    <p className={`text-[18px] font-semibold ${isOpen ? "gradient-text" : "text-white"}`}>{item.que}</p>
                                    <div className={`rounded-full size-6 flex items-center justify-center cursor-pointer transition-colors duration-300 ${isOpen ? "bg-gradient-to-b to-red-400 from-purple-700" : "border border-neutral-600 rounded-full"}`}>
                                        <i className={`fa-solid ${isOpen ? "fa-minus" : "fa-plus"} text-white text-sm`}></i>
                                    </div>
                                </div>
                                {isOpen && <p className='pt-3'>{item.ans}</p>}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Que
