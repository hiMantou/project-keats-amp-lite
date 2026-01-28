import { Button, FormContact, FormFee } from '@/components';
import { Loading as IconLoading } from '@icon-park/react';
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
            <SectionFormFee/>
            <SectionFormContact />
            {/* <SectionFaq /> */}
            {/* 
            <SectionAdvantage />
            <SectionCityList />
             */}
            {/* <SectionAssistant />
            <SectionAccommodation header={<div className="sectionHeader"><h2>Accommodation <span>Options</span></h2></div>} />
            <SectionAccommodation len={2} />
            <SectionAccommodation len={2} /> */}
        </>
    )
}
export const config = {
    amp: true,
    unstable_runtimeJS: false
};