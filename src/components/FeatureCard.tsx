import Icon from "@/components/ui/icon";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/20 hover:glow-sm">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
      <Icon name={icon} size={22} className="text-primary" />
    </div>
    <h3 className="font-semibold">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export default FeatureCard;