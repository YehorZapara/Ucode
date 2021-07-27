let result = [];
const form = document.getElementsByTagName('form');

form[0].addEventListener('submit', results);

function results(e) {
    let render = "Array</br>(</br><pre>";
    e.preventDefault();
    [...form[0]].map(item => {
        if (item.name) {
            result.push([item.name, item.value]);
            render += `\t [${item.name}] => ${item.value}\n`;
        }
    });
    render += "</pre>)</br>";
    console.log(result);
    document.querySelector("#result").innerHTML = render;
}
form.addEventListener('submit', results)

