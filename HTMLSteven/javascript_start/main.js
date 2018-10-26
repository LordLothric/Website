window.onload = function () {
    var users = [user1,user2,user3,user4,user5];
    //gebruik verschillende functions om deze opdrachten te laten slagen

    //1.loop door de lijst en print de naam af in console
    print(users)
    //2.bereken het gemiddelde van "programmeren 2"

    //3.sorteer de lijst op volgorde van het cijfer voor programmeren 1
    //tip users.sort()
    
    //4.print de lijst uit op de webpagina
    //gebruik een <table>
    createTable(users)
    
function print(users){
    //do something
   for (var i = 0; i < users.length; i++)
       {
           console.log(users[i]);
       }
    
}

function calculateAvar(users){
    //loop
    
    //user.punten[]
    
    //sum
}
    function sortProgrammeren1(users){
        user.sort(function(a,b){
           // logica voor soerteren 
        })
        
        
    }
    function createTable(users){
    var table = "<table><tr><td>slod</td><td>"+users.firstname+"</td></tr></table>";    
        
    }

var user1 = {
    firstname: "Steven",
    lastname: "De Cock",
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    },

    punten : [
        {vak : "programmeren 1", cijfer : 13},
        {vak : "programmeren 2", cijfer : 20}
    ]
}

var user2 = {
    firstname: "Jimmy",
    lastname: "Hendrix",
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    },
    punten : [
        {vak : "programmeren 1", cijfer : 13},
        {vak : "programmeren 2", cijfer : 20}
    ]
}

var user3 = {
    firstname: "Toon",
    lastname: "Aerts",
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    },
    punten : [
        {vak : "programmeren 1", cijfer : 13},
        {vak : "programmeren 2", cijfer : 20}
    ]
}

var user4 = {
    firstname: "Wout",
    lastname: "Van Aert",
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    },
    punten : [
        {vak : "programmeren 1", cijfer : 13},
        {vak : "programmeren 2", cijfer : 20}
    ]
}

var user5 = {
    firstname: "Marijn",
    lastname: "De Valck",
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    },
    punten : [
        {vak : "programmeren 1", cijfer : 13},
        {vak : "programmeren 2", cijfer : 20}
    ]
}
}
