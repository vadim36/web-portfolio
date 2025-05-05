export function ContactSection() {
  return (
    <section id="contact" className="mt-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Связаться со мной
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Открыт к обсуждению ваших идей
          </p>
        </div>
        <table className="text-xl text-left">
          <tbody>
            <tr className="md:table-row flex flex-col gap-2">
              <td className="text-2xl font-semibold md:text-left md:p-2">Email:</td>
              <td className="md:text-right md:p-2">vadim130809@gmail.com</td>
            </tr>
            <tr className="md:table-row flex flex-col gap-2">
              <td className="text-2xl font-semibold md:text-left md:p-2">Github:</td>
              <td className="md:text-right md:p-2">vadim36 - https://github.com/vadim36</td>
            </tr>
            <tr className="md:table-row flex flex-col gap-2">
              <td className="text-2xl font-semibold md:text-left md:p-2">Telegram:</td>
              <td className="md:text-right md:p-2">@iaSGHG</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
