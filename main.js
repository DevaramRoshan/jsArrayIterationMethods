let updateSalary = () => {
    let salary = [30000, 45000, 50000, 35000];
    let updatedSalary = salary.map((val) => val + ((10 / 100) * val));
    console.log(updatedSalary);
}

let oddSales = () => {
    let sales = [23, 45, 60, 70, 33];
    let odd = sales.filter((val) => val % 2 !== 0);
    console.log(odd);
}
let capitalTag = () => {
    let tag = ['soap', 'shampoo', 'toothpaste'];
    tag.forEach((val) => console.log(val.charAt(0).toUpperCase() + val.slice(1)));
}
let pass = () => {
    let marks = [55, 70, 82, 47];
    let passing = marks.filter((val) => val >= 50);
    console.log(passing);
}

let emailNames = () => {
    let details = [{ 'name': 'Alice' }, { 'name': 'Bob' }, { 'name': 'Charlie' }];
    let names = details.filter((val) => val.name);
    console.log(names);
}


