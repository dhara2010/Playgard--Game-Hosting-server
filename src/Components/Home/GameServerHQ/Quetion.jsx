import React, { useState } from 'react';
import { Link } from 'react-router';

function Quetion() {
    const QA = [
        {
            name: "Account",
            questions: [
                { que: "What is Shared hosting?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "Do you include SSL Certificates?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How many website can I host?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How to use the Track Delivery feature in the cPanel?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How can I diversify my investment portfolio?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How can I diversify my investment portfolio?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." }
            ]
        },
        {
            name: "Order & Purchases",
            questions: [
                { que: "Do you include SSL Certificates?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How many website can I host?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How to use the Track Delivery feature in the cPanel?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "What is Shared hosting?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How can I diversify my investment portfolio?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How can I diversify my investment portfolio?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." }
            ]
        },
        {
            name: "Returns & Refunds",
            questions: [
                { que: "What is Shared hosting?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "Do you include SSL Certificates?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How many website can I host?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How to use the Track Delivery feature in the cPanel?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How can I diversify my investment portfolio?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How can I diversify my investment portfolio?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." }
            ]
        },
        {
            name: "Shipping & Tracking",
            questions: [
                { que: "Do you include SSL Certificates?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How many website can I host?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How to use the Track Delivery feature in the cPanel?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "What is Shared hosting?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How can I diversify my investment portfolio?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How can I diversify my investment portfolio?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." }
            ]
        },
        {
            name: "Fees & Billing",
            questions: [
                { que: "What is Shared hosting?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "Do you include SSL Certificates?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How many website can I host?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How to use the Track Delivery feature in the cPanel?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How can I diversify my investment portfolio?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How can I diversify my investment portfolio?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." }
            ]
        },
        {
            name: "Other",
            questions: [
                { que: "Do you include SSL Certificates?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How many website can I host?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How to use the Track Delivery feature in the cPanel?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "What is Shared hosting?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How can I diversify my investment portfolio?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." },
                { que: "How can I diversify my investment portfolio?", ans: "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice." }
            ]
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState(0);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='bg-dark text-white'>
            <div className="px-30 pt-4">
                <div className="flex justify-between mt-10">
                    <div className="flex flex-col">
                        <ul className='space-y-3 text-[19px] font-semibold mt-5'>
                            {QA.map((category, index) => (
                                <li
                                    key={index}
                                    onClick={() => {
                                        setSelectedCategory(index);
                                        setOpenIndex(null);
                                    }}
                                    className={`relative cursor-pointer pl-6 transition-colors duration-300 hover:gradient-text ${selectedCategory === index ? "gradient-text font-bold" : ""}`}>
                                    <span className={`absolute left-0 top-1/2 -translate-y-1/2 size-1 rounded-full ${selectedCategory === index ? "w-[2.5px] h-[35px] rounded-none bg-purple-500" : "bg-neutral-400"}`}></span>
                                    <span >{category.name}</span>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className='w-150'>
                        <div className='flex flex-col gap-4 p-4'>
                            {QA[selectedCategory].questions.map((q, i) => (
                                <div key={i} className='flex flex-col'>
                                    <div
                                        className='flex justify-between items-center cursor-pointer'
                                        onClick={() => toggleAnswer(i)}
                                    >
                                        <p className={`text-[18px] font-semibold ${openIndex === i ? "gradient-text" : "text-white"}`}>{q.que}</p>
                                        <div className={`rounded-full size-6 flex items-center justify-center cursor-pointer transition-colors duration-300 ${openIndex === i ? "bg-gradient-to-b to-red-400 from-purple-700" : "bg-neutral-600"}`}>
                                            <i className={`fa-solid ${openIndex === i ? "fa-minus" : "fa-plus"} text-white`}></i>
                                        </div>
                                    </div>
                                    {openIndex === i && <p className='pt-3'>{q.ans}</p>}
                                    <hr className='mt-4 text-neutral-800' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quetion;
