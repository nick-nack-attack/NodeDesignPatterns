import {unlink, writeFile} from "fs";
import path from "path";

class ExitCommand {
    get name() {
        return 'Exit';
    }

    execute() {
        process.exit(0);
    }
}

class CreateCommand {
    constructor(file_name, file_text) {
        this.fileName = file_name;
        this.body = file_text;
        this.full_path = path.join(__dirname, file_name);
    }

    get name() {
        return `Create ${this.fileName}`;
    }

    execute() {
        writeFile(this.full_path, this.body, f => f);
    }

    undo() {
        // to undo a create function, i need to delete the thing
        // import unlink
        // unlink file that was just created *** by unlink and full path
        unlink(this.full_path, f => f);
    }
}

module.exports = { ExitCommand, CreateCommand }


