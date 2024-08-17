import { IoMdTime } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const news = tv({
  slots: {
    title: "font-bold text-3xl",
    text: "line-clamp-6",
    dateWrapper: "flex items-center gap-1",
  },
  variants: {
    size: {
      sm: {
        title: "text-base",
        text: "line-clamp-3",
        dateWrapper: "hidden",
      },
    },
  },
});

export type NewsProps = ComponentProps<"div"> & VariantProps<typeof news>;

function News({ size }: NewsProps) {
  const { title, text, dateWrapper } = news({ size });

  return (
    <div className="border rounded-md w-full aspect-[2] p-4 flex gap-4">
      <div className="w-1/2">
        <img
          src="https://www.adrenaline.com.br/wp-content/uploads/2024/07/adia-lancamento-CPUs-Ryzen-9000-912x569.jpg"
          alt="image"
          className="rounded-sm w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className={title()}>
              CPUs AMD Ryzen 5 9600X e Ryzen 7 9700X não estão vendendo bem
            </h1>
          </div>
          <p className={text()}>
            Os CPUs recém-lançados da AMD – os modelos Ryzen 5 9600X e Ryzen 7
            9700X – estão sofrendo com baixas vendas no mercado. Dados obtidos
            pela quantidade de produtos comercializados pela alemã Mindfactory
            revelam que “mais de 20” 9600X e “mais de 30” 9700X foram adquiridas
            em sua plataforma – mostrando que ao menos na Europa não está
            havendo muita procura pelos hardwares.
          </p>
        </div>
        <div className="flex gap-4 mb-4">
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
          <div className={dateWrapper()}>
            <IoMdTime className="text-foreground/60" />
            <p className="text-sm text-foreground/60">14/08/2024 09:33</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
