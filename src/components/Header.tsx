import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();

  const links = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/catalog", label: "Каталог", icon: "Star" },
    { path: "/account", label: "Кабинет", icon: "User" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Icon name="Star" size={18} className="text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight">StarShop</span>
        </Link>

        <nav className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Icon name={link.icon} size={16} />
              <span className="hidden sm:inline">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;