const myObject = {
    name: "John", 
    age: 30, 
    city: "New York",
}


for (const key in myObject) {
    if (myObject.hasOwnProperty.call(myObject, key)) {
        const element = myObject[key];
        console.log(element);   
    }
}