import './globals.css'

export const metadata = {
  title: 'NewsAI Dashboard',
  description: 'AI-powered news aggregation and analysis',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}