var data = [
    {
        country: 'China',
        population: 1409517397,
    },
    {
        country: 'India',
        population: 1339180127,
    },
    {
        country: 'USA',
        population: 324459463,
    },
    {
        country: 'Indonesia',
        population: 263991379,
    }
];
function checkPopulation(value) {
    console.log(value);
    return value.population>300000000;
}

var fiterData = data.filter(checkPopulation);
console.log(fiterData);