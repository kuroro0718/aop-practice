const auditLog = require("./auditLog");

class PaymentService {
    @auditLog
    static deduct(creditCardNo, amount) {
        if (amount < 0) {
            throw new Error(`amount ${amount} less than 0`);
        }
        console.log(`Deduct $${amount} with credit card ${creditCardNo}`);
    }
}

function main() {
    PaymentService.deduct("1111", 100);
    PaymentService.deduct("1111", -1);
}

main();