
export interface Property {
  id: number;
  name: string;
  price: string;
  salePrice?: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  description: string;
  images: string[];
  features: string[];
  propertyType: 'rent' | 'sale';
}

export const properties: Property[] = [
  {
    id: 1,
    name: "Deluxe Three Bedroom",
    price: "Contact for price",
    type: "apartment",
    bedrooms: 3,
    bathrooms: 3.5,
    size: "400 sq m",
    description: "Spacious three bedroom apartment with modern finishes, open concept living area and a private balcony.",
    images: [
      "/3bed2.jpg",
      "/3bed1.jpg"
    ],
    features: ["In-unit laundry", "Modern & Traditional Kitchen", "Walk-in closets", "Private balcony"],
    propertyType: 'rent'
  },
  {
    id: 2,
    name: "Premium Four Bedroom",
    price: "Contact for price",
    type: "apartment",
    bedrooms: 4,
    bathrooms: 4.5,
    size: "400 sq m",
    description: "Luxury unit with four bedrooms, gourmet kitchen with stainless steel appliances, and private balcony.",
    images: [
      "/4bed1.jpg",
      "/4bed3.jpg",
      "/4bed2.jpg"
    ],
    features: ["Modern & Traditional Kitchen", "Walk-in closets", "In-unit laundry", "Private balcony"],
    propertyType: 'rent'
  },
  {
    id: 3,
    name: "Penthouse Four Bedroom",
    price: "Contact for price",
    type: "apartment",
    bedrooms: 4,
    bathrooms: 5,
    size: "800 sq m",
    description: "Expansive four bedroom apartment with premium finishes, Two Spacious kitchens: Open & Traditional layouts, and City views.",
    images: [
      "/Penthouse5.jpg",
      "/Penthouse3.jpg",
      "/Penthouse1.jpg"
    ],
    features: ["In-unit laundry", "Two Spacious kitchens", "In-unit Spa", "Walk-in closets", "Private balcony with views"],
    propertyType: 'rent'
  },
  {
    id: 4,
    name: "Retail Space",
    price: "Contact for price",
    type: "retail",
    bedrooms: 1,
    bathrooms: 1,
    size: "Various sq m",
    description: "Premium retail spaces in a high-traffic location, featuring modern designs with flexible layouts and excellent visibility.",
    images: [
      "/Retail1.jpg",
      "/Retail2.jpg"
    ],
    features: ["Elevator Access", "Parking", "Office", "Shops", "24/7 Building Security"],
    propertyType: 'rent'
  },
  {
    id: 5,
    name: "Deluxe Three Bedroom",
    price: "Contact for price",
    salePrice: "Contact for price",
    type: "apartment",
    bedrooms: 3,
    bathrooms: 3.5,
    size: "400 sq m",
    description: "Spacious three bedroom apartment with modern finishes, open concept living area and a private balcony.",
    images: [
     "/3bed1.jpg",
      "/3bed2.jpg"
    ],
    features: ["In-unit laundry", "Modern & Traditional Kitchen", "Walk-in closets", "Private balcony"],
    propertyType: 'sale'
  },
  {
    id: 6,
    name: "Premium Four Bedroom",
    price: "Contact for price",
    salePrice: "Contact for price",
    type: "apartment",
    bedrooms: 4,
    bathrooms: 4.5,
    size: "400 sq m",
    description: "Luxury unit with four bedrooms, gourmet kitchen with stainless steel appliances, and private balconies.",
    images: [
      "/4bed3.jpg",
      "/4bed2.jpg",
      "/4bed1.jpg"
    ],
    features: ["In-unit laundry", "Modern & Traditional Kitchen", "Walk-in closets", "Private balcony"],
    propertyType: 'sale'
  }
];
