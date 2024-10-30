let raceNumber = Math.floor(Math.random() * 1000);

const adultEarly = 0;

const runnerAge = 20;

if (runnerAge > 18 && adultEarly === 1) {
  raceNumber += 1000;
  console.log(
    `Your race starts at 9:30am. Your assigned race number is ${raceNumber}`
  );
} else if (runnerAge > 18 && adultEarly === 0) {
  raceNumber += 1000;
  console.log(`Late adults run at 11:00am. Your race number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(
    `Youth registrants run at 12:30 pm. YOur race number is ${raceNumber}`
  );
} else {
  console.log("Come back next time!");
}
