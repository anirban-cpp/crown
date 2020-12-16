const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://www.brixton.com/pub/media/catalog/category/HO19-GIFT-GUIDE-CLP-HAT-SHOP.jpg',//'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://c1.wallpaperflare.com/preview/482/162/421/jackets-exhibition-shop-shopping.jpg',//'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.pinimg.com/originals/53/bc/f0/53bcf092484cdf9e92e53b1dcaaecbbd.jpg',//'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://www.newsbite.org/wp-content/uploads/2019/01/ladies.png',//'https://www.coverstory.co.in/media/cms/lookbook/lookbook-9/menu1.jpg',//'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://www.bosshunting.com.au/wp-content/uploads/2020/03/academy-brand-1027x560.jpg',//'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
