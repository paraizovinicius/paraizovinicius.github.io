import React from "react";

interface TimelineItem {
  id: string;
  year: string;
  content: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function TimelineComponent({ items }: TimelineProps) {
  return (
    <div className="relative border-l-4 border-orange-400 ml-4">
      {items.map((item) => (
        <div key={item.id} className="mb-12 relative">
          {/* Anchor for scroll */}
          <div id={item.id}></div>

          {/* Dot */}
          <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-orange-500 border-2 border-white shadow-md"></div>

          {/* Content */}
          <div className="ml-6">
            <div className="text-lg font-semibold text-gray-900 text-left">{item.year}</div>
            <div className="mt-2 text-gray-700">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
