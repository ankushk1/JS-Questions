// Stack class 
class Stack {


    constructor() {
        this.items = [];
    }

    // push function 
    push(element) {
        // push element into the items 
        this.items.push(element);
    }


    // pop function 
    pop() {

        // return top most element in the stack 

        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }


    // peek function 
    peek() {
        // return the top most element from the stack 
        return this.items[this.items.length - 1];
    }


    // isEmpty function 
    isEmpty() {
        // return true if stack is empty 
        return this.items.length == 0;
    }


    // printStack function 
    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }


}