// 1.	צרו פונקציה שמקבלת מספרים מהמשתמש, עד שהמשתמש מכניס 0,
//  הדפיסו למסך את המספר הגדול ביותר ואת המספר הקטן ביותר.
// let userNumber;
// let guessCounter;
// let smaillNum;
// let bigNum;

// function GetNumber(NumbersByUser) {
//   while (userNumber != 0) {
//     userNumber = Number(prompt("Drop a number"));
//     NumbersByUser.push(userNumber);
//     NumbersByUser.sort(function (a, b) {
//       return b - a;
//     });
//     console.log(NumbersByUser);
//     smaillNum = NumbersByUser[NumbersByUser.length - 2];
//     bigNum = NumbersByUser[0];
//     section.innerHTML = `The Big num : ${bigNum} <br>
//       The Little num : ${smaillNum}<br>`;
//     guessCounter++;

//     if (userNumber == 0) {
//       console.log("yesssssssss");
//       section.innerHTML += `You are right the number is 0`;
//     }
//   }
// }
// NumbersByUser = [];
// GetNumber(NumbersByUser);
// !עשיתי
//  2.צרו פונקציה שמקבלת 10 מספרים מהמשתמש, המספרים נכנסים למערך שמודפס למסך,
//  הפונקציה מחזירה בסוף מערך של מספרים זוגיים בלבד.
// let TenNumberPrompt;
// let DoubleArray=[]
// function TenNumbersByUser(ArrayTenNumbers){
// for (let i = 0; i < 10; i++) {
//     TenNumberPrompt=Number(prompt("choose a number"))
//     ArrayTenNumbers.push(TenNumberPrompt)
//    console.log(ArrayTenNumbers);
//    article1.innerHTML=`<h1>The Full Array : </h1> <h3>${ArrayTenNumbers}</h3>`
// } ArrayTenNumbers.forEach((number)=>{
//         if(number%2==0){
//             console.log(`${number}: zogi`);
//             DoubleArray.push(number)
//         }
//         console.log(DoubleArray);
//         article2.innerHTML=`<h1>The Double Array :</h1> <h3>${DoubleArray}</h3>`
//         return DoubleArray
//     })
// }
// TenNumbersByUser([])

// 3.	צרו פונקציה שמקבלת מספר מהמשתמש,
//  הפונקציה יוצרת מערך של 100 מספרים רנדומליים ובודקת האם המספר קיים במערך,
//  במידה וכן יש להדפיס למסך הודעת הצלחה והודעת כישלון במידה ולא.
// ------------ לוקח רק את המספר האחרון~-------------------------
// !לוקח רק מספר האחרון
// let ArrayOneHundred = [];
// function oneHundredRandom(num) {
//   for (let i = 0; i < 100; i++) {
//       ArrayOneHundred.push(Math.floor(Math.random()*101))
//   }
//   console.log(ArrayOneHundred);
//   ArrayOneHundred.forEach((element) => {
//     switch (element) {
//       case num:
//         section.innerHTML = "Excellent you were right";
//         // console.log(element);
//         // console.log(num);
//         break;
//       default:
//         section.innerHTML = "You were wrong";
//         // console.log(element);
//         // console.log(num);
//         break;
//     }
//   });
// }
// oneHundredRandom(Number(prompt("choose a number")));

// 4.	צרו פונקציה שמקבלת מהמשתמש שם פרטי,
//  הפונקציה מקבלת מבחוץ מערך של אותיות באותיות באנגלית,
//   ובודקת באיזה אות מתחיל השם של המשתמש,
//    במידה והשם מתחיל ב A הדפיסו "NICE"   ובמידה השם מתחיל ב Z הדפיסו "GOOD".
// ==================================מה המערך צריך לעשות ??=========
// !מערך מיותר
// let LettersArray = ["a", "d", "t", "y", "k", "h"];
// function GetUserName(UserName) {
//     LettersArray.forEach(element =>{
//         let firstLetter=UserName[0]
//        switch (firstLetter) {
//     case "A":
//       console.log("NICE");
//       break;
//     case "Z":
//       console.log("GOOD");
//       break;
//     default:
//       console.log("anuther");
//   }
// })
// }    
// GetUserName(prompt("your name ?"));
// ----------------------------------------------------------------------
// !עשיתי
// 5.	שאלת ראיון: כתבו פונקציה שבתוכה נמצאת  לולאה שמבצעת עד 100 איטרציות,
//  תוך כדי שהיא מדפיסה "fizz" במכפלה של 3,
// "buzz" במכפלות של 5, ו-"fizzbuzz" במכפלות של 3 ו-5.

//   for (let i = 1; i < 100; i++) {
//     if (i == 3 || i % 3 == 0) {
//       console.log(`${i} : fizz `);
//       article1.innerHTML += `<h1> 3:</h1>
//       ${i} : fizz <br> fizzbuzz `;
//     }
//     if (i == 5 || i % 5 == 0) {
//       article1.innerHTML += `<h1> 5:</h1>
//       ${i} : buzz <br> fizzbuzz `;

//     }
//   }

// -------------------------------------------------------- !!!!
// !עשיתי את כל משימות הלולאה
// משימות לולאה
// 1.	צרו פונקציה עם מנגנון של לולאה שרצה על אובייקט של בניין,עם שדות
//  : גובה, רוחב, מספר קומות ומספר דירות.
// ArrayBuilding = [];
// class Building {
//   height;
//   width;
//   numSet;
//   NumApartment;
//   constructor(heightBuild, widthBuild, numSetBuild, NumApartmentBuild) {
//     this.height = heightBuild;
//     this.width = widthBuild;
//     this.numSet = numSetBuild;
//     this.NumApartment = NumApartmentBuild;
//   }
// }
// let BuildOne = new Building(200, 100, 40, 10);
// let BuildTwo = new Building(400, 300, 60, 20);
// let BuildThree = new Building(600, 500, 3, 30);
// let BuildFour = new Building(800, 700, 2, 40);
// ArrayBuilding.push(BuildOne);
// ArrayBuilding.push(BuildTwo);
// ArrayBuilding.push(BuildThree);
// ArrayBuilding.push(BuildFour);

// for (const key in BuildOne) {
//   console.log(`${key} : ${BuildOne[key]}`);
// }

// 2.	צרו פונקציה שמקבלת מערך של אובייקטים ומדפיסה את המידע בצורה יפה ללוג,
// יש לבדוק עם מערך בניינים מהסעיף הקודם.
// בצעו פעמיים.
// ---- דרך 1 ----!!!!!!!
// ArrayBuilding.forEach(element => {
//     for (const key in element) {
//         console.log(`${key} : ${element[key]}`);
// }
// });
// ---- דרך 2 ----!!!!!!!
// for (const build of ArrayBuilding) {
//     for (const key in build) {
//         console.log(`${key} : ${build[key]}`);
// }
// }

// -----------------דרך 1------------------!!!!!!
// 3.	צרו פונקציה שמקבלת מערך של בניינים ומחזירה מערך חדש,
//  שכולל רק את הבניינים שמספר הקומות בהם גדול מ5.
// let ArraySetUp5 = [];
// ArrayBuilding.forEach((element) => {
//   for (const key in element) {
//     if (element.numSet > 5) {
//       ArraySetUp5.push(key, element[key]);
//       console.log(ArraySetUp5);
//     }
//   }
// });
// ---------------------דרך 2--------------------!!!!!!!!!
// let SetUp5Array = [];
// for (const build of ArrayBuilding) {
//     for (const key in build) {
//         if (build.numSet > 5) {
//         console.log(`${key} : ${build[key]}`);
//         SetUp5Array.push(key, build[key]);
//       console.log(SetUp5Array);
// }
//     }
// }
// =============================================================
// !עשיתי את כל תרגילי המחלקות חוץ מהאתגר 5 ,6
// תרגילי מחלקות
// 1.	צרו מחלקה של מרצה, עם שדות של שם פרטי,
//  שם משפחה, שכר שעתי, שעות עבודה בשבוע וטלפון.
// 2.	הוסיפו בנאי.
// 3.	צרו 3 אובייקטים.
// 4.	צרו במחלקה פונקציה שמדפיסה את המידע של האובייקט בצורה יפה ללוג.

// class lecturer {
//   FirstName;
//   LastName;
//   HourlyWage;
//   workHours;
//   phone;
//   constructor(FirstName, LastName, HourlyWage, workHours, phone) {
//     this.FirstName = FirstName;
//     this.LastName = LastName;
//     this.HourlyWage = HourlyWage;
//     this.workHours = workHours;
//     this.phone = phone;
//   }
// }

// let lecturer_One = new lecturer("keren", "hailu", 45, 10, 054222);
// let lecturer_Two = new lecturer("yossi", "yasu", 25, 8, 054222);
// let lecturer_Three = new lecturer("dan", "levi", 30, 15, 054222);

// ArrayLecturer = [];
// ArrayLecturer.push(lecturer_One);
// ArrayLecturer.push(lecturer_Two);
// ArrayLecturer.push(lecturer_Three);

// ArrayLecturer.forEach((element) => {
//   for (const key in element) {
//     console.log(`${key} : ${element[key]}`);
//   }
// });

// 7.	צרו טופס של מרצה, עם התייחסות לשדות במחלקה מרצה.
// לחיצה על שלח יוצרת מופע של מרצה, עם אותם שדות.
// האובייקט יודפס ללוג.
// האובייקט יודפס למסך.
// 8.	הציגו טבלה עם הנתונים.

// sectionLecturer
// nameInput lastNameInput HourlyWageInput workHoursInput phoneInput
// Btn.onclick = () => {
//   let lecturer_Input = new lecturer(
//     nameInput.value,
//     lastNameInput.value,
//     HourlyWageInput.value,
//     workHoursInput.value,
//     phoneInput.value
//   );
//   for (const key in lecturer_Input) {
//     sectionLecturer.innerHTML += `<table><tr><th>${key} : ${lecturer_Input[key]}</th></tr></table>`;
//     console.log(`${key} : ${lecturer_Input[key]}`);
//   }
// };
