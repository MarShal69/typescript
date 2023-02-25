import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Moie';

const cart = new Cart();
// console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1010, 'Мстители', 5000, 2012, 'США', 'Avengers Assemble', 'фэнтези','137 мин. / 02:17'))


// console.log(cart.items);
// console.log(cart);
// console.log(cart.items.length);
// console.log (cart.amount());
// console.log(cart.amountDiscount(10));
// console.log(cart.removal(1008));
// console.log(cart.removal(1005))