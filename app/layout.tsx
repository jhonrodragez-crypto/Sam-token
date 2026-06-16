export const metadata = {
  title: 'Damn Support - SAM Token',
  description: 'منصة دعم المؤثرين بتوكن SAM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{margin: 0, background: 'black', color: 'white'}}>
        {children}
      </body>
    </html>
  )
}
