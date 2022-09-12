export class Node<T>{
	private id: number;
	private data: T | undefined;
	private adjacent: Array<{
		next: Node<T>,
		weight: any
	}>;

	private static count = 0;

	constructor(value?: T){
		this.id = Node.count;
		this.data = value;
		this.adjacent = [];
		Node.count++;
	}

	get getID(): number{
		return this.id;
	}

	get getValue(): T | undefined{
		return this.data;
	}

	get adjacents(): Array<{
		next: Node<T>,
		weight: any
	}>{
		return this.adjacent;
	}

	public push(node: Node<T>, weight?:number){
		this.adjacent.push({
			next: node,
			weight: weight
		});
		return true;
	}

	public toString(): string{
		return this.id.toString().concat(": ", this.adjacent.map(elem => elem.next.id.toString()).join(", "));
	}
}
