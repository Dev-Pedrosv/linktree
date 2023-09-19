import Image from "next/image";
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
  GalleryVerticalEnd,
  Shirt,
  Mail,
} from "lucide-react";

export default function Home() {
  const links = [
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      href: "https://www.linkedin.com/in/pedroh-dev/",
    },
    {
      name: "GitHub",
      icon: <Github />,
      href: "https://github.com/Dev-Pedrosv",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      href: "https://www.instagram.com/pedrosilvadev_/",
    },
    {
      name: "Youtube",
      icon: <Youtube />,
      href: "https://www.youtube.com/@pedrosilvadev_",
    },
    {
      name: "Portfólio",
      icon: <GalleryVerticalEnd />,
      href: "https://pedrosilvadev.vercel.app/",
    },
    {
      name: "E-mail",
      icon: <Mail />,
      href: "mailto:comercial.pedrosilvadev@gmail.com",
    },
    {
      name: "Dev.Sincero",
      icon: <Shirt />,
      href: "https://www.devsincero.com/",
    },
  ];

  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-gradient-radial bg-no-repeat bg-cover">
      <div className="w-80 py-10 px-4 flex flex-col justify-center items-center">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 mb-6">
          <Image
            src="https://github.com/Dev-Pedrosv.png"
            alt="profile image"
            fill
          />
        </div>

        <h1 className="text-xl font-semibold leading-relaxed">
          @pedrosilvadev
        </h1>
        <h2 className="leading-relaxed">
          Cupom: <span className="font-bold underline">PEDRODEV10</span>
        </h2>

        <div className="flex flex-col gap-4 w-full mt-10">
          {links.map((link) => (
            <a
              href={link.href}
              className="w-full rounded border-2 border-opacity-50 bg-white/10 border-white hover:cursor-pointer hover:opacity-80"
              key={link.name}
            >
              <div className="p-3 flex items-center w-full">
                {link.icon}
                <p className="w-full text-center font-medium leading-relaxed ">
                  {link.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
