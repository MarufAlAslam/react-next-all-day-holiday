import React from "react";
import FaqItem from "./FaqItem";
import Link from "next/link";

const Faq = () => {
  const FaqData = [
    {
      id: 1,
      question: "Czy hotel oferuje darmowe śniadanie?",
      answer:
        "Tak, w cenie pokoju oferujemy pyszne, bezpłatne śniadanie dla naszych gości.",
    },
    {
      id: 2,
      question: "Czy hotel zapewnia transfer z lotniska?",
      answer:
        "Tak, w cenie pokoju oferujemy pyszne, bezpłatne śniadanie dla naszych gości.",
    },
    {
      id: 3,
      question: "Czy w hotelu można wypożyczyć rowery?",
      answer:
        "Tak, w cenie pokoju oferujemy pyszne, bezpłatne śniadanie dla naszych gości.",
    },
    {
      id: 4,
      question: "Czy w hotelu są specjalne udogodnienia dla rodzin z dziećmi? Co dokładnie oferuje hotel dla najmłodszych gości i czy pobyt z dziećmi jest przyjazny dla rodzin?",
      answer:
        "Tak, w cenie pokoju oferujemy pyszne, bezpłatne śniadanie dla naszych gości.",
    },
    {
      id: 5,
      question: "Czy hotel posiada parking dla gości?",
      answer:
        "Tak, w cenie pokoju oferujemy pyszne, bezpłatne śniadanie dla naszych gości.",
    },
    {
      id: 6,
      question:
        "Quis nec vitae non nulla iaculis sit lectus?",
      answer:
        "Tak, w cenie pokoju oferujemy pyszne, bezpłatne śniadanie dla naszych gości.",
    },
  ];

  return (
    <section className="">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="md:text-4xl text-xl" data-aos="fade-down">
            Najczęstsze pytania
          </h2>
        </div>

        <div class="mt-10 space-y-4" data-aos="fade-up" data-aos-delay="100">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              {FaqData.slice(0, FaqData.length/2).map((faq) => (
                <FaqItem key={faq.id} faq={faq} />
              ))}
            </div>
            <div>
              {FaqData.slice(FaqData.length/2, FaqData.length).map((faq) => (
                <FaqItem key={faq.id} faq={faq} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
