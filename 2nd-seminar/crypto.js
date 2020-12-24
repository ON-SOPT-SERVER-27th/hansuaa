// 과제 3

const fs = require('fs');
const crypto = require('crypto');

const password = 'qwerty';

const encrypt = (password) => {
    crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');

    crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, key) => {
        console.log(`password: ${key.toString('base64')}`);

        const hashed = key.toString('base64');

        fs.writeFile(`${__dirname}/encrypted.txt`, hashed, (err, hashed) => {
        if (err) return console.log(err.message);
        });
    });
});
};

encrypt(password);