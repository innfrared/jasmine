export interface Category {
  id: number;
  name: string;
  url: string;
  parent_id: number | null;
  subcategories?: Category[];
}

export const mockCategories: Category[] = [
  {
    id: 1,
    name: 'Bags and Purses',
    url: 'bags-and-purses',
    parent_id: null,
    subcategories: [
      {
        id: 101,
        name: 'Handbags',
        url: 'handbags',
        parent_id: 1,
      },
      {
        id: 102,
        name: 'Tote Bags',
        url: 'tote-bags',
        parent_id: 1,
      },
      {
        id: 103,
        name: 'Crossbody Bags',
        url: 'crossbody-bags',
        parent_id: 1,
      },
      {
        id: 104,
        name: 'Shoulder Bags',
        url: 'shoulder-bags',
        parent_id: 1,
      },
      {
        id: 105,
        name: 'Clutch Bags',
        url: 'clutch-bags',
        parent_id: 1,
      },
      {
        id: 106,
        name: 'Backpacks',
        url: 'backpacks',
        parent_id: 1,
      },
    ],
  },
  {
    id: 2,
    name: 'Dresses',
    url: 'dresses',
    parent_id: null,
    subcategories: [
      {
        id: 201,
        name: 'Casual Dresses',
        url: 'casual-dresses',
        parent_id: 2,
      },
      {
        id: 202,
        name: 'Evening Dresses',
        url: 'evening-dresses',
        parent_id: 2,
      },
      {
        id: 203,
        name: 'Maxi Dresses',
        url: 'maxi-dresses',
        parent_id: 2,
      },
      {
        id: 204,
        name: 'Midi Dresses',
        url: 'midi-dresses',
        parent_id: 2,
      },
      {
        id: 205,
        name: 'Matching Sets',
        url: 'matching-sets',
        parent_id: 2,
      },
    ],
  },
  {
    id: 3,
    name: 'Accessories',
    url: 'accessories',
    parent_id: null,
    subcategories: [
      {
        id: 301,
        name: 'Jewelry',
        url: 'jewelry',
        parent_id: 3,
      },
      {
        id: 302,
        name: 'Scarves',
        url: 'scarves',
        parent_id: 3,
      },
      {
        id: 303,
        name: 'Belts',
        url: 'belts',
        parent_id: 3,
      },
      {
        id: 304,
        name: 'Hats',
        url: 'hats',
        parent_id: 3,
      },
      {
        id: 305,
        name: 'Sunglasses',
        url: 'sunglasses',
        parent_id: 3,
      },
    ],
  },
];

export const getCategoryById = (id: number): Category | undefined => {
  for (const category of mockCategories) {
    if (category.id === id) return category;
    const subcategory = category.subcategories?.find(sub => sub.id === id);
    if (subcategory) return subcategory;
  }
  return undefined;
};

export const getParentCategory = (subcategoryId: number): Category | undefined => {
  for (const category of mockCategories) {
    if (category.subcategories?.some(sub => sub.id === subcategoryId)) {
      return category;
    }
  }
  return undefined;
};

