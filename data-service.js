
const fs = require('fs');
var employees = [];
var departments = [];


module.exports.initialize = function()
{
    return new Promise(function(resolve, reject){
            try{
                 fs.readFile('./data/employees.json', (err, data) => 
                    {
                        if (err) reject(err);
                         employees = JSON.parse(data);
    
                        fs.readFile('./data/departments.json', (err, data) =>
                        {       
                          if (err) reject(err);
                            departments = JSON.parse(data);
                        });   
                    }); 
                    resolve("Operation read file success :)")
                } catch {reject ("Operation read file unsuccesfull :(")};
            });

}

module.exports.getAllEmployees = function ()
{
    return new Promise(function(resolve, reject)
    {
        resolve(employees);
        if(employees.length == 0)
        {
            reject("no results returned");
        }
    });
}

module.exports.getManagers = function()
{
    return new Promise(function(resolve, reject){
        var managers = [];

        if(employees.length != 0)
        {
            for(var i = 0; i < employees.length; i++)
            {
                if(employees[i].isManager == true)
                {
                   managers.push(employees[i]);
                }
            }
        }else
            {
                reject("no results return");
            }
        resolve(managers);
    });
}

module.exports.getDepartments = function()
{
    return new Promise(function (resolve, reject)
    {
        resolve(departments);
        if(departments.length == 0)
        {
            reject("No results returned");
        } 
    });
}



