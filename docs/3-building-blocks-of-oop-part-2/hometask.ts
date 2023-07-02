interface Comparable<T> {
    compareTo(other: T): number;
}

interface Comparator<T> {
    compare(first: T, second: T): number;
}


interface ItemComparator extends Comparator<Item> {
    compare(first: Item, second: Item): number;
}


abstract class Item implements Comparable<Item> {
    private static SEQUENTIAL_ID = 0;
    private ID: number;
    private _name: string;
    private _value: number;
    private _weight: number;

    protected constructor(name, value, weight) {
        this.ID = Item.SEQUENTIAL_ID++;
        this._name = name;
        this._value = value;
        this._weight = weight;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get weight(): number {
        return this._weight;
    }

    set weight(value: number) {
        this._weight = value;
    }

    public static reset(): void {
        Item.SEQUENTIAL_ID = 0;
    }

    public use(): void {
    }

    public toString(): string {
        return `${this.name} - ${this.value}, ${Math.round(this.weight * 100) / 100}`;
    }

    public compareTo(other: Item): number {
        return this._value - other._value !== 0 ? this._value - other._value : this.compareByName(other);
    }

    private compareByName(item: Item): number {
        return 0;
    }
}


class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item): number {
        return first.weight - second.weight !== 0 ? first.weight - second.weight : first.compareTo(second);
    }
}




