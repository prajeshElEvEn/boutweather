import chalk from "chalk";
import figlet from "figlet";

const header = async () => {
  const title = figlet.textSync("Know Your Weather");
  console.log(
    "---------------------------------------------------------------------------------------------"
  );
  console.log(chalk.whiteBright.bold(title));
  console.log(chalk.gray.bold("by @eleven"));
  console.log(
    "---------------------------------------------------------------------------------------------"
  );
};

export default header;
