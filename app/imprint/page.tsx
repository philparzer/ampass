
import UtilityPageWrapper from "@/components/UtilityPageWrapper"

export default function Imprint() {
  return (
    <UtilityPageWrapper>
      <h1 className="font-display text-4xl font-var-heading">Impressum</h1>
      <p className="mt-10 lg:max-w-[40vw] text-center">Bei ampass.at handelt es sich um eine "kleine Website". Folgende Kontaktinformationen sind ausreichend für die Offenlegungspflicht.</p>
      <h2 className="text-xl mt-20 mb-2 font-bold">Webseitenbetreiber</h2>
      <p>Nina Koppensteiner</p>
      <p>Prantlweg 3e, 6401 Inzing</p>
      <a href="mailto:steixner@gmail.com" className="hover:text-lagoon-500">steixner@gmail.com</a>
    </UtilityPageWrapper>
  );
}
