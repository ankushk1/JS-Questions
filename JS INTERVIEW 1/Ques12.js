class Queue {
    constructor() {
        this.items = [];
    }

    //add element
    enqueue(element) {
        // adding element to the queue 
        this.items.push(element);
    }


    // removing element 
    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }


    // front function 
    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }


    // printQueue function 
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }



}