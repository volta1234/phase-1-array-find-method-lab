const record = [
     { year: "2015", result: "W"},
     { year: "2014", result: "N/A"},
     { year: "2013", result: "L"},
   ]

const superbowlWin = (record) => {
    const result = record.find(record => record.result === "W");
    return Boolean(result) ? result.year : undefined;
}
console.log(superbowlWin(record));