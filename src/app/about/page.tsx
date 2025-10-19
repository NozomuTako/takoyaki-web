import Head from 'next/head'
import SiteHeader from '@/component/SiteHeader'
import SiteFooter from '@/component/SiteFooter'
import SiteTitle from '@/component/SiteTitle'

export default function About() {
    return (
        <>
            <Head>
                <title>もみたこ</title>
            </Head>

            

            <SiteHeader />
            
            <SiteTitle title="ばくだん焼きってなに？" />

            <p>ばくだん焼きについて説明</p>

            <SiteFooter/>

        </>
    )
}