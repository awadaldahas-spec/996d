import { redirect } from "next/navigation";
import { defaultLocale } from "@/data/dictionary";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
