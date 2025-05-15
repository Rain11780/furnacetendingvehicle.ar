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
	  default: "مركبات صيانة الأفران من SOCMA | حلول دقيقة لمصاهر الألمنيوم",
	  template: "مركبات صيانة الأفران من SOCMA"
	},
	description: "اكتشف مركبات صيانة الأفران، وعربات أواني الخبث، وعربات الشحن من SOCMA. حلول كهربائية عالية الدقة، آمنة، ومخصصة لتلبية احتياجات معدات صناعة الألمنيوم.",
	openGraph: {
	  title: "رافعات شوكية جانبية من SOCMA | مصممة لمعالجة دقيقة للمواد",
	  description: "اكتشف مركبات صيانة الأفران، وعربات أواني الخبث، وعربات الشحن من SOCMA. حلول كهربائية عالية الدقة، آمنة، ومخصصة لتلبية احتياجات معدات صناعة الألمنيوم.",
	  images: [
		{
		  url: "/opengraph-image.png",
		  width: 1200,
		  height: 630,
		  alt: "مركبات صيانة الأفران من SOCMA"
		}
	  ],
	  locale: "ar_AR",
	  type: "website"
	},
	twitter: {
	  card: "summary_large_image",
	  title: {
		default: "مركبات صيانة الأفران من SOCMA",
		template: "مركبات صيانة الأفران من SOCMA"
	  },
	  description: "اكتشف مركبات صيانة الأفران، وعربات أواني الخبث، وعربات الشحن من SOCMA. حلول كهربائية عالية الدقة، آمنة، ومخصصة لتلبية احتياجات معدات صناعة الألمنيوم.",
	  images: [
		{
		  url: "/opengraph-image.png",
		  alt: "مركبات صيانة الأفران من SOCMA"
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
