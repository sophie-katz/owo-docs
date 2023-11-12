import Section from "../../lib/domain/Section";
import Version from "../../lib/domain/Version";

export interface ToolbarProps {
  title: string;
  versions: { [name: string]: Version };
  currentVersionName: string;
  onCurrentVersionNameChange: (version: string) => void;
  sections: { [name: string]: Section };
  currentSectionName: string;
  onCurrentSectionNameChange: (sectionName: string) => void;
}
