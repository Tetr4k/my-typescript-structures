export class Stack<T>{
	private stack: Array<T>;

	constructor(){
		this.stack = new Array<T>();
	}

	public pop(): T | undefined{
		return this.stack.pop();
	}

	public push(value: T): boolean{
		this.stack.push(value);
		return true;
	}

	get size(): number{
		return this.stack.length;
	}

	public toString(){
		return this.stack.join(" ");
	}
}
