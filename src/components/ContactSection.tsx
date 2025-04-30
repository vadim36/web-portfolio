import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared";

export function ContactSection() {
  return (
    <section id="contact">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Связаться со мной
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Открыт к обсуждению ваших идей
          </p>
        </div>
        <div className="mx-auto grid w-full max-w-3xl gap-6 py-6 md:grid-cols-3">
          <Card className="flex flex-col items-center transition-all hover:shadow-lg">
            <CardHeader className="pb-2 pt-4">
              <CardTitle className="text-xl">Email</CardTitle>
              <CardDescription>Let's connect via email</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4 text-sm text-muted-foreground">
                your.email@example.com
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:your.email@example.com">Send Email</a>
              </Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center justify-between p-4 transition-all hover:shadow-lg">
            <CardHeader className="pb-2 pt-4 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                github
              </div>
              <CardTitle className="text-xl">GitHub</CardTitle>
              <CardDescription>Check out my code</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4 text-sm text-muted-foreground">
                github.com/yourusername
              </p>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center justify-between p-4 transition-all hover:shadow-lg">
            <CardHeader className="pb-2 pt-4 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                send
              </div>
              <CardTitle className="text-xl">Telegram</CardTitle>
              <CardDescription>Chat with me directly</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4 text-sm text-muted-foreground">
                @yourusername
              </p>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://t.me/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message Me
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button variant="default" className="gap-1" asChild>
            <a href="mailto:your.email@example.com">
              mail
              <span>Email Me</span>
            </a>
          </Button>
          <Button variant="outline" className="gap-1" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
