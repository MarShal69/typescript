import Cart from '../service/Cart';
import Movie from '../domain/Moie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';


test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('new card must contain an object', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Мстители', 5000, 2012, 'США', 'Avengers Assemble', 'фэнтези', '137 мин. / 02:17'));
  const result = cart.items;
  const expected = [
    {
      id: 1001,
      name: 'War and Piece',
      author: 'Leo Tolstoy',
      price: 2000,
      pages: 1225
    },
    {
      id: 1008,
      name: 'Meteora',
      author: 'Linkin Park',
      price: 900
    },
    {
      id: 1010,
      name: 'Мстители',
      price: 5000,
      yearOfCration: 2012,
      country: 'США',
      slogan: 'Avengers Assemble',
      genre: 'фэнтези',
      time: '137 мин. / 02:17'
    }
  ]
  expect(result).toEqual(expected);
})

test('total cost without discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Мстители', 5000, 2012, 'США', 'Avengers Assemble', 'фэнтези', '137 мин. / 02:17'));
  const result = cart.amount();

  expect(result).toBe(7900);
})

test('total cost with a discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Мстители', 5000, 2012, 'США', 'Avengers Assemble', 'фэнтези', '137 мин. / 02:17'));
  const result = cart.amountDiscount(10);

  expect(result).toBe(7110);
})

test('deleting an object by an existing id', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Мстители', 5000, 2012, 'США', 'Avengers Assemble', 'фэнтези', '137 мин. / 02:17'));
  const result = cart.removal(1008);

  const expected = [
    {
      id: 1001,
      name: 'War and Piece',
      author: 'Leo Tolstoy',
      price: 2000,
      pages: 1225
    },
    {
      id: 1010,
      name: 'Мстители',
      price: 5000,
      yearOfCration: 2012,
      country: 'США',
      slogan: 'Avengers Assemble',
      genre: 'фэнтези',
      time: '137 мин. / 02:17'
    }
  ]
  expect(result).toEqual(expected);

})

test('deleting an object not by an existing id', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Мстители', 5000, 2012, 'США', 'Avengers Assemble', 'фэнтези', '137 мин. / 02:17'));
  const result = cart.removal(1005);

  expect(result).toBe('Товар отсутствует');
})
