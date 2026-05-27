import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Victorious Education Services | Discipline, Knowledge & Success',
  description: 'Providing quality education for all age groups in Kampala, Uganda. Nurturing discipline, fostering knowledge, and building success in a safe and supportive environment.',
  keywords: ["Victorious Education, Kampala, Uganda, education, school, discipline, learning, academic, primary, secondary, adult education, early childhood, character development"],
  openGraph: {
    "title": "Victorious Education Services | Discipline, Knowledge & Success",
    "description": "Providing quality education for all age groups in Kampala, Uganda. Nurturing discipline, fostering knowledge, and building success in a safe and supportive environment.",
    "url": "https://www.victoriouseducation.ug",
    "siteName": "Victorious Education Services",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/city-building_23-2148107101.jpg",
        "alt": "Victorious Education Services school building and students"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Victorious Education Services | Discipline, Knowledge & Success",
    "description": "Providing quality education for all age groups in Kampala, Uganda. Nurturing discipline, fostering knowledge, and building success in a safe and supportive environment.",
    "images": [
      "http://img.b2bpic.net/free-photo/city-building_23-2148107101.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
