// // Array.prototype.filter()
//     // 1. Filter the list of inventors for those who were born in the 1500's
//     const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

//     console.table(fifteen);

//     // Array.prototype.map()
//     // 2. Give us an array of the inventor first and last names
//     const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
//     console.log(fullNames);

//     // Array.prototype.sort()
//     // 3. Sort the inventors by birthdate, oldest to youngest
//     // const ordered = inventors.sort(function(a, b) {
//     //   if(a.year > b.year) {
//     //     return 1;
//     //   } else {
//     //     return -1;
//     //   }
//     // });

//     const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
//     console.table(ordered);

//     // Array.prototype.reduce()
//     // 4. How many years did all the inventors live?
//     const totalYears = inventors.reduce((total, inventor) => {
//       return total + (inventor.passed - inventor.year);
//     }, 0);

//     console.log(totalYears);

//     // 5. Sort the inventors by years lived
//     const oldest = inventors.sort(function(a, b) {
//       const lastInventor = a.passed - a.year;
//       const nextInventor = b.passed - b.year;
//       return lastInventor > nextInventor ? -1 : 1;
//     });
//     console.table(oldest);

//     // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
//     // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//     // const category = document.querySelector('.mw-category');
//     // const links = Array.from(category.querySelectorAll('a'));
//     // const de = links
//     //             .map(link => link.textContent)
//     //             .filter(streetName => streetName.includes('de'));

//     // 7. sort Exercise
//     // Sort the people alphabetically by last name
//     const alpha = people.sort((lastOne, nextOne) => {
//       const [aLast, aFirst] = lastOne.split(', ');
//       const [bLast, bFirst] = nextOne.split(', ');
//       return aLast > bLast ? 1 : -1;
//     });
//     console.log(alpha);

//     // 8. Reduce Exercise
//     // Sum up the instances of each of these
//     const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

//     const transportation = data.reduce(function(obj, item) {
//       if (!obj[item]) {
//         obj[item] = 0;
//       }
//       obj[item]++;
//       return obj;
//     }, {});

//     console.log(transportation);

// **************************************************************************

const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
     'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 
     'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 
     'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 
     'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 
     'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 
     'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 
     'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    // function Born1500(valor){
    //     return ((valor.year >= 1500) && (valor.year < 1600));
    // }
    // console.table(inventors.filter(Born1500));

    console.table(inventors.filter(item => (item.year >= 1500) && (item.year < 1600)));

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names

    console.table(inventors.map(item => item.first + " " + item.last));

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    // console.table(inventors.sort(function(first, second){
    //   if (first.year > second.year) {
    //     return 1;
    //   } else {
    //     return -1;
    //   }
    // }));

    // console.table(inventors.sort((first, second) => first.year > second.year ? 1 : -1));

    console.table(inventors.sort((first, second) => first.year - second.year));

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?

    var suma = inventors.reduce(function(total, next) {
          console.log(next.passed - next.year);
          return (total + (next.passed - next.year));
        }, 0);
    console.log("La suma de los años es: " + suma);

    // var result = inventors.reduce((total, valorActual) => {
    //   console.log(valorActual.passed - valorActual.year);
    //   return total + (valorActual.passed - valorActual.year);
    // }, 0);
    // console.log("La suma es: " + result);

    
    // 5. Sort the inventors by years lived
    
    // var yearsLived = inventors.map(item => item.passed - item.year);
    // console.table(yearsLived.sort((first, second) => second - first));

    const oldest = inventors.sort(function(first, second){
      const current = (first.passed - first.year);
      const next = (second.passed - second.year);

      return current > next ? -1 : 1;
    });

    console.table(oldest);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    const boulevars = ['Boulevard Auguste-Blanqui', 'Boulevard Barbès', 'Boulevard Beaumarchais', "Boulevard de l'Amiral-Bruix", 'Boulevard des Capucines', 
    'Boulevard de la Chapelle', 'Boulevard de Clichy', 'Boulevard du Crime', 'Boulevard Haussmann', "Boulevard de l'Hôpital", 'Boulevard des Italiens', 
    'Boulevard de la Madeleine', 'Boulevard de Magenta', 'Boulevard Montmartre', 'Boulevard du Montparnasse', 'Boulevard Raspail', 'Boulevard Richard-Lenoir', 
    'Boulevard de Rochechouart', 'Boulevard Saint-Germain', 'Boulevard Saint-Michel', 'Boulevard de Sébastopol', 'Boulevard de Strasbourg', 'Boulevard du Temple', 
    'Boulevard Voltaire', 'Boulevard de la Zone'];

    console.table(boulevars.filter(item => item.indexOf('de')!= -1));


    // 7. sort Exercise
    // Sort the people alphabetically by last name

    console.table(people.sort(function(a, b){
      return a < b ? -1 : 1;
    }));

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 
    'car', 'van', 'car', 'truck' ];

    const tranportation = data.reduce(function(obj, item){
      if(!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;   
    }, {}); 

    console.table(tranportation);