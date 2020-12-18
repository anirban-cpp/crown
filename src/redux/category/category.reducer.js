const INITIAL_STATE = {
    categories: [
        {
            title: 'Shirts',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg',
            id: 1,
            linkUrl: 'shop/shirts'
        },
        {
            title: 'T-Shirts',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg',
            id: 2,
            linkUrl: 'shop/t-shirts'
        },
        {
            title: 'Jeans',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg',
            id: 3,
            linkUrl: 'shop/jeans'
        },
        {
            title: 'Shorts & Trousers',
            imageUrl: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2018/12/7/2dc5f2bd-3109-4260-bca0-65f3ca26e1311544188015517-1.jpg',
            id: 4,
            linkUrl: 'shop/shorts'
        },
        {
            title: 'Causal Shoes',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg',
            id: 5,
            linkUrl: 'shop/shirts'
        },
        {
            title: 'infant Essentials',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg',
            id: 6,
            linkUrl: 'shop/infant'
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
  