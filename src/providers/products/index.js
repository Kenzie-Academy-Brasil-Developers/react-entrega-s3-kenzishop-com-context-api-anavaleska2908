import { createContext, useContext, useState } from 'react';

const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      name: 'Boruto Uzumaki',
      category: 'Boruto',
      price: 22.99,
      image: './assets/img/boruto.jpg',
    },
    {
      id: 2,
      name: 'Gyomei Himejima',
      category: 'Demon Slayer',
      price: 49.99,
      image: './assets/img/gyomei.jpg',
    },
    {
      id: 3,
      name: 'Kakashi',
      category: 'Naruto',
      price: 54.99,
      image: './assets/img/kakashi.jpg',
    },
    {
      id: 4,
      name: 'Kurosaki Ichigo',
      category: 'Bleach',
      price: 129.99,
      image: './assets/img/ichigo-hollow.jpg',
    },
    {
      id: 5,
      name: 'Eri',
      category: 'My Hero Academia',
      price: 49.99,
      image: './assets/img/eri.jpg',
    },
    {
      id: 6,
      name: 'Kurosaki Ichigo',
      category: 'Bleach',
      price: 29.99,
      image: './assets/img/ichigo-bankai.jpg',
    },
    {
      id: 7,
      name: 'Kurama',
      category: 'Naruto',
      price: 44.99,
      image: './assets/img/kurama.jpg',
    },
    {
      id: 8,
      name: 'Roronoa Zoro',
      category: 'One Piece',
      price: 32.99,
      image: './assets/img/zoro.jpg',
    },
    {
      id: 9,
      name: 'Portgas D. Ace',
      category: 'One Piece',
      price: 34.99,
      image: './assets/img/ace.jpg',
    },
    {
      id: 10,
      name: 'Itachi com corvos',
      category: 'Naruto',
      price: 49.99,
      image: './assets/img/itachi.jpg',
    },
    {
      id: 11,
      name: 'Luffy (Gear Four)',
      category: 'One Piece',
      price: 49.99,
      image: './assets/img/luffy-gear-4.jpg',
    },
    {
      id: 12,
      name: 'Naruto (Sexy no Jutsu)',
      category: 'Naruto',
      price: 49.99,
      image: './assets/img/naruto-sexy-jutsu.jpg',
    },
    {
      id: 13,
      name: 'Azula',
      category: 'Avatar',
      price: 29.99,
      image: './assets/img/azula.jpg',
    },
    {
      id: 14,
      name: 'Dragonite',
      category: 'Pokémon',
      price: 19.99,
      image: './assets/img/dragonite.jpg',
    },
    {
      id: 15,
      name: 'Aang e Momo',
      category: 'Avatar',
      price: 24.99,
      image: './assets/img/aang-momo.jpg',
    },
    {
      id: 16,
      name: 'Appa',
      category: 'Avatar',
      price: 21.99,
      image: './assets/img/appa.jpg',
    },
    {
      id: 17,
      name: 'Vaporeon',
      category: 'Pokémon',
      price: 18.99,
      image: './assets/img/vaporeon.jpg',
    },
    {
      id: 18,
      name: 'Katara',
      category: 'Avatar',
      price: 21.99,
      image: './assets/img/katara.jpg',
    },
    {
      id: 19,
      name: 'Toph',
      category: 'Avatar',
      price: 21.99,
      image: './assets/img/toph.jpg',
    },
    {
      id: 20,
      name: 'Asami Sato',
      category: 'Avatar',
      price: 17.99,
      image: './assets/img/asami.jpg',
    },
    {
      id: 21,
      name: 'Korra',
      category: 'Avatar',
      price: 24.99,
      image: './assets/img/korra.jpg',
    },
    {
      id: 22,
      name: 'Inosuke Hashibira',
      category: 'Demon Slayer',
      price: 44.99,
      image: './assets/img/inosuke.jpg',
    },
    {
      id: 23,
      name: 'Flareon',
      category: 'Pokémon',
      price: 18.99,
      image: './assets/img/flareon.jpg',
    },
    {
      id: 24,
      name: 'InuYasha e Kirara',
      category: 'InuYasha',
      price: 31.99,
      image: './assets/img/inuyasha-kirara.jpg',
    },
    {
      id: 25,
      name: 'Naruto e Gamakichi',
      category: 'Naruto',
      price: 99.99,
      image: './assets/img/naruto-on-gamakichi.jpg',
    },
    {
      id: 26,
      name: 'Nezuko e sua caixa',
      category: 'Demon Slayer',
      price: 99.99,
      image: './assets/img/nezuko-box.jpg',
    },
    {
      id: 27,
      name: 'Bulbasaur',
      category: 'Pokémon',
      price: 18.99,
      image: './assets/img/bulbasaur.jpg',
    },
    {
      id: 28,
      name: 'Mount Lady',
      category: 'My Hero Academia',
      price: 79.99,
      image: './assets/img/mount-lady.jpg',
    },
    {
      id: 29,
      name: 'Homem de Ferro',
      category: 'Marvel',
      price: 36.99,
      image: './assets/img/iron-man.jpg',
    },
    {
      id: 30,
      name: 'Jolteon',
      category: 'Pokémon',
      price: 18.99,
      image: './assets/img/jolteon.jpg',
    },
    {
      id: 31,
      name: 'Power Ranger Verde',
      category: 'Power Ranger',
      price: 69.99,
      image: './assets/img/green-ranger.jpg',
    },
    {
      id: 32,
      name: 'Tony Tony Chooper',
      category: 'One Piece',
      price: 29.99,
      image: './assets/img/tony-tony-chopper.jpg',
    },
    {
      id: 33,
      name: 'Power Ranger Branco',
      category: 'Power Ranger',
      price: 99.99,
      image: './assets/img/white-ranger.jpg',
    },
    {
      id: 34,
      name: 'Aizawa',
      category: 'My Hero Academia',
      price: 34.99,
      image: './assets/img/aizawa.jpg',
    },
    {
      id: 35,
      name: 'Alluka Zoldyck',
      category: 'Hunter X Hunter',
      price: 39.99,
      image: './assets/img/alluka-zoldyck.jpg',
    },
    {
      id: 36,
      name: 'Eevee',
      category: 'Pokémon',
      price: 18.99,
      image: './assets/img/eevee.jpg',
    },
    {
      id: 37,
      name: 'Hisoka',
      category: 'Hunter X Hunter',
      price: 24.99,
      image: './assets/img/hisoka.jpg',
    },
    {
      id: 38,
      name: 'Killua Zoldyck',
      category: 'Hunter X Hunter',
      price: 25.99,
      image: './assets/img/killua.jpg',
    },
    {
      id: 39,
      name: 'Gon Freecss',
      category: 'Hunter X Hunter',
      price: 24.99,
      image: './assets/img/gon.jpg',
    },
    {
      id: 40,
      name: 'Raichu',
      category: 'Pokémon',
      price: 18.99,
      image: './assets/img/raichu.jpg',
    },
    {
      id: 41,
      name: 'Leorio',
      category: 'Hunter X Hunter',
      price: 24.99,
      image: './assets/img/leorio.jpg',
    },
    {
      id: 42,
      name: 'Nejire Hado',
      category: 'My Hero Academia',
      price: 49.99,
      image: './assets/img/nejire.jpg',
    },
    {
      id: 43,
      name: 'Usopp',
      category: 'One Piece',
      price: 29.99,
      image: './assets/img/usopp.jpg',
    },
    {
      id: 44,
      name: 'Sullivan e Boo',
      category: 'Disney',
      price: 32.99,
      image: './assets/img/sullivan-boo.jpg',
    },
    {
      id: 45,
      name: 'Mr. Mime',
      category: 'Pokémon',
      price: 18.99,
      image: './assets/img/mime.jpg',
    },
    {
      id: 46,
      name: 'Feiticeira Escarlate',
      category: 'Marvel',
      price: 24.99,
      image: './assets/img/scarlet-witch.jpg',
    },
    {
      id: 47,
      name: 'Tobi',
      category: 'Naruto',
      price: 25.99,
      image: './assets/img/tobi.jpg',
    },
    {
      id: 48,
      name: 'Albus Dumbledore',
      category: 'Harry Potter',
      price: 24.99,
      image: './assets/img/albus-dumbledore.jpg',
    },
    {
      id: 49,
      name: 'Charmander',
      category: 'Pokémon',
      price: 18.99,
      image: './assets/img/charmander.jpg',
    },
    {
      id: 50,
      name: 'Hermione Granger',
      category: 'Harry Potter',
      price: 24.99,
      image: './assets/img/hermione.jpg',
    },
    {
      id: 51,
      name: 'Ron Wesley',
      category: 'Harry Potter',
      price: 24.99,
      image: './assets/img/ron-weasley.jpg',
    },
    {
      id: 52,
      name: 'Harry Potter',
      category: 'Harry Potter',
      price: 39.99,
      image: './assets/img/harry-potter.jpg',
    },
    {
      id: 53,
      name: 'Pequena Maga Negra',
      category: 'Yu-Gi-Oh',
      price: 29.99,
      image: './assets/img/maga-negra.jpg',
    },
    {
      id: 54,
      name: 'Mew',
      category: 'Pokémon',
      price: 27.99,
      image: './assets/img/mew.jpg',
    },
    {
      id: 55,
      name: 'Gaara',
      category: 'Naruto',
      price: 29.99,
      image: './assets/img/gaara.jpg',
    },
    {
      id: 56,
      name: 'Franky',
      category: 'One Piece',
      price: 29.99,
      image: './assets/img/franky.jpg',
    },
    {
      id: 57,
      name: 'Boa Hancock',
      category: 'One Piece',
      price: 29.99,
      image: './assets/img/boa-hancock.jpg',
    },
    {
      id: 58,
      name: 'Naruto (Sexto Caminho)',
      category: 'Naruto',
      price: 55.99,
      image: './assets/img/naruto-six-paths.jpg',
    },
    {
      id: 59,
      name: 'Nico Robin',
      category: 'One Piece',
      price: 29.99,
      image: './assets/img/nico-robin.jpg',
    },
    {
      id: 60,
      name: 'Fumikage Tokoyami',
      category: 'My Hero Academia',
      price: 24.99,
      image: './assets/img/fumikage-tokoyami.jpg',
    },
    {
      id: 61,
      name: 'Shikamaru Nara',
      category: 'Naruto',
      price: 24.99,
      image: './assets/img/shikamaru.jpg',
    },
    {
      id: 62,
      name: 'Eren (Forma Titã)',
      category: 'Attack on Titan',
      price: 54.99,
      image: './assets/img/eren-titan-form.jpg',
    },
    {
      id: 63,
      name: 'Mei Hatsume',
      category: 'My Hero Academia',
      price: 49.99,
      image: './assets/img/mei-hatsume.jpg',
    },
    {
      id: 64,
      name: 'Madara',
      category: 'Naruto',
      price: 49.99,
      image: './assets/img/madara.jpg',
    },
    {
      id: 65,
      name: 'Alphonse Elric',
      category: 'Fullmetal Alchemist',
      price: 24.99,
      image: './assets/img/alphonse-elric.jpg',
    },
    {
      id: 66,
      name: 'Katsuki Bakugo',
      category: 'My Hero Academia',
      price: 49.99,
      image: './assets/img/katsuki.jpg',
    },
    {
      id: 67,
      name: 'Loki',
      category: 'Marvel',
      price: 35.99,
      image: './assets/img/loki.jpg',
    },
    {
      id: 68,
      name: 'Kabuto Yakushi',
      category: 'Naruto',
      price: 24.99,
      image: './assets/img/kabuto.jpg',
    },
    {
      id: 69,
      name: 'Tamaki',
      category: 'My Hero Academia',
      price: 20.99,
      image: './assets/img/tamaki.jpg',
    },
    {
      id: 70,
      name: 'Roy Mustang',
      category: 'Fullmetal Alchemist',
      price: 24.99,
      image: './assets/img/roy-mustang.jpg',
    },
    {
      id: 71,
      name: 'Espírito Azul',
      category: 'Avatar',
      price: 39.99,
      image: './assets/img/blue-spirit.jpg',
    },
    {
      id: 72,
      name: 'Kakashi (ANBU)',
      category: 'Naruto',
      price: 129.99,
      image: './assets/img/kakashi-anbu.jpg',
    },
    {
      id: 73,
      name: 'Maki',
      category: 'Fire Force',
      price: 20.99,
      image: './assets/img/maki.jpg',
    },
    {
      id: 74,
      name: 'Edward Elric',
      category: 'Fullmetal Alchemist',
      price: 24.99,
      image: './assets/img/edward-elric.jpg',
    },
    {
      id: 75,
      name: 'Sarada Uchiha',
      category: 'Boruto',
      price: 25.99,
      image: './assets/img/sarada.jpg',
    },
    {
      id: 76,
      name: 'Iris',
      category: 'Fire Force',
      price: 20.99,
      image: './assets/img/iris.jpg',
    },
    {
      id: 77,
      name: 'Todoroki',
      category: 'My Hero Academia',
      price: 61.99,
      image: './assets/img/todoroki.jpg',
    },
    {
      id: 78,
      name: 'Jiraiya e Gama',
      category: 'Naruto',
      price: 109.99,
      image: './assets/img/jiraiya-gama.jpg',
    },
    {
      id: 79,
      name: 'Luxúria',
      category: 'Fullmetal Alchemist',
      price: 34.99,
      image: './assets/img/luxuria.jpg',
    },
    {
      id: 80,
      name: 'Nami',
      category: 'One Piece',
      price: 29.99,
      image: './assets/img/nami.jpg',
    },
    {
      id: 81,
      name: 'Big Hero 6',
      category: 'Disney',
      price: 39.99,
      image: './assets/img/big-hero.jpg',
    },
    {
      id: 82,
      name: 'Pain',
      category: 'Naruto',
      price: 33.99,
      image: './assets/img/pain.jpg',
    },
    {
      id: 83,
      name: 'Charizard',
      category: 'Pokémon',
      price: 21.99,
      image: './assets/img/charizard.jpg',
    },
    {
      id: 84,
      name: 'Trafalgar Law',
      category: 'One Piece',
      price: 29.99,
      image: './assets/img/law.jpg',
    },
    {
      id: 85,
      name: 'Kaguya Otsutsuki',
      category: 'Naruto',
      price: 65.99,
      image: './assets/img/kaguya.jpg',
    },
    {
      id: 86,
      name: 'Deku',
      category: 'My Hero Academia',
      price: 29.99,
      image: './assets/img/deku.jpg',
    },
    {
      id: 87,
      name: 'Naruto Uzumaki (Ramen)',
      category: 'Naruto',
      price: 49.99,
      image: './assets/img/naruto-ramen.jpg',
    },
    {
      id: 88,
      name: 'Growlithe',
      category: 'Pokémon',
      price: 20.99,
      image: './assets/img/growlith.jpg',
    },
    {
      id: 89,
      name: 'Tanjiro ',
      category: 'Demon Slayer',
      price: 55.99,
      image: './assets/img/tanjiro.jpg',
    },
    {
      id: 90,
      name: 'Itachi Uchiha (Akatsuki)',
      category: 'Naruto',
      price: 79.99,
      image: './assets/img/itachi-akatsuki.jpg',
    },
    {
      id: 91,
      name: 'Nezuko Kamado',
      category: 'Demon Slayer',
      price: 45.99,
      image: './assets/img/nezuko.jpg',
    },
    {
      id: 92,
      name: 'Saitama',
      category: 'One Punch Man',
      price: 25.99,
      image: './assets/img/saitama.jpg',
    },
    {
      id: 93,
      name: 'Sanji',
      category: 'One Piece',
      price: 34.99,
      image: './assets/img/sanji.jpg',
    },
    {
      id: 94,
      name: 'Deku (traje de treino)',
      category: 'My Hero Academia',
      price: 16.99,
      image: './assets/img/deku-training.jpg',
    },
    {
      id: 95,
      name: 'Trunks (Super Saiyajin)',
      category: 'Dragon Ball Z',
      price: 69.99,
      image: './assets/img/trunks.jpg',
    },
    {
      id: 96,
      name: 'Luffy',
      category: 'One Piece',
      price: 29.99,
      image: './assets/img/luffy.jpg',
    },
    {
      id: 97,
      name: 'Naruto (Modo Sennin)',
      category: 'Naruto',
      price: 55.99,
      image: './assets/img/naruto-sage.jpg',
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([...products]);

  const filterProducts = (item) => {
    setFilteredProducts(
      item === 'Todos'
        ? products
        : products.filter(({ name, category }) => {
            return (
              name.toLowerCase().includes(item.toLowerCase()) ||
              category.toLowerCase().includes(item.toLowerCase())
            );
          })
    );
    console.log(filteredProducts);
    return filteredProducts;
  };

  const filterAll = () => {
    return products;
  };
  return (
    <ProductsContext.Provider
      value={{ filteredProducts, filterProducts, filterAll }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
