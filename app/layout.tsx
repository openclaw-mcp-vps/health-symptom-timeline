import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SymptomTrack — Track symptoms and medications over time',
  description: 'Visual timeline of symptoms, medications, and triggers with correlation analysis and doctor report generation for chronic illness patients and caregivers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cf61a130-e082-4826-8097-5e28c288b586"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
