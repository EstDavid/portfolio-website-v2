'use client';

import { marked } from 'marked';
import type { Token, Tokens, TokensList } from 'marked';
import * as React from 'react';
import { Text } from 'slate';
import type { CustomElement, HeadingElement } from '@/types/rich-text';
import Link from 'next/link';

type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  type?: string;
  href?: string;
  title?: string;
};

type NextHeadingLevel = 1 | 2 | 3 | 4;

interface RichTextParagraphProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  nextHeadingLevel?: NextHeadingLevel;
}

const cleanSpecialEscapeCharacters = (textToClean: string) => {
  return textToClean
    .replace(/&#39;/g, "'") // Replace &#39; with '
    .replace(/&quot;/g, '"') // Replace &quot; with "
    .replace(/&lt;/g, '<') // Replace &lt; with <
    .replace(/&gt;/g, '>') // Replace &gt; with >
    .replace(/&amp;/g, '&'); // Replace &amp; with &
};

const emptyLinesWithFormat = {
  bold: '****',
  italic: '**',
  boldItalic: '******',
};

const deserializeFromMarkdown = (markdown: string): CustomElement[] => {
  const tokens = marked.lexer(markdown);

  const headingTypes: Record<number, HeadingElement['type']> = {
    1: 'heading-one',
    2: 'heading-two',
    3: 'heading-three',
    4: 'heading-four',
    5: 'heading-five',
    6: 'heading-six',
  };

  const walkTokens = (tokens: TokensList | Token[]): CustomElement[] => {
    const elements: CustomElement[] = [];

    if (!tokens.length) {
      return [
        {
          type: 'paragraph',
          children: [{ text: '' }],
        },
      ];
    }

    tokens.forEach((token) => {
      if (token) {
        switch (token.type) {
        case 'paragraph': {
          elements.push({
            type: 'paragraph',
            children: token.tokens ? walkTokens(token.tokens) : [],
          });
          break;
        }
        case 'heading': {
          const type = headingTypes[token.depth as keyof typeof headingTypes];
          const lineBreaksMatches = token.raw.match(/(\n+)$/);
          const emptyParagraphs = lineBreaksMatches
            ? Math.floor(lineBreaksMatches[0].length / 2) - 1
            : 0;

          if (token.text === emptyLinesWithFormat.bold) {
            elements.push({
              type,
              children: [{ text: '', bold: true }],
            });
          } else if (token.text === emptyLinesWithFormat.italic) {
            elements.push({
              type,
              children: [{ text: '', italic: true }],
            });
          } else if (token.text === emptyLinesWithFormat.boldItalic) {
            elements.push({
              type,
              children: [{ text: '', bold: true, italic: true }],
            });
          } else {
            elements.push({
              type,
              children: token.tokens ? walkTokens(token.tokens) : [],
            });
          }
          if (emptyParagraphs) {
            for (let i = 0; i < emptyParagraphs; i += 1) {
              elements.push({
                type: 'paragraph',
                children: [{ text: '' }],
              });
            }
          }
          break;
        }
        // case 'blockquote': {
        //   elements.push({
        //     type: 'block-quote',
        //     children: walkTokens(token.tokens.map((t) => t.tokens).flat()),
        //   });
        //   break;
        // }
        case 'list': {
          elements.push({
            type: token.ordered ? 'numbered-list' : 'bulleted-list',
            children: token.items.map((item: Tokens.ListItem) => {
              return {
                type: 'list-item',
                children: walkTokens(
                  item.tokens
                    .flatMap((t) => {
                      if ('tokens' in t) {
                        return t.tokens;
                      }
                      return [t];
                    })
                    .filter((t): t is Token => t !== undefined)
                ),
              };
            }),
          });
          break;
        }
        case 'list_item':
          elements.push({
            type: 'list-item',
            children: token.tokens ? walkTokens(token.tokens) : [],
          });
          break;
        case 'em': {
          if (token && token.tokens && token.tokens[0].type === 'text') {
            elements.push({
              text: cleanSpecialEscapeCharacters(token.text),
              italic: true,
            });
          } else if (token && token.tokens && 'text' in token.tokens[0]) {
            elements.push({
              text: cleanSpecialEscapeCharacters(token.tokens[0].text),
              italic: true,
              bold: true,
            });
          }
          break;
        }
        case 'strong':
          elements.push({
            text: cleanSpecialEscapeCharacters(token.text),
            bold: true,
          });
          break;
        case 'hr': {
          if (token.raw === emptyLinesWithFormat.italic) {
            elements.push({
              type: 'paragraph',
              children: [{ text: '', italic: true }],
            });
          } else if (token.raw === emptyLinesWithFormat.bold) {
            elements.push({
              type: 'paragraph',
              children: [{ text: '', bold: true }],
            });
          } else if (token.raw === emptyLinesWithFormat.boldItalic) {
            elements.push({
              type: 'paragraph',
              children: [{ text: '', bold: true, italic: true }],
            });
          }
          break;
        }
        case 'space': {
          if (token.raw === '\n\n\n\n') {
            elements.push({ type: 'paragraph', children: [{ text: '' }] });
          }
          break;
        }
        case 'link': {
          elements.push({ type: 'link', text: token.text, href: token.href, title: token.title });
          break;
        }
        default:
          if (token.type === 'text') {
            elements.push({ text: cleanSpecialEscapeCharacters(token.text) });
          }
        }
      }
    });

    return elements;
  };

  return walkTokens(tokens);
};

const DynamicHeading = (
  {
    headingKey,
    nextHeadingLevel,
    className,
    children
  }: {
    headingKey: 'heading-one' | 'heading-two' | 'heading-three';
    nextHeadingLevel: NextHeadingLevel;
    className: string;
    children: React.ReactNode;
  }
): React.JSX.Element => {
  const increments = {
    'heading-one': 0,
    'heading-two': 1,
    'heading-three': 2
  };

  const headings = {
    1: <h1 className={className}>{children}</h1>,
    2: <h2 className={className}>{children}</h2>,
    3: <h3 className={className}>{children}</h3>,
    4: <h4 className={className}>{children}</h4>,
    5: <h5 className={className}>{children}</h5>,
    6: <h6 className={className}>{children}</h6>,
  };

  return headings[(increments[headingKey] + nextHeadingLevel) as keyof typeof headings];
};

// Función para convertir nodos Slate.js a HTML
function serializeNode (
  node: CustomElement | CustomText,
  i: number,
  nextHeadingLevel: NextHeadingLevel
): React.ReactNode {

  if (
    node.type === 'link' &&
    'text' in node &&
    'title' in node &&
    'href' in node &&
    node.href) {
    return <Link
      key={i}
      title={node.title}
      href={node.href}
      className='underline underline-offset-4 decoration-primary decoration-2'
      target="_blank" rel="noopener noreferrer"
    >
      {node.text}
    </Link>;
  }

  if (Text.isText(node)) {
    let text: React.ReactNode = node.text;

    if (node.bold) {
      text = <strong>{text}</strong>;
    }

    if (node.italic) {
      text = <em>{text}</em>;
    }

    if (node.underline) {
      text = <u>{text}</u>;
    }

    return <span key={i}>{text}</span>;
  }

  const children = node.children.map((n, index) => serializeNode(n, index, nextHeadingLevel));

  switch (node.type) {
  case 'paragraph':
    return (
      <p key={i} className='pt-3'>
        {children}
      </p>
    );
  case 'heading-one':
    return (
      <h1 key={i} className='text-2xl py-2'>
        {children}
      </h1>
    );
  case 'heading-two':
    return (
      <DynamicHeading headingKey='heading-two' nextHeadingLevel={nextHeadingLevel} key={i} className='text-xl font-medium py-2'>
        {children}
      </DynamicHeading>
    );
  case 'heading-three':
    return (
      <DynamicHeading headingKey='heading-three' nextHeadingLevel={nextHeadingLevel} key={i} className='text-lg font-medium py-1'>
        {children}
      </DynamicHeading>
    );
  case 'list-item':
    return (
      <li key={i} className='py-1'>
        {children}
      </li>
    );
  case 'bulleted-list':
    return (
      <ul key={i} className='list-disc pl-6 py-1'>
        {children}
      </ul>
    );
  case 'numbered-list':
    return (
      <ol key={i} className='list-decimal pl-6 py-1'>
        {children}
      </ol>
    );
  default:
    return <div key={i}>{children}</div>;
  }
}

const RichTextParagraph = React.forwardRef<
  HTMLDivElement,
  RichTextParagraphProps
>(({ className, content, nextHeadingLevel = 2, ...props }, ref) => {
  if (!content.length) {
    return null;
  }
  content = content.replace(/\\n/g, '\n');
  const deserializedContent = deserializeFromMarkdown(content);

  try {
    return (
      <div ref={ref} className={className} {...props}>
        {deserializedContent.map((node, i) => serializeNode(node, i, nextHeadingLevel))}
      </div>
    );
  } catch (error) {
    console.error('Error parsing RichTextParagraph content. Error:', error);
    return null;
  }
});

RichTextParagraph.displayName = 'RichTextParagraph';

export default RichTextParagraph;