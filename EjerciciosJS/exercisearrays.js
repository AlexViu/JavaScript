let data = [
    {name: "Nacho", telephone: "966112233", age: 40},
    {name: "Ana", telephone: "911223344", age: 35},
    {name: "Mario", phone: "611998877", age: 15},
    {name: "Laura", telephone: "633663366", age: 17},
    {name: "Pedro", telephone: "611944444", age: 25},
    {name: "Julia", phone: "633232323", age: 37}
    ];

    //exercise 3
    //console.log(data);

    //exercise 4
       
    data.sort(function (a, b) {
        if (a.age > b.age) {
          return 1;
        }
        if (a.age < b.age) {
            return -1;
          }
          // a must be equal to b
          return 0;
      });
      console.log(data);