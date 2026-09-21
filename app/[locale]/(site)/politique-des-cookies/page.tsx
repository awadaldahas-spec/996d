export default function PolitiqueDesCookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl text-bn-forest-dark text-center gold-underline mx-auto w-fit mb-12">
        POLITIQUE DES COOKIES
      </h1>

      <p className="text-bn-forest-dark/90 text-sm leading-relaxed mb-8">
        Le site internet www.bostannaturals.fr, édité par BOSTAN NATURALS, utilise des cookies et
        autres traceurs afin d&apos;assurer son bon fonctionnement, d&apos;améliorer l&apos;expérience
        de navigation et, lorsque cela est applicable, de mesurer son audience.
      </p>
      <p className="text-bn-forest-dark/90 text-sm leading-relaxed mb-8">
        La présente politique décrit les principales catégories de cookies susceptibles
        d&apos;être utilisés sur le site.
      </p>

      <div className="space-y-8 text-bn-forest-dark/90 text-sm leading-relaxed">
        <section>
          <h2 className="font-serif text-xl text-bn-forest-dark mb-3">1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
          <p>
            Un cookie est un petit fichier ou traceur enregistré sur le terminal de l&apos;utilisateur
            lors de la consultation d&apos;un site internet. Il peut notamment permettre au site de
            fonctionner correctement, de mémoriser certains choix ou de mesurer la fréquentation du
            site.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-bn-forest-dark mb-3">2. Cookies strictement nécessaires</h2>
          <p className="mb-3">
            Certains cookies sont strictement nécessaires au fonctionnement du site et à la
            fourniture des fonctionnalités expressément demandées par l&apos;utilisateur.
          </p>
          <p className="mb-3">Ils peuvent notamment être utilisés pour :</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>assurer la sécurité et le bon fonctionnement technique du site ;</li>
            <li>maintenir certaines informations nécessaires à la navigation ;</li>
            <li>mémoriser les choix relatifs aux cookies ;</li>
            <li>assurer certaines fonctionnalités techniques du site.</li>
          </ul>
          <p>
            Ces cookies ne nécessitent pas de consentement préalable lorsqu&apos;ils répondent aux
            conditions prévues par la réglementation applicable.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-bn-forest-dark mb-3">3. Cookies soumis au consentement</h2>
          <p className="mb-3">
            Lorsque le site utilise des cookies ou autres traceurs qui ne sont pas strictement
            nécessaires à son fonctionnement, notamment certains outils de mesure d&apos;audience ou
            autres services tiers, leur dépôt ou leur lecture est soumis au consentement préalable de
            l&apos;utilisateur lorsque la réglementation l&apos;exige.
          </p>
          <p className="mb-3">
            Ces traceurs peuvent notamment permettre d&apos;analyser la fréquentation et
            l&apos;utilisation du site afin d&apos;améliorer son contenu, sa présentation et ses
            performances.
          </p>
          <p>Le consentement est recueilli avant le dépôt ou la lecture des traceurs concernés.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-bn-forest-dark mb-3">4. Gestion de votre consentement</h2>
          <p className="mb-3">
            Lors de votre première visite, un bandeau de gestion des cookies vous permet, lorsque cela
            est nécessaire, d&apos;accepter ou de refuser les cookies soumis à consentement.
          </p>
          <p className="mb-3">Le refus doit être aussi simple que l&apos;acceptation.</p>
          <p className="mb-3">
            Vous pouvez également modifier ou retirer votre consentement à tout moment grâce au
            mécanisme de gestion des cookies accessible sur le site.
          </p>
          <p>
            La CNIL recommande, de manière générale, de conserver le choix exprimé par
            l&apos;utilisateur pendant une durée de six mois avant de solliciter à nouveau son choix.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-bn-forest-dark mb-3">5. Mesure d&apos;audience</h2>
          <p className="mb-3">
            Lorsque BOSTAN NATURALS utilise une solution de mesure d&apos;audience, celle-ci est mise
            en œuvre conformément aux règles applicables.
          </p>
          <p>
            Certains traceurs de mesure d&apos;audience peuvent être exemptés de consentement
            lorsqu&apos;ils remplissent strictement les conditions définies par la CNIL, notamment
            lorsqu&apos;ils sont limités à la mesure d&apos;audience du site pour le compte exclusif de
            l&apos;éditeur et servent à produire des statistiques anonymes.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-bn-forest-dark mb-3">6. Vos droits et contact</h2>
          <p className="mb-3">
            Pour toute question concernant l&apos;utilisation des cookies et autres traceurs sur le
            site, vous pouvez contacter BOSTAN NATURALS à l&apos;adresse suivante :{" "}
            <a href="mailto:bostancom@gmail.com" className="text-bn-gold underline">
              bostancom@gmail.com
            </a>
          </p>
          <p>
            La présente politique peut être mise à jour afin de tenir compte de l&apos;évolution du
            site, des services utilisés ou de la réglementation applicable.
          </p>
        </section>
      </div>
    </div>
  );
}
