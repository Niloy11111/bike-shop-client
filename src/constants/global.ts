export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export const genders = ["Male", "Female", "Other"];
export const available = [true, false];
export const categories = ["Mountain", "Road", "Folding", "Electric"];
export const statuses = [
  "Pending",
  "Paid",
  "Shipped",
  "Completed",
  "Cancelled",
];

export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const monthOptions = monthNames.map((item) => ({
  value: item,
  label: item,
}));

export const genderOptions = genders.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));
export const availableOptions = available.map((item) => ({
  value: item,
  label: item,
}));

export const categoriesOptions = categories.map((item) => ({
  value: item,
  label: item,
}));
export const statusesOptions = statuses.map((item) => ({
  value: item,
  label: item,
}));

export const bloodGroupOptions = bloodGroups.map((item) => ({
  value: item,
  label: item,
}));

export const weekDaysOptions = weekdays.map((item) => ({
  value: item,
  label: item,
}));

export const slides = [
  {
    url: "https://images2.giant-bicycles.com/b_white%2Cc_crop%2Ch_600%2Cq_70%2Cw_1920/amk4alkpzskv9xqeiov6/giant_ebike_banner_navi21.jpg",
    pinPoint: "Best Sellers",
    title: "Professional cycling bikes and accessories",
    subtitle: "Ride All Year Round",
    description:
      "Experience the perfect blend of performance and comfort with our top-rated cycling collection. From professional racing bikes to essential accessories for every rider.",
    filterBtn: "Mountain",
    primaryCardImage: "https://example.com/mountain-bike-pro.jpg",
    primaryCardTitle: "Elite Mountain Series",
    primaryCardDescription: "Professional mountain bikes with suspension",
    secondaryCardImage: "https://example.com/bike-accessories.jpg",
    secondaryCardTitle: "Premium Accessories",
    secondaryCardDescription:
      "High-quality helmets, lights, and protective gear",
  },
  {
    url: "https://www.etonline.com/sites/default/files/styles/default/public/images/2024-06/vivi.jpg",
    pinPoint: "New Arrivals",
    title: "Premium electric bikes for urban adventures",
    subtitle: "Ride Smart Every Day",
    description:
      "Discover cutting-edge electric bikes designed for modern city life. Advanced battery technology and smart features make every urban journey effortless and enjoyable.",
    filterBtn: "Road",
    primaryCardImage: "https://example.com/urban-ebike.jpg",
    primaryCardTitle: "Smart Urban E-Bike",
    primaryCardDescription: "Electric bikes with GPS tracking and mobile app",
    secondaryCardImage:
      "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=400",
    secondaryCardTitle: "Urban Commuter Kit",
    secondaryCardDescription:
      "Essential gear including bags, locks, and safety",
  },
  {
    url: "https://www.wheelsnwaves.com/wp-content/uploads/banner-e-bike.jpg",
    pinPoint: "Limited Edition",
    title: "Mountain bikes built for extreme terrain",
    subtitle: "Conquer Every Trail",
    description:
      "Unleash your adventure spirit with our rugged mountain bikes. Built to handle the toughest trails and steepest climbs with unmatched durability and precision control.",
    filterBtn: "Folding",
    primaryCardImage: "https://example.com/extreme-mountain.jpg",
    primaryCardTitle: "Extreme Trail Master",
    primaryCardDescription: "Heavy-duty bikes engineered for terrains",
    secondaryCardImage: "https://example.com/trail-maintenance.jpg",
    secondaryCardTitle: "Trail Maintenance Kit",
    secondaryCardDescription:
      "Complete maintenance tools and spare parts trails",
  },
  {
    url: "https://jettyroadcycles.com.au/cdn/shop/files/Black_White_and_Yellow_Modern_Special_Big_Sale_Banner_1280x.jpg?v=1731561182",
    pinPoint: "Special Offer",
    title: "High-performance racing bikes and gear",
    subtitle: "Speed Beyond Limits",
    description:
      "Push your limits with our championship-grade racing bikes and professional gear. Engineered for speed, aerodynamics, and peak performance on every track.",
    filterBtn: "Electric",
    primaryCardImage: "https://example.com/racing-bike-pro.jpg",
    primaryCardTitle: "Championship Racing Bike",
    primaryCardDescription: "Carbon fiber bikes used by professionals",
    secondaryCardImage: "https://example.com/racing-gear.jpg",
    secondaryCardTitle: "Pro Racing Gear",
    secondaryCardDescription: "Performance clothing and competitive equipment",
  },
  {
    url: "https://www.shutterstock.com/image-photo/e-bike-austria-rental-ebike-600nw-2039878520.jpg",
    pinPoint: "Customer Choice",
    title: "Eco-friendly commuter bikes for daily rides",
    subtitle: "Green Journey Starts Here",
    description:
      "Transform your daily commute with our sustainable and stylish bikes. Reduce your carbon footprint while enjoying smooth, reliable transportation for work and leisure.",
    filterBtn: "Electric",
    primaryCardImage:
      "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=400",
    primaryCardTitle: "Eco Commuter Series",
    primaryCardDescription: "Sustainable bikes made from recycled materials",
    secondaryCardImage:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400",
    secondaryCardTitle: "Green Accessories",
    secondaryCardDescription: "Environmentally conscious bike accessories",
  },
];

export const headTitle = "text-3xl lg:text-4xl text-center font-bold";

export const priceLists = [
  {
    minPrice: 0,
    maxPrice: 499,
  },
  {
    minPrice: 499,
    maxPrice: 1199,
  },
  {
    minPrice: 1199,
    maxPrice: 1899,
  },
  {
    minPrice: 1899,
    maxPrice: 3200,
  },
  {
    minPrice: 3200,
    maxPrice: 12000,
  },
];

export const userInputs = [
  {
    id: "name",
    label: "name",
    type: "text",
    placeholder: "john_doe",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "john_doe@gmail.com",
  },
  {
    id: "phone",
    label: "Phone",
    type: "text",
    placeholder: "+1 234 567 89",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
  },
  {
    id: "country",
    label: "Country",
    type: "text",
    placeholder: "USA",
  },
  {
    id: "city",
    label: "City",
    type: "text",
    placeholder: "USA",
  },
];

export const faqs = [
  {
    id: "faq1",
    question: "Why should I use a bike shop e-commerce platform?",
    answer:
      "A bike shop e-commerce platform allows you to showcase and sell bikes and accessories online, manage orders efficiently, accept secure payments, and reach a broader customer base while automating your sales process.",
  },
  {
    id: "faq2",
    question: "Who can use this bike shop platform?",
    answer:
      "This platform can be used by bike shop owners, individual sellers, and customers looking to purchase bikes or accessories online. Admins can manage products and orders, while customers can browse, filter, purchase, and review products easily.",
  },
  {
    id: "faq3",
    question: "What payment methods are supported?",
    answer:
      "The platform currently supports secure online payments via Stripe and will expand to include PayPal and mobile wallet options to provide flexibility and convenience for customers.",
  },
  {
    id: "faq4",
    question: "Can customers track their orders?",
    answer:
      "We plan to integrate an order tracking feature allowing customers to view the status of their orders, including processing, shipping, and delivery updates directly from their dashboard.",
  },
  {
    id: "faq5",
    question:
      "What makes this platform different from other e-commerce solutions?",
    answer:
      "This bike shop platform is specifically optimized for bike and accessory sales with advanced filtering by type, brand, and price range, role-based dashboards, and a clean, responsive design that provides a seamless shopping experience across all devices.",
  },
];
