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
	
	public isEmpty(): boolean{
		return this.stack.length == 0
	}

	get size(): number{
		return this.stack.length;
	}
}
