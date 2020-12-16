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
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://beauty-fr.htgetrid.com/images/article/orig/2016/11/kepka-supreme-1.png',//'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 160
      }
    ]
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 2200
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 2800
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 1100
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 1600
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 1600
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 1600
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 1900
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
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
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 1250
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 900
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 900
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 1650
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 1850
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 250
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 200
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 800
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 800
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 450
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 1350
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 200
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 3250
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 200
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 250
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 250
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 400
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 250
      }
    ]
  }
};

export default SHOP_DATA;
