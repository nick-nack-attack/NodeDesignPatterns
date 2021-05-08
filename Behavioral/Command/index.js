import Conductor from "./conductor";
import {CreateCommand, ExitCommand} from "./commands";
import {createInterface} from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('create <fileName> <text> | history | undo | redo | exit');
rl.prompt();

rl.on('line', input => {
    let [commandText, ...remaining] = input.split(' ');
    let [fileName, ...fileText] = remaining;
    const text = fileText.join(' ');

    switch (commandText) {
        case "exit":
            Conductor.run(new ExitCommand());
            break;

        case "create":
            Conductor.run(new CreateCommand(fileName, text));
            break;

        case "history":
            Conductor.printHistory();
            break;

        case "undo":
            Conductor.undo();
            break;

        case "redo":
            Conductor.redo();
            break;

        default :
            console.log(`${commandText} command not found!`);
    }
    rl.prompt();
});
