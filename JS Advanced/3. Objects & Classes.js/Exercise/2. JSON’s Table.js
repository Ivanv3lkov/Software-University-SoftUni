// function solve(input) {
//     let result = '<table>\n';

//     for (let line of input) {
//         let obj = JSON.parse(line);
//         result += `\t<tr>\n\t\t<td>${obj.name}</td>\n\t\t<td>${obj.position}</td>\n\t\t<td>${obj.salary}</td>\n\t</tr>\n`
//     }
//     console.log(result + '</table>');
// }

// solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
//     '{"name":"Teo","position":"Lecturer","salary":1000}',
//     '{"name":"Georgi","position":"Lecturer","salary":1000}']
// );

function solve2(input) {
    let arr = input.map(x => JSON.parse(x));
    let result = '<table>';
    
    result = arr.reduce((acc, curr) => {
        let value = Object.values(curr);
        return acc += '\n\t<tr>\n\t\t<td>' + value.join('</td>\n\t\t<td>') + '</td>\n\t</tr>';
    }, result)
    
    return result += '\n</table>';
}

console.log(solve2(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
));