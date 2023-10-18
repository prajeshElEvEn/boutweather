import inquirer from "inquirer";

let place = "New York";

const getChoice = async () => {
  const choice = await inquirer.prompt({
    name: "place_name",
    type: "input",
    message: "enter a place",
    default: () => {
      return "New York";
    },
  });

  place = choice.place_name;
  return place;
};

export default getChoice;
