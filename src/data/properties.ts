
export interface Property {
  id: string;
  title: string;
  type: 'rent' | 'sale';
  bedrooms: 3 | 4;
  bathrooms: number;
  squareFeet: number;
  price: number;
  address: string;
  description: string;
  features: string[];
  images: string[];
}

export const properties: Property[] = [
  {
    id: "p001",
    title: "Luxury 3-Bedroom Corner Unit",
    type: "sale",
    bedrooms: 3,
    bathrooms: 3.5,
    squareFeet: 2200,
    price: 1850000,
    address: "The Apex Residences, 175 Park Avenue South, New York, NY",
    description: "This stunning corner unit features floor-to-ceiling windows with panoramic city views. Boasting three generously sized bedrooms, this residence offers the perfect blend of luxury and comfort with premium finishes throughout.",
    features: [
      "Corner exposure with dual aspect views",
      "Chef's kitchen with marble countertops",
      "Custom Italian cabinetry",
      "Home automation system",
      "Private balcony",
      "Walk-in closets",
      "Hardwood floors throughout"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
  {
    id: "p002",
    title: "Premium 3-Bedroom Residence",
    type: "rent",
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 1950,
    price: 12500,
    address: "The Apex Residences, 175 Park Avenue South, New York, NY",
    description: "This impeccable residence offers a perfect blend of comfort and elegance. The open floor plan creates a seamless flow throughout the home, while oversized windows bathe the space in natural light. The chef's kitchen is equipped with professional-grade appliances.",
    features: [
      "24-hour concierge",
      "In-unit washer and dryer",
      "Spa-inspired bathrooms",
      "Private balcony",
      "Walk-in closets",
      "Hardwood floors",
      "Smart home technology"
    ],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
  {
    id: "p003",
    title: "Grand 4-Bedroom Penthouse",
    type: "sale",
    bedrooms: 4,
    bathrooms: 4,
    squareFeet: 3200,
    price: 3950000,
    address: "The Apex Residences, 175 Park Avenue South, New York, NY",
    description: "Experience ultimate luxury in this extraordinary four-bedroom penthouse. From the custom millwork to the imported marble, no detail has been overlooked. The expansive living areas are perfect for entertaining, while the private bedroom wing offers serene retreats.",
    features: [
      "Double-height ceilings",
      "Panoramic city views",
      "Private terrace",
      "Custom walk-in closets",
      "Media room",
      "Service entrance",
      "Wine storage"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
  {
    id: "p004",
    title: "Executive 4-Bedroom Suite",
    type: "rent",
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 2800,
    price: 18000,
    address: "The Apex Residences, 175 Park Avenue South, New York, NY",
    description: "Nestled in our coveted building, this exceptional residence offers both space and sophistication. With four spacious bedrooms and almost 2,800 square feet of living space, this home provides ample room for both family living and elegant entertaining.",
    features: [
      "Private elevator landing",
      "Separate dining room",
      "Gourmet kitchen",
      "Home office",
      "In-unit laundry",
      "Climate-controlled storage",
      "Floor-to-ceiling windows"
    ],
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1560448205-d5b9922aa43b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1635108200488-4ec04fd85db3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
  {
    id: "p005",
    title: "Elegant 3-Bedroom Residence",
    type: "sale",
    bedrooms: 3,
    bathrooms: 3,
    squareFeet: 2100,
    price: 1750000,
    address: "The Apex Residences, 175 Park Avenue South, New York, NY",
    description: "This stunning unit offers spectacular views and abundant natural light through its floor-to-ceiling windows. The sophisticated interior features custom finishes throughout, from the herringbone hardwood floors to the marble-clad bathrooms.",
    features: [
      "Eastern exposure",
      "Custom built-ins",
      "Spa-inspired bathrooms",
      "Chef's kitchen",
      "Library/den",
      "Walk-in closets",
      "Motorized window treatments"
    ],
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600563438938-a9a27215d610?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1633505899118-4ca6bd143043?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
  {
    id: "p006",
    title: "Modern 4-Bedroom Skyline View",
    type: "rent",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2600,
    price: 16500,
    address: "The Apex Residences, 175 Park Avenue South, New York, NY",
    description: "Located on a high floor, this stunning four-bedroom apartment combines expansive space with modern luxury. The soaring 11-foot ceilings and floor-to-ceiling windows provide breathtaking views of the city skyline.",
    features: [
      "Western sunset views",
      "Oversized windows",
      "Open concept layout",
      "Designer fixtures",
      "Custom lighting",
      "Central air conditioning",
      "Smart home features"
    ],
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2092&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1617098650990-217c7cf9d124?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  }
];
