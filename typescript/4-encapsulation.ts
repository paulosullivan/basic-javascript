// public - everywhere
// private - inside class
// protected - inside class or inside subclass

class Person {
  private firstName : string;
  private lastName : string;
  
  constructor(firstName : string, lastName : string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFirstName() : string {
    return this.firstName;
  }
  setFirstName(firstName : string) {
    this.firstName = firstName;
  }
  
  getLastName() : string {
    return this.lastName;
  }
  setLastName(lastName : string) {
    this.lastName = lastName;
  }
    
}

// Shorthand for attributes and constructor

class Person2 {
  // private firstName : string;
  // private lastName : string;
  
  constructor(private firstName : string, private lastName : string, public age : number) {
    // this.firstName = firstName;
    // this.lastName = lastName;
  }
  
  getFirstName() : string {
    return this.firstName;
  }
  setFirstName(firstName : string) {
    this.firstName = firstName;
  }
  
  getLastName() : string {
    return this.lastName;
  }
  setLastName(lastName : string) {
    this.lastName = lastName;
  }
    
}

// ReadOnly
// Can be defined in two places. A constructor or when it is being declared and defined at the same time
class Person3 {
  
  constructor(private firstName : string, private lastName : string, readonly dob : number) {
    
  }
  
  getFirstName() : string {
    return this.firstName;
  }
  setFirstName(firstName : string) {
    this.firstName = firstName;
  }
  
  getLastName() : string {
    return this.lastName;
  }
  setLastName(lastName : string) {
    this.lastName = lastName;
  }
  
  getdob() : number {
    return this.dob;
  }
  // No setter
    
}
