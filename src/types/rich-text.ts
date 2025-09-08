interface LinkElement {
  type: 'link';
  href: string;
  title: string | undefined;
  children: CustomElement[];
}

interface ParagraphElement {
  type: 'paragraph';
  children: CustomElement[];
}

export interface HeadingElement {
  type: 'heading-one' |
  'heading-two' |
  'heading-three' |
  'heading-four' |
  'heading-five' |
  'heading-six';
  children: CustomElement[];
}

interface ListElement {
  type: 'numbered-list' | 'bulleted-list';
  children: ListItemElement[];
}

interface ListItemElement {
  type: 'list-item';
  children: CustomElement[];
}

interface TextElement {
  text: string;
  italic?: boolean;
  bold?: boolean;
  underline?: boolean;
  type?: string;
}

export type CustomElement =
  | LinkElement
  | ParagraphElement
  | HeadingElement
  | ListElement
  | ListItemElement
  | TextElement;