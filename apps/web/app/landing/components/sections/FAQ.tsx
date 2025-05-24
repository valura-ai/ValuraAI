import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is my data safe?",
      answer:
        "Yes, we use industry-standard encryption and security measures to protect your data.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all new users.",
    },
    {
      question: "What comes with parthean Premium?",
      answer:
        "Premium includes advanced features, priority support, and exclusive content.",
    },
    {
      question: "What is plaid?",
      answer:
        "Plaid is a secure service we use to connect with your bank accounts.",
    },
    {
      question: "What is dwolla?",
      answer:
        "Dwolla is our payment processing partner for secure transactions.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mt-24 max-md:mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20">
          {/* Left Column - Title */}
          <div className="xl:w-2/5 flex-shrink-0 xl:pr-8">
            <h2 className="text-lg leading-normal text-gray-700 font-normal mb-4">
              FAQ
            </h2>
            <div className="font-['Junicode'] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight text-gray-800 max-md:text-4xl">
              Answers.
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="xl:w-3/5 flex-grow min-w-0 mt-8 xl:mt-0">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-200 pb-4"
                >
                  <AccordionTrigger className="text-lg sm:text-xl text-gray-900 font-medium uppercase leading-relaxed text-left hover:text-gray-700 transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
