import restaurant1 from "../images/restaurant1.jpg";
import restaurant2 from "../images/restaurant2.jpg";
import restaurant3 from "../images/restaurant3.jpg";
import restaurant4 from "../images/restaurant4.jpg";
import restaurant5 from "../images/restaurant5.jpg";
import restaurant6 from "../images/restaurant6.jpg";
import restaurant7 from "../images/restaurant7.jpg";
import restaurant8 from "../images/restaurant8.jpg";

const Rest = [
  {
    id: "01",
    title: "Totot",
    city: "Addis Abeba",
    distance: 300,
    address:"Somewhere around Gerji",
    price:100,
    maxGroupSize: 10,
    desc: "Ethiopian traditional food",
    reviews: [],
    avgRating: 4.5,
    photo: restaurant1,
    featured: true,
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
  },
  {
    id: "02",
    title: " Yod Abissinia",
    city: "Addis Abeba",
    distance: 400,
    address:"somewhere around ..",
    price: 300,
    maxGroupSize: 8,
    desc: "Ethiopian traditional food",
    reviews: [],
    avgRating: 4.5,
    photo:  restaurant2,
    featured: true,
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
  },
  {
    id: "03",
    title: "Maleda",
    city: "4killo",
    distance: 500,
    price:250,
    maxGroupSize: 8,
    desc: "Ethiopian Traditional food",
    reviews: [],
    avgRating: 4.5,
    photo: restaurant3,
    featured: true,
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
  },
  {
    id: "04",
    title: "2000 Habesha Cultural Restaurant",
    city: "megenagna",
    distance: 500,
    price:600,
    maxGroupSize: 8,
    desc: "Ethiopian Traditional food",
    reviews: [],
    avgRating: 4.5,
    photo:  restaurant4,
    featured: true,
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
  },
  {
    id: "05",
    title: " La Mandoline Restaurant",
    city: "merkato",
    distance: 500,
    price: 400,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: restaurant5,
    featured: false,
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
  },
  {
    id: "06",
    title: "Sheger",
    city: "Gerji",
    distance: 500,
    price: 250,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
     
    ],
    avgRating: 4.5,
    photo:  restaurant6,
    featured: false,
  },
  {
    id: "07",
    title: "Kategna Traditional Restaurant",
    city: "Bole",
    distance: 500,
    price: 500,
    maxGroupSize: 8,
    desc: "Ethiopian Traditional food",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo:  restaurant7,
    featured: false,
  },
  {
    id: "08",
    title: "Dashen Traditional Ethiopian Restaurant",
    city: "Wello Sefer",
    distance: 500,
    price: 150,
    maxGroupSize: 8,
    desc: "Ethiopian Traditional food",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo:  restaurant8,
    featured: false,
  },
];

export default Rest;

