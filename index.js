const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, { [key] :value} );
};

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.streetAddress = "12 Broadway";
    return employee;

};

function deleteFromEmployeeByKey(employee, key) {
    const newObj = Object.assign({}, employee);
    delete newObj[key];
    return newObj;

};
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;

};

