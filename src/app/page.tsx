import Head from 'next/head'
import SiteHeader from '@/component/SiteHeader'
import SiteFooter from '@/component/SiteFooter'


const newsItems = [
  { date: '2025/06/27', title: '長野県 OCTOPUS HOLD 新規オープン' },
  { date: '2024/07/12', title: '東京ドームシティ店 新規オープン' },
  { date: '2024/03/30', title: '韓国ロッテワールドモール店 新規オープン' },
  // 必要に応じて追加
]



export default function Home() {
  return (
    <>
      <Head>
        <title>もみたこ</title>
      </Head>

      

      <SiteHeader />


      <main className="max-w-3xl mx-auto px-4 py-8">
        <ul className="space-y-4">
          {newsItems.map((item, index) => (
            <li key={index} className="border-b pb-2">
              <p className="text-sm text-gray-500">{item.date}</p>
              <p className="text-lg">{item.title}</p>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter/>
    </>
  )
}

