function piramidaTerbalik(rows) {
    let result = '';
    for (let i = rows; i >= 1; i--) {
        // Tambahkan spasi sebelum bintang
        for (let j = 1; j <= rows - i; j++) {
            result += ' ';
        }
        // Tambahkan bintang
        for (let k = 1; k <= 2 * i - 1; k++) {
            result += '*';
        }
        result += '\n';
    }
    return result;
}

// Contoh penggunaan
const rows = 5;
console.log("Piramida terbalik:");
console.log(piramidaTerbalik(rows));

function piramidaTerbalik(rows) {
    let result = '';
    for (let i = rows; i >= 1; i--) {
        // Tambahkan spasi sebelum bintang
        for (let j = 1; j <= rows - i; j++) {
            result += ' ';
        }
        // Tambahkan bintang
        for (let k = 1; k <= 2 * i - 1; k++) {
            result += '*';
        }
        result += '\n';
    }
    return result;
}

// Contoh penggunaan
const rows = 5;
console.log("Piramida terbalik:");
console.log(piramidaTerbalik(rows));
