function auditLog(value, {kind, name}) {
    if (kind === "method") {
        return function(...args) {
            try {
                const result = value.apply(this, args);
                console.log("Create audit log at: " + new Date().toLocaleString());
                return result;
            } catch (e) {
                console.error(e.message);
            }
        }
    }
}

module.exports = auditLog;
