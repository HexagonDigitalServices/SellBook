import { BookOpen, Award, Users, Home, Info, Mail, Star } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

import BP1 from "./BP1.png";
import BP2 from "./BP2.png";
import BP3 from "./BP3.png";
import BP4 from "./BP4.png";
import BP5 from "./BP5.png";
import BP6 from "./BP6.png";
import BP7 from "./BP7.png";
import BP8 from "./BP8.png";
import BP9 from "./BP9.png";
import BP10 from "./BP10.png";
import BP11 from "./BP11.png";
import BP12 from "./BP12.png";
import BP13 from "./BP13.png";
import BP14 from "./BP14.png";
import BP15 from "./BP15.png";
import BP16 from "./BP16.png";

import Book1 from "../assets/Book1.png"
import Book2 from "../assets/Book2.png"
import Book3 from "../assets/Book3.png"
import Book4 from "../assets/Book4.png"
import Book5 from "../assets/Book5.png"
import Book6 from "../assets/Book6.png"
import Book7 from "../assets/Book7.png"
import Book8 from "../assets/Book8.png"

import HB1 from "../assets/HB1.png"
import HB2 from "../assets/HB2.png"
import HB3 from "../assets/HB3.png"
import HB4 from "../assets/HB4.png"

import HA1 from "../assets/HA1.png"
import HA2 from "../assets/HA2.png"
import HA3 from "../assets/HA3.png"

import L from "../assets/London.jpg"
import T from "../assets/Tokyo.jpg"
import N from "../assets/New York.jpg"
import S from "../assets/Sydney.jpg"
import A1 from "../assets/A1.png"
import A2 from "../assets/A2.png"
import A3 from "../assets/A3.png"

const books = [
  {
    id: 1,
    title: "Le Tour Do Monde",
    author: "Perkin Didot",
    price: "599",
    description: "A portrait of the Jazz Age in all of its decadence and excess...",
    image: BP1,
  },
  {
    id: 2,
    title: "The Poems Of Byron",
    author: "Houghton Mifflin Co",
    price: "450",
    description: "A powerful story of racial injustice and the loss of innocence...",
    image: BP2,
  },
  {
    id: 3,
    title: "Aloe",
    author: "Subman",
    price: "399",
    description: "A dystopian novel about totalitarianism and mass surveillance...",
    image: BP3,
  },
  {
    id: 4,
    title: "The Castle in the Forest",
    author: "Norman Mailer",
    price: "349",
    description: "A romantic novel of manners set in early 19th century England...",
    image: BP4,
  },
  {
    id: 5,
    title: "Lyttkens Och Wulff",
    author: "Svenska Sprikets",
    price: "425",
    description: "A story of teenage alienation and loss of innocence...",
    image: BP5,
  },
  {
    id: 6,
    title: "Dostoevskij",
    author: "L'idiota",
    price: "549",
    description: "The epic tale of Captain Ahab's obsession with a white whale...",
    image: BP6,
  },
  {
    id: 7,
    title: "War and Peace",
    author: "Leo Tolstoy",
    price: "699",
    description: "A monumental work set during the Napoleonic invasion of Russia...",
    image: BP7,
  },
  {
    id: 8,
    title: "The Odyssey",
    author: "David Lodge",
    price: "299",
    description: "The epic journey of Odysseus as he tries to return home...",
    image: BP8,
  },
  {
    id: 9,
    title: "The Design Of Books",
    author: "Debbie Bern",
    price: "379",
    description: "A Gothic tale of science gone wrong and its consequences...",
    image: BP9,
  },
  {
    id: 10,
    title: "The Crossing",
    author: "Jason Mott",
    price: "425",
    description: "A psychological exploration of guilt and redemption...",
    image: BP10,
  },
  {
    id: 11,
    title: "The Phoenix Of Destiny",
    author: "Geronimo Stilton",
    price: "499",
    description: "A fantasy adventure through Middle-earth...",
    image: BP11,
  },
  {
    id: 12,
    title: "The Author",
    author: "Raj Siddhi",
    price: "399",
    description: "A dystopian vision of a scientifically engineered society...",
    image: BP12,
  },
  {
    id: 13,
    title: "The Doctor",
    author: "Oscar Patton",
    price: "549",
    description: "An epic journey through Hell, Purgatory, and Paradise...",
    image: BP13,
  },
  {
    id: 14,
    title: "Darkness Gathers",
    author: "Emma Elliot",
    price: "325",
    description: "A turbulent story of passion and revenge on the Yorkshire moors...",
    image: BP14,
  },
  {
    id: 15,
    title: "Gitanjali",
    author: "RabindraNath Tagore",
    price: "449",
    description: "The epic poem about the Trojan War and Achilles' rage...",
    image: BP15,
  },
  {
    id: 16,
    title: "The Unwilling",
    author: "John Hart",
    price: "399",
    description: "The adventures of a nobleman who imagines himself a knight...",
    image: BP16,
  },
];

export default books;

export const branches = [
  {
    city: "Kurunegala",
    address: "123 Bookworm Lane",
    contact: "037-123-4567",
    services: ["Curated Collections", "Author Events", "Reading Nooks", "Café"]
  },
  {
    city: "Kandy",
    address: "456 Novelty Road",
    contact: "081-234-5678",
    services: ["Writing Workshops", "Book Clubs", "Rare Editions", "Garden Reading Area"]
  },
  {
    city: "Colombo",
    address: "789 Prose Parkway",
    contact: "011-345-6789",
    services: ["24/7 Access", "Digital Library", "Conference Rooms", "Audio Books"]
  },
  {
    city: "Galle",
    address: "321 Chapter Street",
    contact: "091-456-7890",
    services: ["Beachside Reading", "Children's Corner", "Book Launches", "Art Gallery"]
  }
];

export const teamMembers = [
  {
    name: "Sarah Bookman",
    role: "Chief Story Curator",
    bio: "Decade-long journey in literary curation. Lover of magical realism",
    social: { facebook: "https://facebook.com/", twitter: "https://twitter.com/" },
    img: A1
  },
  {
    name: "James PageTurner",
    role: "Literary Architect",
    bio: "Sci-fi & fantasy specialist. Building worlds one book at a time",
    social: { facebook: "https://facebook.com/", twitter: "https://twitter.com/" },
    img: A2
  },
  {
    name: "Lily Novelight",
    role: "Poetry Alchemist",
    bio: "Transforming words into emotional journeys. National Poetry Award winner",
    social: { facebook: "https://facebook.com/", twitter: "https://twitter.com/" },
    img: A3
  }
];

export const stats = [
  { icon: "FaHeart", title: "Happy Readers", value: "500K+" },
  { icon: "FaUsers", title: "Community Members", value: "50K+" },
  { icon: "FaAward", title: "Awards Won", value: "12" }
];


// OURBESTSELLER.JSX
export const bgColors = [
  "from-[#fce3ec] to-[#ffe8d4]",
  "from-[#e2f0cb] to-[#ffe6e6]",
  "from-[#d0e6f6] to-[#f3e5f5]",
  "from-[#fff1c1] to-[#ffd3b4]",
  "from-[#e1f7d5] to-[#ffccbc]",
  "from-[#f0f4c3] to-[#b2dfdb]",
  "from-[#ede7f6] to-[#e1bee7]",
  "from-[#dcedc8] to-[#fff9c4]",
]
export const obsbooks = [
  { id: 1, image: Book1, title: "The World Versus Everything Beyond", author: "Like & Michael Cahn", price: 250.20 },
  { id: 2, image: Book2, title: "The World Versus Everything Beyond", author: "Like & Michael Cahn", price: 350.20 },
  { id: 3, image: Book3, title: "Twilight Fortress", author: "Oregory Barrett", price: 190.99 },
  { id: 4, image: Book4, title: "The Silent Echo", author: "Sarah Mitchell", price: 220.99 },
  { id: 5, image: Book5, title: "Mystic River", author: "Dennis Lehane", price: 182.99 },
  { id: 6, image: Book6, title: "The Alchemist", author: "Paulo Coelho", price: 166.00 },
  { id: 7, image: Book7, title: "Atomic Habits", author: "James Clear", price: 209.00 },
  { id: 8, image: Book8, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", price: 218.00 },
]

// HBBOOKS
export const hbbooks = [
  { id: 101, title: 'Harry Potter', author: 'J.K. Rowling', price: 255.2, rating: 3, image: HB1 },
  { id: 102, title: 'Hygge', author: 'Meik Wiking', price: 289.2, rating: 4, image: HB2 },
  { id: 103, title: 'Fifty Shades Darker', author: 'E. L. James', price: 325.2, rating: 5, image: HB3 },
  { id: 104, title: 'The Two Towers', author: 'J.R.R. Tolkien', price: 425.2, rating: 4, image: HB4 },
]


// HA DUMMY DATA
export const hastats = [
  { icon: BookOpen, value: "10K+", label: "Books Collection" },
  { icon: Users, value: "50K+", label: "Happy Readers" },
  { icon: Award, value: "15+", label: "Industry Awards" },
]

export const featuredBooks = [
  {
    image: HA1,
    title: "The Midnight Library",
    author: "Matt Haig",
    description: "Between life and death there is a library, and within that library, the shelves go on forever.",
  },
  {
    image: HA2,
    title: "Ancient Chronicles",
    author: "Lirael Morningstar",
    description: "Discover the secrets of ancient civilizations through their own words.",
  },
  {
    image: HA3,
    title: "Coffee & Pages",
    author: "Evelyn Pagewright",
    description: "A collection of short stories perfect for your morning coffee ritual.",
  },
]

// FOOTER
export const socialLinks = [
  { Icon: FaFacebook, url: "https://facebook.com/" },
  { Icon: FaTwitter, url: "https://twitter.com/" },
  { Icon: FaInstagram, url: "https://instagram.com/" },
  { Icon: FaYoutube, url: "https://youtube.com/" },
]

export const quickLinks = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Books", url: "/books" },
  { title: "Contact", url: "/contact" },
]

// NAVBAR
export const navItems = [
  { name: "Home", path: "/", icon: Home, color: "from-cyan-400 to-blue-500" },
  { name: "About", path: "/about", icon: Info, color: "from-purple-400 to-indigo-500" },
  { name: "Books", path: "/books", icon: BookOpen, color: "from-emerald-400 to-teal-500" },
  { name: "Contact", path: "/contact", icon: Mail, color: "from-rose-400 to-pink-600" },
]

// BANNER
export const words = ["Narratives", "Perspectives", "Universes", "Visions", "Horizons"];
export const apstats = [
  { icon: Award, value: "25K+", label: "Awards Won" },
  { icon: Users, value: "1M+", label: "Active Readers" },
  { icon: BookOpen, value: "100K+", label: "Books Available" },
  { icon: Star, value: "4.9", label: "Average Rating" }
]

export const apteamMembers = [
  { id: 1, name: "Sarah Johnson", position: "CEO & Founder", image: A1 },
  { id: 2, name: "Michael Chen", position: "CTO", image: A2 },
  { id: 3, name: "Emma Williams", position: "Head Editor", image: A3 }
]

export const apbranches = [
  { location: "New York", hours: "9AM - 9PM", image: N },
  { location: "London", hours: "8AM - 8PM", image: L },
  { location: "Tokyo", hours: "10AM - 10PM", image: T },
  { location: "Sydney", hours: "8AM - 8PM", image: S }
]