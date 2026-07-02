enum Severity {
    LOW,
    MEDIUM,
    HIGH,
    CRITICAL,
    BLOCKING    
}

console.log(Severity.LOW);
console.log("----------------");

enum Severity1 {
    LOW = "low severity you can proceed!",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical",
    BLOCKING = "blocking"   
}

console.log(Severity1.LOW);
console.log("----------------");

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}

console.log(Environment.QA);