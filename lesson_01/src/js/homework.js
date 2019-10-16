const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter((emplo) => {
    return emplo.length > 0 && emplo.length != '';
})

employersNames = employersNames.map((vot) => vot.toLowerCase().trim())

//console.log(employers);
//console.log(employersNames);
/* let employersNames = [];
for (let i = 0; i < employers.length; i++) {
	if (employers[i].length > 0 && employers[i].length != '') {
		employersNames.push(employers[i]);
	}
} 
for (let i = 0; i < employersNames.length; i++) {
	employersNames[i] = employersNames[i].toLowerCase().trim();
} */

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;
const{cash:[cash1, cash2, cash3, cash4], eu:[eu1, eu2, eu3], rus: [rus1, rus2]} = sponsors;
//console.log(cash2, eu3, rus2);


function calcCash(own) {
    own = own || 0;
    let everyCash = Array.prototype.slice.call(arguments);

    let total = own;
    for (let i = 0; i < everyCash[1].length; i++) {
        total += +everyCash[1][i];
    }
    console.log(`total: ${total}`);
    return total;
    
}

const money = calcCash(null, sponsors.cash);
console.log(`money: ${money}`);
console.log(`sponsors.cash: ${sponsors.cash}`);


function makeBusiness(owner, director = 'Victor', cash, emp) {
    var sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log(`And we have a sponsors: `);
    console.log.apply(null, sumSponsors);
    console.log(`Note. Be careful with ${eu1}. It's a huge risk.}`);

    console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
    emp);
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
}
makeBusiness.apply(null, ['Sam', null, money, employersNames]);