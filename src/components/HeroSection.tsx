import { Button, Card, CardContent } from "@/shared";
import Typewriter from "typewriter-effect";

export function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row py-6 md:py-24 lg:py-32 gap-10 min-h-dvh items-center md:px-10 justify-around">
      <div className="lg:flex-[2] text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold my-2">
          Привет, я Вадим
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold my-5">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Я full-stack разработчик,")
                .pauseFor(1500)
                .typeString(
                  "создаю масштабируемое ПО с фокусом на производительность"
                )
                .start();
            }}
            options={{
              loop: true,
              delay: 100,
            }}
          />
        </h2>
        <div className="flex gap-4 mt-5 justify-center flex-col md:flex-row items-center">
          <Button asChild size="lg">
            <a href="#contact">Связаться со мной</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#projects">Посмотреть мои работы</a>
          </Button>
        </div>
      </div>

      <Card id="about" className="lg:flex-[1.25] ">
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
