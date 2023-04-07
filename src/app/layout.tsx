import "./globals.css";
import { StateProvider } from "@/store/state-provider";
import { ThemeContextProvider } from "@/contexts/theme/theme-provider";
import { Footer } from "@/components";
import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "Amir Zad Personal Portfolio", // TODO: from API
  description: "Amir Zad Personal Portfolio - Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <StateProvider>
            <Navbar />
            {children}
            <Footer />
          </StateProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
