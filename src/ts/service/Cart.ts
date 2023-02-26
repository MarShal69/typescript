import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    amount(): number {
        return this._items.reduce((sum: number, item: { price: number; }) => sum + item.price, 0);
    }

    amountDiscount(discount: number): number {
        let amount = this.amount();
        return amount - amount * (discount / 100);
    }

    removal(id: number): void {
        this._items.splice(this._items.findIndex((item) => item.id === id), 1);
    }
}