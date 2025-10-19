import Head from 'next/head'
import SiteHeader from '@/component/SiteHeader'
import SiteFooter from '@/component/SiteFooter'
import SiteTitle from '@/component/SiteTitle'
import MobileHeader from '@/component/MobileHeader';

export default function Menu() {
    let menuList = [
    {
        category: 'たこやき',
        items: [
        { quantity: '6玉', price: '450円' },
        { quantity: '8玉', price: '550円' },
        { quantity: '15玉', price: '1000円' }
        ]
    },
    {
        category: 'ねぎ盛り、ネギポン',
        items: [
        { quantity: '6玉', price: '500円' },
        { quantity: '8玉', price: '600円' },
        { quantity: '15玉', price: '1100円' }
        ]
    },
    {
        category: '梅紫蘇',
        items: [
        { quantity: '6玉', price: '550円' },
        { quantity: '8玉', price: '650円' },
        { quantity: '15玉', price: '1200円' }
        ]
    }
    ];


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

            <SiteTitle title="MENU" subtitle="メニュー一覧" />

            
            <div className="menu-list py-6 px-4 flex flex-col items-center">
            {menuList.map((menu, index) => (
                <div key={index} className="mb-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-2 border-b pb-1">{menu.category}</h2>
                <ul className="space-y-1">
                    {menu.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700">
                        {item.quantity}：{item.price}
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            </div>

            <div className='menu-list pb-8 px-4 flex flex-col items-center text-lg'>☆ソース多め、マヨネーズ多め、かつお節多め各30円</div>

            <div className="menu-list py-6 px-4 flex flex-col items-center">
                <div className="mb-6 w-full max-w-md">
                    <h2 className="text-xl font-bold mb-2 border-b pb-1">ドリンク</h2>
                    <ul className="space-y-1">
                        <li className="text-gray-700">ソフトドリンク各種：130円</li>
                        <li className="text-gray-700">アルコール各種：350円</li>
                    </ul>

                </div>

            </div>






            <SiteFooter/>

        </>
    )
}