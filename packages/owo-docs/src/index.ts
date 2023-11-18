import { program } from "commander";
import { name, version, description } from "../package.json";
import * as build from "./commands/build";

program.name(name).version(version).description(description);

build.configure(program.command("build")).action(build.run);

program.parse();
