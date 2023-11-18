import * as path from "path";
import * as yaml from "yaml";
import * as fsPromises from "fs/promises";
import { Command } from "commander";
import {
  ProjectConfiguration,
  ProjectConfigurationSchema,
} from "../domain/schemas/project-configuration";

export interface BuildOptions {
  inputFile: string;
}

export function configure(command: Command): Command {
  return command
    .description("Build documentation for a project.")
    .option(
      "-f, --input-file <string>",
      "The path to the input owo-docs.yml configuration file.",
      path.join(process.cwd(), "owo-docs.yml")
    );
}

export async function run({ inputFile }: BuildOptions) {
  const inputFileResolved = path.resolve(inputFile);

  const projectConfiguration = yaml.parse(
    await fsPromises.readFile(inputFileResolved, "utf-8")
  );

  const projectConfigurationParsed: ProjectConfiguration =
    await ProjectConfigurationSchema.parseAsync(projectConfiguration);

  console.log(JSON.stringify(projectConfigurationParsed));
}
