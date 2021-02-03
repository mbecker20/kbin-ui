kbin-ui / [Exports](modules.md)

# kbin-ui

## Table of contents

### Variables

- [colors](modules.md#colors)
- [scrollbarJSS](modules.md#scrollbarjss)
- [sizes](modules.md#sizes)
- [springConfig](modules.md#springconfig)
- [zIndex](modules.md#zindex)

### Functions

- [AnimatedFlexCol](modules.md#animatedflexcol)
- [AnimatedFlexRow](modules.md#animatedflexrow)
- [AnimatedText](modules.md#animatedtext)
- [AutoPlacingGrid](modules.md#autoplacinggrid)
- [Button](modules.md#button)
- [CenterMenu](modules.md#centermenu)
- [CheckBox](modules.md#checkbox)
- [Conditional](modules.md#conditional)
- [ContextMenu](modules.md#contextmenu)
- [ContextMenuExtension](modules.md#contextmenuextension)
- [DualButtons](modules.md#dualbuttons)
- [FlexCol](modules.md#flexcol)
- [FlexRow](modules.md#flexrow)
- [HorizontalButtonScroller](modules.md#horizontalbuttonscroller)
- [HorizontalScroller](modules.md#horizontalscroller)
- [IfElse](modules.md#ifelse)
- [LabelledItems](modules.md#labelleditems)
- [LabelledMultiText](modules.md#labelledmultitext)
- [LabelledText](modules.md#labelledtext)
- [Map](modules.md#map)
- [Notification](modules.md#notification)
- [SVGIcon](modules.md#svgicon)
- [Switch](modules.md#switch)
- [Text](modules.md#text)
- [TextArea](modules.md#textarea)
- [TextAreaOnly](modules.md#textareaonly)
- [TextInput](modules.md#textinput)
- [TextInputOnly](modules.md#textinputonly)
- [UncontrolledCheckBox](modules.md#uncontrolledcheckbox)
- [UncontrolledDualButtons](modules.md#uncontrolleddualbuttons)
- [createMenuManager](modules.md#createmenumanager)
- [setCustomColors](modules.md#setcustomcolors)
- [setCustomScrollbarJSS](modules.md#setcustomscrollbarjss)
- [setCustomSizes](modules.md#setcustomsizes)
- [setCustomSpringConfig](modules.md#setcustomspringconfig)
- [setCustomZIndices](modules.md#setcustomzindices)
- [useContextMenu](modules.md#usecontextmenu)
- [useScrollbarJSS](modules.md#usescrollbarjss)

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
`text` | *string* |
`unfocussedInput` | *string* |
`unfocussedInputLabel` | *string* |

Defined in: [theme.ts:3](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/theme.ts#L3)

___

### scrollbarJSS

• `Const` **scrollbarJSS**: *object*

#### Type declaration:

Name | Type |
------ | ------ |
`none` | { `&::-webkit-scrollbar`: { `width`: *string* = '0px' } ; `&::-webkit-scrollbar-thumb`: { `background`: *string* = '#0a2154'; `borderRadius`: *string* = '1.5em' } ; `&::-webkit-scrollbar-track`: { `background`: *string* = '#2323246f' } ; `scrollbarColor`: *string* = '#0a2154'; `scrollbarWidth`: *string* = 'none' } |
`regular` | { `&::-webkit-scrollbar`: { `width`: *string* = '.8em' } ; `&::-webkit-scrollbar-thumb`: { `background`: *string* = '#0a2154'; `borderRadius`: *string* = '1.5em' } ; `&::-webkit-scrollbar-track`: { `background`: *string* = '#2323246f' } ; `scrollbarColor`: *string* = '#0a2154'; `scrollbarWidth`: *string* = 'auto' } |
`thin` | { `&::-webkit-scrollbar`: { `width`: *string* = '.5em' } ; `&::-webkit-scrollbar-thumb`: { `background`: *string* = '#0a2154'; `borderRadius`: *string* = '1.5em' } ; `&::-webkit-scrollbar-track`: { `background`: *string* = '#2323246f' } ; `scrollbarColor`: *string* = '#0a2154'; `scrollbarWidth`: *string* = 'thin' } |

Defined in: [theme.ts:142](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/theme.ts#L142)

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

Defined in: [theme.ts:36](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/theme.ts#L36)

___

### springConfig

• `Const` **springConfig**: *object*

#### Type declaration:

Name | Type |
------ | ------ |
`fast` | { `friction`: *number* = 30; `tension`: *number* = 370 } |
`medium` | { `friction`: *number* = 40; `tension`: *number* = 330; `velocity`: *number* = 5 } |
`xslow` | { `clamp`: *boolean* = true; `friction`: *number* = 20; `mass`: *number* = 50; `tension`: *number* = 100 } |

Defined in: [theme.ts:106](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/theme.ts#L106)

___

### zIndex

• `Const` **zIndex**: *object*

#### Type declaration:

Name | Type |
------ | ------ |
`centerMenu` | *number* |
`contextMenu` | *number* |
`notification` | *number* |

Defined in: [theme.ts:96](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/theme.ts#L96)

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

Defined in: [Flex/FlexCol.tsx:58](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/Flex/FlexCol.tsx#L58)

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

Defined in: [Flex/FlexRow.tsx:54](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/Flex/FlexRow.tsx#L54)

___

### AnimatedText

▸ `Const`**AnimatedText**(`__namedParameters`: { `className?`: *string* ; `color?`: *string* ; `fontSize?`: *string* ; `margin?`: *string* ; `onClick?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `padding?`: *string* ; `pointer?`: *boolean* ; `ref?`: *RefObject*<HTMLDivElement\> ; `style?`: CSS.Properties ; `text`: *string* ; `textAlign?`: *string* ; `textCursor?`: *boolean* ; `wrap?`: *boolean*  }, `ref`: *ForwardedRef*<HTMLDivElement\>): *Element*

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
`wrap?` | *boolean* |

• **ref**: *ForwardedRef*<HTMLDivElement\>

**Returns:** *Element*

Defined in: [Text/Text.tsx:40](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/Text/Text.tsx#L40)

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

Defined in: [AutoPlacingGrid/AutoPlacingGrid.tsx:5](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/AutoPlacingGrid/AutoPlacingGrid.tsx#L5)

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

Defined in: [Button/Button.tsx:6](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/Button/Button.tsx#L6)

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

Defined in: [CenterMenu/CenterMenu.tsx:11](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/CenterMenu/CenterMenu.tsx#L11)

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

Defined in: [CheckBox/CheckBox.tsx:5](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/CheckBox/CheckBox.tsx#L5)

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

Defined in: [Conditional.tsx:3](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/Conditional.tsx#L3)

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

Defined in: [ContextMenu/ContextMenu.tsx:7](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/ContextMenu/ContextMenu.tsx#L7)

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

Defined in: [ContextMenuExtension/ExtensionMenu.tsx:10](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/ContextMenuExtension/ExtensionMenu.tsx#L10)

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

Defined in: [DualButtons/DualButtons.tsx:4](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/DualButtons/DualButtons.tsx#L4)

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

Defined in: [Flex/FlexCol.tsx:56](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/Flex/FlexCol.tsx#L56)

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

Defined in: [Flex/FlexRow.tsx:52](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/Flex/FlexRow.tsx#L52)

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

Defined in: [HorizontalButtonScroller.tsx:10](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/HorizontalButtonScroller.tsx#L10)

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

Defined in: [HorizontalScroller/HorizontalScroller.tsx:13](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/HorizontalScroller/HorizontalScroller.tsx#L13)

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

Defined in: [IfElse.tsx:3](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/IfElse.tsx#L3)

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

Defined in: [LabelledItems/LabelledItems.tsx:9](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/LabelledItems/LabelledItems.tsx#L9)

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

Defined in: [LabelledText/LabelledMultiText.tsx:8](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/LabelledText/LabelledMultiText.tsx#L8)

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

Defined in: [LabelledText/LabelledText.tsx:8](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/LabelledText/LabelledText.tsx#L8)

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

Defined in: [Map.tsx:3](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/Map.tsx#L3)

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

Defined in: [Notification/Notification.tsx:16](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/Notification/Notification.tsx#L16)

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

Defined in: [SVGIcon/SVGIcon.tsx:5](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/SVGIcon/SVGIcon.tsx#L5)

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

Defined in: [Switch/Switch.tsx:19](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/Switch/Switch.tsx#L19)

___

### Text

▸ `Const`**Text**(`__namedParameters`: { `className?`: *string* ; `color?`: *string* ; `fontSize?`: *string* ; `margin?`: *string* ; `onClick?`: (`e`: *MouseEvent*<HTMLDivElement\>) => *void* ; `padding?`: *string* ; `pointer?`: *boolean* ; `ref?`: *RefObject*<HTMLDivElement\> ; `style?`: CSS.Properties ; `text`: *string* ; `textAlign?`: *string* ; `textCursor?`: *boolean* ; `wrap?`: *boolean*  }, `ref`: *ForwardedRef*<HTMLDivElement\>): *Element*

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
`wrap?` | *boolean* |

• **ref**: *ForwardedRef*<HTMLDivElement\>

**Returns:** *Element*

Defined in: [Text/Text.tsx:38](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/Text/Text.tsx#L38)

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

Defined in: [TextArea/TextArea.tsx:11](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/TextArea/TextArea.tsx#L11)

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

Defined in: [TextArea/TextAreaOnly.tsx:5](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/TextArea/TextAreaOnly.tsx#L5)

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

Defined in: [TextInput/TextInput.tsx:11](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/TextInput/TextInput.tsx#L11)

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

Defined in: [TextInput/TextInputOnly.tsx:5](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/TextInput/TextInputOnly.tsx#L5)

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

Defined in: [CheckBox/UncontrolledCheckBox.tsx:7](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/CheckBox/UncontrolledCheckBox.tsx#L7)

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

Defined in: [DualButtons/UncontrolledDualButtons.tsx:9](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/DualButtons/UncontrolledDualButtons.tsx#L9)

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

Defined in: [menuManager/menuManager.ts:4](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/menuManager/menuManager.ts#L4)

___

### setCustomColors

▸ **setCustomColors**(`customColors`: *Partial*<*typeof* [*colors*](modules.md#colors)\>): *void*

#### Parameters:

Name | Type |
------ | ------ |
`customColors` | *Partial*<*typeof* [*colors*](modules.md#colors)\> |

**Returns:** *void*

Defined in: [theme.ts:32](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/theme.ts#L32)

___

### setCustomScrollbarJSS

▸ **setCustomScrollbarJSS**(`customJSS`: CustomScrollbarJSS): *void*

#### Parameters:

Name | Type |
------ | ------ |
`customJSS` | CustomScrollbarJSS |

**Returns:** *void*

Defined in: [theme.ts:193](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/theme.ts#L193)

___

### setCustomSizes

▸ **setCustomSizes**(`customSizes`: CustomSizes): *void*

#### Parameters:

Name | Type |
------ | ------ |
`customSizes` | CustomSizes |

**Returns:** *void*

Defined in: [theme.ts:75](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/theme.ts#L75)

___

### setCustomSpringConfig

▸ **setCustomSpringConfig**(`customSpringConfig`: CustomSpringConfig): *void*

#### Parameters:

Name | Type |
------ | ------ |
`customSpringConfig` | CustomSpringConfig |

**Returns:** *void*

Defined in: [theme.ts:130](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/theme.ts#L130)

___

### setCustomZIndices

▸ **setCustomZIndices**(`customZIndices`: *Partial*<*typeof* [*zIndex*](modules.md#zindex)\>): *void*

#### Parameters:

Name | Type |
------ | ------ |
`customZIndices` | *Partial*<*typeof* [*zIndex*](modules.md#zindex)\> |

**Returns:** *void*

Defined in: [theme.ts:102](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/theme.ts#L102)

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

Defined in: [ContextMenu/hooks.ts:14](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/ContextMenu/hooks.ts#L14)

___

### useScrollbarJSS

▸ `Const`**useScrollbarJSS**(`data?`: *unknown*): *Record*<*Scroller*, *string*\>

#### Parameters:

Name | Type |
------ | ------ |
`data?` | *unknown* |

**Returns:** *Record*<*Scroller*, *string*\>

Defined in: [theme.ts:205](https://github.com/mbecker20/kbinUI/blob/e63cd03/src/theme.ts#L205)
