import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import type { Locale } from "@/data/dictionary";

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;

  return (
    <div className="flex flex-col min-h-screen bg-bn-cream overflow-x-hidden">
      <Navbar locale={typedLocale} />
      <main className="flex-1 w-full min-w-0">{children}</main>
      <Footer locale={typedLocale} />
      <CookieBanner locale={typedLocale} />
    </div>
  );
}
