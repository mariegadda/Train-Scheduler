    
// initialize Firebase 
 var config = {
    apiKey: "AIzaSyB3a-ngcH-ifMaaHCJoRAR2l5j5ZMnfsg8",
    authDomain: "train-scheduler-dedca.firebaseapp.com",
    databaseURL: "https://train-scheduler-dedca.firebaseio.com",
    projectId: "train-scheduler-dedca",
    storageBucket: "train-scheduler-dedca.appspot.com",
    messagingSenderId: "916429112960"
  };
  firebase.initializeApp(config);

// Database
var database = firebase.database();

// FIREBASE WATCHER + INITIAL LOADER - behaves similarly to .on("value")
database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val().name);

    var row = $("<tr>");
    row.html("<td>" + childSnapshot.val().name + "</td>" + "<td>" + childSnapshot.val().city+ "</td><td>" + childSnapshot.val().start + "</td><td>" + childSnapshot.val().rate + "</td>"
        );
    $("#table").append(row);
});


$("#submit-train").on("click", function(){
    var trainName = $("#name").val().trim();
    var destination =$("#destination").val().trim();
    var firstTrain = $("#first-train").val().trim();
    var tFrequency = $("#frequency").val().trim();
console.log(trainName);
    event.preventDefault();

    database.ref().push({
      name: trainName,
      city: destination,
      start: firstTrain,
      rate: tFrequency
    });
});

    // // Time is 3:30 AM
    // var firstTime = "03:30";

    // // First Time (pushed back 1 year to make sure it comes before current time)
    // var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    // console.log(firstTimeConverted);

    // // Current Time
    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // // Difference between the times
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // console.log("DIFFERENCE IN TIME: " + diffTime);

    // // Time apart (remainder)
    // var tRemainder = diffTime % tFrequency;
    // console.log(tRemainder);

    // // Minute Until Train
    // var tMinutesTillTrain = tFrequency - tRemainder;
    // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // // Next Train
    // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));