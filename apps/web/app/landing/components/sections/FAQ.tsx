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
    <section className="w-full max-w-[1856px] mt-[116px] max-md:max-w-full max-md:mt-10">
      <div className="flex min-h-[493px] w-full max-w-[1796px] flex-wrap ml-[60px] max-md:max-w-full">
        <div className="min-w-60 text-[rgba(51,51,51,1)] font-normal whitespace-nowrap grow shrink w-[347px] max-md:max-w-full">
          <h2 className="text-lg leading-normal">FAQ</h2>
          <div className="text-[112px] leading-none tracking-[-4.68px] mt-[27px] max-md:max-w-full max-md:text-[40px]">
            Answers.
          </div>
        </div>
        <div className="min-w-60 grow shrink w-[940px] max-md:max-w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-[21px] text-[rgba(16,24,40,1)] font-medium uppercase leading-none">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
