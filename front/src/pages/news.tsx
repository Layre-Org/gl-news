import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoMdTime } from "react-icons/io";

const txt = `
  Os CPUs recém-lançados da AMD – os modelos Ryzen 5 9600X e Ryzen 7 9700X – estão sofrendo com baixas vendas no mercado.

  Dados obtidos pela quantidade de produtos comercializados pela alemã Mindfactory revelam que “mais de 20” 9600X e “mais de 30” 9700X foram adquiridas em sua plataforma – mostrando que ao menos na Europa não está havendo muita procura pelos hardwares.

  A mesma empresa também deixa transparente a quantidade de visualizações que ambas tiveram desde seu lançamento, mostrando que o ânimo para os novos CPUs da AMD está baixo: o Ryzen 5 9600X foi buscado menos de 600 vezes na plataforma, enquanto o Ryzen 7 9700X totaliza um pouco mais de 1.100 buscas.

  O HardwareTimes também mostrou que eles não chegam nem ao “top 10” dos mais populares nas demais plataformas. Enquanto o CPU AMD Ryzen 7 9700X aparece na posição de 39 dos processadores mais populares na Amazon, no NewEgg ele surge na 45ª posição.
`;

function NewsPage() {
  return (
    <div className="p-4 flex-col flex gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">
          CPUs AMD Ryzen 5 9600X e Ryzen 7 9700X não estão vendendo bem{" "}
        </h1>
        <p className="text-foreground/60 text-xl">
          Os CPUs AMD Ryzen 5 9600X e Ryzen 7 9700X estão com vendas fracas na
          Europa, não chegando nem ao "top 10" de processadores{" "}
        </p>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-1">
            <Avatar className="size-[16px]">
              <AvatarImage
                src="https://www.adrenaline.com.br/wp-content/uploads/2023/05/diego-corumba-210x210.jpg"
                alt="user image"
              />
              <AvatarFallback>DC</AvatarFallback>
            </Avatar>
            <p className="text-sm text-foreground/60">Diego Corumba</p>
          </div>
          <div className="flex items-center gap-1">
            <IoMdTime className="text-foreground/60" />
            <p className="text-sm text-foreground/60">14/08/2024 09:33</p>
          </div>
        </div>
      </div>

      <img
        src="https://www.adrenaline.com.br/wp-content/uploads/2024/07/adia-lancamento-CPUs-Ryzen-9000-912x569.jpg"
        alt="image"
        className="rounded-sm w-full aspect-video object-cover"
      />

      <div className="whitespace-pre-wrap text-xl">{txt}</div>
    </div>
  );
}

export default NewsPage;
