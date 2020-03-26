

class LinkedList{
    constructor(){
        this.head = this.tail = null;
    }

//add to the end of the list / tail
    append(value){
    //if list is empty
    if(!this.tail){
        this.head = this.tail = new Node(value)
    } else {
        let oldTail = this.tail;
        console.log(oldTail)

        this.tail = new Node(value); //set new tail to the new value 
        console.log(this.tail)
        oldTail.next = this.tail;

        console.log(oldTail.next)

        this.tail.previous =oldTail;

        console.log(this.tail.previous)

    }

    }

//add to the beginning of list / head 
    prepend(){
        //if 
    }

    deleteHead(){

    }

    deleteTail(){

    }

    search(){

    }

}


//Creating Node
class Node{
    constructor(value, prev, next){
        this.value = value;
        this.prev = prev || null; //will set a default value for prev if reference is not given 
        this.next = next || null; //will set a default value for next if reference is not given 
    }
}

const ll = new LinkedList();

ll.append(1)
