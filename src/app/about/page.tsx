import Head from 'next/head'
import SiteHeader from '@/component/SiteHeader'
import SiteFooter from '@/component/SiteFooter'
import SiteTitle from '@/component/SiteTitle'
import MobileHeader from '@/component/MobileHeader'

export default function About() {
    return (
        <>
            <Head>
                <title>もみたこ</title>
            </Head>

            <div className="block md:hidden">
                <MobileHeader />    
            </div>
            <div className="hidden md:block">
                <SiteHeader />
            </div>
            
            <SiteTitle title="花火玉ってなに？" />

            <div className='flex justify-center'>
                <div className='py-6 px-4 max-w-md'>
                    花火のように中に入れる具材を栄養バランスを考え割った時に、
                    楽しく召し上がれるように作りました。 
                    直径8cmのたこ焼き5個分のボリュームです。
                    見た目はたこ焼き、
                    中身はお好み焼きともんじゃ焼きの様な外側はカリカリ、
                    中はトロトロ、中に閉じ込めた具のうまさを逃がさず包み焼きします。
                    焼きたての食感はとろとろですが、生焼けではありません。
                </div>
            </div>

            <SiteFooter/>

        </>
    )
}