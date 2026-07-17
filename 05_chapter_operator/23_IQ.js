let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "✅ PASS" : "❌ FAIL";
console.log(testResult);


let environment = "staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");

let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);
// Template Literal
console.log(`What is the SLA time ? - ${sla}`);

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);
// test