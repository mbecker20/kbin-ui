readme.md

# readme.md

## Table of contents

### Variables

- [colors](README.md#colors)
- [scrollbarJSS](README.md#scrollbarjss)
- [sizes](README.md#sizes)
- [springConfig](README.md#springconfig)
- [zIndex](README.md#zindex)

### Functions

- [AnimatedFlexCol](README.md#animatedflexcol)
- [AnimatedFlexRow](README.md#animatedflexrow)
- [AnimatedText](README.md#animatedtext)
- [AutoPlacingGrid](README.md#autoplacinggrid)
- [Button](README.md#button)
- [CenterMenu](README.md#centermenu)
- [CheckBox](README.md#checkbox)
- [Conditional](README.md#conditional)
- [ContextMenu](README.md#contextmenu)
- [ContextMenuExtension](README.md#contextmenuextension)
- [DualButtons](README.md#dualbuttons)
- [FlexCol](README.md#flexcol)
- [FlexRow](README.md#flexrow)
- [HorizontalButtonScroller](README.md#horizontalbuttonscroller)
- [HorizontalScroller](README.md#horizontalscroller)
- [IfElse](README.md#ifelse)
- [LabelledItems](README.md#labelleditems)
- [LabelledMultiText](README.md#labelledmultitext)
- [LabelledText](README.md#labelledtext)
- [Map](README.md#map)
- [NavBar](README.md#navbar)
- [NavBarItem](README.md#navbaritem)
- [Notification](README.md#notification)
- [SVGIcon](README.md#svgicon)
- [Switch](README.md#switch)
- [Text](README.md#text)
- [TextArea](README.md#textarea)
- [TextAreaOnly](README.md#textareaonly)
- [TextInput](README.md#textinput)
- [TextInputOnly](README.md#textinputonly)
- [UncontrolledCheckBox](README.md#uncontrolledcheckbox)
- [UncontrolledDualButtons](README.md#uncontrolleddualbuttons)
- [createMenuManager](README.md#createmenumanager)
- [setCustomColors](README.md#setcustomcolors)
- [setCustomScrollbarJSS](README.md#setcustomscrollbarjss)
- [setCustomSizes](README.md#setcustomsizes)
- [setCustomSpringConfig](README.md#setcustomspringconfig)
- [setCustomZIndices](README.md#setcustomzindices)
- [useContextMenu](README.md#usecontextmenu)
- [useDisableBodyScroll](README.md#usedisablebodyscroll)
- [useEscapeToClose](README.md#useescapetoclose)
- [useListener](README.md#uselistener)
- [useLocalStorage](README.md#uselocalstorage)
- [useScrollbarJSS](README.md#usescrollbarjss)

## Variables

### colors

• `Const` **colors**: *object*

#### Type declaration:

Name | Type |
------ | ------ |
`buttonBorder` | *string* |
`centerMenu` | *string* |
`centerMenuBackground` | *string* |
`centerMenuBorder` | *string* |
`checkBoxBorder` | *string* |
`checkBoxHighlightCenter` | *string* |
`checkBoxHighlightEdge` | *string* |
`contextMenuBackground` | *string* |
`contextMenuItemBorder` | *string* |
`defaultButton` | *string* |
`focussedInput` | *string* |
`focussedInputBorder` | *string* |
`inputBG` | *string* |
`inputText` | *string* |
`notificationFailure` | *string* |
`notificationSuccess` | *string* |
`redButton` | *string* |
`scrollbarBackground` | *string* |
`scrollbarThumb` | *string* |
`selectedText` | *string* |
`text` | *string* |
`unfocussedInput` | *string* |
`unfocussedInputLabel` | *string* |

Defined in: [theme.ts:3](https://github.com/mbecker20/kbinUI/blob/8d45585/src/theme.ts#L3)

___

### scrollbarJSS

• `Const` **scrollbarJSS**: *object*

#### Type declaration:

Name | Type |
------ | ------ |
`none` | { `&::-webkit-scrollbar`: { `width`: *string* = '0px' } ; `&::-webkit-scrollbar-thumb`: { `background`: *string* ; `borderRadius`: *string* = '1.5em' } ; `&::-webkit-scrollbar-track`: { `background`: *string*  } ; `scrollbarColor`: *string* ; `scrollbarWidth`: *string* = 'none' } |
`regular` | { `&::-webkit-scrollbar`: { `width`: *string* = '.8em' } ; `&::-webkit-scrollbar-thumb`: { `background`: *string* ; `borderRadius`: *string* = '1.5em' } ; `&::-webkit-scrollbar-track`: { `background`: *string*  } ; `scrollbarColor`: *string* ; `scrollbarWidth`: *string* = 'auto' } |
`thin` | { `&::-webkit-scrollbar`: { `width`: *string* = '.5em' } ; `&::-webkit-scrollbar-thumb`: { `background`: *string* ; `borderRadius`: *string* = '1.5em' } ; `&::-webkit-scrollbar-track`: { `background`: *string*  } ; `scrollbarColor`: *string* ; `scrollbarWidth`: *string* = 'thin' } |

Defined in: [theme.ts:146](https://github.com/mbecker20/kbinUI/blob/8d45585/src/theme.ts#L146)

___

### sizes

• `Const` **sizes**: *object*

#### Type declaration:

Name | Type |
------ | ------ |
`button` | { `margin`: *string* = '.2em'; `padding`: *string* = '.3em' } |
`checkBox` | { `checkDif`: *number* = 0; `highlightDif`: *number* = 1.5; `size`: *number* = 1.2 } |
`contextMenu` | { `maxHeight`: *string* = '90vh'; `maxWidth`: *string* = '90vw' } |
`file` | { `height`: *number* = 12; `width`: *number* = 10 } |
`switch` | { `diameter`: *number* = 3 } |
`text` | { `large`: *string* = 'calc(25px + 2.8vmin)'; `medium`: *string* = 'calc(18px + 1.8vmin)'; `small`: *string* = 'calc(12px + 1.2vmin)'; `xsmall`: *string* = 'calc(8px + 1vmin)'; `xxsmall`: *string* = 'calc(7px + .8vmin)' } |

Defined in: [theme.ts:40](https://github.com/mbecker20/kbinUI/blob/8d45585/src/theme.ts#L40)

___

### springConfig

• `Const` **springConfig**: *object*

#### Type declaration:

Name | Type |
------ | ------ |
`fast` | { `friction`: *number* = 30; `tension`: *number* = 370 } |
`medium` | { `friction`: *number* = 40; `tension`: *number* = 330; `velocity`: *number* = 5 } |
`xslow` | { `clamp`: *boolean* = true; `friction`: *number* = 20; `mass`: *number* = 50; `tension`: *number* = 100 } |

Defined in: [theme.ts:110](https://github.com/mbecker20/kbinUI/blob/8d45585/src/theme.ts#L110)

___

### zIndex

• `Const` **zIndex**: *object*

#### Type declaration:

Name | Type |
------ | ------ |
`centerMenu` | *number* |
`contextMenu` | *number* |
`notification` | *number* |

Defined in: [theme.ts:100](https://github.com/mbecker20/kbinUI/blob/8d45585/src/theme.ts#L100)

## Functions

### AnimatedFlexCol

▸ `Const`**AnimatedFlexCol**(`__namedParameters`: { `alignItems?`: *string* ; `backgroundColor?`: *string* ; `children?`: React.ReactNode ; `className?`: *string* ; `height?`: *string* ; `justifyContent?`: *string* ; `margin?`: *string* ; `onClick?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `onContextMenu?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `onDragOver?`: (`e`: *DragEvent*<HTMLDivElement\>) => *void* ; `onDrop?`: (`e`: *DragEvent*<HTMLDivElement\>) => *void* ; `onPointerEnter?`: (`e`: *PointerEvent*<HTMLDivElement\>) => *void* ; `onPointerLeave?`: (`e`: *PointerEvent*<HTMLDivElement\>) => *void* ; `onWheel?`: (`e`: *WheelEvent*<HTMLDivElement\>) => *void* ; `padding?`: *string* ; `pointer?`: *boolean* ; `ref?`: *RefObject*<HTMLDivElement\> ; `style?`: CSS.Properties ; `width?`: *string*  }, `ref`: *ForwardedRef*<HTMLDivElement\>): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`alignItems?` | *string* |
`backgroundColor?` | *string* |
`children?` | React.ReactNode |
`className?` | *string* |
`height?` | *string* |
`justifyContent?` | *string* |
`margin?` | *string* |
`onClick?` | (`e`: *MouseEvent*<HTMLDivElement\>) => *void* |
`onContextMenu?` | (`e`: *MouseEvent*<HTMLDivElement\>) => *void* |
`onDragOver?` | (`e`: *DragEvent*<HTMLDivElement\>) => *void* |
`onDrop?` | (`e`: *DragEvent*<HTMLDivElement\>) => *void* |
`onPointerEnter?` | (`e`: *PointerEvent*<HTMLDivElement\>) => *void* |
`onPointerLeave?` | (`e`: *PointerEvent*<HTMLDivElement\>) => *void* |
`onWheel?` | (`e`: *WheelEvent*<HTMLDivElement\>) => *void* |
`padding?` | *string* |
`pointer?` | *boolean* |
`ref?` | *RefObject*<HTMLDivElement\> |
`style?` | CSS.Properties |
`width?` | *string* |

• **ref**: *ForwardedRef*<HTMLDivElement\>

**Returns:** *Element*

Defined in: [Flex/FlexCol.tsx:58](https://github.com/mbecker20/kbinUI/blob/8d45585/src/Flex/FlexCol.tsx#L58)

___

### AnimatedFlexRow

▸ `Const`**AnimatedFlexRow**(`__namedParameters`: { `alignItems?`: *string* ; `backgroundColor?`: *string* ; `children?`: React.ReactNode ; `className?`: *string* ; `flexWrap?`: *wrap* \| *nowrap* \| *wrap-reverse* ; `height?`: *string* ; `justifyContent?`: *string* ; `margin?`: *string* ; `onClick?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `onContextMenu?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `onPointerEnter?`: (`e`: *PointerEvent*<HTMLDivElement\>) => *void* ; `onPointerLeave?`: (`e`: *PointerEvent*<HTMLDivElement\>) => *void* ; `onWheel?`: (`e`: *WheelEvent*<HTMLDivElement\>) => *void* ; `padding?`: *string* ; `pointer?`: *boolean* ; `ref?`: *RefObject*<HTMLDivElement\> ; `style?`: CSS.Properties ; `width?`: *string*  }, `ref`: *ForwardedRef*<HTMLDivElement\>): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`alignItems?` | *string* |
`backgroundColor?` | *string* |
`children?` | React.ReactNode |
`className?` | *string* |
`flexWrap?` | *wrap* \| *nowrap* \| *wrap-reverse* |
`height?` | *string* |
`justifyContent?` | *string* |
`margin?` | *string* |
`onClick?` | (`e`: *MouseEvent*<HTMLDivElement\>) => *void* |
`onContextMenu?` | (`e`: *MouseEvent*<HTMLDivElement\>) => *void* |
`onPointerEnter?` | (`e`: *PointerEvent*<HTMLDivElement\>) => *void* |
`onPointerLeave?` | (`e`: *PointerEvent*<HTMLDivElement\>) => *void* |
`onWheel?` | (`e`: *WheelEvent*<HTMLDivElement\>) => *void* |
`padding?` | *string* |
`pointer?` | *boolean* |
`ref?` | *RefObject*<HTMLDivElement\> |
`style?` | CSS.Properties |
`width?` | *string* |

• **ref**: *ForwardedRef*<HTMLDivElement\>

**Returns:** *Element*

Defined in: [Flex/FlexRow.tsx:54](https://github.com/mbecker20/kbinUI/blob/8d45585/src/Flex/FlexRow.tsx#L54)

___

### AnimatedText

▸ `Const`**AnimatedText**(`__namedParameters`: { `className?`: *string* ; `color?`: *string* ; `fontSize?`: *string* ; `margin?`: *string* ; `onClick?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `padding?`: *string* ; `pointer?`: *boolean* ; `ref?`: *RefObject*<HTMLDivElement\> ; `style?`: CSS.Properties ; `text`: *string* ; `textAlign?`: *string* ; `textCursor?`: *boolean* ; `underline?`: *boolean* ; `wrap?`: *boolean*  }, `ref`: *ForwardedRef*<HTMLDivElement\>): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`className?` | *string* |
`color?` | *string* |
`fontSize?` | *string* |
`margin?` | *string* |
`onClick?` | (`e`: *MouseEvent*<HTMLDivElement\>) => *void* |
`padding?` | *string* |
`pointer?` | *boolean* |
`ref?` | *RefObject*<HTMLDivElement\> |
`style?` | CSS.Properties |
`text` | *string* |
`textAlign?` | *string* |
`textCursor?` | *boolean* |
`underline?` | *boolean* |
`wrap?` | *boolean* |

• **ref**: *ForwardedRef*<HTMLDivElement\>

**Returns:** *Element*

Defined in: [Text/Text.tsx:42](https://github.com/mbecker20/kbinUI/blob/8d45585/src/Text/Text.tsx#L42)

___

### AutoPlacingGrid

▸ **AutoPlacingGrid**(`__namedParameters`: { `alignItems?`: *start* \| *end* \| *center* \| *stretch* ; `children?`: ReactNode ; `className?`: *string* ; `direction`: *row* \| *column* \| *row dense* \| *column dense* ; `gap?`: *string* ; `justifyContent?`: *start* \| *end* \| *center* \| *stretch* ; `minHeight`: *string* ; `minWidth`: *string* ; `numCols?`: *number* \| *string* ; `numRows?`: *number* \| *string* ; `placeItems?`: *start* \| *end* \| *center* \| *stretch* ; `style?`: CSS.Properties  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`alignItems?` | *start* \| *end* \| *center* \| *stretch* |
`children?` | ReactNode |
`className?` | *string* |
`direction` | *row* \| *column* \| *row dense* \| *column dense* |
`gap?` | *string* |
`justifyContent?` | *start* \| *end* \| *center* \| *stretch* |
`minHeight` | *string* |
`minWidth` | *string* |
`numCols?` | *number* \| *string* |
`numRows?` | *number* \| *string* |
`placeItems?` | *start* \| *end* \| *center* \| *stretch* |
`style?` | CSS.Properties |

**Returns:** *Element*

Defined in: [AutoPlacingGrid/AutoPlacingGrid.tsx:5](https://github.com/mbecker20/kbinUI/blob/8d45585/src/AutoPlacingGrid/AutoPlacingGrid.tsx#L5)

___

### Button

▸ **Button**(`__namedParameters`: { `buttonRef?`: *RefObject*<HTMLDivElement\> ; `children?`: React.ReactNode ; `className?`: *string* ; `fontSize?`: *string* ; `isRed?`: *boolean* ; `margin?`: *string* ; `notClickable?`: *boolean* ; `onClick?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `onContextMenu?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `onDoubleClick?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `onKeyDown?`: (`e`: *KeyboardEvent*<HTMLDivElement\>) => *void* ; `onPointerDown?`: (`e`: *React.PointerEvent*<HTMLDivElement\>) => *void* ; `onPointerEnter?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `onPointerLeave?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `padding?`: *string* ; `style?`: CSS.Properties  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`buttonRef?` | *RefObject*<HTMLDivElement\> |
`children?` | React.ReactNode |
`className?` | *string* |
`fontSize?` | *string* |
`isRed?` | *boolean* |
`margin?` | *string* |
`notClickable?` | *boolean* |
`onClick?` | (`e`: *MouseEvent*<HTMLDivElement\>) => *void* |
`onContextMenu?` | (`e`: *MouseEvent*<HTMLDivElement\>) => *void* |
`onDoubleClick?` | (`e`: *MouseEvent*<HTMLDivElement\>) => *void* |
`onKeyDown?` | (`e`: *KeyboardEvent*<HTMLDivElement\>) => *void* |
`onPointerDown?` | (`e`: *React.PointerEvent*<HTMLDivElement\>) => *void* |
`onPointerEnter?` | (`e`: *MouseEvent*<HTMLDivElement\>) => *void* |
`onPointerLeave?` | (`e`: *MouseEvent*<HTMLDivElement\>) => *void* |
`padding?` | *string* |
`style?` | CSS.Properties |

**Returns:** *Element*

Defined in: [Button/Button.tsx:6](https://github.com/mbecker20/kbinUI/blob/8d45585/src/Button/Button.tsx#L6)

___

### CenterMenu

▸ **CenterMenu**(`__namedParameters`: { `bounderStyle?`: CSS.Properties ; `children`: React.ReactNode ; `className?`: *string* ; `cmControlData`: CenterMenuControlData ; `header?`: *string* ; `headerClassName?`: *string* ; `headerStyle?`: CSS.Properties ; `onClose`: () => *void* ; `style?`: CSS.Properties  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`bounderStyle?` | CSS.Properties |
`children` | React.ReactNode |
`className?` | *string* |
`cmControlData` | CenterMenuControlData |
`header?` | *string* |
`headerClassName?` | *string* |
`headerStyle?` | CSS.Properties |
`onClose` | () => *void* |
`style?` | CSS.Properties |

**Returns:** *Element*

Defined in: [CenterMenu/CenterMenu.tsx:11](https://github.com/mbecker20/kbinUI/blob/8d45585/src/CenterMenu/CenterMenu.tsx#L11)

___

### CheckBox

▸ **CheckBox**(`__namedParameters`: { `onChecked?`: () => *void* ; `onUnChecked?`: () => *void* ; `style?`: CSS.Properties  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`onChecked?` | () => *void* |
`onUnChecked?` | () => *void* |
`style?` | CSS.Properties |

**Returns:** *Element*

Defined in: [CheckBox/CheckBox.tsx:5](https://github.com/mbecker20/kbinUI/blob/8d45585/src/CheckBox/CheckBox.tsx#L5)

___

### Conditional

▸ **Conditional**(`__namedParameters`: { `children`: ReactNode ; `showIf`: *boolean*  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | ReactNode |
`showIf` | *boolean* |

**Returns:** *Element*

Defined in: [Conditional.tsx:3](https://github.com/mbecker20/kbinUI/blob/8d45585/src/Conditional.tsx#L3)

___

### ContextMenu

▸ **ContextMenu**(`__namedParameters`: { `bounderStyle?`: CSS.Properties ; `children`: ReactNode ; `event`: *React.MouseEvent*<HTMLDivElement\> \| MouseEvent ; `isOpen`: *boolean* ; `onClose`: () => *void* ; `style?`: CSS.Properties  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`bounderStyle?` | CSS.Properties |
`children` | ReactNode |
`event` | *React.MouseEvent*<HTMLDivElement\> \| MouseEvent |
`isOpen` | *boolean* |
`onClose` | () => *void* |
`style?` | CSS.Properties |

**Returns:** *Element*

Defined in: [ContextMenu/ContextMenu.tsx:7](https://github.com/mbecker20/kbinUI/blob/8d45585/src/ContextMenu/ContextMenu.tsx#L7)

___

### ContextMenuExtension

▸ **ContextMenuExtension**(`__namedParameters`: { `buttonStyle?`: CSS.Properties ; `children`: ReactNode ; `fontSize?`: *string* ; `text`: *string*  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`buttonStyle?` | CSS.Properties |
`children` | ReactNode |
`fontSize?` | *string* |
`text` | *string* |

**Returns:** *Element*

Defined in: [ContextMenuExtension/ExtensionMenu.tsx:10](https://github.com/mbecker20/kbinUI/blob/8d45585/src/ContextMenuExtension/ExtensionMenu.tsx#L10)

___

### DualButtons

▸ **DualButtons**(`__namedParameters`: { `leftText`: *string* ; `onLeft?`: () => *void* ; `onRight?`: () => *void* ; `rightText`: *string* ; `startRight?`: *boolean*  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`leftText` | *string* |
`onLeft?` | () => *void* |
`onRight?` | () => *void* |
`rightText` | *string* |
`startRight?` | *boolean* |

**Returns:** *Element*

Defined in: [DualButtons/DualButtons.tsx:4](https://github.com/mbecker20/kbinUI/blob/8d45585/src/DualButtons/DualButtons.tsx#L4)

___

### FlexCol

▸ `Const`**FlexCol**(`__namedParameters`: { `alignItems?`: *string* ; `backgroundColor?`: *string* ; `children?`: React.ReactNode ; `className?`: *string* ; `height?`: *string* ; `justifyContent?`: *string* ; `margin?`: *string* ; `onClick?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `onContextMenu?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `onDragOver?`: (`e`: *DragEvent*<HTMLDivElement\>) => *void* ; `onDrop?`: (`e`: *DragEvent*<HTMLDivElement\>) => *void* ; `onPointerEnter?`: (`e`: *PointerEvent*<HTMLDivElement\>) => *void* ; `onPointerLeave?`: (`e`: *PointerEvent*<HTMLDivElement\>) => *void* ; `onWheel?`: (`e`: *WheelEvent*<HTMLDivElement\>) => *void* ; `padding?`: *string* ; `pointer?`: *boolean* ; `ref?`: *RefObject*<HTMLDivElement\> ; `style?`: CSS.Properties ; `width?`: *string*  }, `ref`: *ForwardedRef*<HTMLDivElement\>): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`alignItems?` | *string* |
`backgroundColor?` | *string* |
`children?` | React.ReactNode |
`className?` | *string* |
`height?` | *string* |
`justifyContent?` | *string* |
`margin?` | *string* |
`onClick?` | (`e`: *MouseEvent*<HTMLDivElement\>) => *void* |
`onContextMenu?` | (`e`: *MouseEvent*<HTMLDivElement\>) => *void* |
`onDragOver?` | (`e`: *DragEvent*<HTMLDivElement\>) => *void* |
`onDrop?` | (`e`: *DragEvent*<HTMLDivElement\>) => *void* |
`onPointerEnter?` | (`e`: *PointerEvent*<HTMLDivElement\>) => *void* |
`onPointerLeave?` | (`e`: *PointerEvent*<HTMLDivElement\>) => *void* |
`onWheel?` | (`e`: *WheelEvent*<HTMLDivElement\>) => *void* |
`padding?` | *string* |
`pointer?` | *boolean* |
`ref?` | *RefObject*<HTMLDivElement\> |
`style?` | CSS.Properties |
`width?` | *string* |

• **ref**: *ForwardedRef*<HTMLDivElement\>

**Returns:** *Element*

Defined in: [Flex/FlexCol.tsx:56](https://github.com/mbecker20/kbinUI/blob/8d45585/src/Flex/FlexCol.tsx#L56)

___

### FlexRow

▸ `Const`**FlexRow**(`__namedParameters`: { `alignItems?`: *string* ; `backgroundColor?`: *string* ; `children?`: React.ReactNode ; `className?`: *string* ; `flexWrap?`: *wrap* \| *nowrap* \| *wrap-reverse* ; `height?`: *string* ; `justifyContent?`: *string* ; `margin?`: *string* ; `onClick?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `onContextMenu?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `onPointerEnter?`: (`e`: *PointerEvent*<HTMLDivElement\>) => *void* ; `onPointerLeave?`: (`e`: *PointerEvent*<HTMLDivElement\>) => *void* ; `onWheel?`: (`e`: *WheelEvent*<HTMLDivElement\>) => *void* ; `padding?`: *string* ; `pointer?`: *boolean* ; `ref?`: *RefObject*<HTMLDivElement\> ; `style?`: CSS.Properties ; `width?`: *string*  }, `ref`: *ForwardedRef*<HTMLDivElement\>): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`alignItems?` | *string* |
`backgroundColor?` | *string* |
`children?` | React.ReactNode |
`className?` | *string* |
`flexWrap?` | *wrap* \| *nowrap* \| *wrap-reverse* |
`height?` | *string* |
`justifyContent?` | *string* |
`margin?` | *string* |
`onClick?` | (`e`: *MouseEvent*<HTMLDivElement\>) => *void* |
`onContextMenu?` | (`e`: *MouseEvent*<HTMLDivElement\>) => *void* |
`onPointerEnter?` | (`e`: *PointerEvent*<HTMLDivElement\>) => *void* |
`onPointerLeave?` | (`e`: *PointerEvent*<HTMLDivElement\>) => *void* |
`onWheel?` | (`e`: *WheelEvent*<HTMLDivElement\>) => *void* |
`padding?` | *string* |
`pointer?` | *boolean* |
`ref?` | *RefObject*<HTMLDivElement\> |
`style?` | CSS.Properties |
`width?` | *string* |

• **ref**: *ForwardedRef*<HTMLDivElement\>

**Returns:** *Element*

Defined in: [Flex/FlexRow.tsx:52](https://github.com/mbecker20/kbinUI/blob/8d45585/src/Flex/FlexRow.tsx#L52)

___

### HorizontalButtonScroller

▸ **HorizontalButtonScroller**(`__namedParameters`: { `buttonClassName?`: *string* ; `buttonStyle?`: CSS.Properties ; `children`: ReactNode ; `className?`: *string* ; `onLeft`: () => *void* ; `onRight`: () => *void* ; `onWheel?`: (`e`: *WheelEvent*<HTMLDivElement\>) => *void* ; `style?`: CSS.Properties ; `useOnWheel?`: *boolean*  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`buttonClassName?` | *string* |
`buttonStyle?` | CSS.Properties |
`children` | ReactNode |
`className?` | *string* |
`onLeft` | () => *void* |
`onRight` | () => *void* |
`onWheel?` | (`e`: *WheelEvent*<HTMLDivElement\>) => *void* |
`style?` | CSS.Properties |
`useOnWheel?` | *boolean* |

**Returns:** *Element*

Defined in: [HorizontalButtonScroller.tsx:10](https://github.com/mbecker20/kbinUI/blob/8d45585/src/HorizontalButtonScroller.tsx#L10)

___

### HorizontalScroller

▸ **HorizontalScroller**(`__namedParameters`: { `alignItems?`: *string* ; `children`: ReactNode ; `className?`: *string* ; `height?`: *string* ; `style?`: CSS.Properties ; `width?`: *string*  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`alignItems?` | *string* |
`children` | ReactNode |
`className?` | *string* |
`height?` | *string* |
`style?` | CSS.Properties |
`width?` | *string* |

**Returns:** *Element*

Defined in: [HorizontalScroller/HorizontalScroller.tsx:13](https://github.com/mbecker20/kbinUI/blob/8d45585/src/HorizontalScroller/HorizontalScroller.tsx#L13)

___

### IfElse

▸ **IfElse**(`__namedParameters`: { `show`: ReactNode ; `showElse`: ReactNode ; `showIf`: *boolean*  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`show` | ReactNode |
`showElse` | ReactNode |
`showIf` | *boolean* |

**Returns:** *Element*

Defined in: [IfElse.tsx:3](https://github.com/mbecker20/kbinUI/blob/8d45585/src/IfElse.tsx#L3)

___

### LabelledItems

▸ **LabelledItems**(`__namedParameters`: { `children`: ReactNode ; `itemsStyle?`: CSS.Properties ; `label`: ReactNode ; `labelSize?`: *string* ; `labelStyle?`: CSS.Properties ; `style?`: CSS.Properties  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | ReactNode |
`itemsStyle?` | CSS.Properties |
`label` | ReactNode |
`labelSize?` | *string* |
`labelStyle?` | CSS.Properties |
`style?` | CSS.Properties |

**Returns:** *Element*

Defined in: [LabelledItems/LabelledItems.tsx:9](https://github.com/mbecker20/kbinUI/blob/8d45585/src/LabelledItems/LabelledItems.tsx#L9)

___

### LabelledMultiText

▸ **LabelledMultiText**(`__namedParameters`: { `label`: *string* ; `labelSize?`: *string* ; `labelStyle?`: CSS.Properties ; `style?`: CSS.Properties ; `text`: *string*[] ; `textSize?`: *string* ; `textStyle?`: CSS.Properties  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`label` | *string* |
`labelSize?` | *string* |
`labelStyle?` | CSS.Properties |
`style?` | CSS.Properties |
`text` | *string*[] |
`textSize?` | *string* |
`textStyle?` | CSS.Properties |

**Returns:** *Element*

Defined in: [LabelledText/LabelledMultiText.tsx:8](https://github.com/mbecker20/kbinUI/blob/8d45585/src/LabelledText/LabelledMultiText.tsx#L8)

___

### LabelledText

▸ **LabelledText**(`__namedParameters`: { `label`: *string* ; `labelSize?`: *string* ; `labelStyle?`: CSS.Properties ; `style?`: CSS.Properties ; `text`: *string* ; `textSize?`: *string* ; `textStyle?`: CSS.Properties  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`label` | *string* |
`labelSize?` | *string* |
`labelStyle?` | CSS.Properties |
`style?` | CSS.Properties |
`text` | *string* |
`textSize?` | *string* |
`textStyle?` | CSS.Properties |

**Returns:** *Element*

Defined in: [LabelledText/LabelledText.tsx:8](https://github.com/mbecker20/kbinUI/blob/8d45585/src/LabelledText/LabelledText.tsx#L8)

___

### Map

▸ **Map**<T\>(`__namedParameters`: { `array`: T[] ; `map`: (`val`: T, `index`: *number*) => ReactNode  }): *Element*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`array` | T[] |
`map` | (`val`: T, `index`: *number*) => ReactNode |

**Returns:** *Element*

Defined in: [Map.tsx:3](https://github.com/mbecker20/kbinUI/blob/8d45585/src/Map.tsx#L3)

___

### NavBar

▸ **NavBar**(`__namedParameters`: { `initOpen?`: *boolean* ; `localStorage?`: *boolean* ; `menuIconSrc`: *string* ; `onRouteClick`: (`route`: *string*) => *void* ; `onTitleClick?`: () => *void* ; `routes`: { [route: string]: *string*;  } ; `storageKey?`: *string* ; `titleIconHeight?`: *string* ; `titleIconSrc`: *string* ; `titleIconStyle?`: CSS.Properties ; `titleIconWidth?`: *string*  }): *Element*

routes is an object with keys set as the routes and entries as urls to the image src for the route icon
also needs the app logo src url and menu icon src url

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`initOpen?` | *boolean* |
`localStorage?` | *boolean* |
`menuIconSrc` | *string* |
`onRouteClick` | (`route`: *string*) => *void* |
`onTitleClick?` | () => *void* |
`routes` | { [route: string]: *string*;  } |
`storageKey?` | *string* |
`titleIconHeight?` | *string* |
`titleIconSrc` | *string* |
`titleIconStyle?` | CSS.Properties |
`titleIconWidth?` | *string* |

**Returns:** *Element*

Defined in: [NavBar/NavBar.tsx:16](https://github.com/mbecker20/kbinUI/blob/8d45585/src/NavBar/NavBar.tsx#L16)

___

### NavBarItem

▸ **NavBarItem**(`__namedParameters`: { `iconHeight?`: *string* ; `iconSRC`: *string* ; `iconSize?`: *string* ; `iconWidth?`: *string* ; `onClick?`: () => *void* ; `open`: *boolean* ; `selected?`: *boolean* ; `text`: *string* ; `textSize?`: *string*  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`iconHeight?` | *string* |
`iconSRC` | *string* |
`iconSize?` | *string* |
`iconWidth?` | *string* |
`onClick?` | () => *void* |
`open` | *boolean* |
`selected?` | *boolean* |
`text` | *string* |
`textSize?` | *string* |

**Returns:** *Element*

Defined in: [NavBar/NavBarItem.tsx:6](https://github.com/mbecker20/kbinUI/blob/8d45585/src/NavBar/NavBarItem.tsx#L6)

___

### Notification

▸ **Notification**(`__namedParameters`: { `xLocation?`: *left* \| *center* \| *right* ; `yLocation?`: *top* \| *center* \| *bottom*  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`xLocation?` | *left* \| *center* \| *right* |
`yLocation?` | *top* \| *center* \| *bottom* |

**Returns:** *Element*

Defined in: [Notification/Notification.tsx:16](https://github.com/mbecker20/kbinUI/blob/8d45585/src/Notification/Notification.tsx#L16)

___

### SVGIcon

▸ **SVGIcon**(`__namedParameters`: { `alt`: *string* ; `className?`: *string* ; `height?`: *string* ; `imageRef?`: *RefObject*<HTMLImageElement\> ; `margin?`: *string* ; `onClick?`: (`e`: *MouseEvent*<HTMLImageElement\>) => *void* ; `onPointerDown?`: (`e`: *PointerEvent*<HTMLImageElement\>) => *void* ; `padding?`: *string* ; `pointer?`: *boolean* ; `scale?`: *number* ; `size?`: *string* ; `src`: *string* ; `style?`: CSS.Properties ; `width?`: *string*  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`alt` | *string* |
`className?` | *string* |
`height?` | *string* |
`imageRef?` | *RefObject*<HTMLImageElement\> |
`margin?` | *string* |
`onClick?` | (`e`: *MouseEvent*<HTMLImageElement\>) => *void* |
`onPointerDown?` | (`e`: *PointerEvent*<HTMLImageElement\>) => *void* |
`padding?` | *string* |
`pointer?` | *boolean* |
`scale?` | *number* |
`size?` | *string* |
`src` | *string* |
`style?` | CSS.Properties |
`width?` | *string* |

**Returns:** *Element*

Defined in: [SVGIcon/SVGIcon.tsx:5](https://github.com/mbecker20/kbinUI/blob/8d45585/src/SVGIcon/SVGIcon.tsx#L5)

___

### Switch

▸ **Switch**(`__namedParameters`: { `fontSize?`: *string* ; `initState`: *boolean* ; `onSwitch`: (`newState`: *boolean*) => *void* ; `style?`: *object* ; `text`: *string*  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`fontSize?` | *string* |
`initState` | *boolean* |
`onSwitch` | (`newState`: *boolean*) => *void* |
`style?` | *object* |
`text` | *string* |

**Returns:** *Element*

Defined in: [Switch/Switch.tsx:19](https://github.com/mbecker20/kbinUI/blob/8d45585/src/Switch/Switch.tsx#L19)

___

### Text

▸ `Const`**Text**(`__namedParameters`: { `className?`: *string* ; `color?`: *string* ; `fontSize?`: *string* ; `margin?`: *string* ; `onClick?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `padding?`: *string* ; `pointer?`: *boolean* ; `ref?`: *RefObject*<HTMLDivElement\> ; `style?`: CSS.Properties ; `text`: *string* ; `textAlign?`: *string* ; `textCursor?`: *boolean* ; `underline?`: *boolean* ; `wrap?`: *boolean*  }, `ref`: *ForwardedRef*<HTMLDivElement\>): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`className?` | *string* |
`color?` | *string* |
`fontSize?` | *string* |
`margin?` | *string* |
`onClick?` | (`e`: *MouseEvent*<HTMLDivElement\>) => *void* |
`padding?` | *string* |
`pointer?` | *boolean* |
`ref?` | *RefObject*<HTMLDivElement\> |
`style?` | CSS.Properties |
`text` | *string* |
`textAlign?` | *string* |
`textCursor?` | *boolean* |
`underline?` | *boolean* |
`wrap?` | *boolean* |

• **ref**: *ForwardedRef*<HTMLDivElement\>

**Returns:** *Element*

Defined in: [Text/Text.tsx:40](https://github.com/mbecker20/kbinUI/blob/8d45585/src/Text/Text.tsx#L40)

___

### TextArea

▸ **TextArea**(`__namedParameters`: { `autoFocus?`: *boolean* ; `bounderClassName?`: *string* ; `defaultValue?`: *string* ; `fontSize?`: *string* ; `inputClassName?`: *string* ; `label?`: *string* ; `labelFontSize?`: *string* ; `labelStyle?`: CSS.Properties ; `layout?`: *row* \| *column* ; `onBlur?`: (`e`: *FocusEvent*<HTMLTextAreaElement\>) => *void* ; `onChange?`: (`e`: *ChangeEvent*<HTMLTextAreaElement\>) => *void* ; `onEnter?`: () => *void* ; `onEscape?`: () => *void* ; `onFocus?`: (`e`: *FocusEvent*<HTMLTextAreaElement\>) => *void* ; `onKeyDown?`: (`e`: *KeyboardEvent*<HTMLTextAreaElement\>) => *void* ; `placeholder?`: *string* ; `style?`: CSS.Properties ; `textAreaRef?`: *RefObject*<HTMLTextAreaElement\> ; `value?`: *string*  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`autoFocus?` | *boolean* |
`bounderClassName?` | *string* |
`defaultValue?` | *string* |
`fontSize?` | *string* |
`inputClassName?` | *string* |
`label?` | *string* |
`labelFontSize?` | *string* |
`labelStyle?` | CSS.Properties |
`layout?` | *row* \| *column* |
`onBlur?` | (`e`: *FocusEvent*<HTMLTextAreaElement\>) => *void* |
`onChange?` | (`e`: *ChangeEvent*<HTMLTextAreaElement\>) => *void* |
`onEnter?` | () => *void* |
`onEscape?` | () => *void* |
`onFocus?` | (`e`: *FocusEvent*<HTMLTextAreaElement\>) => *void* |
`onKeyDown?` | (`e`: *KeyboardEvent*<HTMLTextAreaElement\>) => *void* |
`placeholder?` | *string* |
`style?` | CSS.Properties |
`textAreaRef?` | *RefObject*<HTMLTextAreaElement\> |
`value?` | *string* |

**Returns:** *Element*

Defined in: [TextArea/TextArea.tsx:11](https://github.com/mbecker20/kbinUI/blob/8d45585/src/TextArea/TextArea.tsx#L11)

___

### TextAreaOnly

▸ **TextAreaOnly**(`__namedParameters`: { `autoFocus?`: *boolean* ; `className?`: *string* ; `defaultValue?`: *string* ; `fontSize?`: *string* ; `onBlur?`: (`e`: *FocusEvent*<HTMLTextAreaElement\>) => *void* ; `onChange?`: (`e`: *ChangeEvent*<HTMLTextAreaElement\>) => *void* ; `onEnter?`: () => *void* ; `onEscape?`: () => *void* ; `onFocus?`: (`e`: *FocusEvent*<HTMLTextAreaElement\>) => *void* ; `onKeyDown?`: (`e`: *KeyboardEvent*<HTMLTextAreaElement\>) => *void* ; `placeholder?`: *string* ; `style?`: CSS.Properties ; `textAreaRef?`: *RefObject*<HTMLTextAreaElement\> ; `value?`: *string*  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`autoFocus?` | *boolean* |
`className?` | *string* |
`defaultValue?` | *string* |
`fontSize?` | *string* |
`onBlur?` | (`e`: *FocusEvent*<HTMLTextAreaElement\>) => *void* |
`onChange?` | (`e`: *ChangeEvent*<HTMLTextAreaElement\>) => *void* |
`onEnter?` | () => *void* |
`onEscape?` | () => *void* |
`onFocus?` | (`e`: *FocusEvent*<HTMLTextAreaElement\>) => *void* |
`onKeyDown?` | (`e`: *KeyboardEvent*<HTMLTextAreaElement\>) => *void* |
`placeholder?` | *string* |
`style?` | CSS.Properties |
`textAreaRef?` | *RefObject*<HTMLTextAreaElement\> |
`value?` | *string* |

**Returns:** *Element*

Defined in: [TextArea/TextAreaOnly.tsx:5](https://github.com/mbecker20/kbinUI/blob/8d45585/src/TextArea/TextAreaOnly.tsx#L5)

___

### TextInput

▸ **TextInput**(`__namedParameters`: { `autoFocus?`: *boolean* ; `bounderClassName?`: *string* ; `defaultValue?`: *string* ; `fontSize?`: *string* ; `inputClassName?`: *string* ; `inputRef?`: *RefObject*<HTMLInputElement\> ; `label?`: *string* ; `labelFontSize?`: *string* ; `labelStyle?`: CSS.Properties ; `layout?`: *row* \| *column* ; `onBlur?`: (`e`: *FocusEvent*<HTMLInputElement\>) => *void* ; `onChange?`: (`e`: *ChangeEvent*<HTMLInputElement\>) => *void* ; `onEnter?`: () => *void* ; `onEscape?`: () => *void* ; `onFocus?`: (`e`: *FocusEvent*<HTMLInputElement\>) => *void* ; `onKeyDown?`: (`e`: *KeyboardEvent*<HTMLInputElement\>) => *void* ; `password?`: *boolean* ; `placeholder?`: *string* ; `style?`: CSS.Properties ; `value?`: *string*  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`autoFocus?` | *boolean* |
`bounderClassName?` | *string* |
`defaultValue?` | *string* |
`fontSize?` | *string* |
`inputClassName?` | *string* |
`inputRef?` | *RefObject*<HTMLInputElement\> |
`label?` | *string* |
`labelFontSize?` | *string* |
`labelStyle?` | CSS.Properties |
`layout?` | *row* \| *column* |
`onBlur?` | (`e`: *FocusEvent*<HTMLInputElement\>) => *void* |
`onChange?` | (`e`: *ChangeEvent*<HTMLInputElement\>) => *void* |
`onEnter?` | () => *void* |
`onEscape?` | () => *void* |
`onFocus?` | (`e`: *FocusEvent*<HTMLInputElement\>) => *void* |
`onKeyDown?` | (`e`: *KeyboardEvent*<HTMLInputElement\>) => *void* |
`password?` | *boolean* |
`placeholder?` | *string* |
`style?` | CSS.Properties |
`value?` | *string* |

**Returns:** *Element*

Defined in: [TextInput/TextInput.tsx:11](https://github.com/mbecker20/kbinUI/blob/8d45585/src/TextInput/TextInput.tsx#L11)

___

### TextInputOnly

▸ **TextInputOnly**(`__namedParameters`: { `autoFocus?`: *boolean* ; `className?`: *string* ; `defaultValue?`: *string* ; `fontSize?`: *string* ; `inputRef?`: *RefObject*<HTMLInputElement\> ; `onBlur?`: (`e`: *FocusEvent*<HTMLInputElement\>) => *void* ; `onChange?`: (`e`: *ChangeEvent*<HTMLInputElement\>) => *void* ; `onEnter?`: () => *void* ; `onEscape?`: () => *void* ; `onFocus?`: (`e`: *FocusEvent*<HTMLInputElement\>) => *void* ; `onKeyDown?`: (`e`: *KeyboardEvent*<HTMLInputElement\>) => *void* ; `password?`: *boolean* ; `placeholder?`: *string* ; `style?`: CSS.Properties ; `value?`: *string*  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`autoFocus?` | *boolean* |
`className?` | *string* |
`defaultValue?` | *string* |
`fontSize?` | *string* |
`inputRef?` | *RefObject*<HTMLInputElement\> |
`onBlur?` | (`e`: *FocusEvent*<HTMLInputElement\>) => *void* |
`onChange?` | (`e`: *ChangeEvent*<HTMLInputElement\>) => *void* |
`onEnter?` | () => *void* |
`onEscape?` | () => *void* |
`onFocus?` | (`e`: *FocusEvent*<HTMLInputElement\>) => *void* |
`onKeyDown?` | (`e`: *KeyboardEvent*<HTMLInputElement\>) => *void* |
`password?` | *boolean* |
`placeholder?` | *string* |
`style?` | CSS.Properties |
`value?` | *string* |

**Returns:** *Element*

Defined in: [TextInput/TextInputOnly.tsx:5](https://github.com/mbecker20/kbinUI/blob/8d45585/src/TextInput/TextInputOnly.tsx#L5)

___

### UncontrolledCheckBox

▸ **UncontrolledCheckBox**(`__namedParameters`: { `checked`: *boolean* ; `className?`: *string* ; `onClick?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `style?`: CSS.Properties  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`checked` | *boolean* |
`className?` | *string* |
`onClick?` | (`e`: *MouseEvent*<HTMLDivElement\>) => *void* |
`style?` | CSS.Properties |

**Returns:** *Element*

Defined in: [CheckBox/UncontrolledCheckBox.tsx:7](https://github.com/mbecker20/kbinUI/blob/8d45585/src/CheckBox/UncontrolledCheckBox.tsx#L7)

___

### UncontrolledDualButtons

▸ **UncontrolledDualButtons**(`__namedParameters`: { `isRight`: *boolean* ; `leftText`: *string* ; `onLeft`: () => *void* ; `onRight`: () => *void* ; `rightText`: *string* ; `style?`: CSS.Properties  }): *Element*

#### Parameters:

• **__namedParameters**: *object*

Name | Type |
------ | ------ |
`isRight` | *boolean* |
`leftText` | *string* |
`onLeft` | () => *void* |
`onRight` | () => *void* |
`rightText` | *string* |
`style?` | CSS.Properties |

**Returns:** *Element*

Defined in: [DualButtons/UncontrolledDualButtons.tsx:9](https://github.com/mbecker20/kbinUI/blob/8d45585/src/DualButtons/UncontrolledDualButtons.tsx#L9)

___

### createMenuManager

▸ **createMenuManager**(): *object*

**Returns:** *object*

Name | Type |
------ | ------ |
`mmAddMenu` | (`name`: *string*, `openMenu`: OpenMenu) => *void* |
`mmCloseMenu` | () => *void* |
`mmOpenMenu` | (`name`: *string*, `save`: *boolean*, ...`args`: *any*) => *void* |
`mmQueueMenu` | (`name`: *string*, ...`args`: *any*) => *void* |
`useCenterMenu` | (`name`: *string*, `onOpen?`: OpenMenu, `save`: *boolean*, `onClose?`: () => *void*) => { `closeMenu`: () => *void* ; `cmControlData`: *boolean* ; `softClose`: () => *void*  } |

Defined in: [menuManager/menuManager.ts:4](https://github.com/mbecker20/kbinUI/blob/8d45585/src/menuManager/menuManager.ts#L4)

___

### setCustomColors

▸ **setCustomColors**(`customColors`: *Partial*<*typeof* [*colors*](README.md#colors)\>): *void*

#### Parameters:

Name | Type |
------ | ------ |
`customColors` | *Partial*<*typeof* [*colors*](README.md#colors)\> |

**Returns:** *void*

Defined in: [theme.ts:36](https://github.com/mbecker20/kbinUI/blob/8d45585/src/theme.ts#L36)

___

### setCustomScrollbarJSS

▸ **setCustomScrollbarJSS**(`customJSS`: CustomScrollbarJSS): *void*

#### Parameters:

Name | Type |
------ | ------ |
`customJSS` | CustomScrollbarJSS |

**Returns:** *void*

Defined in: [theme.ts:197](https://github.com/mbecker20/kbinUI/blob/8d45585/src/theme.ts#L197)

___

### setCustomSizes

▸ **setCustomSizes**(`customSizes`: CustomSizes): *void*

#### Parameters:

Name | Type |
------ | ------ |
`customSizes` | CustomSizes |

**Returns:** *void*

Defined in: [theme.ts:79](https://github.com/mbecker20/kbinUI/blob/8d45585/src/theme.ts#L79)

___

### setCustomSpringConfig

▸ **setCustomSpringConfig**(`customSpringConfig`: CustomSpringConfig): *void*

#### Parameters:

Name | Type |
------ | ------ |
`customSpringConfig` | CustomSpringConfig |

**Returns:** *void*

Defined in: [theme.ts:134](https://github.com/mbecker20/kbinUI/blob/8d45585/src/theme.ts#L134)

___

### setCustomZIndices

▸ **setCustomZIndices**(`customZIndices`: *Partial*<*typeof* [*zIndex*](README.md#zindex)\>): *void*

#### Parameters:

Name | Type |
------ | ------ |
`customZIndices` | *Partial*<*typeof* [*zIndex*](README.md#zindex)\> |

**Returns:** *void*

Defined in: [theme.ts:106](https://github.com/mbecker20/kbinUI/blob/8d45585/src/theme.ts#L106)

___

### useContextMenu

▸ **useContextMenu**<Data\>(`idata`: Data): *Return*<Data\>

#### Type parameters:

Name |
------ |
`Data` |

#### Parameters:

Name | Type |
------ | ------ |
`idata` | Data |

**Returns:** *Return*<Data\>

Defined in: [hooks.ts:41](https://github.com/mbecker20/kbinUI/blob/8d45585/src/hooks.ts#L41)

___

### useDisableBodyScroll

▸ **useDisableBodyScroll**(): *void*

**Returns:** *void*

Defined in: [hooks.ts:21](https://github.com/mbecker20/kbinUI/blob/8d45585/src/hooks.ts#L21)

___

### useEscapeToClose

▸ **useEscapeToClose**(`closeMenu`: () => *void*, `dependencies?`: *any*[]): *void*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`closeMenu` | () => *void* | - |
`dependencies` | *any*[] | ... |

**Returns:** *void*

Defined in: [hooks.ts:13](https://github.com/mbecker20/kbinUI/blob/8d45585/src/hooks.ts#L13)

___

### useListener

▸ **useListener**<Event\>(`listenerID`: *string*, `listener`: (`e`: Event) => *void*, `dependencies?`: *any*[]): *void*

#### Type parameters:

Name |
------ |
`Event` |

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`listenerID` | *string* | - |
`listener` | (`e`: Event) => *void* | - |
`dependencies` | *any*[] | ... |

**Returns:** *void*

Defined in: [hooks.ts:4](https://github.com/mbecker20/kbinUI/blob/8d45585/src/hooks.ts#L4)

___

### useLocalStorage

▸ **useLocalStorage**<T\>(`defaultStore`: T, `key`: *string*): [T, (`arg`: T) => *void*]

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`defaultStore` | T |
`key` | *string* |

**Returns:** [T, (`arg`: T) => *void*]

Defined in: [hooks.ts:77](https://github.com/mbecker20/kbinUI/blob/8d45585/src/hooks.ts#L77)

___

### useScrollbarJSS

▸ `Const`**useScrollbarJSS**(`data?`: *unknown*): *Record*<*Scroller*, *string*\>

#### Parameters:

Name | Type |
------ | ------ |
`data?` | *unknown* |

**Returns:** *Record*<*Scroller*, *string*\>

Defined in: [theme.ts:209](https://github.com/mbecker20/kbinUI/blob/8d45585/src/theme.ts#L209)
