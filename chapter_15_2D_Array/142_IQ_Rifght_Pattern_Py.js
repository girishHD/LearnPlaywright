// n = 3a
//*
//**
// *** 

let n = 3;
for (i = 1; i <= n; i++) {
    let row = "";
    for (j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row.trim());
}

for (i = 1; i <= 3; i++) {
    for (j = 1; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log();
}