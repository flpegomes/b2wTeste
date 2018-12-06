const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve([
          {
            _id: '1',
            imgUrl:
              'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/132580/7/132580764_1GG.png',
            name: 'Smartphone Asus Zenfone 4',
            price: 1221.11,
            quantity: 10,
            installments: 10,
            onSale: {
                price: 1000
            }
          },
          {
            _id: '2',
            imgUrl:
              'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133728/1/133728151_1GG.png',
            name: 'Smartphone Samsung Galaxy J6 64GB Dual Chip Android 8.0 Tela 5.6" Octa-Core 1.6GHz 4G Câmera 13MP - Violeta',
            price: 999.00,
            quantity: 15,
            installments: 10,
            onSale: null
          },
          {
            _id: '3',
            imgUrl: 'https://images-americanas.b2w.io/produtos/01/00/item/125063/0/125063021_1GG.jpg',
            name: 'Monitor LED 19,5" LG 20M37AA-B.AWZ',
            price: 399.00,
            quantity: 77,
            installments: 5,
            onSale: {
                price: 350
            }
          },
          {
            _id: '4',
            imgUrl: 'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133758/9/133758974_1GG.png',
            name: 'TV LED 39" Philco PTV39N91D HD com Conversor Digital 2 HDMI 2 USB Som Surround 60Hz Preta',
            price: 1079.99,
            quantity: 104,
            installments: 8,
            onSale: null
          },
          {
            _id: '5',
            imgUrl: 'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133609/1/133609160_1GG.png',
            name: "Smartphone Samsung Galaxy J6 32GB Dual Chip Android 8.0 Tela 5.6' Octa-Core 1.6GHz 4G Câmera 13MP com TV - Preto",
            price: 819.00,
            quantity: 56,
            installments: 8,
            onSale: null
          },
          {
            _id: '6',
            imgUrl: 'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/134117/3/134117343_1GG.jpg',
            name: "Notebook Motion I34500AI-15 Intel Core i3 4GB 500MB HD 15,6' Linux - Positivo",
            price: 1379.99,
            quantity: 12,
            installments: 10,
            onSale: {
                price: 1310.99
            }
          },
          {
            _id: '7',
            imgUrl: 'https://images-americanas.b2w.io/produtos/01/00/sku/32226/5/32226505_1GG.jpg',
            name: "Headphone Bluetooth 4.0 Edifier - Cabo P2 removível, Com Microfone - W800BT Vermelho",
            price: 239.90,
            quantity: 100,
            installments: 3,
            onSale: {
                price: 220.00
            }
          },
          {
            _id: '8',
            imgUrl: 'https://images-americanas.b2w.io/produtos/01/00/sku/27597/0/27597096_1GG.jpg',
            name: "Fone De Ouvido Bluetooth Edifier W800bt Preto",
            price: 239.00,
            quantity: 46,
            installments: 3,
            onSale: null
          },
          {
            _id: '9',
            imgUrl: 'https://images-americanas.b2w.io/produtos/01/00/oferta/39459/9/39459969_1GG.jpg',
            name: "Fone De Ouvido Jb950 Super Bass Bluetooth Headphone",
            price: 75.90,
            quantity: 146,
            installments: 7,
            onSale: null
          },
          {
            _id: '10',
            imgUrl: 'https://images-americanas.b2w.io/produtos/01/00/oferta/27953/8/27953868_1GG.jpg',
            name: "Fone de Ouvido Bluetooth Motorola Pulse Escape com Microfone e Controles Touch - Preto",
            price: 185.00,
            quantity: 17,
            installments: 2,
            onSale: {
                price: 150.00
            }
          }
        ]);
      }, 1000);
    });
  };
  
  export default {
    getProducts
  };