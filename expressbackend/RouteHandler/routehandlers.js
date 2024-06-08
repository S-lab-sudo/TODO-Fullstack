const router = require("express").Router();
const TodoModel = require("../Models/TodoModel");

// get routes
router.get("/read", (req, res) => {
  TodoModel.find()
    .then((response) => {
      return res.status(200).json({ success: true, data: response });
    })
    .catch((error) => {
      console.log(error);
      return res
        .status(400)
        .json({ success: false, message: "An error occured" });
    });
});

// post routes
router.post("/create", (req, res) => {
  try {
    // Initial Data to send
    let dataToSend = { success: false, message: "" };
    // Getting data from frontend
    const { todo } = req.body;
    // console.log(todo);
    const saveTodo = new TodoModel({ todotitle: todo });
    saveTodo
      .save()
      .then(() => {
        dataToSend["success"] = true;
        dataToSend["message"] = "Completed";
        console.log("Saved todo ", todo);
        return res.status(200).json(dataToSend);
      })
      .catch(() => {
        dataToSend["message"] = "An error occcured";
        console.log("An error occured while saving");
        return res.status(400).json(dataToSend);
      });
  } catch (error) {
    console.log(error);
    dataToSend["message"] = "An error occcured";
    console.log("An error occured while saving");
    return res.status(400).json(dataToSend);
  }
});

router.post("/update", (req, res) => {
  try {
    // Initial Data to send
    let dataToSend = { success: false, message: "" };
    // Getting data from frontend
    const { _id, todo } = req.body;
    TodoModel.findByIdAndUpdate(_id, { todotitle: todo })
      .then(() => {
        dataToSend["success"] = true;
        dataToSend["message"] = "Updated";
        console.log("Updated todo ", todotitle);
        return res.status(200).json(dataToSend);
      })
      .catch(() => {
        dataToSend["message"] = "An error occcured";
        console.log("An error occured while updating");
        return res.status(400).json(dataToSend);
      });
  } catch (error) {
    console.log(error);
  }
});

router.post("/delete", (req, res) => {
  try {
    // Initial Data to send
    let dataToSend = { success: false, message: "" };
    // Getting data from frontend
    const id = req.body["_id"];
    TodoModel.findByIdAndDelete(id)
      .then((deletedTodo) => {
        if (!deletedTodo) {
          dataToSend["message"] = "Todo not found";
          console.log("Todo not found");
          return res.status(404).json(dataToSend);
        }
        dataToSend["success"] = true;
        dataToSend["message"] = "Deleted";
        console.log("Deleted todo ", deletedTodo);
        return res.status(200).json(dataToSend);
      })
      .catch((error) => {
        dataToSend["message"] = "An error occurred";
        console.log("An error occurred while deleting", error);
        return res.status(400).json(dataToSend);
      });
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
});

module.exports = router;
