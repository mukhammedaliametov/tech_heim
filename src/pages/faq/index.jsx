import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const faqs = [
  {
    question: "Buyurtma qancha vaqtda yetib keladi?",
    answer: "Buyurtmalar odatda 2–5 ish kuni ichida yetkazib beriladi."
  },
  {
    question: "Mahsulotni qaytarishim mumkinmi?",
    answer: "Ha, 14 kun ichida qabul qilib olamiz. Buning uchun chek yoki buyurtma raqami yetarli."
  },
  {
    question: "To'lov usullari qanday?",
    answer: "Click, Payme, Uzum Pay yoki naqd to'lov orqali to'lashingiz mumkin."
  },
  {
    question: "Kargo narxi qancha?",
    answer: "100,000 so‘mdan oshgan buyurtmalarga bepul yetkazib berish mavjud."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">FAQ — Ko‘p so‘raladigan savollar</h1>
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="bg-white shadow p-4 rounded-xl border cursor-pointer">
            <button
              className="w-full flex justify-between items-center"
              onClick={() => toggle(i)}
            >
              <span className="text-lg font-semibold">{item.question}</span>
              <IoChevronDown
                className={`text-lg transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <p className="mt-3 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
