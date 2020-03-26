/*Linked List Data Structures - Javascript 
https://www.youtube.com/watch?v=ZBdE8DElQQU

 Linked list is a linear data structure, order connection of data

 1. we will have a Class and the only property in our Linked List Class  is going to be the "HEAD" because everything starts from the "HEAD"
 */

/*
const n1 = {
    data: 100
}

const n2 = {
    data: 200
}

add a reference from node2 to node1 
n1.next = n2;
console.log(n1)

const n1 = new Node(100);
console.log(n1)
*/

/******************************************************************************************************* */

//SINGLY LINKED LIST 
//CREATING A NODE
//argument takes in the data and pointer "next" set default to "null" meaning the last pointer is referencing null.
class Node {
    constructor(data, next = null) {
        this.data = data; //data that is passed in and set it to the data property
        this.next = next;
    }
}


//CREATING/GET/REMOVE NODES FROM LINKED LIST CLASS 
class LinkedList {
    constructor(){
        this.head = null; //"head" default is "null" meaning, there's no head, no first element or first node, list is empty.
        this.size = 0;
    }


//Inset first node 
     insertFirst(data) {
         this.head = new Node(data, this.head); //we instantiating a Node object, passing in the data as the first argument, the reason we are putting "this.head" in 2nd argument is because if there are already data in the head we want to push that to the next. reference Class Node. We set this.head to the next = null to push to the end of the linked list
        this.size++; //increase the size +1
     }

//Insert last node 
    insertLast(data) {
        let node = new Node(data) // construct new "node "
        let current;

        // If empty, make head because it will be the first and last node its the only node in Linked List
        if(!this.head) {
            this.head = node;
        } else { // if there's already a head than we will loop through
            current = this.head; //start head at the beginning 

            while(current.next) {
                current = current.next; //this will allow us to traverse through the list
            }

            current.next = node;
        }
        //outside if the If statement, we increase the size +1
        this.size++
    }

//Insert at index
    insertAt(data, index){ //we will pass in the data and the index we want to insert. 
        //if the index number is greater than 0 and the index value is great than the size of the linked list return nothing!
       //IF INDEX IS OUT OF RANGE
        if(index > 0 && index > this.size){ 
            return;
            
        }
        //IF INDEX IS FIRST
        if(index === 0) {
            // I can use this.insertFirst(data) same code
            this.insertFirst(data);
            return;
        }

        const node = new Node(data); //initialize a new node with the data
        let current; 
        let previous; // initialize two variables 

        //SET CURRENT TO FIRST
        current = this.head;
        let count = 0

        while(count < index ){
            previous = current // node before the index we want to insert
            current++; //increase the count +1
            current = current.next; // NODE AFTER INDEX  making room for the new element/ node
        }

        //outside of the while loop
        node.next = current; //node we initialize before we will set the next value to current 
        previous.next = node;

        this.size++;
    }


//Get at index, get a value at a certain index
getAt(index){
    let current = this.head; //set current variable to the beginning
    let count = 0;

    while(current) {
        if(count == index ){
            console.log(current.data)
        }
        //after the if statement 
        count++;
        current = current.next; //remove along the linked list down the chain. 
    }
    //after the while loop
    return null;
}

//Remove at index
removeAt(index) {
    if(index > 0 && index > this.size){//If out of range return nothing
        return;
    }
        let current = this.head; //set to the first node
        let previous; 
        let count = 0;

        //Remove first 
        if(index === 0) {
            this.head = current.next; //setting the head to the next value 
        } else { // if index is not equal to 0
            while(count < index){
                count++; //increase the count 
                previous = current;
                current = current.next;
            }
            //remove element outside while loop
            previous.next = current.next; //previous next value to the current value 
        }
        //decrease the size
        this.size--;
    }


//Clear list 
clearList(){
    this.head = null; //no reference to the rest of the list will clear out everything. 
    this.size = 0;
}

//Print list data
    printListData() {
        let current = this.head; //set a variable of current to represent the current node and begins with "this.head" 

    //loop through all the nodes
        while(current){
            console.log(current.data) //console.log only the data property which will output each node
            current = current.next; //move along through all the nodes we can set "current" equal to the next value
        }
    }

}

//Remove Last 

//Remove First

//Get First

//Get Last

const ll = new LinkedList();


ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
//ll.insertAt(250, 3);

//ll.clearList();

ll.removeAt(2)
ll.printListData();
//ll.getAt(2)



console.log(ll);

/********************************************************************************************** */

