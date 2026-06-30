"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, CheckCircle2 } from "lucide-react";

export interface AnswerList {
  title?: string;
  items: string[];
}

export interface FAQ {
  questionKey: string;
  answerKey?: string;
  list?: AnswerList[];
}

const qaList: FAQ[] = [
  { questionKey: "Who can join CCSP?", answerKey: "Any AUPP student who is passionate about community service, leadership, and social impact is welcome to join CCSP." },
  { questionKey: "What kind of projects does CCSP organize?", answerKey: "CCSP organizes a variety of projects such as STEM education workshops, English language support, environmental awareness programs, and technology initiatives." },
  { questionKey: "How does CCSP benefit students?", answerKey: "Students gain hands-on experience, leadership skills, teamwork, and opportunities to create real social impact while connecting academic learning with practical application." },
];

const AccordionQA: React.FC = () => {

  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {qaList.map((item, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="group bg-card/60 backdrop-blur-sm border-x border-t border-border last:border-b rounded-xl px-6 py-2 text-white"
          >
            <AccordionTrigger className="text-lg text-[#002147] dark:text-white py-6">
              <div className="flex items-start gap-3 flex-1">
                <HelpCircle 
                  size={20} 
                  className="text-[#002147] dark:text-blue-300 mt-0.5 flex-shrink-0 transition-colors duration-300 " 
                />
                <span className="leading-relaxed">
                  {item.questionKey}
                </span>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="text-base space-y-4 pb-6 pl-7 text-gray-200 leading-relaxed">
              {item.answerKey && (
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 bg-[#002147] dark:bg-blue-300 rounded-full"></div>
                  <p className="text-[#002147] dark:text-white/80 leading-relaxed">
                    {item.answerKey}
                  </p>
                </div>
              )}

              {item.list?.map((listBlock, i) => (
                <div key={i} className="space-y-3 pl-6">
                  {listBlock.title && (
                    <h4 className="font-semibold text-white flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#B22234]" />
                      {listBlock.title}
                    </h4>
                  )}
                  <ul className="space-y-2 pl-6">
                    {listBlock.items.map((ans, j) => (
                      <li 
                        key={j} 
                        className="flex items-start gap-3 text-gray-300/90 leading-relaxed"
                      >
                        <div className="w-1.5 h-1.5 bg-background rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>{ans}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

    </div>
  );
};

export default AccordionQA;