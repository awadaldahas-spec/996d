import type { Locale } from "@/data/dictionary";
import { getDictionary } from "@/data/dictionary";
import { getSiteSettings, SITE_SETTINGS_KEYS } from "@/lib/siteSettings";
import ContactMessageForm from "@/components/ContactMessageForm";

export const revalidate = 0;

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const t = getDictionary(typedLocale);
  const settings = await getSiteSettings();

  const officeTitle = settings[SITE_SETTINGS_KEYS.contactOfficeTitle] || t.contact.officeTitle;
  const address = settings[SITE_SETTINGS_KEYS.contactAddress] || t.contact.address;
  const crNumber = settings[SITE_SETTINGS_KEYS.contactCrNumber];
  const email = settings[SITE_SETTINGS_KEYS.contactEmail] || t.contact.email;
  const phone = settings[SITE_SETTINGS_KEYS.contactPhone];
  const mapEmbedUrl = settings[SITE_SETTINGS_KEYS.contactMapEmbedUrl];
  const socialNote = settings[SITE_SETTINGS_KEYS.contactSocialNote];

  return (
    <div className="bg-bn-cream min-h-screen px-6 py-16">
      <h1 className="font-serif text-4xl text-bn-forest-dark text-center gold-underline mx-auto w-fit mb-12">
        {t.contact.title}
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left column: office info + map + social */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-bn-forest-dark mb-4">{officeTitle}</h2>
            <div className="space-y-4 text-bn-forest-dark/80">
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-bn-gold shrink-0 mt-0.5">
                  <path d="M12 21s7-6.5 7-11.5a7 7 0 10-14 0C5 14.5 12 21 12 21z" strokeLinejoin="round" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
                <div>
                  <p className="whitespace-pre-line leading-relaxed">{address}</p>
                  {crNumber && <p className="text-sm text-bn-forest-dark/50 mt-1">{crNumber}</p>}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-bn-gold shrink-0">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <a href={`mailto:${email}`} className="hover:text-bn-forest transition-colors">
                  {email}
                </a>
              </div>

              {phone && (
                <div className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-bn-gold shrink-0">
                    <path d="M4 4h4l2 5-2.5 2a11 11 0 005.5 5.5l2-2.5 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 011-2z" strokeLinejoin="round" />
                  </svg>
                  <span>{phone}</span>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-sm h-64 bg-bn-forest-dark/10">
            {mapEmbedUrl ? (
              <iframe
                src={mapEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-bn-forest-dark/40 text-sm">
                {address}
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-bn-forest-dark mb-2">{t.contact.socialTitle}</h2>
            <p className="text-bn-forest-dark/60 text-sm">{socialNote}</p>
          </div>
        </div>

        {/* Right column: message form */}
        <ContactMessageForm
          locale={typedLocale}
          labels={{
            formTitle: t.contact.formTitle,
            name: t.contact.formName,
            company: t.contact.formCompany,
            email: t.contact.formEmail,
            phone: t.contact.formPhone,
            country: t.contact.formCountry,
            countryPlaceholder: t.contact.formCountryPlaceholder,
            products: t.contact.formProducts,
            productsPlaceholder: t.contact.formProductsPlaceholder,
            quantity: t.contact.formQuantity,
            quantityPlaceholder: t.contact.formQuantityPlaceholder,
            message: t.contact.formMessage,
            privacyNotice: t.contact.formPrivacyNotice,
            privacyLink: t.contact.formPrivacyLink,
            submit: t.contact.formSubmit,
            success: t.contact.formSuccess,
            error: t.contact.formError,
          }}
        />
      </div>
    </div>
  );
}
