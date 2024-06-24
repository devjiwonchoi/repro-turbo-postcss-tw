import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html className="p-6">
      <head />
      <body>{children}</body>
    </html>
  )
}
