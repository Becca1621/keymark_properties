
export interface Property {
  id: string;
  title: string;
  type: 'rent' | 'sale';
  bedrooms: 3 | 4;
  bathrooms: number;
  squareFeet: number;
  price: string;
  address: string;
  description: string;
  features: string[];
  images: string[];
}

export const properties: Property[] = [
  {
    id: "p001",
    title: "The Penthouse",
    type: "rent",
    bedrooms: 4,
    bathrooms: 5,
    squareFeet: 800,
    price: "Call for Details",
    address: "Bole, Addis Ababa",
    description: "Spanning the entire top floor, this stunning penthouse offers breathtaking views of the city skyline. Featuring high ceilings, floor-to-ceiling windows, and a private terrace, this residence epitomizes luxury urban living.",
    features: [
      "Elevator access",
      "Chef's kitchen with marble countertops",
      "Private In-Unit Spa",
      "Secure Entrance",
      "Private balcony with unmatched views",
      "Home office/library"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
  {
    id: "p002",
    title: "The Three Bedroom Residence",
    type: "sale",
    bedrooms: 3,
    bathrooms: 3.5,
    squareFeet: 400,
    price: "Call for Details",
    address: "Bole, Addis Ababa",
    description: "This impeccable residence offers a perfect blend of comfort and elegance. The open floor plan creates a seamless flow throughout the home, while oversized windows bathe the space in natural light. The chef's kitchen is equipped with professional-grade appliances.",
    features: [
      "24-hour concierge",
      "In Unit Washer/Dryer",
      "Two Kitchen Layout",
      "Private balcony",
      "Walk-in closets",
      "Hardwood/Ceramic floors"
    ],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1617104678098-de229db51175?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
  {
    id: "p003",
    title: "The Three Bedroom Suite",
    type: "rent",
    bedrooms: 3,
    bathrooms: 3.5,
    squareFeet: 400,
    price: "Call for Details",
    address: "Bole, Addis Ababa",
    description: "Experience ultimate luxury in this extraordinary three-bedroom apartment.",
    features: [
      "24-hour concierge",
      "In Unit Washer/Dryer",
      "Two Kitchen Layout",
      "Private balcony",
      "Walk-in closets",
      "Hardwood/Ceramic floors"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
  {
    id: "p004",
    title: "The Four Bedroom Residence",
    type: "sale",
    bedrooms: 4,
    bathrooms: 4.5,
    squareFeet: 400,
    price: "Call for Details",
    address: "Bole, Addis Ababa",
    description: "This exceptional residence offers both space and sophistication. With four spacious bedrooms, this home provides ample room for both family living and elegant entertaining.",
    features: [
      "24-hour concierge",
      "In Unit Washer/Dryer",
      "Two Kitchen Layout",
      "Private balcony",
      "Walk-in closets",
      "Hardwood/Ceramic floors"
    ],
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
  {
    id: "p005",
    title: "The Four Bedroom Suite",
    type: "rent",
    bedrooms: 4,
    bathrooms: 4.5,
    squareFeet: 400,
    price: "Call for Details",
    address: "250 West 50th Street, New York, NY",
    description: "This exceptional apartment offers both space and sophistication. With four spacious bedrooms, this home provides ample room for both family living and elegant entertaining.",
    features: [
      "24-hour concierge",
      "In Unit Washer/Dryer",
      "Two Kitchen Layout",
      "Private balcony",
      "Walk-in closets",
      "Hardwood/Ceramic floors"
    ],
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
];
