console.log("Welcome to address book problem");

 class AddressBook {
  //constructor
  constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
  }

  //uc2 validating all the details
  // get and set for firstname 
  //first letter should be capital and min 3 letters
  get firstName() { return this._firstName; }
  set firstName(firstName) {
    let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
    // test returns a boolen value
    if (nameRegex.test(firstName))
      this._firstName = firstName;
    else
      throw "Invalid first Name";
  }

  //get and set for lastname
  //first letter should be capital and min 3 letters
  get lastName() { return this._lastName; }
  set lastName(lastName) {
    let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
    // test returns a boolen value
    if (nameRegex.test(lastName))
      this._lastName = lastName;
    else
      throw "Invalid last Name";
  }

  //get and set for address
  //minimum four characters
  get address() { return this._address; }
  set address(address) {
    let addressRegex = RegExp("^[A-Za-z]{4,}$");
    if (addressRegex.test(address))
      this._address = address;
    else
      throw "Invalid address ";
  }

  //get and set for city
  //minimum four characters
  get city() { return this._city; }
  set city(city) {
    let cityRegex = RegExp("^[A-Za-z]{4,}$");
    if (cityRegex.test(city))
      this._city = city;
    else
      throw "Invalid city ";
  }

  //get and set for state
  //minimum four characters
  get state() { return this._state; }
  set state(state) {
    let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
    if (stateRegex.test(state))
      this._state = state;
    else
      throw "Invalid state";
  }

  //get and set for zip
  //pin code of form 789 987
  get zip() { return this._zip; }
  set zip(zip) {
    let zipRegex = RegExp("^[1-9]{3}[ ]*[0-9]{3}$");
    if (zipRegex.test(zip))
      this._zip = zip;
    else
      throw "Invalid zip ";
  }

  //get and set for phoneNumber
  //phone number should be of form 91 9650925666
  get phoneNumber() { return this._phoneNumber; }
  set phoneNumber(phoneNumber) {
    let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
    if (phoneRegex.test(phoneNumber))
      this._phoneNumber = phoneNumber;
    else
      throw "Invalid phone number";
  }

  // get and set for email
  //ac.xyz@gmail.com.in .xyz-optional .in-optional
  get email() { return this._email; }
  set email(email) {
    let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
    if (emailRegex.test(email))
      this._email = email;
    else
      throw "Invalid email";
  }

  //defining to string method
  toString() {
    return "first Name: " + this.firstName + ", last Name: " + this.lastName
      + "\nAddress: " + this.address + ", City: " + this.city
      + ", State: " + this.state + " Zip: " + this.zip
      + ", \nPhoneNumber: " + this.phoneNumber + ", email: " + this.email;
  }
}
//creating an instance and giving contact details
try {
  // uc3 adding contact details to array 

  let contactDetailsArray = new Array();
  contactDetailsArray.push(new AddressBook("vijay", "Kumar", "Manvi", "Pune", "Maharashtra", "411004",
    "91 7558368932", "bharambeakshay@gmail.com"));
  contactDetailsArray.push(new AddressBook("Roma", "Raichur", "nearhighway", "Mumbai", "Maharashtra",
    "128 755", "91 8587087642", "roma@gmail.com"));
  contactDetailsArray.push(new AddressBook("Daisy", "Alava", "fourstreet", "Paris", "France",
    "871 258", "87 6587321451", "daisy@gmail.com"));
  contactDetailsArray.push(new AddressBook("Troy", "Tom", "alaska", "Zurich", "Switzerland",
    "128 213", "91 8966541252", "troy@gmail.com"));
  //printing array before updating
  contactDetailsArray.forEach((contact) => console.log(contact.toString()));

  // uc4 finding index using name
  console.log("****************************************************************");
  let index = contactDetailsArray.findIndex(contact => contact.firstName == "Roma");
  //updating the contact detail
  contactDetailsArray[index].zip = "121003";

  //displaying contacts after being updated
  console.log("contacts after being updated");
  contactDetailsArray.forEach((contact) => console.log(contact.toString()));

  //uc5 Removes an element from an array at specified index
  console.log("******************************************************************");
  contactDetailsArray.splice(index, 1);
  console.log("contacts after being deleted");
  contactDetailsArray.forEach((contact) => console.log(contact.toString()));

  //uc6 Reduce function to find number of contacts
  console.log("*******************************************************************");
  var totalContacts = 0;
  function FindTotalContacts(contactDetailsArray) {
    if (contactDetailsArray != null)
      totalContacts++;
    return totalContacts;
  }
  contactDetailsArray.reduce(FindTotalContacts, 1);
  console.log("Total number of contacts in contactdetails array : " + totalContacts);

  //uc7 check for duplicate value
  let countForDuplicate = 0;
  function CheckForDuplicates(contact) {
    if (contact.firstName == "Akshay")
      countForDuplicate++;
    return countForDuplicate;
  }
  //using foreach checking the count for each contact
  contactDetailsArray.forEach((contact) => CheckForDuplicates(contact));
  if (countForDuplicate == 1)
    console.log("not a duplicate entry");
  else
    console.log("duplicate entry");

  //uc8 search person using city or state & uc10 for counting
  //by city
  var numberOfCity = 0;
  var numberOfState = 0;
  console.log("");
  console.log("Contact by City Paris")
  function ContactByCity(contactDetails) {
    if (contactDetails.city == "Paris") {
      console.log(contactDetails.toString());
      numberOfCity++;
    }
  }
  contactDetailsArray.filter(ContactByCity);
  console.log("contacts by city " + numberOfCity);

  //by state
  function ContactByState(contact) {
    if (contact.state == "Haryana") {
      console.log(contact.toString());
      numberOfState++;
    }
  }
  console.log("Contact By State ")
  contactDetailsArray.filter(ContactByState);
  console.log("contacts by state " + numberOfState);

  //uc9 Contacts by city or State using map  
  //by state
  console.log("contact details by city or state using map");
  function CityMap(contact) {
    return contact.city + " -> " + contact.firstName + " " + contact.lastName;
  }
  let addressCityMap = contactDetailsArray.map(CityMap);
  console.log(addressCityMap);

  //by city
  function StateMap(contactDetails) {
    return contactDetails.state + " -> " + contactDetails.firstName + " " + contactDetails.lastName;
  }
  let addressStateMap = contactDetailsArray.map(StateMap);
  console.log(addressStateMap);

  //uc11 sorting by name and printing the array
  function SortByName() {
    for (let contactDetails in contactDetailsArray) {
      contactDetailsArray.sort(contactDetails.firstName);
    }
    contactDetailsArray.forEach((contact) => console.log(contact.toString()));
  }
  function SortByCity() {
    for (let contactDetails in contactDetailsArray) {
      contactDetailsArray.sort(contactDetails.city);
    }
    contactDetailsArray.forEach((contact) => console.log(contact.toString()));
  }
  function SortByState() {
    for (let contactDetails in contactDetailsArray) {
      contactDetailsArray.sort(contactDetails.state);
    }
    contactDetailsArray.forEach((contact) => console.log(contact.toString()));
  }
  function SortByZip() {
    for (let contactDetails in contactDetailsArray) {
      contactDetailsArray.sort(contactDetails.zip);
    }
    contactDetailsArray.forEach((contact) => console.log(contact.toString()));
  }
  console.log("Sorting by firstName");
  SortByName();
  console.log("Sort By City")
  SortByCity();
  console.log("Sort By State")
  SortByState();
  console.log("Sort By Zip")
  SortByZip();
}
catch (e) {
  console.log(e);
}