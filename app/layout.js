import './globals.css';

export const metadata = {
  title: 'خانه-فروشگاه آنلاین جی تو تک',
  description: 'فروشگاه گیفت کارت فروشگاه بازی اورجینال فروشگاه بازی پلی‌استیشن',
}

export default function RootLayout({ children }) {
  return (
    <html dir='rtl' lang="en" className='h-full'>
      <body className='relative h-full'>{children}</body>
    </html>
  )
}
