function* taskGenerator() {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 1 done")
    }, 1000);
  })
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 2 done")
    }, 1000);
  })
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 3 done")
    }, 1000);
  })
}

async function getTaskDone() {
  let task = taskGenerator()
  try {
    let task1 = await task.next().value
    console.log(task1)
    let task2 = await task.next().value
    console.log(task2)
    let task3 = await task.next().value
    console.log(task3)

    return "All task Completed Successfully!!"

  } catch (error) {
    throw new Error(error)
  }
}

Promise.resolve(getTaskDone()).then((v) => { console.log(v) }).catch((err) => { console.log(err) })
