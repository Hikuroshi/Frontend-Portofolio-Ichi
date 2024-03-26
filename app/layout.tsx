import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://google.com/"),

	title: {
		template: "%s | Portofolio Ichi",
		default: "Portofolio Ichi",
	},
	authors: {
		name: "Hikuroshi",
	},

	description:
		"Based in Indonesia, I'm a Fullstack developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "Portofolio Ichi",
		description:
			"Based in Indonesia, I'm a Fullstack developer passionate about building a modern web application that users love..",
		url: "https://google.com/",
		siteName: "Portofolio Ichi",
		images: "/project-1.png",
		type: "website",
	},
	keywords: ["Fullstack", "Hikuroshi", "Web Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
