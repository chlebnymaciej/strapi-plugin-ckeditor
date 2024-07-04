
import sanitizeHtml from "sanitize-html";

import { StrapiMediaLib, StrapiUploadAdapter } from '../plugins'
import {
Alignment,
Autoformat,
AutoImage,
AutoLink,
Autosave,
BalloonToolbar,
BlockQuote,
BlockToolbar,
Bold,
Code,
CodeBlock,
DataFilter,
DataSchema,
Essentials,
FindAndReplace,
FontBackgroundColor,
FontColor,
FontFamily,
FontSize,
GeneralHtmlSupport,
Heading,
Highlight,
HorizontalLine,
HtmlComment,
HtmlEmbed,
Image,
ImageCaption,
ImageInsert,
ImageResize,
ImageStyle,
ImageToolbar,
ImageUpload,
Indent,
IndentBlock,
Italic,
Link,
LinkImage,
List,
ListProperties,
MediaEmbed,
MediaEmbedToolbar,
Mention,
PageBreak,
Paragraph,
PasteFromOffice,
PictureEditing,
RemoveFormat,
SourceEditing,
SpecialCharacters,
SpecialCharactersArrows,
SpecialCharactersCurrency,
SpecialCharactersLatin,
SpecialCharactersMathematical,
SpecialCharactersText,
Strikethrough,
Style,
Subscript,
Superscript,
ShowBlocks,
Table,
TableCaption,
TableCellProperties,
TableColumnResize,
TableProperties,
TableToolbar,
TextPartLanguage,
TodoList,
Underline,
WordCount
} from 'ckeditor5';

// const w = {
//   Alignment: Alignment,
//   Autoformat: Autoformat,
//   AutoImage: AutoImage,
//   AutoLink: AutoLink,
//   Autosave: Autosave,
//   BalloonToolbar: BalloonToolbar,
//   BlockQuote: BlockQuote,
//   BlockToolbar: BlockToolbar,
//   Bold: Bold,
//   Code: Code,
//   CodeBlock: CodeBlock,
//   DataFilter: DataFilter,
//   DataSchema: DataSchema,
//   Essentials: Essentials,
//   FindAndReplace: FindAndReplace,
//   FontBackgroundColor: FontBackgroundColor,
//   FontColor: FontColor,
//   FontFamily: FontFamily,
//   FontSize: FontSize,
//   GeneralHtmlSupport: GeneralHtmlSupport,
//   Heading: Heading,
//   // HeadingButtonsUI: HeadingButtonsUI,
//   Highlight: Highlight,
//   HorizontalLine: HorizontalLine,
//   HtmlComment: HtmlComment,
//   HtmlEmbed: HtmlEmbed,
//   Image: Image,
//   ImageCaption: ImageCaption,
//   ImageInsert: ImageInsert,
//   ImageResize: ImageResize,
//   ImageStyle: ImageStyle,
//   ImageToolbar: ImageToolbar,
//   ImageUpload: ImageUpload,
//   Indent: Indent,
//   IndentBlock: IndentBlock,
//   Italic: Italic,
//   Link: Link,
//   LinkImage: LinkImage,
//   List: List,
//   ListProperties: ListProperties,
//   MediaEmbed: MediaEmbed,
//   MediaEmbedToolbar: MediaEmbedToolbar,
//   Mention: Mention,
//   PageBreak: PageBreak,
//   Paragraph: Paragraph,
//   // ParagraphButtonUI: ParagraphButtonUI,
//   PasteFromOffice: PasteFromOffice,
//   PictureEditing: PictureEditing,
//   RemoveFormat: RemoveFormat,
//   SourceEditing: SourceEditing,
//   SpecialCharacters: SpecialCharacters,
//   SpecialCharactersArrows: SpecialCharactersArrows,
//   SpecialCharactersCurrency: SpecialCharactersCurrency,
//   // SpecialCharactersEssentials: SpecialCharactersEssentials,
//   SpecialCharactersLatin: SpecialCharactersLatin,
//   SpecialCharactersMathematical: SpecialCharactersMathematical,
//   SpecialCharactersText: SpecialCharactersText,
//   StrapiMediaLib: strapiPlugins.StrapiMediaLib,
//   StrapiUploadAdapter: strapiPlugins.StrapiUploadAdapter,
//   Strikethrough: Strikethrough,
//   Style: Style,
//   Subscript: Subscript,
//   Superscript: Superscript,
//   ShowBlocks: ShowBlocks,
//   Table: Table,
//   TableCaption: TableCaption,
//   TableCellProperties: TableCellProperties,
//   TableColumnResize: TableColumnResize,
//   TableProperties: TableProperties,
//   TableToolbar: TableToolbar,
//   TextPartLanguage: TextPartLanguage,
//   TodoList: TodoList,
//   Underline: Underline,
//   WordCount: WordCount
// }

const REDUCED_MATERIAL_COLORS = [
  { label: "Red 50", color: "#ffebee" },
  { label: "Purple 50", color: "#f3e5f5" },
  { label: "Indigo 50", color: "#e8eaf6" },
  { label: "Blue 50", color: "#e3f2fd" },
  { label: "Cyan 50", color: "#e0f7fa" },
  { label: "Teal 50", color: "#e0f2f1" },
  { label: "Light green 50", color: "#f1f8e9" },
  { label: "Lime 50", color: "#f9fbe7" },
  { label: "Amber 50", color: "#fff8e1" },
  { label: "Orange 50", color: "#fff3e0" },
  { label: "Grey 50", color: "#fafafa" },
  { label: "Blue grey 50", color: "#eceff1" },
  { label: "Red 100", color: "#ffcdd2" },
  { label: "Purple 100", color: "#e1bee7" },
  { label: "Indigo 100", color: "#c5cae9" },
  { label: "Blue 100", color: "#bbdefb" },
  { label: "Cyan 100", color: "#b2ebf2" },
  { label: "Teal 100", color: "#b2dfdb" },
  { label: "Light green 100", color: "#dcedc8" },
  { label: "Lime 100", color: "#f0f4c3" },
  { label: "Amber 100", color: "#ffecb3" },
  { label: "Orange 100", color: "#ffe0b2" },
  { label: "Grey 100", color: "#f5f5f5" },
  { label: "Blue grey 100", color: "#cfd8dc" },
  { label: "Red 200", color: "#ef9a9a" },
  { label: "Purple 200", color: "#ce93d8" },
  { label: "Indigo 200", color: "#9fa8da" },
  { label: "Blue 200", color: "#90caf9" },
  { label: "Cyan 200", color: "#80deea" },
  { label: "Teal 200", color: "#80cbc4" },
  { label: "Light green 200", color: "#c5e1a5" },
  { label: "Lime 200", color: "#e6ee9c" },
  { label: "Amber 200", color: "#ffe082" },
  { label: "Orange 200", color: "#ffcc80" },
  { label: "Grey 200", color: "#eeeeee" },
  { label: "Blue grey 200", color: "#b0bec5" },
  { label: "Red 300", color: "#e57373" },
  { label: "Purple 300", color: "#ba68c8" },
  { label: "Indigo 300", color: "#7986cb" },
  { label: "Blue 300", color: "#64b5f6" },
  { label: "Cyan 300", color: "#4dd0e1" },
  { label: "Teal 300", color: "#4db6ac" },
  { label: "Light green 300", color: "#aed581" },
  { label: "Lime 300", color: "#dce775" },
  { label: "Amber 300", color: "#ffd54f" },
  { label: "Orange 300", color: "#ffb74d" },
  { label: "Grey 300", color: "#e0e0e0" },
  { label: "Blue grey 300", color: "#90a4ae" },
  { label: "Red 400", color: "#ef5350" },
  { label: "Purple 400", color: "#ab47bc" },
  { label: "Indigo 400", color: "#5c6bc0" },
  { label: "Blue 400", color: "#42a5f5" },
  { label: "Cyan 400", color: "#26c6da" },
  { label: "Teal 400", color: "#26a69a" },
  { label: "Light green 400", color: "#9ccc65" },
  { label: "Lime 400", color: "#d4e157" },
  { label: "Amber 400", color: "#ffca28" },
  { label: "Orange 400", color: "#ffa726" },
  { label: "Grey 400", color: "#bdbdbd" },
  { label: "Blue grey 400", color: "#78909c" },
  { label: "Red 500", color: "#f44336" },
  { label: "Purple 500", color: "#9c27b0" },
  { label: "Indigo 500", color: "#3f51b5" },
  { label: "Blue 500", color: "#2196f3" },
  { label: "Cyan 500", color: "#00bcd4" },
  { label: "Teal 500", color: "#009688" },
  { label: "Light green 500", color: "#8bc34a" },
  { label: "Lime 500", color: "#cddc39" },
  { label: "Amber 500", color: "#ffc107" },
  { label: "Orange 500", color: "#ff9800" },
  { label: "Grey 500", color: "#9e9e9e" },
  { label: "Blue grey 500", color: "#607d8b" },
  { label: "Red 600", color: "#e53935" },
  { label: "Purple 600", color: "#8e24aa" },
  { label: "Indigo 600", color: "#3949ab" },
  { label: "Blue 600", color: "#1e88e5" },
  { label: "Cyan 600", color: "#00acc1" },
  { label: "Teal 600", color: "#00897b" },
  { label: "Light green 600", color: "#7cb342" },
  { label: "Lime 600", color: "#c0ca33" },
  { label: "Amber 600", color: "#ffb300" },
  { label: "Orange 600", color: "#fb8c00" },
  { label: "Grey 600", color: "#757575" },
  { label: "Blue grey 600", color: "#546e7a" },
  { label: "Red 700", color: "#d32f2f" },
  { label: "Purple 700", color: "#7b1fa2" },
  { label: "Indigo 700", color: "#303f9f" },
  { label: "Blue 700", color: "#1976d2" },
  { label: "Cyan 700", color: "#0097a7" },
  { label: "Teal 700", color: "#00796b" },
  { label: "Light green 700", color: "#689f38" },
  { label: "Lime 700", color: "#afb42b" },
  { label: "Amber 700", color: "#ffa000" },
  { label: "Orange 700", color: "#f57c00" },
  { label: "Grey 700", color: "#616161" },
  { label: "Blue grey 700", color: "#455a64" },
  { label: "Red 800", color: "#c62828" },
  { label: "Purple 800", color: "#6a1b9a" },
  { label: "Indigo 800", color: "#283593" },
  { label: "Blue 800", color: "#1565c0" },
  { label: "Cyan 800", color: "#00838f" },
  { label: "Teal 800", color: "#00695c" },
  { label: "Light green 800", color: "#558b2f" },
  { label: "Lime 800", color: "#9e9d24" },
  { label: "Amber 800", color: "#ff8f00" },
  { label: "Orange 800", color: "#ef6c00" },
  { label: "Grey 800", color: "#424242" },
  { label: "Blue grey 800", color: "#37474f" },
  { label: "Red 900", color: "#b71c1c" },
  { label: "Purple 900", color: "#4a148c" },
  { label: "Indigo 900", color: "#1a237e" },
  { label: "Blue 900", color: "#0d47a1" },
  { label: "Cyan 900", color: "#006064" },
  { label: "Teal 900", color: "#004d40" },
  { label: "Light green 900", color: "#33691e" },
  { label: "Lime 900", color: "#827717" },
  { label: "Amber 900", color: "#ff6f00" },
  { label: "Orange 900", color: "#e65100" },
  { label: "Grey 900", color: "#212121" },
  { label: "Blue grey 900", color: "#263238" },
];

const base = {
  fontFamily: {
    supportAllValues: true,
  },
  fontSize: {
    options: [10, 12, 14, "default", 18, 20, 22],
    supportAllValues: true,
  },
  fontColor: {
    columns: 12,
    documentColors: 12,
    colors: REDUCED_MATERIAL_COLORS,
  },
  fontBackgroundColor: {
    columns: 12,
    documentColors: 12,
    colors: REDUCED_MATERIAL_COLORS,
  },
  heading: {
    options: [
      { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
      { model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_heading1" },
      { model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_heading2" },
      { model: "heading3", view: "h3", title: "Heading 3", class: "ck-heading_heading3" },
      { model: "heading4", view: "h4", title: "Heading 4", class: "ck-heading_heading4" },
      { model: "heading5", view: "h5", title: "Heading 5", class: "ck-heading_heading5" },
      { model: "heading6", view: "h6", title: "Heading 6", class: "ck-heading_heading6" },
    ],
  },
  htmlSupport: {
    allow: [
      {
        name: /.*/,
        attributes: true,
        classes: true,
        styles: true,
      },
    ],
    disallow: [
      {
        attributes: [
          { key: /^on(.*)/i, value: true },
          { key: /.*/, value: /(\b)(on\S+)(\s*)=|javascript:|(<\s*)(\/*)script/i },
          { key: /.*/, value: /data:(?!image\/(png|jpeg|gif|webp))/i },
        ],
      },
      { name: "script" },
    ],
  },
  htmlEmbed: {
    showPreviews: true,
    sanitizeHtml: (inputHtml) => {
      const outputHtml = sanitizeHtml(inputHtml);
      return {
        html: outputHtml,
        hasChanged: true,
      };
    },
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
      reversed: true,
    },
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableProperties",
      "tableCellProperties",
      "toggleTableCaption",
    ],
  },
  image: {
    styles: {
      options: [
        'inline', 'alignLeft', 'alignRight',
        'alignCenter', 'alignBlockLeft', 'alignBlockRight',
        'block', 'side'
      ]
    },
    resizeOptions: [
      {
        name: "resizeImage:original",
        label: "Default image width",
        value: null,
      },
      {
        name: "resizeImage:50",
        label: "50% page width",
        value: "50",
      },
      {
        name: "resizeImage:75",
        label: "75% page width",
        value: "75",
      },
    ],
    toolbar: [
      "imageTextAlternative",
      "toggleImageCaption",
      "linkImage",
      "|",
      "imageStyle:inline",
      "imageStyle:wrapText",
      "imageStyle:breakText",
      "imageStyle:side",
      "|",
      "resizeImage",
    ],
    insert: {
      integrations: ["insertImageViaUrl"],
    },
  },
  link: {
    decorators: {
      openInNewTab: {
        mode: "manual",
        label: "Open in a new tab",
        defaultValue: true,
        attributes: {
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
      toggleDownloadable: {
        mode: "manual",
        label: "Downloadable",
        attributes: {
          download: "file",
        },
      },
    },
    addTargetToExternalLinks: true,
    defaultProtocol: "https://",
  },
  style: {
    definitions: [
      {
        name: "Title",
        element: "h1",
        classes: ["document-title"],
      },
      {
        name: "Subtitle",
        element: "h2",
        classes: ["document-subtitle"],
      },
      {
        name: "Callout",
        element: "p",
        classes: ["callout"],
      },
      {
        name: "Side quote",
        element: "blockquote",
        classes: ["side-quote"],
      },
      {
        name: "Needs clarification",
        element: "span",
        classes: ["needs-clarification"],
      },
      {
        name: "Wide spacing",
        element: "span",
        classes: ["wide-spacing"],
      },
      {
        name: "Small caps",
        element: "span",
        classes: ["small-caps"],
      },
      {
        name: "Code (dark)",
        element: "pre",
        classes: ["stylish-code", "stylish-code-dark"],
      },
      {
        name: "Code (bright)",
        element: "pre",
        classes: ["stylish-code", "stylish-code-bright"],
      },
    ],
  },
};



const basePlugins =
  [
    Alignment,
    Autoformat,
    AutoImage,
    AutoLink,
    Autosave,
    BalloonToolbar,
    BlockQuote,
    BlockToolbar,
    Bold,
    Code,
    CodeBlock,
    DataFilter,
    DataSchema,
    Essentials,
    FindAndReplace,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    GeneralHtmlSupport,
    Heading,
    Highlight,
    HorizontalLine,
    HtmlComment,
    HtmlEmbed,
    Image,
    ImageCaption,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    MediaEmbed,
    MediaEmbedToolbar,
    Mention,
    PageBreak,
    Paragraph,
    PasteFromOffice,
    PictureEditing,
    RemoveFormat,
    SourceEditing,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    Strikethrough,
    Style,
    Subscript,
    Superscript,
    ShowBlocks,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextPartLanguage,
    TodoList,
    Underline,
    WordCount,
    StrapiMediaLib,
];

export const toolbarEditorConfig = {
  plugins:basePlugins,
  ...base,
  toolbar: [
    {
      label:' ',
      tooltip: null,
      icon:'paragraph',
      items: [  'heading','style','SourceEditing']
    },
    '|',
    {
      label:' ',
      tooltip: null,
      icon:'text',
      items: [ 'bold', 'italic','fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor' ]
    },
    {
      label:' ',
      tooltip: null,
      icon:`
      <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" fill="none" width="24" height="24"/>
      <g>
      <path d="M14.348 12H21v2h-4.613c.24.515.368 1.094.368 1.748 0 1.317-.474 2.355-1.423 3.114-.947.76-2.266 1.138-3.956 1.138-1.557 0-2.934-.293-4.132-.878v-2.874c.985.44 1.818.75 2.5.928.682.18 1.306.27 1.872.27.68 0 1.2-.13 1.562-.39.363-.26.545-.644.545-1.158 0-.285-.08-.54-.24-.763-.16-.222-.394-.437-.704-.643-.18-.12-.483-.287-.88-.49H3v-2H14.347zm-3.528-2c-.073-.077-.143-.155-.193-.235-.126-.202-.19-.44-.19-.713 0-.44.157-.795.47-1.068.313-.273.762-.41 1.348-.41.492 0 .993.064 1.502.19.51.127 1.153.35 1.93.67l1-2.405c-.753-.327-1.473-.58-2.16-.76-.69-.18-1.414-.27-2.173-.27-1.544 0-2.753.37-3.628 1.108-.874.738-1.312 1.753-1.312 3.044 0 .302.036.58.088.848h3.318z"/>
      </g>
      </svg>`,
      items: [ 'underline', 'strikethrough', 'superscript', 'subscript' ]
    },
    'removeFormat',
    '|',
    'alignment',
    'outdent',
    'indent',
    '|',
    'bulletedList', 'numberedList',
    '|',
    'insertImage','mediaEmbed','strapiMediaLib','link','blockquote','insertTable','specialCharacters','htmlEmbed','codeBlock',
    '|', 'horizontalLine', 'pageBreak', '|',
    '|', 'showBlocks',
    '|', 'undo', 'redo', '|',
  ],

}

export const toolbarBalloonEditorConfig = {
  plugins:[...basePlugins, BalloonToolbar],
  ...base,
  toolbar: [
    {
      label:' ',
      tooltip: null,
      icon:'paragraph',
      items: [  'heading','style']
    },
    '|',
    'alignment',
    'outdent',
    'indent',
    '|',
    'bulletedList', 'numberedList',
    '|',
    'insertImage','mediaEmbed','strapiMediaLib','link','blockquote','insertTable','specialCharacters','htmlEmbed','codeBlock',
    '|', 'horizontalLine', 'pageBreak', '|','SourceEditing',
    '|', 'showBlocks',
    '|', 'undo', 'redo', '|',
  ],
  balloonToolbar: [
    'bold', 'italic','fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
    {
      label:' ',
      tooltip: null,
      icon:`
      <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" fill="none" width="24" height="24"/>
      <g>
      <path d="M14.348 12H21v2h-4.613c.24.515.368 1.094.368 1.748 0 1.317-.474 2.355-1.423 3.114-.947.76-2.266 1.138-3.956 1.138-1.557 0-2.934-.293-4.132-.878v-2.874c.985.44 1.818.75 2.5.928.682.18 1.306.27 1.872.27.68 0 1.2-.13 1.562-.39.363-.26.545-.644.545-1.158 0-.285-.08-.54-.24-.763-.16-.222-.394-.437-.704-.643-.18-.12-.483-.287-.88-.49H3v-2H14.347zm-3.528-2c-.073-.077-.143-.155-.193-.235-.126-.202-.19-.44-.19-.713 0-.44.157-.795.47-1.068.313-.273.762-.41 1.348-.41.492 0 .993.064 1.502.19.51.127 1.153.35 1.93.67l1-2.405c-.753-.327-1.473-.58-2.16-.76-.69-.18-1.414-.27-2.173-.27-1.544 0-2.753.37-3.628 1.108-.874.738-1.312 1.753-1.312 3.044 0 .302.036.58.088.848h3.318z"/>
      </g>
      </svg>`,
      items: [ 'underline', 'strikethrough', 'superscript', 'subscript' ]
    },
    '|',
    'removeFormat',
  ]
}

export const blockBalloonEditorConfig = {
  plugins:[
    ...basePlugins.filter(({pluginName})=>
      pluginName !== "SourceEditing" &&
      pluginName !== "SpecialCharacters" &&
      pluginName !== "SpecialCharactersArrows" &&
      pluginName !== "SpecialCharactersCurrency" &&
      pluginName !== "SpecialCharactersEssentials" &&
      pluginName !== "SpecialCharactersLatin" &&
      pluginName !== "SpecialCharactersMathematical" &&
      pluginName !== "SpecialCharactersText" &&
      pluginName !== "PageBreak" &&
      pluginName !== "HorizontalLine" &&
      pluginName !== "MediaEmbed" &&
      pluginName !== "HtmlEmbed" &&
      pluginName !== "Code" &&
      pluginName !== "CodeBlock"
    ),
    BlockToolbar, BalloonToolbar
    ],
  ...base,
  blockToolbar: [
    {
      label:' ',
      tooltip: null,
      icon:'paragraph',
      items: [  'heading','style']
    },
    '|',
    'bulletedList', 'numberedList',
    '|',
    'alignment',
    'outdent',
    'indent',
    '|',
    'insertImage','strapiMediaLib','link','blockquote','insertTable',
    '|', 'showBlocks',
    '|', 'undo', 'redo', '|',
  ],
  balloonToolbar: [
    'bold', 'italic','fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
    {
      label:' ',
      tooltip: null,
      icon:`
      <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" fill="none" width="24" height="24"/>
      <g>
      <path d="M14.348 12H21v2h-4.613c.24.515.368 1.094.368 1.748 0 1.317-.474 2.355-1.423 3.114-.947.76-2.266 1.138-3.956 1.138-1.557 0-2.934-.293-4.132-.878v-2.874c.985.44 1.818.75 2.5.928.682.18 1.306.27 1.872.27.68 0 1.2-.13 1.562-.39.363-.26.545-.644.545-1.158 0-.285-.08-.54-.24-.763-.16-.222-.394-.437-.704-.643-.18-.12-.483-.287-.88-.49H3v-2H14.347zm-3.528-2c-.073-.077-.143-.155-.193-.235-.126-.202-.19-.44-.19-.713 0-.44.157-.795.47-1.068.313-.273.762-.41 1.348-.41.492 0 .993.064 1.502.19.51.127 1.153.35 1.93.67l1-2.405c-.753-.327-1.473-.58-2.16-.76-.69-.18-1.414-.27-2.173-.27-1.544 0-2.753.37-3.628 1.108-.874.738-1.312 1.753-1.312 3.044 0 .302.036.58.088.848h3.318z"/>
      </g>
      </svg>`,
      items: [ 'underline', 'strikethrough', 'superscript', 'subscript' ]
    },
    '|',
    'removeFormat',
  ]
}
