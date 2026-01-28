import SectionFaq from '@/components/sections/SectionFaq';
import SectionCityList from '@/components/sections/SectionCityList';
import SectionAdvantage from '@/components/sections/SectionAdvantage';


export default function Home() {
    return (
        <>
            <SectionAdvantage />
            <SectionCityList />
            {/* 
            <SectionFaq /> */}
        </>
    )
}
export const config = {
    amp: true,
    unstable_runtimeJS: false
};