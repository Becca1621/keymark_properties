
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
    price: "",
    salePrice: "",
    type: "apartment",
    bedrooms: 3,
    bathrooms: 3.5,
    size: "400 sq m",
    description: "Spacious three bedroom apartment with modern finishes, open concept living area and a private balcony with city views.",
    images: [
      "/3bed 1.jpg",
      "/3bed 2.jpg"
    ],
    features: ["In-unit laundry", "Stainless steel appliances", "Walk-in closets", "Private balconies"],
    propertyType: 'rent'
  },
  {
    id: 2,
    name: "Premium Four Bedroom",
    price: "",
    salePrice: "",
    type: "apartment",
    bedrooms: 4,
    bathrooms: 4.5,
    size: "400 sq m",
    description: "Luxury unit with four bedrooms, gourmet kitchen with stainless steel appliances, and private balconies.",
    images: [
      "/4bed 1.jpg",
      "/4bed 3.jpg",
      "/4bed 2.jpg"
    ],
    features: ["In-unit laundry", "Stainless steel appliances", "Walk-in closets", "Private balconies"],
    propertyType: 'rent'
  },
  {
    id: 3,
    name: "Penthouse Four Bedroom",
    price: "",
    salePrice: "",
    type: "apartment",
    bedrooms: 4,
    bathrooms: 5,
    size: "800 sq m",
    description: "Expansive four bedroom apartment with premium finishes, chef's kitchen, separate dining area, and panoramic city views.",
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80"
    ],
    features: ["In-unit laundry", "In-unit Spa", "Walk-in closets", "Private balconies"],
    propertyType: 'rent'
  },
  {
    id: 4,
    name: "Retail Space",
    price: "",
    salePrice: "",
    type: "retail",
    bedrooms: 1,
    bathrooms: 1,
    size: "Various sq m",
    description: "Premium retail spaces in a high-traffic location, featuring modern designs with flexible layouts and excellent visibility.",
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80"
    ],
    features: ["Elevator Access", "Parking", "Office", "Shops", "24/7 Building Security"],
    propertyType: 'rent'
  },
  {
    id: 5,
    name: "Deluxe Three Bedroom",
    price: "",
    salePrice: "",
    type: "apartment",
    bedrooms: 3,
    bathrooms: 3.5,
    size: "400 sq m",
    description: "Spacious three bedroom apartment with modern finishes, open concept living area and a private balcony with city views.",
    images: [
     "/3bed 1.jpg",
      "/3bed 2.jpg"
    ],
    features: ["In-unit laundry", "Stainless steel appliances", "Walk-in closets", "Private balconies"],
    propertyType: 'sale'
  },
  {
    id: 6,
    name: "Premium Four Bedroom",
    price: "",
    salePrice: "",
    type: "apartment",
    bedrooms: 4,
    bathrooms: 4.5,
    size: "400 sq m",
    description: "Luxury unit with four bedrooms, gourmet kitchen with stainless steel appliances, and private balconies.",
    images: [
      "/4bed 2.jpg",
      "/4bed 3.jpg",
      "/4bed 1.jpg"
    ],
    features: ["In-unit laundry", "Stainless steel appliances", "Walk-in closets", "Private balconies"],
    propertyType: 'sale'
  }
];
