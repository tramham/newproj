import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string | React.ReactNode;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="text-red-700" size={20} />
        ) : (
          <ChevronDown className="text-red-700" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "When should I start the college application process?",
      answer: (
        <div>
          <p className="mb-2">
            Start during your junior year of high school to allow time for test prep, 
            essay writing, and thorough research on university programs and what they can offer you.
          </p>
          <p>
            For highly selective universities, high school extracurriculars and 
            summer activities should be thoughtfully planned. The earlier you begin, 
            the more strategic your approach can be.
          </p>
        </div>
      )
    },
    {
      question: "How do your mentoring sessions work?",
      answer: (
        <div>
          <p className="mb-2">
            Sessions are conducted virtually or in-person, tailored to your needs and schedule. 
            We&apos;ll create a personalized plan based on your goals and timeline.
          </p>
          <p>
            Each session is focused on specific aspects of your application, whether it&apos;s 
            brainstorming essay topics, reviewing drafts, or developing your application strategy.
          </p>
        </div>
      )
    },
    {
      question: "What's included in the essay editing service?",
      answer: (
        <div>
          <p className="mb-2">
            As a mentor, I guide students through a comprehensive process of brainstorming, drafting, and refinement. 
            Through thoughtful reflection and strategic storytelling, we craft compelling essays that showcase each student&apos;s unique strengths 
            and experiences.
          </p>
          <p>
            Beyond helping students gain an edge in college admissions, this process develops critical thinking and writing skills that serve
            them well beyond college—from club applications to career advancement. 
            The result? Essays they&apos;re proud of and writing confidence that lasts a lifetime.
          </p>
        </div>
      )
    },
    {
      question: "Can I personalize a package to meet my student&apos;s needs?",
      answer: (
        <p>
          Of course! I am more than happy to create a customized plan that meets your specific needs and budget. 
          Every student is unique, and your mentoring experience should reflect that. 
          Feel free to contact me to discuss your requirements, and we can design a package that works for you.
        </p>
      )
    },
    {
      question: "How do you help with college selection?",
      answer: (
        <div>
          <p className="mb-2">
            I help students identify colleges that align with their academic interests, career goals, and personal preferences. 
            This includes analyzing acceptance rates, program strengths, campus culture, and financial considerations.
          </p>
          <p>
            Together, we&apos;ll create a balanced list of reach, target, and safety schools to maximize your chances of acceptance 
            while ensuring you have options that excite you.
          </p>
        </div>
      )
    },
    {
      question: "What makes your approach different from other college consultants?",
      answer: (
        <div>
          <p className="mb-2">
            My approach is personalized and holistic. I don&apos;t just focus on getting you into college—I help you develop skills 
            and confidence that will serve you throughout your academic and professional life.
          </p>
          <p>
            With my experience at Cornell University&apos;s Undergraduate Admissions Office, I offer insider knowledge of how 
            admissions committees evaluate applications. This perspective, combined with my commitment to authentic storytelling, 
            helps students present their best selves in their applications.
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about the college application process and my mentoring services.
          </p>
        </div>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? I&apos;m here to help!
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-red-700 text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 