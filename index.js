// Write your solution in this file!
// declare customerName as 'Bruce' in global scope
var customerName = 'Bruce';

// modify customerName to 'Bob' in global scope
customerName = 'Bob';

// function to uppercase the customer name
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// function to set the best customer
function setBestCustomer() {
  bestCustomer = 'not Bob';
}

// function to overwrite the best customer
function overwriteBestCustomer() {
  bestCustomer = 'maybe Alice';
}

// declare leastFavoriteCustomer as 'Karen' in global scope
const leastFavoriteCustomer = 'Karen';

// function to unsuccessfully reassign the least favorite customer
function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'John';
}

// test cases
describe('Fix the Scope', function() {
  it('returns the customerName', function() {
    expect(customerName).to.equal('Bob');
  });

  it('modifies the customerName variable', function() {
    upperCaseCustomerName();
    expect(customerName).to.equal('BOB');
  });

  it('setBestCustomer', function() {
    setBestCustomer();
    expect(bestCustomer).to.equal('not Bob');
  });

  it('overwrites the best customer', function() {
    overwriteBestCustomer();
    expect(bestCustomer).to.equal('maybe Alice');
  });

  it('unsuccessfully tries to reassign the least favorite customer', function() {
    changeLeastFavoriteCustomer();
    expect(leastFavoriteCustomer).to.equal('Karen');
  });
});