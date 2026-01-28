import SectionFaq from '@/components/sections/SectionFaq';
import SectionCityList from '@/components/sections/SectionCityList';
import SectionAdvantage from '@/components/sections/SectionAdvantage';


export default function Home() {
    return (
        <>
            <SectionFaq />
            <SectionAdvantage />
            <SectionCityList />
            

            {/* <SectionAccommodation header={<div className="sectionHeader"><h2>Accommodation <span>Options</span></h2></div>} />
            <SectionAccommodation len={2} />
            <SectionAccommodation len={2} /> */}
        </>
    )
}
export const config = {
    amp: true,
    unstable_runtimeJS: false
};