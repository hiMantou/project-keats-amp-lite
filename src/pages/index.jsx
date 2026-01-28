import Head from 'next/head';
import {
    VolumeNotice as IconVolumeNotice,
} from '@icon-park/react';

import { Icon } from '@/components';
export const config = {
    amp: true,
    unstable_runtimeJS: false
};
export default function Home() {
    return (
        <div className='test'>
            <IconVolumeNotice/>
            {/* <Icon type="Program1" /> */}
            <div>pageHome</div>
            <h1>Learn Chinese
                and Experience China in
                30+ Cities in China</h1>
        </div>
    )
}