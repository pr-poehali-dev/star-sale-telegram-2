import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface StarPackProps {
  stars: number;
  price: number;
  popular?: boolean;
  onBuy: () => void;
}

const StarPackCard = ({ stars, price, popular, onBuy }: StarPackProps) => {
  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        popular ? "border-primary glow" : "border-border hover:border-primary/30 hover:glow-sm"
      }`}
    >
      {popular && (
        <div className="absolute top-3 right-3">
          <Badge className="bg-primary text-primary-foreground font-medium">
            Популярный
          </Badge>
        </div>
      )}

      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
          <span className="text-3xl">⭐</span>
        </div>

        <div>
          <h3 className="text-2xl font-bold">{stars.toLocaleString()}</h3>
          <p className="text-sm text-muted-foreground mt-1">звёзд Telegram</p>
        </div>

        <span className="text-3xl font-bold text-gradient">{price} ₽</span>

        <Button
          onClick={onBuy}
          className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
          size="lg"
        >
          <Icon name="ShoppingCart" size={16} className="mr-2" />
          Купить
        </Button>

        <p className="text-xs text-muted-foreground">
          {(price / stars).toFixed(1)} ₽ за звезду
        </p>
      </CardContent>
    </Card>
  );
};

export default StarPackCard;