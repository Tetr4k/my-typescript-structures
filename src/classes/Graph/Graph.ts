import { Node } from "./Node";

export class Graph<T>{
	private nodes: Map<T, Node<T>>;

	constructor(){
		this.nodes = new Map();
	}

	public createNode(data: T): Node<T>{
		let node = this.nodes.get(data);
		if (node) return node;
		node = new Node(data);
		this.nodes.set(data, node);
		return node;
	}

	public addEdge(from: T, to: T, weight?:any): boolean {
		this.createNode(from).push(this.createNode(to), weight);
		return true;
	}

	public next(data: T): Array<{
		next: Node<T>,
		weight: any
	}> | false{
		const edge = this.nodes.get(data);
		if(edge)
			return edge.adjacents;
		return false;
	}

	public toString(): string{
		let string = '';
		this.nodes.forEach(
			elem => {
				string = string.concat(elem.toString(), "\n");
			}
		)
		return string;
	}
}