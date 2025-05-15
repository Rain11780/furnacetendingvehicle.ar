import ScrollToTop from "@/components/widgets/scroll-to-top";
import Navbar from "@/components/features/navbar";
import Footer from "@/components/features/footer";
import { Toaster } from "@/components/ui/sonner";
import CTA from "@/components/features/cta";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata = {
	title: {
		default: "SOCMA Furnace Tending Vehicles|Precision Solutions for Aluminum Smelters",
		template: "SOCMA Furnace Tending Vehicles"	
	},
	description: "Discover SOCMA's furnace tending vehicles, slag pot cars, and charging cars. High-precision, safe, and electric solutions for aluminum industry equipment needs.",
	openGraph: {
		title: "SOCMA Side Loader Forklifts | Engineered for Precision Material Handling",		
		description: "Discover SOCMA's furnace tending vehicles, slag pot cars, and charging cars. High-precision, safe, and electric solutions for aluminum industry equipment needs.",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "SOCMA Furnace Tending Vehicles"
			}
		],
		locale: "en_US",
		type: "website"
	},
	twitter: {
		card: "summary_large_image",
		title: {
			default: "SOCMA Furnace Tending Vehicles",
			template: "SOCMA Furnace Tending Vehicles"
		},
		description: "Discover SOCMA's furnace tending vehicles, slag pot cars, and charging cars. High-precision, safe, and electric solutions for aluminum industry equipment needs.",
		images: [
			{
				url: "/opengraph-image.png",
				alt: "SOCMA Furnace Tending Vehicles"
			}
		]
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<CTA />
				<Footer />
				<ScrollToTop />
				<Toaster richColors position="top-right" />
			</body>
		</html>
	);
}
