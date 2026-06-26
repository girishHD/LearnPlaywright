interface Point {
    readonly x: number;
    readonly y: number
}

const point: Point = { x: 10, y: 200 };
// point.x = 5; This is not possible

// ReadOnlyArray
interface Data {
    readonly items: readonly number[];
}