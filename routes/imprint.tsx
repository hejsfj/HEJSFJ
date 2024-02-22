import { useSignal } from "@preact/signals";
import Header from "../components/Header.tsx";

export default function Imprint() {
  return (
    <div
      class="bg-black bg-fixed bg-center bg-cover"
      style="background-image: url('/img/sfj.png'); height: 100vh"
    >
    <Header/>

      <main class="h-full w-full">
        <div class="flex flex-col h-full">
          <div class="flex flex-row overflow-scroll">
            <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div class="w-full lg:shrink-0 ">
                  <h1 class="text-5xl text-white sm:text-5xl font-body uppercase tracking-wide font-bold">
                    Imprint
                  </h1>
                  <div class="flex flex-col">
                    <p class="relative mt-3 text-2xl leading-8 text-white sm:max-w-md lg:max-w-none font-body">
                      Impressum Angaben gemäß § 5 TMG SFJ Capital UG Dhauner
                      Straße 42 67067 Ludwigshafen am Rhein Handelsregister: HRB
                      67315 Registergericht: Ludwigshafen am Rhein Vertreten
                      durch: Sebastian Frederik Jacobsen Kontakt E-Mail:
                      hello@hejsfj.com EU-Streitschlichtung Die Europäische
                      Kommission stellt eine Plattform zur
                      Online-Streitbeilegung (OS) bereit:
                      https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse
                      finden Sie oben im Impressum.
                      Verbraucherstreitbeilegung/Universalschlichtungsstelle Wir
                      nehmen an einem Streitbeilegungsverfahren vor einer
                      Verbraucherschlichtungsstelle teil. Zuständig ist die
                      Universalschlichtungsstelle des Zentrums für Schlichtung
                      e.V., Straßburger Straße 8, 77694 Kehl am Rhein (
                      https://www.verbraucher-schlichter.de). Quelle:
                      https://www.e-recht24.de
                    </p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
