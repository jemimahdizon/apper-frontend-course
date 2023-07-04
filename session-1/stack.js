class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is currently empty.";
      }
      return this.items.pop();
    }
  
    check() {
      return this.items;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  const stack = new Stack();
  stack.push("Milk");
  stack.push("Eggs");
  console.log(stack.check()); // ["Milk", "Eggs"]
  stack.pop();
  console.log(stack.check()); // ["Milk"]
  stack.pop();
  console.log(stack.check()); // []
  console.log(stack.pop()); // "Stack is currently empty."
  