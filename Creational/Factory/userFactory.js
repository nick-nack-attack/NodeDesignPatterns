import Employee from "./Employee";
import Shopper from "./Shopper";

const userFactory = (name, money=0, type, employer) => {
    if (type === 'employee') {
        return new Employee(name, money, employer);
    } else {
        return new Shopper(name, money);
    }
}

module.exports = userFactory;
