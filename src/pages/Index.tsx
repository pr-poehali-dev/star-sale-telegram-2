import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/50d60bdb-5488-48a7-8e7d-fb15b0af1dfd/files/4396e1dc-0bb6-4187-84ed-45d6c641550c.jpg";

const features = [
  {
    icon: "Zap",
    title: "Моментальная доставка",
    description: "Звёзды поступают на ваш аккаунт автоматически сразу после оплаты",
  },
  {
    icon: "Shield",
    title: "Безопасно",
    description: "Все транзакции защищены. Подтверждение каждой операции в реальном времени",
  },
  {
    icon: "CreditCard",
    title: "Удобная оплата",
    description: "Оплата картой любого банка — Visa, Mastercard, МИР",
  },
  {
    icon: "Percent",
    title: "Лучшие цены",
    description: "Выгоднее, чем покупка напрямую. Скидки на большие пакеты",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="container relative flex flex-col items-center text-center gap-8">
          <div className="w-32 h-32 rounded-3xl overflow-hidden animate-float">
            <img src={HERO_IMAGE} alt="Telegram Stars" className="w-full h-full object-cover" />
          </div>

          <div className="max-w-2xl space-y-4 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Купите <span className="text-gradient">звёзды Telegram</span> быстро и выгодно
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Пополняйте баланс звёзд для подарков, подписок и покупок внутри Telegram
            </p>
          </div>

          <div className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8"
              onClick={() => navigate("/catalog")}
            >
              <Icon name="Star" size={18} className="mr-2" />
              Смотреть пакеты
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary font-medium"
              onClick={() => navigate("/account")}
            >
              Мой кабинет
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/50">
        <div className="container">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold">Как это работает?</h2>
            <div className="space-y-4 text-left">
              {[
                { step: "1", text: "Выберите пакет звёзд из каталога" },
                { step: "2", text: "Укажите свой Telegram username" },
                { step: "3", text: "Оплатите картой — деньги приходят моментально" },
                { step: "4", text: "Звёзды автоматически поступят на ваш аккаунт" },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">{item.step}</span>
                  </div>
                  <p className="text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border/50">
        <div className="container text-center text-sm text-muted-foreground">
          © 2026 StarShop — Продажа звёзд Telegram
        </div>
      </footer>
    </div>
  );
};

export default Index;