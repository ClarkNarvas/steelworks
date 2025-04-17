import { Poppins, Literata } from "next/font/google"

// Load Poppins font
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
})

// Load Literata font
export const literata = Literata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-literata",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})
