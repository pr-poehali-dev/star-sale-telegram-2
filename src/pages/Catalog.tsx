import { useState } from "react";
import Header from "@/components/Header";
import StarPackCard from "@/components/StarPackCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const packs = [
  { stars: 50, price: 75 },
  { stars: 100, price: 140, discount: 7 },
  { stars: 250, price: 325, discount: 13 },
  { stars: 500, price: 600, discount: 20, popular: true },
  { stars: 1000, price: 1100, discount: 27 },
  { stars: 2500, price: 2500, discount: 33 },
];

const Catalog = () => {
  const [selectedPack, setSelectedPack] = useState<typeof packs[0] | null>(null);
  const [username, setUsername] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleBuy = (pack: typeof packs[0]) => {
    setSelectedPack(pack);
    setDialogOpen(true);
  };

  const handleConfirm = () => {
    if (!username.trim()) {
      toast({
        title: "Укажите username",
        description: "Введите ваш Telegram username для доставки звёзд",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Заказ создан!",
      description: `${selectedPack?.stars} звёзд для @${username.replace("@", "")} — ${selectedPack?.price} ₽`,
    });

    setDialogOpen(false);
    setUsername("");
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Каталог <span className="text-gradient">звёзд</span>
          </h1>
          <p className="text-muted-foreground">
            Выберите подходящий пакет. Чем больше — тем выгоднее
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {packs.map((pack) => (
            <StarPackCard
              key={pack.stars}
              {...pack}
              onBuy={() => handleBuy(pack)}
            />
          ))}
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              {selectedPack?.stars.toLocaleString()} звёзд
            </DialogTitle>
            <DialogDescription>
              Укажите Telegram username для доставки звёзд
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-2">
            <div className="space-y-2">
              <Label htmlFor="username">Telegram username</Label>
              <Input
                id="username"
                placeholder="@username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
              <span className="text-sm text-muted-foreground">К оплате:</span>
              <span className="text-xl font-bold text-gradient">{selectedPack?.price} ₽</span>
            </div>

            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
              size="lg"
              onClick={handleConfirm}
            >
              <Icon name="CreditCard" size={16} className="mr-2" />
              Перейти к оплате
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с условиями сервиса
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Catalog;