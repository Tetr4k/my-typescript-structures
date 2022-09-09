export class Node<T>{
	private id: number;
	private data: T | undefined;
	private adjacent: Array<Node<T>>;

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

	get adjacents(): Array<Node<T>>{
		return this.adjacent;
	}

	public push(node: Node<T>){
		this.adjacent.push(node);
		return true;
	}

	public toString(): string{
		return this.id.toString().concat(": ", this.adjacent.map(elem => elem.id.toString()).join(", "));
	}
}
