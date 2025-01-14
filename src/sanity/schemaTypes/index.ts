import { set, type SchemaTypeDefinition } from "sanity";
import { pageType } from "./page";
import { blockContentType } from "./blockContent";
import { postType } from "./post";
import { homepageType } from "./homepage";
import { settingsType } from "./settings";

export const schemaTypes = [
  pageType,
  blockContentType,
  postType,
  homepageType,
  settingsType,
];
