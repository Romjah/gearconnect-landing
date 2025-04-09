import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - GearConnect",
  description: "Contactez l'équipe GearConnect pour toutes vos questions concernant notre application et la communauté automobile.",
  openGraph: {
    title: "Contactez GearConnect - Le réseau social du sport automobile",
    description: "Notre équipe est disponible pour répondre à vos questions et vous accompagner dans votre passion automobile.",
    images: [{
      url: '/images/contact-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Contact GearConnect',
    }],
  },
}; 