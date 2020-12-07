console.log("Welcome to address book problem");

class AddressBookContacts {
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
  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
    // test returns a boolen value
    if (nameRegex.test(firstName)) this._firstName = firstName;
    else throw "Invalid first Name";
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
    // test returns a boolen value
    if (nameRegex.test(lastName)) this._lastName = lastName;
    else throw "Invalid last Name";
  }

  //get and set for address
  get address() {
    return this._address;
  }
  set address(address) {
    let addressRegex = RegExp("^[A-Za-z]{4,}$");
    if (addressRegex.test(address)) this._address = address;
    else throw "Invalid address ";
  }
  get city() {
    return this._city;
  }
  set city(city) {
    let cityRegex = RegExp("^[A-Za-z]{4,}$");
    if (cityRegex.test(city)) this._city = city;
    else throw "Invalid city ";
  }

  get state() {
    return this._state;
  }
  set state(state) {
    let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
    if (stateRegex.test(state)) this._state = state;
    else throw "Invalid state";
  }

  get zip() {
    return this._zip;
  }
  set zip(zip) {
    let zipRegex = RegExp("^[1-9]{3}[ ]?[0-9]{3}$");
    if (zipRegex.test(zip)) this._zip = zip;
    else throw "Invalid zip ";
  }

  get phoneNumber() {
    return this._phoneNumber;
  }
  set phoneNumber(phoneNumber) {
    let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
    if (phoneRegex.test(phoneNumber)) this._phoneNumber = phoneNumber;
    else throw "Invalid phone number";
  }


  get email() {
    return this._email;
  }
  set email(email) {
    let emailRegex = RegExp(
      "^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$"
    );
    if (emailRegex.test(email)) this._email = email;
    else throw "Invalid email";
  }

  toString() {
    return (
      "First Name: " +
      this.firstName +
      ", Last Name: " +
      this.lastName +
      "\nAddress: " +
      this.address +
      ", City: " +
      this.city +
      ", State: " +
      this.state +
      "\nZip: " +
      this.zip +
      ", Phone Number: " +
      this.phoneNumber +
      ", Email: " +
      this.email
    );
  }
}

try {
  let addressBookContactsArray = new Array();
  addressBookContactsArray.push(
    new AddressBookContacts(
      "Vijay",
      "Kumar",
      "Manvi",
      "Raichur",
      "Karnataka",
      "511002",
      "91 7674929172",
      "vijay812998@gmail.com"
    )
  );
  addressBookContactsArray.push(
    new AddressBookContacts(
      "Arun",
      "Kumar",
      "IlkalRoad",
      "Bagalkote",
      "Karnataka",
      "268 756",
      "91 9090909090",
      "arun@gmail.com"
    )
  );
  addressBookContactsArray.push(
    new AddressBookContacts(
      "Halesh",
      "Kumar",
      "firststreet",
      "Delhi",
      "NewDelhi",
      "891 258",
      "87 9090909090",
      "nandha@gmail.com"
    )
  );
  addressBookContactsArray.push(
    new AddressBookContacts(
      "Abhi",
      "Lash",
      "Manviroad",
      "Raichur",
      "Karnataka",
      "628 412",
      "91 7878787878",
      "john@gmail.com"
    )
  );

  //printing array before updating
  addressBookContactsArray.forEach((contact) =>
    console.log(contact.toString())
  );

  //finding index using name
  let check = addressBookContactsArray.findIndex(
    (contact) => contact.firstName == "Vijay"
  );
  //updating the contact detail
  addressBookContactsArray[check].zip = "121 003";

  //displaying contacts after being updated
  console.log(
    "After Changing Zip Updated Contacts are"
  );
  addressBookContactsArray.forEach((contact) =>
    console.log(contact.toString())
  );

  //UC5 Removing an element from an array at an index
  addressBookContactsArray.splice(check, 1);
  console.log(
    "Contacts after Being Deleted from the array"
  );
  addressBookContactsArray.forEach((contact) =>
    console.log(contact.toString())
  );

  //UC6 Reduce function to find total of contacts in Address Book
  var totalContactsPresent = 0;
  function findTotalContacts(addressBookContactsArray) {
    if (addressBookContactsArray != null) totalContactsPresent++;
    return totalContactsPresent;
  }
  addressBookContactsArray.reduce(findTotalContacts, 1);
  console.log(
    "Total Contacts Present in the AddressBookContacts array: " +
      totalContactsPresent
  );

  // check for duplicate Person details
  let DuplicateCount = 0;
  function CheckDuplicatesCount(contact) {
    if (contact.firstName == "Halesh") DuplicateCount++;
    return DuplicateCount;
  }
  //using foreach checking the count for each contact
  addressBookContactsArray.forEach((contact) => CheckDuplicatesCount(contact));
  if (DuplicateCount == 1)
    console.log(
      "It is Not a Duplicate Entry"
    );
  else
    console.log(
      "It is Duplicate Entry"
    );

  //Ability to search person in particular City or State

  //Search By City
  console.log(
    "\nSearch To get Contact by City Raichur"
  );
  function ContactByCity(contact) {
    if (contact.city == "Raichur") console.log(contact.toString());
  }
  addressBookContactsArray.filter(ContactByCity);

  //Search By State
  console.log(
    "Search Contact By State AndhraPradesh"
  );
  let statecontact = addressBookContactsArray.filter((contact) =>
    contact.state.includes("Karnataka")
  );
  console.log(statecontact.toString());


  // UC8 - Ability to View Person by City or State
  function StateMap(Details) {
    return Details.state + " " + Details.firstName + " " + Details.lastName;
  }
  let addressStateMap = addressBookContactsArray.map(StateMap);
  console.log(addressStateMap);
}
catch(e) {
  console.log(e);
}