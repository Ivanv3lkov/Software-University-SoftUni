import { html } from "./../../node_modules/lit-html/lit-html.js";
import { formTemplate } from "./formTemplate.js";
import { btnTemplate } from "./loadButtonTemplate.js";
import { tableBody } from "./tableTemplates.js";

export const initialView = () => html`
${btnTemplate()}
${tableBody()}
${formTemplate()}`;