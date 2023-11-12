import Section from "../../lib/domain/Section";
import Version from "../../lib/domain/Version";

export interface ToolbarProps {
  title: string;
  versions: { [key: string]: Version };
  currentVersionKey: string;
  onCurrentVersionKeyChange: (version: string) => void;
  sections: { [key: string]: Section };
  currentSectionKey: string;
  onCurrentSectionKeyChange: (sectionName: string) => void;
}
