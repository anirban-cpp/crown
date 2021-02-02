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
  },
  shirts: {
    id: 7,
    title: 'Shirts',
    routeName: 'shirts',
    items: [
        {
            id: 1,
            name: 'Hancock Men Formal Shirt',
            imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7460073/2018/9/21/1c88b4ea-b2b3-4c75-b1f5-82bff7252d8b1537519651731-NA-1711537519651556-1.jpg',
            price: 999,
        },
        {
            id: 2,
            name: 'Mayra Women Casual Shirt',
            imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7208127/2018/8/23/5dbc44c4-d171-4559-9944-37ce3dd1437f1535005234548-na-6341535005234394-1.jpg',
            price: 447,
        },
        {
            id: 3,
            name: 'WRONG Men Casual Shirt',
            imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2032621/2018/8/7/9dc8cfa9-a511-4504-840b-4c7e7b3320391533643723775-WROGN-Men-Blue--Green-Slim-Fit-Checked-Casual-Shirt-with-Det-1.jpg',
            price: 999,
        },
        {
            id: 4,
            name: 'Women Navy Blue Stripped Casual Shirt',
            imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2145730/2017/10/25/11508926526098-Roadster-Women-Navy-Blue-Regular-Fit-Striped-Casual-Shirt-8301508926525889-1.jpg',
            price: 999,
        },
        {
            id: 5,
            name: 'Roadstar Men Casual Shirt',
            imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1352998/2016/8/31/11472645521752-Roadster-Men-Charcoal-Regular-Fit-Washed-Casual-Shirt-1861472645521489-1.jpg',
            price: 799,
        },
        {
            id: 6,
            name: 'Mast Harbour Women Causal Shirt',
            imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12928726/2020/12/12/007fb365-78cd-4fa4-9a81-b8390f04069e1607768049175-Mast--Harbour-Women-Shirts-161607768047784-1.jpg',
            price: 699,
        },
        {
            id: 7,
            name: 'Roadstar Checked Casual Shirt',
            imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1667040/2020/1/22/08a51885-d098-435d-a30f-ed24269125751579688068184-Roadster-Men-Green--Beige-Checked-Casual-Shirt-9451579688066-1.jpg',
            price: 799,
        },
        {
            id: 8,
            name: 'Women Casual White Shirt',
            imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/18/cbd019d6-5107-4838-b9f7-6282d695ef0a1602980834368-1.jpg',
            price: 699,
        }
    ]
  },
  tshirts: {
      id: 8,
      title: 'T-Shirts',
      routeName: 'tshirts',
      items: [
          {
              id: 1,
              name: 'Moda-Rapido Round neck T-shirt',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2378362/2018/6/9/270e0a7e-365b-4640-9433-b269c60bf3061528527188563-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-1.jpg',
              price: 349,
          },
          {
              id: 2,
              name: 'Dorothy Perkins Women T-shirt',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12711570/2020/10/23/a6b2e739-a6aa-49bf-8e3e-607c077ff80b1603445419985SkirtsDOROTHYPERKINSWomenTopsDOROTHYPERKINSWomenCoatsDOROTHY1.jpg',
              price: 599,
          },
          {
              id: 3,
              name: 'Compus Sutra Graphic T-shirt',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10017085/2019/6/20/2be736d5-66cb-43a2-8208-5cea2ee1e0711561027340024-Campus-Sutra-Graphic-Print-Men-Round-Neck-Grey-T-Shirt-43715-1.jpg',
              price: 499,
          },
          {
              id: 4,
              name: 'Harpa Women Top',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7578951/2018/10/24/b2197469-6bab-4242-8928-a6fd092d04721540383597284-Harpa-Women-Tops-2001540383597148-1.jpg',
              price: 499,
          },
          {
              id: 5,
              name: 'Here&Now Men T-shirt',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2383699/2018/2/10/11518245053359-HERENOW-Men-Grey-Solid-V-Neck-T-shirt-9591518245053163-1.jpg',
              price: 699,
          },
          {
              id: 6,
              name: 'Harpa Women Mustard Striped Top',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7455920/2018/9/21/2ddd988b-3d17-4816-bede-8bb4753be7691537518619839-Harpa-Women-Mustard-Striped-Top-3111537518619649-1.jpg',
              price: 699,
          },
          {
              id: 7,
              name: 'Moda-Rapido Black and White T-shirt',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2378361/2018/11/28/8434c1b7-4c03-4509-97cc-c9f7ee7b43721543382292897-Moda-Rapido-Men-White--Black-Printed-Round-Neck-T-shirt-8561543382292124-1.jpg',
              price: 499,
          },
          {
              id: 8,
              name: 'Roadstar Solid Black Top',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1753416/2017/6/19/11497873476368-Roadster-Women-Black-Solid-Round-Neck-T-shirt-6331497873475967-1.jpg',
              price: 399,
          }
      ]
  },
  jeans: {
      id: 9,
      title: 'Jeans',
      routeName: 'jeans',
      items: [
          {
              id: 1,
              name: 'HIGHLANDER Tapered-fit Jeans',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9162839/2019/4/2/0164b22a-3fcf-4dfb-88d4-6cab8280b2661554196314474-HIGHLANDER-Black-9481554196313078-1.jpg',
              price: 799,
          },
          {
              id: 2,
              name: 'Roadstar Skinny-fit Jeans',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8963473/2019/4/9/9bf85f32-6b74-42f2-a538-557b99a69ff71554805174525-Roadster-Women-Blue-Skinny-Fit-Mid-Rise-Low-Distress-Stretch-1.jpg',
              price: 899,
          },
          {
              id: 3,
              name: 'Mast & Harbour Skinny-fit Jeans',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12983788/2021/1/12/8ee05a2d-bc36-4ca5-967b-b5377cfa97511610421189667-Mast--Harbour-Men-Jeans-4401610421187034-1.jpg',
              price: 1329,
          },
          {
              id: 4,
              name: 'SASSAFRAS Women Straight Cropped Jeans',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10604484/2019/9/13/6ab71496-74d6-4258-9310-a34c75f7be441568374869936-SASSAFRAS-Women-Jeans-2881568374868311-1.jpg',
              price: 854,
          },
          {
              id: 5,
              name: 'LOCOMOTiVE Slim-fit Jeans',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/899acb62-76a5-4e91-b973-b7d8ad771d671550820021053-1.jpg',
              price: 999,
          },
          {
              id: 6,
              name: 'DOROTHY PERKINS Skinny-fit Jeans',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7289168/2018/9/6/ddd46974-951a-4877-81f1-3126d61ef2e51536224447671-HSWFPR11826-2781536224447515-1.jpg',
              price: 1342,
          },
          {
              id: 7,
              name: 'WRONG Slim-fit Jeans',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2338117/2018/6/8/025567e2-fbd4-458c-9a9e-b6bf87c93ea21528439352858-WROGN-Men-Jeans-7621528439351309-1.jpg',
              price: 1439,
          },
          {
              id: 8,
              name: 'Roadstar Women Skinny-fit Jeans',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7139147/2018/11/6/67d46c47-ff0b-485b-9a03-68ad1b521ebd1541496594361-Roadster-Women-Black-Skinny-Fit-High-Rise-Clean-Look-Stretchable-Jeans-3641541496594215-1.jpg',
              price: 1299,
          }
      ]
  },
  trousers: {
      id: 10,
      title: 'Trousers',
      routeName: 'trousers',
      items: [
          {
              id: 1,
              name: 'HIGHLANDER Denim Shorts',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2018/12/7/1028ba5d-fb2e-40b0-8263-c5d8bae016971544188033963-1.jpg',
              price: 751,
          },
          {
              id: 2,
              name: 'Roadstar Chino Shorts',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2387571/2019/9/11/e337e0d9-020c-4255-9893-b44989bc5ef31568198692186-Roadster-Men-Olive-Green-Printed-Regular-Fit-Chino-Shorts-55-1.jpg',
              price: 1299,
          },
          {
              id: 3,
              name: 'HIGHLANDER Regular Shorts',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/28/62ba7314-cd1e-4d59-b00b-b630ff0e5aac1574938324121-1.jpg',
              price: 499,
          },
          {
              id: 4,
              name: 'Roadstar Regular Shorts',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11160558/2020/3/13/67ce8e89-f8a6-4d47-bec8-ad88c2dfa01f1584077889304-Roadster-Men-Shorts-1831584077886836-1.jpg',
              price: 799,
          },
          {
              id: 5,
              name: 'Peter England Regular Trousers',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13142220/2020/12/18/16aec05b-55b8-479c-a880-13e2d5ecbbd41608285481685-PETER-ENGLAND-UNIVERSITY-Men-Trousers-7801608285480138-1.jpg',
              price: 1079,
          },
          {
              id: 6,
              name: 'HERE&NOW Regular-fit Joggers',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13159770/2021/1/18/89848ff2-591f-42b4-a222-e2a5a18a2f5e1610955370409-HERENOW-Men-Trousers-7531610955368314-1.jpg',
              price: 2799,
          },
          {
              id: 7,
              name: 'HIGHLANDER Slim-fit Reguar Trousers',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8237309/2019/8/23/1eee633c-927b-4780-a2a6-f59989c31fc91566552225073-HIGHLANDER-Men-Black-Slim-Fit-Solid-Regular-Trousers-2231566-1.jpg',
              price: 799,
          },
          {
              id: 8,
              name: 'Peter England University Trousers',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13142212/2020/12/18/3fc6331e-f8c2-4e7b-81eb-38b7593b8d031608285442723-PETER-ENGLAND-UNIVERSITY-Men-Trousers-6241608285440885-1.jpg',
              price: 1299,
          }
      ]
  },
  casualshoes: {
      id: 11,
      title: 'Casual Shoes',
      routeName: 'casualshoes',
      items: [
          {
              id: 1,
              name: 'AfroJack Slip-On Sneakers',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/31/167d5528-d459-4139-bc8e-2c8f88b6eb361577741582295-1.jpg',
              price: 699,
          },
          {
              id: 2,
              name: 'Fentacia Slip-On Sneakers',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/29/008415de-29d7-4be8-9b07-26267460f6871577574553154-1.jpg',
              price: 699,
          },
          {
              id: 3,
              name: 'AfroJack Slip-On Sneakers',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/29/665301be-db06-487d-9787-ba37ce1aa34f1577578553980-1.jpg',
              price: 665,
          },
          {
              id: 4,
              name: 'mr.Wonker Colorblocked Sneakers',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12786380/2020/10/20/57e4ead2-0e80-48b4-bee0-cece0f1c68c61603176607927mrwonkerMenMulticolouredSneakers1.jpg',
              price: 682,
          },
          {
              id: 5,
              name: 'LOCOMOTIVE Men Sneakers',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9785483/2020/12/3/9ae1cdc6-8d0d-42f9-9dde-87ad334d182c1606963394083LOCOMOTIVEMenWhiteSneakers1.jpg',
              price: 1045,
          },
          {
              id: 6,
              name: 'ELIXIR MAN Men Sneakers',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/3/7/11bc12ae-27de-442c-ab25-96ab18cf53781551905038221-1.jpg',
              price: 519,
          },
          {
              id: 7,
              name: 'LOCOMOTIVE Men Sneakers',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9785495/2019/6/14/906f1f81-db79-481b-9962-6306abe4a1bf1560500752934-LOCOMOTIVE-Men-Grey-Sneakers-5091560500751016-1.jpg',
              price: 896,
          },
          {
              id: 8,
              name: 'Mactree Men Solid Sneakers',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/6/14/d3f23f8e-3d48-4cc9-a639-304fd2ab52221592084195372-1.jpg',
              price: 682,
          }
      ]
  },
  infantessentials: {
      id: 12,
      title: 'Infant Essentials',
      routeName: 'infantessentials',
      items: [
          {
              id: 1,
              name: 'BownBee Kurta abd Dhoti Set',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/16/ba9615ad-96cc-42c6-844c-bad54ce862d51602799160937-1.jpg',
              price: 1299,
          },
          {
              id: 2,
              name: 'Nauti Nati Girls Embroidered Dress',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12831742/2020/11/21/e7947544-077e-4892-856a-65e1ee851a3b1605938218832-Nauti-Nati-Girls-Yellow-Embroidered-Empire-Dress-77116059382-1.jpg',
              price: 582,
          },
          {
              id: 3,
              name: 'JBN Boys Solid Kurta',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/5/22/e33a8f27-dd35-4cce-bf19-2cb035cc8f351558528668481-1.jpg',
              price: 791,
          },
          {
              id: 4,
              name: 'Wish Girls Fit and Flare Dress',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/1/10/c7d442f6-e945-4ef6-b50c-54f4fa77f4aa1547116493571-1.jpg',
              price: 1079,
          },
          {
              id: 5,
              name: 'MINI KLUB Infant Clothing Set',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/30/4f370475-2b1a-45b5-a14d-15525621622c1609330772831-1.jpg',
              price: 359,
          },
          {
              id: 6,
              name: 'Chipbeys  Girls Printed Kurti with Palazzo',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/15/5d5fc916-b129-4ea8-80e5-095857817ad71608015320764-1.jpg',
              price: 999,
          },
          {
              id: 7,
              name: 'Moms Love Boys Hoddy',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12653866/2020/11/27/d0fa57b1-929d-41c5-ba2c-4ce214ac8c8d1606459064657-Moms-Love-Boys-Rompers-7171606459063362-1.jpg',
              price: 580,
          },
          {
              id: 8,
              name: 'MINI KLUB Girls Embellished A-line Dress',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/11/13/80397317-383e-474c-989e-ae34f4a3904a1605261103116-1.jpg',
              price: 892,
          }
      ]
  },
  kurtas: {
      id: 13,
      title: 'Kurtas & Kurta Sets',
      routeName: 'kurtas',
      items: [
          {
              id: 1,
              name: 'Vishudh Women Kurta',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6630417/2018/6/5/57c81317-8755-467f-a5f6-3d9c346bb4501528197400326-na-7111528197399297-1.jpg',
              price: 874,
          },
          {
              id: 2,
              name: 'Inddus Women Kurta',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/7/7631917d-eb94-4bb1-bd1d-573b425ee7781565151121765-1.jpg',
              price: 1346,
          },
          {
              id: 3,
              name: 'Anouk Women Printed Kurta',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7186142/2018/10/3/f5df3c24-fdb5-4973-8d73-374e52401b641538570002446-Anouk-Women-Blue-Printed-Kurta-with-Trousers--Dupatta-486153-1.jpg',
              price: 2029,
          },
          {
              id: 4,
              name: 'AHIKA Printed Straight Kurta',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11056088/2019/12/5/52e85c72-0d41-4a8a-a583-abd052dadec91575549524617-AHIKA-Women-Pink--White-Printed-Straight-Kurta-6631575549523-1.jpg',
              price: 675,
          },
          {
              id: 5,
              name: 'Anubhutee Ethnic Kurta Set',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11090416/2019/12/13/ba5f515e-1320-4895-be40-15a70a529e1b1576244873040-Anubhutee-Women-Teal--White-Printed-Kurta-with-Palazzos-3371-1.jpg',
              price: 989,
          },
          {
              id: 6,
              name: 'Bhama Couture Printed Kurta',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10356729/2019/8/13/2a881b6b-2f4d-4618-82a1-3f879cfff16b1565687680504-Bhama-Couture-Women-Kurta-Sets-2751565687680278-1.jpg',
              price: 1223,
          },
          {
              id: 7,
              name: 'Ishin Women Printed Kurti',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11250734/2020/1/29/66e06bc0-39c6-408f-9bf6-9919c28b198f1580281672273-Ishin-Womens-Cotton-Gota-Patti-Embellished-A-Line-Kurta-Skir-1.jpg',
              price: 1799,
          },
          {
              id: 8,
              name: 'Yufta Primted Straight Kurta',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2110558/2018/4/13/11523617167748-Vishudh-Women-Black--Gold-Toned-Printed-Straight-Kurta-9041523617167566-1.jpg',
              price: 1249,
          }
      ]
  },
  sarees: {
      id: 14,
      title: 'Sarees',
      routeName: 'sarees',
      items: [
          {
              id: 1,
              name: 'Tikhi Imli Printed Saree',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11510258/2020/3/11/55b31058-6f7e-4c0f-b280-fca799c0c77c1583907999610-White--Pink-Floral-Digital-Print-Design-Oraganza-Saree-With--1.jpg',
              price: 1195,
          },
          {
              id: 2,
              name: 'Saree mall Quirky Print Saree',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12564560/2020/10/11/982b4a0a-96f7-4871-8fce-1f2b83c350261602402688515SareemallSeaGreenPolyChiffonSolidEthnicPartywearSareewithMat1.jpg',
              price: 599,
          },
          {
              id: 3,
              name: 'GoSriki Embroidered Saree',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10852984/2019/12/5/f3816b5c-27db-422c-8d7a-5c73b66a5f831575541323067-GoSriki-White-Linen-Cotton-Solid-Woven-Work-Saree-9001575541-1.jpg',
              price: 1089,
          },
          {
              id: 4,
              name: 'Mitera Kanjeevaram Saree',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11458584/2020/3/9/fcde4e63-2f64-4492-8f28-ccedc2e916851583755134994-Mitera-Women-Sarees-2331583755132713-1.jpg',
              price: 1294,
          },
          {
              id: 5,
              name: 'The Chennai Silks Kanjeevaram Saree',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/28/cd191469-0b3b-470c-8365-20cc4c37556d1574893593957-1.jpg',
              price: 5999,
          },
          {
              id: 6,
              name: 'Tikhi Imli Georgette Saree',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11263970/2020/2/12/3559b846-9284-4509-9944-77d2ad032fb51581508102623-Tikhi-Imli-Black-Embellished-Poly-Georgette-Saree-1281581508-1.jpg',
              price: 999,
          },
          {
              id: 7,
              name: 'Chhabra 555 Ombre Dyed Saree',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11492088/2020/3/16/edac1729-e018-43ac-b86e-6a79ce827f3d1584358313039-Chhabra-555-Mint-Green-Ruffled-Pre-Draped-Lycra-Saree-with-F-1.jpg',
              price: 3995,
          },
          {
              id: 8,
              name: 'Inddus Solid Saree',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10684980/2019/10/15/78d83031-09e1-4c04-b3c1-40c190d452281571121382484-Inddus-Purple-Solid-Silk-Blend-Saree-6951571121380989-1.jpg',
              price: 1879,
          }
      ]
  },
  dresses: {
      id: 15,
      title: 'Dresses',
      routeName: 'dresses',
      items: [
          {
              id: 1,
              name: 'SASSAFRAS Women Prnted Dress',
              imageUrl: 'https://assets.myntassets.com/f_webp,,q_60,w_210,c_limit,fl_progressive/assets/images/10856160/2019/11/5/f0172470-408a-4b8b-a1e5-045bd98a5f8b1572938035104-SASSAFRAS-Women-Dresses-9581572938032856-1.jpg',
              price: 1999,
          },
          {
              id: 2,
              name: 'RARE Women Printed Dress',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/5803872/2018/5/10/e36d964f-da74-4c07-acd4-b5cb81d6ee021525933565797-na-9581525933565562-1.jpg',
              price: 859,
          },
          {
              id: 3,
              name: 'Athena Printed Maxi Dress',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2525392/2019/5/2/f9f13ec3-c11a-460a-b35a-9f6ec31590871556781497682-RARE-Women-Blue-Printed-Maxi-Dress-3951556781495634-1.jpg',
              price: 1172,
          },
          {
              id: 4,
              name: 'SASSAFRAS Solid Maxi Dress',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10308653/2019/7/29/4b4374d2-0067-40c3-bc30-7a6f2d228df71564401122087-SASSAFRAS-Women-Pink-Maxi-Dress-4111564401120260-1.jpg',
              price: 1999,
          },
          {
              id: 5,
              name: 'Tokyo Talkies Pinafore Dress',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/9/23/31b4bbd2-4338-494a-9b36-e9a6a32c14cd1569222779124-1.jpg',
              price: 825,
          },
          {
              id: 6,
              name: 'Sera Elasticated Waist Dress',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1923967/2017/6/16/11497607310013-Sera-Women-Dresses-2231497607309791-1.jpg',
              price: 593,
          },
          {
              id: 7,
              name: 'SASSAFRAS Accordion Pleat Maxi Dress',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11364432/2020/1/24/47d6a27d-2e5e-45e9-85ef-a9a5ebf417a11579852235194-SASSAFRAS-Women-Olive-Green-Printed-A-Line-Dress-73115798522-1.jpg',
              price: 1349,
          },
          {
              id: 8,
              name: 'Atehna Solid Fit & Flare Dress',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8833915/2019/2/26/1514f771-9b9d-499a-a183-3bb5157c10b21551183053367-Athena-Women-Burgundy-Solid-Off-Shoulder-Fit--Flare-Dress-87-1.jpg',
              price: 999,
          }
      ]
  },
  flats: {
      id: 16,
      title: 'Flats & Heels',
      routeName: 'flats',
      items: [
          {
              id: 1,
              name: 'Shoetopia Women Suede Heels',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12224568/2020/8/7/c45f1715-0548-4ccd-94e9-aef2f748c5611596811475165Shoetopia3.jpg',
              price: 649,
          },
          {
              id: 2,
              name: 'Catwalk Women Sandals',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8607853/2019/9/27/28f085e6-90b4-4b76-b6d3-0e78883d24aa1569569929404-Catwalk-Women-Black--Beige-Solid-Sandals-9311569569927961-1.jpg',
              price: 1361,
          },
          {
              id: 3,
              name: 'LONDON STEPS Women Sandals',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13326940/2020/12/29/1d2e8469-7857-4901-acdc-52d0f85156711609253719896LONDONSTEPSWomenGold-TonedSolidPumps1.jpg',
              price: 699,
          },
          {
              id: 4,
              name: 'Shotetopia Women Solid Stilettos',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/3/247d2f57-e438-495f-a539-e7d1ec9918291575328499770-1.jpg',
              price: 799,
          },
          {
              id: 5,
              name: 'LONDON STEPS Solid Kitten Heels',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/2/c6f84148-a66b-4e5e-a037-9e811c734f371601592801213-1.jpg',
              price: 799,
          },
          {
              id: 6,
              name: 'DressBerry Women Ballerinas',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1424823/2016/11/14/11479124572447-DressBerry-Women-Flats-2871479124572166-1.jpg',
              price: 909,
          },
          {
              id: 7,
              name: 'Mode Women Textured Flats',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13342164/2021/1/19/ba1f4323-d060-476b-bec5-f65190e002fd1611042734237ModebyRedTapeWomenNude-ColouredTexturedWedges1.jpg',
              price: 959,
          },
          {
              id: 8,
              name: 'House of Pataudi Handcraft Mojaris',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12305336/2020/10/6/4e3acc82-515a-430b-a804-f3961f883e091601982283901-House-of-Pataudi-Women-Pink--Gold-Toned-Embroidered-Handcraf-1.jpg',
              price: 2159,
          }
      ]
  },
  handbags: {
      id: 17,
      title: 'Handbags',
      routeName: 'handbags',
      items: [
          {
              id: 1,
              name: 'ALDO Solid Shoulder Bag',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/22/48bd93b5-64d2-4067-aa20-de9849bdcb901608615831532-1.jpg',
              price: 6999,
          },
          {
              id: 2,
              name: 'GUESS Textured Handheld Bag',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/22/aa733376-82ce-4e38-a4d2-7056db2431121608613920589-1.jpg',
              price: 6999,
          },
          {
              id: 3,
              name: 'Tommy Hilfiger Textured Handheld Bag',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11484072/2020/9/11/5dc2afdd-1d8e-4856-a5e5-a8e85588fead1599824072188-Tommy-Hilfiger-Beige-Textured-Handheld-Bag-4681599824071519-1.jpg',
              price: 5699,
          },
          {
              id: 4,
              name: 'ALDO Solid Handheld Bag',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/22/b58f6ed0-63e1-4f0c-8e94-badd035359251608618055027-1.jpg',
              price: 6999,
          },
          {
              id: 5,
              name: 'Tommy Hilfiger Women Handbag',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13075326/2020/12/2/d19fddbe-1bdb-477b-8a16-8ad96b8febb01606913245858-Tommy-Hilfiger-Women-Handbags-5061606913243728-1.jpg',
              price: 5439,
          },
          {
              id: 6,
              name: 'ALDO Women Solid Handbag',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11798418/2020/4/14/222d33b0-264d-446f-b411-f71186e2eff01586870268293ALDOBlackSolidHandheldBag1.jpg',
              price: 5249,
          },
          {
              id: 7,
              name: 'Tommy Hilfiger Solid Shoulder Bag',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13075322/2020/12/2/7d740816-f52f-46fe-aaf5-2ed9089b40aa1606913234753-Tommy-Hilfiger-Women-Handbags-2091606913233266-1.jpg',
              price: 5279,
          },
          {
              id: 8,
              name: 'Da Milano Solid Handheld Bag',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/6/821ab4ef-99d3-49f8-af3e-46a5c012ad1d1609918458362-1.jpg',
              price: 5249,
          }
      ]
  },
  shorts: {
      id: 18,
      title: 'Shorts',
      routeName: 'shorts',
      items: [
          {
              id: 1,
              name: 'Roadstar Women Denim Shorts',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1814854/2019/1/25/88289103-c814-4ffb-b7c9-282dc3a846591548394598295-Roadster-Women-Blue-Washed-Shorts-6761548394595180-1.jpg',
              price: 449,
          },
          {
              id: 2,
              name: 'Zastraa Women Regular Shorts',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/9/10/e3b17520-1168-46c7-98b4-c3fd3d18a7f01568064368835-1.jpg',
              price: 689,
          },
          {
              id: 3,
              name: 'Roadstar Denim Shorts',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11118504/2020/3/4/bd7317a8-8887-4fb8-bfaa-9942c750ef0a1583325260845-Roadster-Women-Shorts-9011583325257593-1.jpg',
              price: 979,
          },
          {
              id: 4,
              name: 'Athena Women Regular Shorts',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/7/4/8b84e259-8abd-4848-adc4-be0ae74a6d7c1593812872932-1.jpg',
              price: 571,
          },
          {
              id: 5,
              name: 'Tokyo Talkies Women Twill Shorts',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12717344/2020/10/30/819aabb4-b634-4594-b285-33db87aad1871604053210948-I-AM-FOR-YOU-Women-Shorts-1371604053208534-1.jpg',
              price: 619,
          },
          {
              id: 6,
              name: 'DressBerry Regular-fit Denim Shorts',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11264148/2020/2/20/b8867581-84ee-42b7-9427-b3acb9c7c5f71582194225595-DressBerry-Women-Charcoal-Washed-Regular-Fit-Denim-Shorts-20-1.jpg',
              price: 329,
          },
          {
              id: 7,
              name: 'Alsace Lorraine Paris Shorts',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11649162/2020/3/19/e6a8a836-adea-4c9b-a6a6-9b4e1e90ac0e1584598792157AlsaceLorraineParisWomenBurgundyPrintedRegularFitRegularShor1.jpg',
              price: 599,
          },
          {
              id: 8,
              name: 'Athena Women Regular-fit Shorts',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/7/4/4ab158d1-251f-46d2-bb0d-597645d47bcb1593817482572-1.jpg',
              price: 454,
          }
      ]
  },
  headphones: {
      id: 19,
      title: 'Wireless Headphones',
      routeName: 'headphones',
      items: [
          {
              id: 1,
              name: 'NOISE Wireless Earbuds',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11945412/2020/6/12/4120ebc5-882b-4c30-8e46-0701d8d2d9e91591936195212-Noise-Shots-BEAT-Truly-Wireless-Earbuds-Jet-Black-1091591936-1.jpg',
              price: 1499,
          },
          {
              id: 2,
              name: 'WINGS Wireless Earbuds',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13042708/2020/12/14/df0fb7a7-6086-474f-b522-e34806b79eb01607929412459-WINGS-Blue-Vibe-Bluetooth-50-True-Wireless-TWS-Earbuds-58416-1.jpg',
              price: 999,
          },
          {
              id: 3,
              name: 'pTron Wireless Earbuds',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13076048/2020/11/25/3a7fbaf2-64d2-4684-b1d2-8d3be823189f1606288406765-pTron-Bassbuds-True-Wireless-Bluetooth-50-Headphones-with-De-1.jpg',
              price: 899,
          },
          {
              id: 4,
              name: 'Apple 2nd Gen AirPods',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9803279/2019/10/11/8b3247d2-99d4-4448-aa57-9c28905968861570782281063-Apple-White-2nd-Gen-AirPods-with-Charging-Case-MV7N2HNA-1181-1.jpg',
              price: 13261,
          },
          {
              id: 5,
              name: 'pTron Basebuds Classic',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12819978/2020/10/28/3d12c2e1-5aa7-4abb-915e-9e6cb854bc5c1603881077599pTronBassbudsClassicTrueWirelessBluetoothHeadphoneswithDeepB1.jpg',
              price: 749,
          },
          {
              id: 6,
              name: 'Realme Unisex Buds Air Neo',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11932880/2020/6/11/00aa03c7-dc63-4701-b387-22ece1aec4c61591862264898-realme-Buds-Air-Neo-Pop-White-1321591862264562-1.jpg',
              price: 2499,
          },
          {
              id: 7,
              name: 'HRX True Wireless Earbuds',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12946758/2020/11/23/fd3338f9-c251-4233-8a8a-52245a194e161606106496508-HRX-by-Hrithik-Roshan-Unisex-Headphones-2711606106494549-1.jpg',
              price: 1699,
          },
          {
              id: 8,
              name: 'WINGS Vibe True Wireless Earbuds',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13042712/2020/12/14/89bc11dd-1e93-4f12-9e3d-1491d38843011607929384394-WINGS-White-Vibe-Bluetooth-50-True-Wireless-TWS-Earbuds-2081-1.jpg',
              price: 999,
          }
      ]
  },
  watches: {
      id: 20,
      title: 'Watches',
      routeName: 'watches',
      items: [
          {
              id: 1,
              name: 'CASIO Men Edfice Watch',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/27/c1e643fe-a697-4365-9dd3-55523bb1988d1566880575253-1.jpg',
              price: 8995,
          },
          {
              id: 2,
              name: 'Michael Kors Women Multifunction Watch',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1985544/2017/8/22/11503402004656-Michael-Kors-Women-Brown-Multifunction-Analogue-Watch-MK6378I-281503402004547-1.jpg',
              price: 10997,
          },
          {
              id: 3,
              name: 'SEIKO Men Solar Watch',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2010151/2017/8/8/11502177266361-SEIKO-Men-White-Solar-Analogue-Watch-SUP863P1-1031502177266022-1.jpg',
              price: 12500,
          },
          {
              id: 4,
              name: 'Fossil Women TAILOR Watch',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2111141/2020/3/11/fd4b4ba5-6667-4c98-b32e-3cc0b11eca761583926229712FossilTAILORWomenGoldAnalogueWatchES42641.jpg',
              price: 9175,
          },
          {
              id: 5,
              name: 'Fastrack Men Analogue Watch',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/10/21/e00d4442-5c7f-408e-8ba5-82c0d5201cd41571633239897-1.jpg',
              price: 2796,
          },
          {
              id: 6,
              name: 'French Connection Women Analog Watch',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10317185/2019/10/11/1736a2b6-6c9b-4b8e-a64c-89a3e7dd6d1b1570775716492-French-Connection-Women-Rose-Gold-Toned-Analogue-Watch-FCN00-1.jpg',
              price: 2599,
          },
          {
              id: 7,
              name: 'Fastrack Men Casual Watch',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/v1/images/style/properties/Fastrack-Men-Black-Casual-Watch_3a1ef7bbe461e47f7d4f11aaf245135a_images.jpg',
              price: 1436,
          },
          {
              id: 8,
              name: 'Daniel Klein Women Analog Watch',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7837267/2018/12/26/215857ac-2fa0-49e8-add9-7cd976e443b01545827452157-Daniel-Klein-Premium-Women-Off-White-Analogue-Watch-DK11914--1.jpg',
              price: 1875,
          }
      ]
  },
  jewellery: {
      id: 21,
      title: 'Jewellery',
      routeName: 'jewellery',
      items: [
          {
              id: 1,
              name: 'Imittire Contemporary Chandbalis',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/9/f616441d-d792-44a6-9414-04d0c48065821610201487735-1.jpg',
              price: 1449,
          },
          {
              id: 2,
              name: 'Imittire Gold-Toned Jewellery Set',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/11/13/86ea1925-d117-46b6-ac8e-42c0c909888b1605283903775-1.jpg',
              price: 2286,
          },
          {
              id: 3,
              name: 'Priyassi Handcrafted Jewellery Set',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10590600/2019/11/14/084f5f6e-b93b-40ff-ae2a-8ab59e0236431573729287950-Priyaasi-Green--Pink-Gold-Plated-Kundan-Studded-Handcrafted--1.jpg',
              price: 815,
          },
          {
              id: 4,
              name: 'Priyassi Contemporary Drop Earings',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10590746/2019/11/14/b6fefdf4-83eb-4de4-8083-71dcb958f5631573729355324-Priyaasi-Sea-Green-Silver-Plated-Stone-Studded-Handcrafted-C-1.jpg',
              price: 769,
          },
          {
              id: 5,
              name: 'Zobby Gold-Plated Mangalsutra Set',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10968422/2020/1/6/3a81a190-f5e8-4184-a98d-05940f536c451578307359571-Zobby-Black-Gold-Plated-Kundan-Studded-Mangalsutra--Earrings-1.jpg',
              price: 742,
          },
          {
              id: 6,
              name: 'Priyassi Gold-Plated Mangalsutra Set',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10564352/2019/11/14/cafb7a49-05d9-4054-8e11-475da898159f1573729120485-Priyaasi-Black-Gold-Plated-Beaded--AD-Studded-Mangalsutra--E-1.jpg',
              price: 442,
          },
          {
              id: 7,
              name: 'Tanishq 14K Gold Finger Ring',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/7/17/3181a9de-d7b2-4c18-b65b-507f0d4281ca1563315767154-1.jpg',
              price: 40227,
          },
          {
              id: 8,
              name: 'Tanishq Rose Gold Finger Ring',
              imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/7/17/ba15ef2c-21f6-4a91-8d6d-e50f7ba6ed871563340604879-1.jpg',
              price: 36428,
          }
      ]
    }
};

export default SHOP_DATA;
