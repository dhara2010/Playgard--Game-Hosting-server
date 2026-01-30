import React, { useState } from 'react'

function Answer() {
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
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='bg-dark h-150 text-white'>
            <div className="flex mx-30 pt-30 ">
                <div className="w-1/2 flex flex-col gap-4">
                    <h1 className='text-5xl max-w-4xl font-bold'>Have Questions? We Have Answers!</h1>
                    <p className='text-[17px]'>Our main focus is on quality and making sure you have everything you need to succeed. It's like buying a car.</p>
                    <div className="flex gap-5">
                        <div className="group inline-block ">
                            <button className="relative overflow-hidden bg-gradient-to-r from-red-500  via-pink-400 to-purple-400 rounded-full px-6 py-4 text-white font-semibol">
                                <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10">View FAQ</span>
                                <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-10">View FAQ</span></a>
                            </button>
                        </div>
                        <div className="group inline-block ">
                            <button className="relative overflow-hidden bg-neutral-800 rounded-full px-6 py-4 text-white font-semibol">
                                <a href="/contact"><span className="block transition-transform duration-300 group-hover:-translate-y-10">View Knowledgebase</span>
                                <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-10">View Knowledgebase</span></a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col gap-4 p-4'>
                    {QA.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className='flex flex-col'>
                                <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleAnswer(index)} >
                                    <p className={`text-[18px] font-semibold ${isOpen ? "gradient-text" : "text-white"}`}>{item.que}</p>
                                    <div className={`rounded-full size-6 flex items-center justify-center cursor-pointer transition-colors duration-300 ${isOpen ? "bg-gradient-to-b to-red-400 from-purple-700" : "bg-neutral-600"}`}>
                                        <i className={`fa-solid ${isOpen ? "fa-minus" : "fa-plus"} text-white`}></i>
                                    </div>
                                </div>
                                {isOpen && <p className='pt-3'>{item.ans}</p>}
                                <hr className='mt-4 text-neutral-800' />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Answer
