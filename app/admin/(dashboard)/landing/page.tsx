import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getLandingMediaItems } from "@/lib/landingMedia";
import AdminLandingEditor from "../AdminLandingEditor";

export default async function AdminLandingPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const items = await getLandingMediaItems();

  return (
    <AdminLandingEditor
      initialItems={items.map((item) => ({
        id: item.id,
        side: item.side,
        url: item.url,
        caption_fr: item.captionFr,
        caption_en: item.captionEn,
        sort_order: item.sortOrder,
      }))}
    />
  );
}
