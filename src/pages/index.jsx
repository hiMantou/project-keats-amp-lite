
import SectionFaq from '@/components/sections/SectionFaq';
import SectionCityList from '@/components/sections/SectionCityList';
import SectionAdvantage from '@/components/sections/SectionAdvantage';
import SectionAccommodation from '@/components/sections/SectionAccommodation';
import SectionAssistant from '@/components/sections/SectionAssistant';
import SectionFormFee from '@/components/sections/SectionFormFee';
import SectionFormContact from '@/components/sections/SectionFormContact';


export default function Home() {
    return (
        <>
            <SectionAdvantage />
            <SectionCityList />
            <SectionFormFee/>
            <SectionAccommodation header={<div className="sectionHeader"><h2>Accommodation <span>Options</span></h2></div>} />
            <SectionAccommodation/>
            <SectionAccommodation/>
            <SectionAssistant />
            <SectionFaq /> 
            <SectionFormContact />
        </>
    )
}
export const config = {
    amp: true
};