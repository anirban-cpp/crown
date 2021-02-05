const INITIAL_STATE = {
    accessories: [
        {
            title: 'Wireless Headphones',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/2bcf907c-bc21-44cb-9021-7575a963b0ef1595934830671-Content-Accesories-Unisex-True-wirless-lets-get-free.jpg',
            id: 1,
            linkUrl: 'wireless headphones'
        },
        {
            title: 'Sport Watches',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/bddd9c73-e4f1-43c0-a073-2ff3c0e376b51595934830554-Content-Accesories-men-Sporty-Watches_.jpg',
            id: 2,
            linkUrl: 'watches'
        },
        {
            title: 'White Watches',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png',
            id: 3,
            linkUrl: 'watches'
        },
        {
            title: 'Fastrack Watches',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8363b55c-446f-4de2-bc5b-e75fd6fdfb2d1597840217862-Content-accessories-brand-fastrack.png',
            id: 4,
            linkUrl: 'watches'
        },
        {
            title: 'Minimalistic Watches',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/274b3659-420d-43c2-8e4c-17249e6eaf8d1597840218139-Content-accessories-trend-minimalist.png',
            id: 5,
            linkUrl: 'watches'
        },
        {
            title: 'Jewellery',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/225f77f5-c299-4849-8586-3ed41b70b1f91597840217917-Content-accessories-brand-imittire.png',
            id: 6,
            linkUrl: 'jewellery'
        },
        {
            title: 'Jewellery',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/b5fb5332-cad0-4c04-bd5e-70189f5efef01597840218056-Content-accessories-mostselling-mangalsutra.png',
            id: 7,
            linkUrl: 'jewellery'
        },
        {
            title: 'Jewellery',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4dbcc869-ba34-43df-8348-56c7816363c41597840218100-Content-accessories-trend-handcraftedjewel.png',
            id: 8,
            linkUrl: 'jewellery'
        },
        {
            title: 'Ladies Watches',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/bc36f35b-f5ce-4168-bd96-d3c1f65ec4e21598030134870-Content-mostselling-Accessories-Rosegoldwatch.jpeg',
            id: 9,
            linkUrl: 'watches'
        },
        {
            title: 'Ladies Watches',
            imageUrl: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png',
            id: 10,
            linkUrl: 'watches'
        }
    ]    
};
  
const accessoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
};
  
export default accessoryReducer;
  