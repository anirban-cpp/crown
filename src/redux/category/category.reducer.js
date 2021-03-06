const INITIAL_STATE = {
    categories: [
        {
            title: 'Shirts',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg',
            id: 1,
            linkUrl: 'shirts'
        },
        {
            title: 'T-Shirts',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg',
            id: 2,
            linkUrl: 't-shirts'
        },
        {
            title: 'Jeans',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg',
            id: 3,
            linkUrl: 'jeans'
        },
        {
            title: 'Shorts & Trousers',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg',
            id: 4,
            linkUrl: 'trousers'
        },
        {
            title: 'Causal Shoes',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg',
            id: 5,
            linkUrl: 'casual shoes'
        },
        {
            title: 'infant Essentials',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg',
            id: 6,
            linkUrl: 'infant essentials'
        },
        {
            title: 'Kurtas & Kurta Sets',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/8d992d81-49e6-4dec-89a4-49a8af8beb5d1594222967220-Kurtas-_-Kurta-Sets.jpg',
            id: 7,
            linkUrl: 'kurtas & kurta sets'
        },
        {
            title: 'Sarees',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a048cca8-7b5d-417e-9645-ca98f4b6e52c1594222967506-Sarees.jpg',
            id: 8,
            linkUrl: 'sarees'
        },
        {
            title: 'Dresses',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/b0f459a0-9ef0-4392-a9ed-23892a36e79c1594222966859-Dresses.jpg',
            id: 9,
            linkUrl: 'dresses'
        },
        {
            title: 'Flats & Heels',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a4dedaa4-3710-4061-b7d6-ca8c83ce9d021594222967117-Heels.jpg',
            id: 10,
            linkUrl: 'flats & heels'
        },
        {
            title: 'Handbags',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a352f908-57c8-4c66-b052-18137cf15e6c1594222967074-Handbags.jpg',
            id: 11,
            linkUrl: 'handbags'
        },
        {
            title: 'Shorts',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/18eb31db-8dcb-4efa-b92d-61c8ebe0ee811594222834368-Shorts.jpg',
            id: 12,
            linkUrl: 'shorts'
        }
    ]    
};
  
const categoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
};
  
export default categoryReducer;
  