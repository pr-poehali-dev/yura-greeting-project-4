import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все работы' },
    { id: 'polish', name: 'Полировка' },
    { id: 'restoration', name: 'Восстановление' },
    { id: 'tuning', name: 'Тюнинг' },
  ];

  const portfolio = [
    {
      id: 1,
      title: 'Honda CR-V - Восстановление прозрачности',
      category: 'restoration',
      before: 'https://cdn.poehali.dev/files/22a506b9-27d4-467c-810b-8a936f2b9325.JPG',
      after: 'https://cdn.poehali.dev/files/827476a4-8cbe-4c3c-b75a-1ea57c26ff62.JPG',
      description: 'Полное восстановление помутневших фар с защитным покрытием',
    },
    {
      id: 2,
      title: 'Полировка оптики - До и После',
      category: 'polish',
      before: 'https://cdn.poehali.dev/files/7a634c2a-08e4-49c7-99c0-5a8d4fdacf4d.JPG',
      after: 'https://cdn.poehali.dev/files/8953f08d-b40d-4d9c-8d91-13026724fc27.JPG',
      description: 'Профессиональная полировка с применением керамического покрытия',
    },
    {
      id: 3,
      title: 'Детейлинг головной оптики',
      category: 'polish',
      before: 'https://cdn.poehali.dev/files/301568f3-897e-430f-a09e-e1d05b1b5a09.JPG',
      after: 'https://cdn.poehali.dev/files/1aefb9f3-e064-48cf-8962-13cdb66060b7.JPG',
      description: 'Глубокая полировка с восстановлением заводского блеска',
    },
  ];

  const services = [
    {
      icon: 'Sparkles',
      title: 'Полировка фар',
      description: 'Удаление помутнений и царапин, возвращение прозрачности',
    },
    {
      icon: 'Shield',
      title: 'Защитное покрытие',
      description: 'Керамическое покрытие для долговременной защиты',
    },
    {
      icon: 'Zap',
      title: 'Восстановление',
      description: 'Полное восстановление сильно поврежденной оптики',
    },
    {
      icon: 'Lightbulb',
      title: 'Тюнинг оптики',
      description: 'Установка линз, ангельских глазок, покраска',
    },
  ];

  const filteredPortfolio =
    selectedCategory === 'all'
      ? portfolio
      : portfolio.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Lightbulb" className="text-accent-foreground" size={24} />
            </div>
            <span className="text-xl font-bold">LightStudio</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition">
              Портфолио
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition">
              Услуги
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition">
              Контакты
            </a>
          </nav>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            Записаться
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6 border border-accent/20">
              <Icon name="Award" size={20} />
              <span className="text-sm font-medium">Профессиональное оборудование</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Восстановление и полировка{' '}
              <span className="text-accent">автомобильных фар</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Вернём кристальную прозрачность вашей оптике. Работаем с любыми типами
              повреждений. Гарантия на все виды работ.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-20 hidden lg:block">
          <div className="w-full h-full bg-gradient-to-l from-accent/20 to-transparent blur-3xl"></div>
        </div>
      </section>

      <section id="portfolio" className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Результаты, которые говорят сами за себя. Фотографии до и после
              восстановления.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.id)}
                className={
                  selectedCategory === cat.id
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                    : ''
                }
              >
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredPortfolio.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden bg-card border-border/40 hover:border-accent/40 transition-all"
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="relative group">
                      <img
                        src={item.before}
                        alt="До восстановления"
                        className="w-full aspect-square object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-destructive/90 text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
                        До
                      </div>
                    </div>
                    <div className="relative group">
                      <img
                        src={item.after}
                        alt="После восстановления"
                        className="w-full aspect-square object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                        После
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 border-t border-border/40 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный спектр работ по восстановлению автомобильной оптики
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="bg-card border-border/40 hover:border-accent/40 transition-all group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                    <Icon
                      name={service.icon as any}
                      className="text-accent"
                      size={24}
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Восстановленных фар</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">5 лет</div>
              <div className="text-muted-foreground">Опыт работы</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 border-t border-border/40 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border/40">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
                    <p className="text-muted-foreground mb-6">
                      Запишитесь на диагностику или получите консультацию по телефону
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Icon name="Phone" className="text-accent" size={20} />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Телефон</div>
                          <div className="font-medium">+7 (999) 123-45-67</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Icon name="MapPin" className="text-accent" size={20} />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Адрес</div>
                          <div className="font-medium">г. Москва, ул. Примерная, 1</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Icon name="Clock" className="text-accent" size={20} />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Режим работы</div>
                          <div className="font-medium">Пн-Вс: 9:00 - 21:00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Button
                      size="lg"
                      className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
                    >
                      <Icon name="Phone" size={20} className="mr-2" />
                      Позвонить
                    </Button>
                    <Button size="lg" variant="outline" className="w-full">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      WhatsApp
                    </Button>
                    <Button size="lg" variant="outline" className="w-full">
                      <Icon name="Send" size={20} className="mr-2" />
                      Telegram
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="Lightbulb" className="text-accent-foreground" size={20} />
              </div>
              <span className="font-bold">LightStudio</span>
            </div>
            <div className="text-muted-foreground text-sm">
              © 2024 LightStudio. Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
