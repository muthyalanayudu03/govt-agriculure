import { 
  Trees, 
  Leaf, 
  TrendingUp, 
  Award,
  LucideIcon
} from 'lucide-react';
import Card from '@/components/common/Card';
import { Highlight } from '@/data/highlights';

const iconMap: Record<string, LucideIcon> = {
  trees: Trees,
  leaf: Leaf,
  'trending-up': TrendingUp,
  award: Award
};

interface HighlightCardProps {
  highlight: Highlight;
  index?: number;
}

const HighlightCard = ({ highlight, index = 0 }: HighlightCardProps) => {
  const Icon = iconMap[highlight.icon] || Award;

  return (
    <Card 
      className="text-center group h-full"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/30 text-primary mb-4 group-hover:bg-accent transition-colors duration-200">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
        {highlight.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {highlight.description}
      </p>
      {highlight.stats && (
        <div className="pt-4 border-t border-border">
          <span className="text-primary font-semibold text-lg">
            {highlight.stats}
          </span>
        </div>
      )}
    </Card>
  );
};

export default HighlightCard;
