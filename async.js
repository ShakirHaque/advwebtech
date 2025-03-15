console.log("welcome");

function taskOne() {
    setTimeout(() => {
        console.log("Task One Completed");
    }, 2000);
}

async function callTask() {
    await taskOne();
    console.log("All tasks completed");
}

callTask();

console.log("bye");
