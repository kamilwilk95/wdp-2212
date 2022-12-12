const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      image: 'bed_1.jpg',
      price: 30,
      stars: 2,
      userRating: 4,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      image: 'bed_2.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      image: 'bed_3.jpg',
      price: 30,
      priceOld: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      image: 'bed_4.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      image: 'bed_5.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      image: 'bed_6.jpg',
      price: 30,
      priceOld: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      image: 'bed_7.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      image: 'bed_8.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      image: 'bed_9.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      image: 'bed_10.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      image: 'bed_11.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      image: 'bed_12.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      image: 'bed_13.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      image: 'chair_1.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      image: 'chair_2.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      image: 'chair_3.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      image: 'chair_4.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      image: 'chair_5.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      image: 'chair_6.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      image: 'chair_7.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      image: 'chair_8.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      image: 'chair_9.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      image: 'table_1.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      image: 'table_2.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
  ],
  cart: {
    products: [],
  },
  feedback: [
    {
      id: 0,
      name: 'John Smith',
      description: 'Furniture client',
      photo: '0_john.jpg',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero officia iure suscipit nam atque maiores doloremque vitae rem eos nisi, odio, sint dicta tempore earum ab sapiente magnam fugit ut.',
    },
    {
      id: 1,
      name: 'Mary Doe',
      description: 'Interior designer',
      photo: '1_mary.jpg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, doloremque reprehenderit ipsa quibusdam ea quod laboriosam odit incidunt.',
    },
    {
      id: 2,
      name: 'Derek Tig',
      description: 'Furniture client',
      photo: '2_derek.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid pariatur eaque omnis rerum beatae, aliquam incidunt corrupti illum, soluta dicta, non eligendi minima corporis.',
    },
  ],
  promo: [
    {
      id: 1,
      photo: 'promo_1.jpg',
    },
    {
      id: 2,
      photo: 'promo_2.jpg',
    },
    {
      id: 3,
      photo: 'promo_3.jpg',
    },
  ],
  brands: [
    {
      id: 1,
      photo: '1.png',
    },
    {
      id: 2,
      photo: '2.png',
    },
    {
      id: 3,
      photo: '3.png',
    },
    {
      id: 4,
      photo: '4.png',
    },
    {
      id: 5,
      photo: '5.png',
    },
    {
      id: 6,
      photo: '3.png',
    },
    {
      id: 7,
      photo: '5.png',
    },
    {
      id: 8,
      photo: '3.png',
    },
    {
      id: 9,
      photo: '2.png',
    },
    {
      id: 10,
      photo: '1.png',
    },
  ],
};

export default initialState;
