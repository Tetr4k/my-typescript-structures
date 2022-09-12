export class Stack<T>{
	private stack: Array<T>;

	constructor(){
		this.stack = new Array<T>();
	}

	/**
	 * @returns The top element from the Stack
	 */
	public pop(): T | undefined{
		return this.stack.pop();
	}

	/**
	 * @param elem Stacks a new element 
	 * @returns The size of the Stack after pushing
	 */
	public push(elem: T): number{
		return this.stack.push(elem);
	}

	/**
	 * @returns A boolean value
	 */
	public isEmpty(): boolean{
		return this.stack.length == 0;
	}

	/**
	 *  @returns The size of the Stack
	 */
	get size(): number{
		return this.stack.length;
	}
}
