
const obj = {a: 100};
function display() {
    return this.a;
}

obj.f = display;
console.log(obj.f());

