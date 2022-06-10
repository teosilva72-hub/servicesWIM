const sql = require('./conn')
const fs = require('fs');
const data = new Date().toLocaleDateString();
Data(data);
const path = `C:/Cameras/WIM/WIM_01/${Data(data)}`;
listFiles(path);

function Data(data) {
    data = data.split('/');
    data = `${data[2]}${data[1]}${data[0]}`;
    return data;
}

function listFiles(path) {
    const files = {};
    fs.readdir(path, (err, arq) => {
        if (err) {
            console.log(err)
        } else {
            for (var i = 0; i < arq.length; i++) {
                files[i] = arq;
            }
            getFile(files[0]);
        }
    })
}
const img = [],
    plate = [],
    equip = [],
    date = [];
async function getFile(files) {





}




function verifyDateHour(date) {
    try {
        date = date.split('');
        date = `${date[0]}${date[1]}${date[2]}${date[3]}-${date[4]}${date[5]}-${date[6]}${date[7]} ${date[8]}${date[9]}:${date[10]}${date[11]}:${date[12]}${date[13]}:${date[14]}${date[15]}${date[16]}`;
    } catch (err) {
        //console.log(err);
    }
    return date;
}

function saveFilesSQL(siteID, img, plate, date) {
    const insert = `INSERT INTO wim_vbv (siteID, image, image_plate, date) VALUES (?, ?, ?, ?)`;
    sql.Conn.query(insert, siteID, img, plate, date, (err, result) => {
        if (err) console.log(err)
        else console.log(result)
    })
}