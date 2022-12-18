const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

//----------------------------------
const createUser = () => {
  const newUser = {
      id: faker.datatype.uuid(),
      first_name: faker.name.firstName(),
      last_name:faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.number(),
  };
  return newUser;
};
const createCompany = () => {
  const newFake = {
      id: faker.datatype.uuid(),
      name: faker.company.companyName,
      Address: [{"street":faker.address.street(),"city":faker.address.city(),"state":faker.address.state(),"zipcode":faker.address.zipCode(),"country":faker.address.country()}]
  };
  return newFake;
};

app.get("/api/users/new",(req,res) => {
  res.json(createUser());
})

app.get("/api/company/new",(req,res) => {
  res.json(createCompany());
})

app.get("/api/user/company",(req,res) => {
  const userAndCompany ={
    user : createUser() ,
    company : createCompany(),
  }
  res.json(userAndCompany);
  
})

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

const newUser = createUser();
console.log(newUser);
const newComp = createCompany() ;
console.log(newComp);

