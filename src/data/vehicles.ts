export type Category = "Sedan" | "SUV" | "Coupe" | "Sports";

export type VehicleImage = {
  src: string;
  alt: string;
};

export type VehicleSpec = {
  label: string;
  value: string;
};

export type Vehicle = {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: number;
  category: Category;
  style: string;
  mileage: string;
  engine: string;
  transmission: string;
  color: string;
  interior: string;
  description: string;
  images: VehicleImage[];
  specs: VehicleSpec[];
  featured: boolean;
};

export const vehicles: Vehicle[] = [
  {
    id: "s-class",
    name: "Mercedes-Benz S-Class",
    brand: "Mercedes-Benz",
    year: 2025,
    price: 128000,
    category: "Sedan",
    style: "Executive Sedan",
    mileage: "1,850 mi",
    engine: "3.0L inline-6 turbo with mild hybrid assist",
    transmission: "9-speed automatic",
    color: "Obsidian Black",
    interior: "Macchiato Nappa leather",
    description:
      "The S-Class is the quiet reference of the collection. A long presence, a hushed cabin, and the kind of composure reserved for late arrivals and long roads.",
    images: [
      {
        src: "/images/s-class-1.jpg",
        alt: "Black Mercedes-Benz S-Class sedan, front three-quarter view",
      },
      {
        src: "/images/s-class-2.jpg",
        alt: "Mercedes-Benz S-Class profile on a dark city street",
      },
      {
        src: "/images/s-class-3.jpg",
        alt: "Close view of a Mercedes-Benz luxury sedan front end",
      },
    ],
    specs: [
      { label: "Drivetrain", value: "4MATIC all-wheel drive" },
      { label: "Power", value: "442 hp" },
      { label: "Acceleration", value: "0–60 mph in 4.5 s" },
      { label: "Seating", value: "Five" },
    ],
    featured: true,
  },
  {
    id: "porsche-911",
    name: "Porsche 911 Carrera",
    brand: "Porsche",
    year: 2025,
    price: 145000,
    category: "Coupe",
    style: "Performance Coupe",
    mileage: "640 mi",
    engine: "3.0L twin-turbo flat-6",
    transmission: "8-speed PDK",
    color: "Black",
    interior: "Black leather",
    description:
      "A Carrera in its most precise form. Immediate, balanced, and finished with the restraint that makes a 911 feel inevitable rather than loud.",
    images: [
      {
        src: "/images/porsche-1.jpg",
        alt: "Matte black Porsche 911 at sunset beside the water",
      },
      {
        src: "/images/porsche-2.jpg",
        alt: "Porsche 911 Carrera side profile",
      },
      {
        src: "/images/porsche-3.jpg",
        alt: "Porsche 911 rear three-quarter view at dusk",
      },
    ],
    specs: [
      { label: "Drivetrain", value: "Rear-wheel drive" },
      { label: "Power", value: "388 hp" },
      { label: "Acceleration", value: "0–60 mph in 3.9 s" },
      { label: "Seating", value: "Four" },
    ],
    featured: true,
  },
  {
    id: "range-rover",
    name: "Range Rover Autobiography",
    brand: "Range Rover",
    year: 2025,
    price: 175000,
    category: "SUV",
    style: "Luxury SUV",
    mileage: "2,410 mi",
    engine: "4.4L twin-turbo V8",
    transmission: "8-speed automatic",
    color: "Santorini Black",
    interior: "Perlino leather",
    description:
      "An Autobiography for those who want height, silence, and a commanding view of the road. Crafted for city evenings and open distance alike.",
    images: [
      {
        src: "/images/range-rover-1.jpg",
        alt: "Black Range Rover facing the camera in front of a modern building",
      },
      {
        src: "/images/range-rover-2.jpg",
        alt: "Range Rover luxury SUV side profile",
      },
      {
        src: "/images/range-rover-3.jpg",
        alt: "Range Rover front view in an architectural setting",
      },
    ],
    specs: [
      { label: "Drivetrain", value: "All-wheel drive" },
      { label: "Power", value: "523 hp" },
      { label: "Acceleration", value: "0–60 mph in 4.4 s" },
      { label: "Seating", value: "Five" },
    ],
    featured: true,
  },
  {
    id: "bmw-7-series",
    name: "BMW 7 Series",
    brand: "BMW",
    year: 2025,
    price: 112000,
    category: "Sedan",
    style: "Luxury Sedan",
    mileage: "3,120 mi",
    engine: "3.0L inline-6 turbo",
    transmission: "8-speed automatic",
    color: "Carbon Black Metallic",
    interior: "Black Merino leather",
    description:
      "A modern luxury sedan with a calm drive and a cabin designed for the person in the rear seat as much as the one at the wheel.",
    images: [
      {
        src: "/images/bmw-1.jpg",
        alt: "Black BMW 7 Series sedan, front three-quarter view",
      },
      {
        src: "/images/bmw-2.jpg",
        alt: "BMW sedan in profile against a dark background",
      },
      {
        src: "/images/bmw-3.jpg",
        alt: "BMW luxury sedan front detail",
      },
    ],
    specs: [
      { label: "Drivetrain", value: "Rear-wheel drive" },
      { label: "Power", value: "375 hp" },
      { label: "Acceleration", value: "0–60 mph in 5.2 s" },
      { label: "Seating", value: "Five" },
    ],
    featured: true,
  },
  {
    id: "bentley-continental",
    name: "Bentley Continental GT",
    brand: "Bentley",
    year: 2025,
    price: 248000,
    category: "Coupe",
    style: "Grand Tourer",
    mileage: "890 mi",
    engine: "4.0L twin-turbo V8",
    transmission: "8-speed dual-clutch",
    color: "Verdant",
    interior: "Linen and Beluga hide",
    description:
      "The Continental GT carries grand-touring tradition into the present. Power is there, but the lasting impression is the finish, the hush, and the way it occupies a street.",
    images: [
      {
        src: "/images/bentley-2.jpg",
        alt: "Green Bentley Continental GT coupe, front three-quarter view",
      },
      {
        src: "/images/bentley-1.jpg",
        alt: "Bentley Continental GT rear three-quarter view outside a glass showroom",
      },
      {
        src: "/images/bentley-3.jpg",
        alt: "Bentley Continental GT grand tourer",
      },
    ],
    specs: [
      { label: "Drivetrain", value: "All-wheel drive" },
      { label: "Power", value: "542 hp" },
      { label: "Acceleration", value: "0–60 mph in 3.9 s" },
      { label: "Seating", value: "Four" },
    ],
    featured: false,
  },
  {
    id: "audi-rs7",
    name: "Audi RS7",
    brand: "Audi",
    year: 2025,
    price: 139000,
    category: "Sports",
    style: "Performance Sedan",
    mileage: "1,540 mi",
    engine: "4.0L twin-turbo V8",
    transmission: "8-speed automatic",
    color: "Glacier White",
    interior: "Black fine nappa leather",
    description:
      "A fastback with the manners of a luxury sedan and the intent of a performance car. Understated from a distance, unmistakable up close.",
    images: [
      {
        src: "/images/audi-1.jpg",
        alt: "White Audi RS7 sportback parked in the mountains at dusk",
      },
      {
        src: "/images/audi-2.jpg",
        alt: "Red Audi RS7 on display at an auto show",
      },
      {
        src: "/images/audi-3.jpg",
        alt: "Audi RS7 front grille and lighting detail",
      },
    ],
    specs: [
      { label: "Drivetrain", value: "quattro all-wheel drive" },
      { label: "Power", value: "621 hp" },
      { label: "Acceleration", value: "0–60 mph in 3.3 s" },
      { label: "Seating", value: "Five" },
    ],
    featured: false,
  },
  {
    id: "amg-gt",
    name: "Mercedes-AMG GT",
    brand: "Mercedes-AMG",
    year: 2025,
    price: 168000,
    category: "Sports",
    style: "Sports Coupe",
    mileage: "420 mi",
    engine: "4.0L twin-turbo V8",
    transmission: "9-speed automatic",
    color: "Magnetite Black",
    interior: "Black nappa leather",
    description:
      "A two-door Mercedes-AMG shaped around response and presence. Low, wide, and prepared for drivers who want the theatrical without the unnecessary.",
    images: [
      {
        src: "/images/amg-1.jpg",
        alt: "Matte black Mercedes-AMG GT parked at a harbor with yachts",
      },
      {
        src: "/images/amg-2.jpg",
        alt: "Mercedes-AMG GT sports coupe side view",
      },
      {
        src: "/images/amg-3.jpg",
        alt: "Mercedes-AMG GT detail in low evening light",
      },
    ],
    specs: [
      { label: "Drivetrain", value: "All-wheel drive" },
      { label: "Power", value: "469 hp" },
      { label: "Acceleration", value: "0–60 mph in 3.8 s" },
      { label: "Seating", value: "Two" },
    ],
    featured: false,
  },
  {
    id: "lamborghini-urus",
    name: "Lamborghini Urus",
    brand: "Lamborghini",
    year: 2025,
    price: 265000,
    category: "SUV",
    style: "Performance SUV",
    mileage: "1,180 mi",
    engine: "4.0L twin-turbo V8",
    transmission: "8-speed automatic",
    color: "Nero Noctis",
    interior: "Nero Ade leather",
    description:
      "The Urus is a performance SUV with a super-car pulse. It is for clients who want everyday usability and a very particular kind of arrival.",
    images: [
      {
        src: "/images/urus-2.jpg",
        alt: "Matte black Lamborghini Urus, front three-quarter view",
      },
      {
        src: "/images/urus-1.jpg",
        alt: "Rear view of a yellow Lamborghini Urus",
      },
      {
        src: "/images/urus-3.jpg",
        alt: "Green Lamborghini Urus rear three-quarter view",
      },
    ],
    specs: [
      { label: "Drivetrain", value: "All-wheel drive" },
      { label: "Power", value: "657 hp" },
      { label: "Acceleration", value: "0–60 mph in 3.3 s" },
      { label: "Seating", value: "Five" },
    ],
    featured: false,
  },
  {
    id: "dodge-challenger",
    name: "Dodge Challenger SRT",
    brand: "Dodge",
    year: 2025,
    price: 86000,
    category: "Coupe",
    style: "Performance Coupe",
    mileage: "2,240 mi",
    engine: "6.4L HEMI V8",
    transmission: "8-speed automatic",
    color: "Pitch Black",
    interior: "Black Nappa leather",
    description:
      "A wide-body Challenger with the stance of a classic muscle coupe and the finish expected of a private collection. Direct, loud when asked, and composed on the street.",
    images: [
      {
        src: "/images/challenger-3.jpg",
        alt: "Black Dodge Challenger SRT widebody, front three-quarter view",
      },
      {
        src: "/images/challenger-2.jpg",
        alt: "Dark gray Dodge Challenger coupe from above on a city street",
      },
      {
        src: "/images/challenger-1.jpg",
        alt: "Black Dodge Challenger SRT parked in profile",
      },
    ],
    specs: [
      { label: "Drivetrain", value: "Rear-wheel drive" },
      { label: "Power", value: "485 hp" },
      { label: "Acceleration", value: "0–60 mph in 4.3 s" },
      { label: "Seating", value: "Five" },
    ],
    featured: false,
  },
  {
    id: "dodge-charger",
    name: "Dodge Charger SRT Hellcat",
    brand: "Dodge",
    year: 2025,
    price: 98000,
    category: "Sedan",
    style: "Performance Sedan",
    mileage: "1,760 mi",
    engine: "6.2L supercharged HEMI V8",
    transmission: "8-speed automatic",
    color: "Octane Red",
    interior: "Black Laguna leather",
    description:
      "The Charger SRT Hellcat is a four-door with the presence of a coupe. Supercharged power, a wide stance, and enough restraint in the cabin for daily use.",
    images: [
      {
        src: "/images/charger-2.jpg",
        alt: "Black Dodge Charger widebody sedan, front three-quarter view",
      },
      {
        src: "/images/charger-1.jpg",
        alt: "Red Dodge Charger SRT Hellcat driving on a city road",
      },
      {
        src: "/images/charger-3.jpg",
        alt: "Gray Dodge Charger sedan with a hood scoop",
      },
    ],
    specs: [
      { label: "Drivetrain", value: "Rear-wheel drive" },
      { label: "Power", value: "717 hp" },
      { label: "Acceleration", value: "0–60 mph in 3.6 s" },
      { label: "Seating", value: "Five" },
    ],
    featured: false,
  },
  {
    id: "dodge-durango",
    name: "Dodge Durango SRT",
    brand: "Dodge",
    year: 2025,
    price: 96000,
    category: "SUV",
    style: "Performance SUV",
    mileage: "3,480 mi",
    engine: "6.4L HEMI V8",
    transmission: "8-speed automatic",
    color: "White Knuckle",
    interior: "Black leather with suede inserts",
    description:
      "A three-row Durango tuned for drivers who want height and a V8. It carries a family without giving up the character of the Dodge line.",
    images: [
      {
        src: "/images/durango-1.jpg",
        alt: "White Dodge Durango SRT, front three-quarter view",
      },
      {
        src: "/images/durango-3.jpg",
        alt: "Black Dodge Durango rear three-quarter view",
      },
      {
        src: "/images/durango-2.jpg",
        alt: "Gray Dodge Durango SUV driving on a city street",
      },
    ],
    specs: [
      { label: "Drivetrain", value: "All-wheel drive" },
      { label: "Power", value: "475 hp" },
      { label: "Acceleration", value: "0–60 mph in 4.4 s" },
      { label: "Seating", value: "Six" },
    ],
    featured: false,
  },
];

export const featuredVehicles = vehicles.filter((vehicle) => vehicle.featured);

export const categories = ["All", "Sedan", "SUV", "Coupe", "Sports"] as const;

export type CategoryFilter = (typeof categories)[number];

export function getVehicleById(id: string | undefined) {
  if (!id) return undefined;
  return vehicles.find((vehicle) => vehicle.id === id);
}

export function getRelatedVehicles(id: string, count = 3) {
  const current = getVehicleById(id);
  if (!current) return [];
  const sameCategory = vehicles.filter(
    (vehicle) => vehicle.id !== id && vehicle.category === current.category,
  );
  const others = vehicles.filter(
    (vehicle) => vehicle.id !== id && vehicle.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, count);
}
