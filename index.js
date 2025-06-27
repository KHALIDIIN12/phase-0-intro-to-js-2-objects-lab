
const employee = {
  name: "Ada Lovelace",
  streetAddress: "1 Infinite Loop"
};


function updateEmployeeWithKeyAndValue(emp, key, value) {
  return { ...emp, [key]: value };
}


function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value) {
  emp[key] = value;
  return emp;
}

function deleteFromEmployeeByKey(emp, key) {
  const { [key]: _removed, ...newObj } = emp;
  return newObj;
}


function destructivelyDeleteFromEmployeeByKey(emp, key) {
  delete emp[key];
  return emp;
}


module.exports = {
  employee,
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey
};
