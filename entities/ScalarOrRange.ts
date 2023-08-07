export class ScalarOrRange {
    from: number
    to: number = -1
    constructor(from: number, to?: number) {
        this.from = from;
        this.to = to ?? -1;
    }

    public isScalar(): boolean {
        return this.to === -1;
    }

    public isRange(): boolean {
        return !this.isScalar();
    }
}