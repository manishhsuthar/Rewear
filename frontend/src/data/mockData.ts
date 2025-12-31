import { ClothingItem, User, UserProfile, Category } from '../types';

export const mockUsers: User[] = [
  {
    id: 1,
    username: 'eco_sarah',
    email: 'sarah@example.com',
    points: 150,
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: 2,
    username: 'green_mike',
    email: 'mike@example.com',
    points: 89,
    created_at: '2024-01-20T14:30:00Z'
  }
];

export const mockUserProfiles: UserProfile[] = [
  {
    id: 1,
    user: mockUsers[0],
    profile_picture_url: 'https://i.pravatar.cc/150?u=eco_sarah',
    bio: 'Sustainable fashion enthusiast. Swapping my way to a greener closet!',
    points: 150,
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: 2,
    user: mockUsers[1],
    profile_picture_url: 'https://i.pravatar.cc/150?u=green_mike',
    bio: 'Love finding unique pre-loved pieces. Let\'s trade!',
    points: 89,
    created_at: '2024-01-20T14:30:00Z'
  }
];

export const mockItems: ClothingItem[] = [
  {
    id: 1,
    name: 'Vintage Denim Jacket',
    description: 'Beautiful vintage denim jacket in excellent condition. Perfect for sustainable fashion lovers.',
    category: 'other',
    size: 'M',
    condition: 'like_new',
    image: 'https://i.pinimg.com/736x/55/0d/50/550d50c57923ec5dc1198edb26f9016d.jpg ',
    owner: mockUserProfiles[0],
    status: 'available',
    is_featured: true,
    type: 'unisex',
    tags: 'denim, vintage, jacket'
  },
  {
    id: 2,
    name: 'Organic Cotton Dress',
    description: 'Flowing organic cotton dress, perfect for summer. Barely worn, like new condition.',
    category: 'bottom',
    size: 'S',
    condition: 'new',
    image: 'https://i.pinimg.com/1200x/50/77/8a/50778a92f2a5490280e135b63432fc08.jpg',
    owner: mockUserProfiles[1],
    status: 'available',
    is_featured: false,
    type: 'women',
    tags: 'cotton, dress, summer'
  },
  {
    id: 3,
    name: 'Kids Rainbow Sweater',
    description: 'Colorful hand-knit sweater for kids. Made with eco-friendly yarn.',
    category: 'top',
    size: '6-8 years',
    condition: 'used',
    image: 'https://i.pinimg.com/736x/cb/d9/a4/cbd9a46ecea94540ae8b3ad3bbc00883.jpg',
    owner: mockUserProfiles[0],
    status: 'available',
    is_featured: false,
    type: 'kids',
    tags: 'kids, sweater, colorful'
  },
  {
    id: 4,
    name: 'Sustainable Wool Coat',
    description: 'High-quality wool coat from sustainable sources. Professional and stylish.',
    category: 'top',
    size: 'L',
    condition: 'like_new',
    image: 'https://i.pinimg.com/736x/1c/e9/77/1ce977a1998f3f523a5080e732de14d8.jpg',
    owner: mockUserProfiles[1],
    status: 'available',
    is_featured: true,
    type: 'men',
    tags: 'wool, coat, sustainable'
  }
];


export const categories: Category[] = [
  {
    name: 'Men',
    slug: 'men',
    image: 'https://i.pinimg.com/736x/55/0d/50/550d50c57923ec5dc1198edb26f9016d.jpg ',
    count: 45
  },
  {
    name: 'Women',
    slug: 'women',
    image: 'https://i.pinimg.com/1200x/50/77/8a/50778a92f2a5490280e135b63432fc08.jpg',
    count: 78
  },
  {
    name: 'Kids',
    slug: 'kids',
    image: 'https://i.pinimg.com/1200x/ad/bb/08/adbb08ade1cbf1d744db48f0e854d99e.jpg',
    count: 32
  },
  {
    name: 'Unisex',
    slug: 'unisex',
    image: 'https://i.pinimg.com/736x/a2/3c/13/a23c134ebdc47581fa854c248633a8f5.jpg',
    count: 23
  }
];