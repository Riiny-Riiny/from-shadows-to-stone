'use client';

import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4 bg-gray-50 rounded-b-lg">
          <div className="pt-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  items: {
    id: string;
    title: string;
    content: React.ReactNode;
  }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set([items[0]?.id]));

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          isOpen={openItems.has(item.id)}
          onToggle={() => toggleItem(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
} 