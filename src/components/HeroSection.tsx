import { Button, Card, CardContent } from "@/shared";

export function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row py-12 md:py-24 lg:py-32 gap-5 h-dvh items-center px-20">
      <div className="text-center flex-[2]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Привет, я Вадим
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Я Full-stack разработчик
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-5 items-center sm:justify-center">
          <Button asChild size="lg">
            <a href="#contact">Связаться со мной</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#projects">Посмотреть мои работы</a>
          </Button>
        </div>
      </div>

      <Card id="about" className="flex-[1]">
        <CardContent>
          <h2 className="text-3xl font-bold mb-4">Обо мне</h2>
          <p className="text-muted-foreground mb-6">
            Есть опыт в разработчке различного программного обеспечения, как
            frontend так и backend части. Также работал на тестированием ПО.
            Программирую преимущественно на Javascript/Typescript с
            использованием фрэймворком React/Next.js и для Nest.js для бэкенда.
            Есть опыт работы c другими фреймворками, такими как Vue, Angular и с
            другими языками программирования - Go, Python, C++
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
