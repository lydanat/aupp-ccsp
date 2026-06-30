import React from "react";
import { cards } from "@/constant/constant";
import { Card } from "@/components/ui/card";

interface HoverCardProps {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
  borderColor: string;
}

const HoverCard: React.FC<HoverCardProps> = ({
  title,
  description,
  Icon,
  iconColor,
  borderColor,
}) => {
  return (
    <Card className="container relative w-full bg-background border-border rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center p-6 gap-4">
      <div
        className={`relative w-40 h-40 border-2 ${borderColor} rounded-full flex items-center justify-center mb-4`}
      >
        <Icon className={`w-20 h-20 ${iconColor}`} />
      </div>

      <h3 className="text-xl text-center font-bold text-foreground">
        {title}
      </h3>

      <p className="leading-relaxed text-center text-foreground text-sm">
        {description}
      </p>
    </Card>
  );
};

const VisionCard = () => {
  return (
    <section className="my-20">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <HoverCard
            key={index}
            title={card.title}
            description={card.description}
            Icon={card.icon}
            iconColor={card.iconColor}
            borderColor={card.borderColor}
          />
        ))}
      </div>
    </section>
  );
};

export default VisionCard;