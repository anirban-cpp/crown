const SHOP_DATA = {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://i.pinimg.com/originals/04/72/57/0472571e43ccb3584a1c0ac497d8665d.jpg',//'https://cdn.lookastic.com/brown-wool-hat/brooklyn-hat-co-wood-wide-brim-hat-613504-original.jpg',//'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 250
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://media.gettyimages.com/photos/portrait-of-happy-young-woman-hiking-in-the-mountains-picture-id932635676?k=6&m=932635676&s=612x612&w=0&h=MVs9GNRnDQhK75ex2CMPD9lPDibggBg833bTHxxMRcA=',//'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 180
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://media.gettyimages.com/photos/man-in-cowboy-hat-sitting-at-bar-table-drinking-beer-picture-id475485928?k=6&m=475485928&s=612x612&w=0&h=NWShu35wncqUVVue1Z7GVPwOJAhmIcyGve8dbzU2mpU=',//'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 350
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://media.gettyimages.com/photos/coachella-guest-wearing-a-furla-bag-during-day-2-of-the-2018-valley-picture-id964891532?k=6&m=964891532&s=612x612&w=0&h=J6aekMULI0dbno4ocFDLtdL_MPvAzXJCvw57MSnhMxA=',//'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 250
      },
      {
        id: 5,
        name: 'Yellow Beanie',
        imageUrl: 'https://media.gettyimages.com/photos/london-smiling-man-leaning-on-a-railing-and-looking-at-his-phone-with-picture-id1134465089?k=6&m=1134465089&s=612x612&w=0&h=ICaVC93GVvPbx2BTMJpj6xtF-hg3JbNkLyweVnKSPYo=',//'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 180
      },
      {
        id: 6,
        name: 'Grey Cap',
        imageUrl: 'https://media.gettyimages.com/photos/brad-pitt-attends-ad-astra-photocall-during-the-76th-venice-film-at-picture-id1170935770?k=6&m=1170935770&s=612x612&w=0&h=D79-EDw9O8zd7WNMwo7XKESWVoqgbiz36Ye-fJr5g_c=',//'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 140
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://media.gettyimages.com/photos/portrait-of-happy-young-woman-with-christmas-gift-in-winter-forest-picture-id962633668?k=6&m=962633668&s=612x612&w=0&h=rpYXHx2_ELfWnoyo9ZkGW8l4J6jsTjjzEv10dMyNqzU=',//'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 180
      },
      {
        id: 8,
        name: 'Black Cap',
        imageUrl: 'https://www.zastavki.com/pictures/originals/2019Girls___Models_Beautiful_girl_model_in_black_baseball_cap_131355_.jpg',//'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 140
      },
    ]
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 9,
        name: 'Adidas NMD',
        imageUrl: 'https://5.imimg.com/data5/UF/CR/MY-42622857/adidas-nmd-shoes-500x500.png',//'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 2200
      },
      {
        id: 10,
        name: 'Adidas Yeezy',
        imageUrl: 'https://storage.googleapis.com/data-justfreshkicks/2019/07/8581bb34-dnhfcz9vyaarca-.jpg',//'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 2800
      },
      {
        id: 11,
        name: 'Black Converse',
        imageUrl: 'https://blogscdn.thehut.net/app/uploads/sites/6/2019/10/FH14-ALL-STAR-EG_7_1571136855.jpg',//'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 1100
      },
      {
        id: 12,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ebayimg.com/images/g/RdEAAOSwuMVevG3f/s-l640.png',//'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 1600
      },
      {
        id: 13,
        name: 'Nike Red High Tops',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRON5ILZ7wfmgJGA3zKIOGZj3z4y6xzTwhSHA&usqp=CAU',//'https://img1.cfcdn.club/26/d2/2633c3ed3d714cc1573d8ba0719fd2d2_350x350.jpg',//'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 1600
      },
      {
        id: 14,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://images.unsplash.com/photo-1580142866493-e39b5656f409?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80',//'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 1600
      },
      {
        id: 15,
        name: 'Air Jordan Limited',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsEvros_Ca4XbAvcnFS3dgPMuyI2gLJywDw&usqp=CAU',//'https://lh3.googleusercontent.com/proxy/yyL33jbROWR6jCECW4Xr1BW6PcHaMpMRGOTHN1lJyby05T9kJ4EBBWqO5apXBz7_5yojem923OwEjpmM-xcphfxikQfgkFhDIp2fG424wtDJ1-NiEOcoBQ',//'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 1900
      },
      {
        id: 16,
        name: 'Timberlands',
        imageUrl: 'https://i.pinimg.com/originals/35/80/6b/35806be93f1b584dd83ce66b1ecbb90e.jpg',//'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 2000
      }
    ]
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 17,
        name: 'Women Grey Solid Windcheater Jacket',
        imageUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/11/22/7a4ea339-89e8-455f-be41-118cb7b53a8a1574407044738-3.jpg',//'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 1099
      },
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://www.dhresource.com/0x0/f2/albu/g9/M00/55/91/rBVaWF5y09eAYOrCAAKHa4mvKhU972.jpg',//'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 1250
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://media.gettyimages.com/photos/woman-wearing-a-jeans-jacket-portrait-picture-id502438847?k=6&m=502438847&s=612x612&w=0&h=LK7SsQ8FJDnXcs9UqsRebGo3yjdng9QJZhipitxw9pc=',//'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 900
      },
      {
        id: 20,
        name: 'Biker Leather Jacket',
        imageUrl: 'https://media.gettyimages.com/photos/young-man-looking-down-while-sitting-on-chair-picture-id1201448471?k=6&m=1201448471&s=612x612&w=0&h=ZPFPhaEyoZ0xV2xTeD7rHNc8FXT8FHfBVw4HTPMryHc=',//'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 1200
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://media.gettyimages.com/photos/young-man-standing-between-brown-rocks-looking-left-picture-id664297482?k=6&m=664297482&s=612x612&w=0&h=MDJTQCQ1-AWIZ-mxF_CFhbBmpoPtJSVKsBeNA5wHG8E=',//'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 1350
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://media.gettyimages.com/photos/outdoor-portrait-of-stylish-young-woman-in-the-coat-picture-id1246502306?k=6&m=1246502306&s=612x612&w=0&h=YdFJtm6sviL75fCYXmkFUOjwkwiYczYMM9s5C2ZfT30=',//'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 1850
      },
      {
        id: 23,
        name: 'Navy Blue Solid Puffer Jacket',
        imageUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12916522/2020/12/9/ee2dce89-1c77-4940-87c7-129cf8c923961607501924915-US-Polo-Assn-Men-Jackets-2801607501922547-1.jpg',//'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 2500
      },
      {
        id: 24,
        name: 'Women Longline Quilted Jacket',
        imageUrl: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/h_373,q_80,w_280/v1/assets/images/11951252/2020/8/5/47c3a437-110c-4e4c-9ca4-78bf7e623b381596611609388-DressBerry-Women-Jackets-3461596611607450-1.jpg',//'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 1500
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://assets.ajio.com/medias/sys_master/root/hef/h56/13801829728286/-1117Wx1400H-461007125-green-MODEL.jpg',//'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 800
      },
      {
        id: 26,
        name: 'Floral Blouse',
        imageUrl: 'https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/13722/136062/2018-Chiffon-Floral-Print-Blouses-For-Women-Ladies-Fashion-O-Neck-Flare-Sleeve-Blusas-Tops-Female__28650.1544090411.jpg?c=2?imbypass=on',//'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 200
      },
      {
        id: 27,
        name: 'Ethnic wear',
        imageUrl: 'https://imagex.kraftly.com/w_500/h_650/m_letterbox_ffffff_100/https://nozzle.s3-ap-southeast-1.amazonaws.com/shop_130489/IMG20200627WA0006_1593355218.jpg',//'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 250
      },
      {
        id: 28,
        name: 'Maroon Solid Corduroy Pinafore Dress',
        imageUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7687315/2018/10/29/8d26a002-22c6-4172-acbe-aaff7b8be18f1540809450641-SASSAFRAS-Women-Dresses-6531540809450526-1.jpg',//'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 800
      },
      {
        id: 29,
        name: 'Red & White Floral Printed Top',
        imageUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11709228/2020/5/29/91a03403-0473-4bb5-92d6-c1d8149e6a2c1590750723946KiaasaWomenSouthCottonGreyPrintedALineKurtaTopsTrendArrestWo1.jpg',
        price: 450
      },
      {
        id: 30,
        name: 'Black Solid Ruffled Wrap Skirt',
        imageUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/8/30/5e9e7ebc-f2f5-43ef-8159-7ae8744464921567148037126-1.jpg',
        price: 797
      },
      {
        id: 31,
        name: 'Black High-Rise Jeggings',
        imageUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4318174/2018/3/27/11522142621450-Xpose-Women-Jeggings-6691522142621329-1.jpg',
        price: 1049
      },
      {
        id: 32,
        name: 'Tokyo Talkies Solid Hooded Sweatshirt',
        imageUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10788494/2020/11/18/57da7818-3b78-4791-9877-d1196ee2c1fb1605695877321TokyoTalkiesWomenRedSolidHoodedSweatshirt1.jpg',
        price: 519
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 33,
        name: 'Casual Navy Blue Shirt',
        imageUrl: 'https://i.pinimg.com/originals/07/cb/e4/07cbe4a23cdcbd882f629472151f81db.jpg',//'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 3250
      },
      {
        id: 34,
        name: 'Floral Shirt',
        imageUrl: 'https://pipiluxury.com/wp-content/uploads/2020/06/Men-Floral-Shirt-Fashion-Flower-Printed-Shirts-Casual-Short-Sleeve-Lapel-Blouse-Hawaiian-Summer-Beach-Breathable-4.jpg',//'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 500
      },
      {
        id: 35,
        name: 'Navy Blue Printed Pullover Sweater',
        imageUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12895276/2020/11/20/1859c2b2-2c25-4841-8ae3-1c3ac64722f81605856547782-zebu-Men-Sweaters-9081605856546680-1.jpg',//'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 644
      },
      {
        id: 36,
        name: 'WRONG Red Round Neck T-shirt',
        imageUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700830/2019/4/8/3f06fe25-1ce2-4e1e-88e9-7a9d26b4f0bf1554699735416-WROGN-Men-Rust-Red-High-Density-Print-Round-Neck-T-shirt-961-1.jpg',//'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 250
      },
      {
        id: 37,
        name: 'Ether Blue Slim Fit Jeans',
        imageUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12738850/2020/12/1/fed3fd07-23f3-409e-a706-2dac3ad5bf131606825591480JacketsHERENOWMenJacketsHERENOWMenTshirtsModaRapidoMenJeansM2.jpg',
        price: 799
      },
      {
        id: 38,
        name: 'Navy Blue Pinstripe Suit',
        imageUrl: 'https://ae01.alicdn.com/kf/Ha73b9a1934a44ec891237403b6efc77cx/Navy-Blue-Pinstripe-Suit-Men-Blazer-Formal-Night-Men-Suit-With-Pants-Business-Terno-Tuxedo-Slim.jpg_960x960.jpg',
        price: 2250
      },
      {
        id: 39,
        name: 'Ethnic wear',
        imageUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/8/9/8db1e75b-88e6-43e0-8253-c5ea193483d51596923663616-1.jpg',
        price: 250
      },
      {
        id: 40,
        name: 'Black Formal Shirt',
        imageUrl: 'https://i.pinimg.com/originals/c1/7a/4e/c17a4e402bed012a501822fe62da4e00.jpg',
        price: 1250
      },
    ]
  },
  kids: {
    id: 6,
    title: 'Kids',
    routeName: 'kids',
    items: [
      {
        id: 41,
        name: 'H&M Boys Sweatshirt',
        imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/11/20/686d1d2e-72cf-4961-8bd2-e585a227220c1605857916253-1.jpg',
        price: 1299
      },
      {
        id: 42,
        name: 'Printed Cotton Sweatshirt',
        imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/26/cca5f600-31ac-45f1-9077-dea5170f70601608978335561-1.jpg',
        price: 699
      },
      {
        id: 43,
        name: 'Girls White Tulle Dress',
        imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11801496/2020/4/16/25466286-a61b-480e-ab58-964e2432d9381587015184332Glitterytulledress1.jpg',
        price: 1999
      },
      {
        id: 44,
        name: 'GAP Girls Stripped T-shirt',
        imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12810632/2020/12/18/716960a3-48dd-4191-942b-b35740f0a82e1608288639813GAPGirlsBlueWhiteStripedFlipSequinRoundNeckT-shirt1.jpg',
        price: 899
      },
      {
        id: 45,
        name: 'Puma Girls Classic T-shirt',
        imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12349254/2020/10/27/30f39311-8609-4e54-a291-566643c444581603801172001PumaGirlsPeach-ColouredClassicsWildPrintedRoundNeckT-shirt1.jpg',
        price: 1199
      },
      {
        id: 46,
        name: 'Girls Printed Kurta with Palazzos',
        imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/6/fb576e3a-0d80-46d2-9d25-81df6bd07ca61601936483765-1.jpg',
        price: 929
      },
      {
        id: 47,
        name: 'Boys Printed shirt with Jeans',
        imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9850523/2019/5/29/df363819-dd24-4350-acca-c0bb20c800b41559124844233-AJ-Dezines-Kids-Party-Wear-Brown-Color-Shirts-and-Jeans-For--1.jpg',
        price: 1229
      },
      {
        id: 48,
        name: 'Gini and Jony Boys Printed T-shirt',
        imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11379886/2020/2/13/bbc15345-ac12-49cc-bd4d-2518ec15dc0a1581586362211-Gini-and-Jony-Boys-Black--Grey-Printed-Round-Neck-T-shirt-27-1.jpg',
        price: 399
      },
    ]
  }
};

export default SHOP_DATA;
