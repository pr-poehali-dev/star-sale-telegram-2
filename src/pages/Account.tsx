import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

interface Order {
  id: string;
  stars: number;
  price: number;
  username: string;
  date: string;
  status: "completed" | "pending" | "cancelled";
}

const mockOrders: Order[] = [
  { id: "ORD-001", stars: 500, price: 600, username: "@ivan_demo", date: "18.02.2026", status: "completed" },
  { id: "ORD-002", stars: 100, price: 140, username: "@ivan_demo", date: "17.02.2026", status: "completed" },
  { id: "ORD-003", stars: 1000, price: 1100, username: "@ivan_demo", date: "16.02.2026", status: "pending" },
];

const statusMap = {
  completed: { label: "Доставлено", variant: "default" as const, color: "bg-green-500/10 text-green-400 border-green-500/20" },
  pending: { label: "В обработке", variant: "secondary" as const, color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  cancelled: { label: "Отменён", variant: "destructive" as const, color: "bg-red-500/10 text-red-400 border-red-500/20" },
};

const Account = () => {
  const navigate = useNavigate();
  const [orders] = useState<Order[]>(mockOrders);

  const totalStars = orders.filter(o => o.status === "completed").reduce((sum, o) => sum + o.stars, 0);
  const totalSpent = orders.filter(o => o.status === "completed").reduce((sum, o) => sum + o.price, 0);

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container pt-24 pb-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Личный кабинет</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card className="border-border/50">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="Star" size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Куплено звёзд</p>
                <p className="text-2xl font-bold">{totalStars.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                <Icon name="Wallet" size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Потрачено</p>
                <p className="text-2xl font-bold">{totalSpent.toLocaleString()} ₽</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Icon name="CheckCircle" size={20} className="text-green-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Заказов</p>
                <p className="text-2xl font-bold">{orders.length}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="orders">
          <TabsList className="mb-6 bg-secondary">
            <TabsTrigger value="orders">Мои заказы</TabsTrigger>
            <TabsTrigger value="help">Поддержка</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-3">
            {orders.length === 0 ? (
              <Card className="border-border/50">
                <CardContent className="p-12 text-center">
                  <p className="text-muted-foreground mb-4">У вас пока нет заказов</p>
                  <Button onClick={() => navigate("/catalog")} className="bg-primary text-primary-foreground">
                    Перейти в каталог
                  </Button>
                </CardContent>
              </Card>
            ) : (
              orders.map((order) => (
                <Card key={order.id} className="border-border/50">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-lg">⭐</span>
                      </div>
                      <div>
                        <p className="font-medium">{order.stars.toLocaleString()} звёзд</p>
                        <p className="text-xs text-muted-foreground">{order.id} · {order.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-sm">{order.price} ₽</span>
                      <Badge className={statusMap[order.status].color}>
                        {statusMap[order.status].label}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="help">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Нужна помощь?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Если у вас возникли вопросы по заказу или доставке звёзд, свяжитесь с нами:
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Icon name="MessageCircle" size={18} className="text-primary" />
                    <div>
                      <p className="text-sm font-medium">Telegram</p>
                      <p className="text-xs text-muted-foreground">Напишите нам в @starshop_support</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Icon name="Clock" size={18} className="text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Время ответа</p>
                      <p className="text-xs text-muted-foreground">Обычно в течение 15 минут</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Account;