// 1 Point class
class Point {
    x: number;
    y: number;

    constructor();
    constructor(x?: number, y?: number);
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    distance(): number;
    distance(point: Point): number;
    distance(x: number, y: number): number;
    distance(x?: number | Point, y?: number) {
        if (x === undefined) {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        } else if (x instanceof Point) {
            return Math.sqrt(Math.pow(this.x - x.x, 2) + Math.pow(this.y - x.y, 2));
        } else if (typeof x === 'number' && typeof y === 'number') {
            return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
        }
    }
}

// 2 Shape
abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Point[];

    constructor(color: string = 'green', filled: boolean = true, points: Point[]) {
        if (points.length < 3) {
            throw new Error('Shape should have at least 3 points');
        }
        this.points = points;
        this.color = color;
        this.filled = filled;
    }

    toString(): string {
        return `A Shape with color of ${this.color} and ${
            this.filled ? 'filled' : 'not filled'
        }. Points: ${this.points.join(', ')}`;
    }

    getPerimeter(): number {
        let perimeter = 0;
        for (let i = 0; i < this.points.length; i++) {
            let nextIndex = (i + 1) % this.points.length;
            perimeter += this.points[i].distance(this.points[nextIndex]);
        }
        return perimeter;
    }
}

// 3 Triangle
class Triangle extends Shape {
    constructor(color: string, filled: boolean, points: Point[]) {
        super(color, filled, points);
        if (points.length !== 3) {
            throw new Error('Triangle should have 3 points');
        }
    }

    toString(): string {
        return `Triangle[v1=${this.points[0]},v2=${this.points[1]},v3=${this.points[2]}]`;
    }

    getType(): string {
        const a = this.points[0].distance(this.points[1]);
        const b = this.points[0].distance(this.points[2]);
        const c = this.points[1].distance(this.points[2]);

        if (a === b && a === c && b === c) {
            return 'isosceles triangle';
        } else if (a === b || a === c || b === c) {
            return 'equilateral triangle';
        } else return 'scalene triangle';
    }
}

// Example usage
const points: Point[] = [new Point(0, 0), new Point(1, 1), new Point(2, 0)];

const triangle = new Triangle('red', true, points);
console.log(triangle.toString());
console.log(triangle.getPerimeter());
console.log(triangle.getType());