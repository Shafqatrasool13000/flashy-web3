import HeroSection from "../../components/HeroSection/Index";
import Benefits from "../../components/Benefits/Index";
import ShowCase from "../../components/ShowCase/Index";
import HowItWorks from "../../components/HowItWorks/Index";
import { useExecMock } from "../../hooks/useExecMock";
import { addresses } from "../../utils/constants";

const Index = () => {

  const exactMock=useExecMock();

  return (
    <>
      <HeroSection />
      <Benefits />
      <ShowCase />
      <HowItWorks />

      <button onClick={async () => await exactMock(addresses.haaveAddress, "")}>Exec Mock</button>
    </>
  );
};

export default Index;
